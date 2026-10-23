"""
CYBERPUNK GRADSKI BLOK - parametric Blender build script (HIGH POLY + LOW POLY)
==============================================================================
3DOR - Individualni projekt (neo-noir / cyberpunk urbana cjelina)

Dio cyberpunk grada ~128 x 92 m u realnoj velicini (1 BU = 1 m):
  - raskrizje glavne ulice i poprecne ulice: kolnik, plocnici s rubnjacima,
    razdjelni otok, trakovi, zebre, stop linije
  - nadzemna pruga (stupovi, nosac, tracnice) s vlakom od 3 vagona
  - Zgrada A "Streamline" (SI ugao), Zgrada B "Toranj" (JZ ugao)
  - Megatoranj (podij s LED ekranima, toranj s X-ukrutama, heliodrom, antena)
  - 4 niza HK "shophouse" kuca (proceduralne varijacije: kavezi na prozorima,
    vertikalni neonski natpisi, ducani, tende, klime, rezervoari, reklame)
  - 9 pozadinskih tornjeva (skyline)
  - inventar: ulicne svjetiljke, semafori, automati, strit-food standovi,
    drveca u zardinjerama, klupe, kante, stupici, kontejneri, auti, kombi,
    leteci auti, kabeli s lampionima

Svaki objekt postoji u HP (high poly) i LP (low poly) verziji.

Organizacija (FBX zadrzava hijerarhiju Empty -> Null u Cinemi 4D):
    IP 3 MODELI  -> Blok_Teren_Ulice / Blok_Pruga / Blok_Zgrade / Blok_Inventar /
                    Blok_Vozila / Blok_Vegetacija -> objekti
    SVJETLA      -> sva svjetla + emisivni meshevi (TISKANIM slovima)
    IP 3 MODELI LOW POLY / SVJETLA LOW POLY  (LP verzija, pomaknuta +220 m po Y)

Pravila kvalitete ugradjena u generator:
  - svaki mesh je zatvoren (manifold) solid, normale prema van
  - nema duplih vrhova, degeneriranih ili zakrivljenih (ne-planarnih) lica
  - dijelovi koji se dodiruju preklapaju se 1-5 cm -> nema koplanarnih lica
    (nema z-fightinga); provjereno zasebnom QA skriptom za cijelu scenu
  - pivot svakog objekta na dnu-sredini, UV box projekcija 1 m = 1 UV
  - instance za ponavljajuce objekte (klime, svjetiljke, auti, drveca ...)
  - nasumicnost je deterministicka (seed) -> HP i LP imaju identican raspored

POKRETANJE
  A) Blender > Scripting > Open > cyberpunk_gradski_blok.py > Run Script
     (UPOZORENJE: CLEAR_SCENE = True brise sve objekte u otvorenoj datoteci)
  B) blender -b -P cyberpunk_gradski_blok.py -- --out <mapa> [--render]

Provjereno na Blenderu 5.1; koristi API kompatibilan s Blenderom 4.2 LTS+.
"""

import bpy
import bmesh
import math
import os
import random
import sys
from math import cos, pi, radians, sin

from mathutils import Matrix, Vector

# --------------------------------------------------------------------------
# POSTAVKE
# --------------------------------------------------------------------------
CLEAR_SCENE = True
BUILD_LODS = ("HP", "LP")
LP_OFFSET = Vector((0.0, 220.0, 0.0))  # LP verzija stoji iza HP verzije
SW_Z = 0.15                              # visina plocnika (vrh rubnjaka)

LOD_SETTINGS = {
    #       seg/90deg  ravni korak  bevel  bevel seg  cijevi  detalji
    "HP": dict(arc=24, step=1.25, bevel=0.02, bevel_segs=3, tube=16, small=8, detail=True),
    "LP": dict(arc=4, step=1e9, bevel=0.0, bevel_segs=0, tube=6, small=4, detail=False),
}
SMOOTH_ANGLE = 40.0   # stupnjevi; rubovi ostrije od ovoga su "sharp"
EMBED = 0.02          # dijelovi koji se dodiruju preklapaju se 2 cm -> nema koplanarnih lica

# --------------------------------------------------------------------------
# MATERIJALI  (osnovne boje za blockout/dodjelu; u C4D zamijeniti Redshift mat.)
# emisivni materijali su imenovani TISKANIM slovima prema uputama
# --------------------------------------------------------------------------
MATERIALS = {
    "MAT_Beton_Svijetli":   dict(c=(0.58, 0.56, 0.52), r=0.85),
    "MAT_Beton_Tamni":      dict(c=(0.20, 0.20, 0.21), r=0.80),
    "MAT_Beton_Mokri":      dict(c=(0.26, 0.27, 0.28), r=0.45),
    "MAT_Staklo":           dict(c=(0.55, 0.65, 0.70), r=0.03, glass=True),
    "MAT_Metal_Okvir":      dict(c=(0.07, 0.075, 0.08), r=0.40, m=1.0),
    "MAT_Metal_Pocincani":  dict(c=(0.55, 0.56, 0.57), r=0.45, m=1.0),
    "MAT_Metal_Zlatni":     dict(c=(0.83, 0.62, 0.28), r=0.30, m=1.0),
    "MAT_Metal_Hrdja":      dict(c=(0.40, 0.15, 0.07), r=0.75, m=0.3),
    "MAT_Klima_Kuciste":    dict(c=(0.78, 0.78, 0.75), r=0.50),
    "MAT_Klima_Resetka":    dict(c=(0.05, 0.05, 0.05), r=0.60, m=0.5),
    "MAT_Rolo_Vrata":       dict(c=(0.25, 0.27, 0.29), r=0.50, m=0.6),
    "MAT_Opeka":            dict(c=(0.36, 0.20, 0.14), r=0.90),
    "MAT_Tenda_Zuta":       dict(c=(0.85, 0.62, 0.12), r=0.80),
    "MAT_Tenda_Bijela":     dict(c=(0.85, 0.84, 0.80), r=0.80),
    "MAT_Krov_Tamni":       dict(c=(0.09, 0.09, 0.10), r=0.70),
    "MAT_Interijer":        dict(c=(0.16, 0.14, 0.12), r=0.90),
    "MAT_Drvo_Pasarela":    dict(c=(0.24, 0.17, 0.11), r=0.85),
    "MAT_Kabel":            dict(c=(0.02, 0.02, 0.02), r=0.50),
    "MAT_Natpis_Ploca":     dict(c=(0.30, 0.31, 0.32), r=0.60, m=0.4),
    "MAT_Natpis_Slova":     dict(c=(0.80, 0.80, 0.78), r=0.40),
    # emisivni
    "INTERIJER_TOPLO":      dict(c=(1.0, 0.75, 0.45), e=(1.0, 0.72, 0.42), s=4.0),
    "INTERIJER_HLADNI":     dict(c=(0.8, 0.9, 1.0), e=(0.75, 0.88, 1.0), s=4.0),
    "NEON_CIJAN":           dict(c=(0.1, 0.85, 1.0), e=(0.1, 0.85, 1.0), s=20.0),
    "NEON_BIJELI":          dict(c=(0.9, 0.97, 1.0), e=(0.9, 0.97, 1.0), s=20.0),
    "EKRAN_REKLAMA_PLAVI":  dict(c=(0.15, 0.55, 1.0), e=(0.15, 0.55, 1.0), s=10.0),
    "LAMPA_TOPLA":          dict(c=(1.0, 0.6, 0.25), e=(1.0, 0.6, 0.25), s=15.0),
    "VRATA_SVJETLO_TOPLO":  dict(c=(1.0, 0.7, 0.4), e=(1.0, 0.68, 0.38), s=8.0),
    "VRATA_SVJETLO_HLADNO": dict(c=(0.7, 0.9, 1.0), e=(0.7, 0.9, 1.0), s=8.0),
    # ---- gradski blok
    "MAT_Asfalt":           dict(c=(0.035, 0.035, 0.04), r=0.55),
    "MAT_Plocnik":          dict(c=(0.30, 0.29, 0.28), r=0.80),
    "MAT_Oznake_Bijele":    dict(c=(0.80, 0.80, 0.78), r=0.60),
    "MAT_Oznake_Zute":      dict(c=(0.85, 0.60, 0.10), r=0.60),
    "MAT_Staklo_Fasada":    dict(c=(0.03, 0.04, 0.05), r=0.06, m=0.7),
    "MAT_Fasada_Zelena":    dict(c=(0.30, 0.43, 0.40), r=0.85),
    "MAT_Fasada_Ruzicasta": dict(c=(0.58, 0.40, 0.40), r=0.85),
    "MAT_Fasada_Bez":       dict(c=(0.62, 0.57, 0.48), r=0.85),
    "MAT_Fasada_Plava":     dict(c=(0.33, 0.43, 0.53), r=0.85),
    "MAT_Fasada_Siva":      dict(c=(0.42, 0.42, 0.42), r=0.85),
    "MAT_Plocice_Bijele":   dict(c=(0.74, 0.74, 0.71), r=0.35),
    "MAT_Plastika_Tamna":   dict(c=(0.06, 0.06, 0.07), r=0.50),
    "MAT_Automat_Crveni":   dict(c=(0.60, 0.05, 0.05), r=0.35),
    "MAT_Automat_Bijeli":   dict(c=(0.80, 0.80, 0.80), r=0.35),
    "MAT_Metal_Zeleni":     dict(c=(0.10, 0.25, 0.15), r=0.60, m=0.5),
    "MAT_Auto_Lak_Crni":    dict(c=(0.02, 0.02, 0.025), r=0.20, m=0.6),
    "MAT_Auto_Lak_Bijeli":  dict(c=(0.80, 0.80, 0.80), r=0.20, m=0.3),
    "MAT_Auto_Lak_Crveni":  dict(c=(0.55, 0.03, 0.03), r=0.20, m=0.5),
    "MAT_Auto_Lak_Plavi":   dict(c=(0.05, 0.15, 0.45), r=0.20, m=0.5),
    "MAT_Auto_Lak_Zuti":    dict(c=(0.85, 0.60, 0.05), r=0.25, m=0.3),
    "MAT_Auto_Staklo":      dict(c=(0.02, 0.025, 0.03), r=0.05, m=0.3),
    "MAT_Guma":             dict(c=(0.02, 0.02, 0.02), r=0.90),
    "MAT_Felga":            dict(c=(0.50, 0.50, 0.52), r=0.30, m=1.0),
    "MAT_Zemlja":           dict(c=(0.10, 0.07, 0.05), r=0.95),
    "MAT_Kora_Drveta":      dict(c=(0.18, 0.12, 0.07), r=0.90),
    "MAT_Lisce":            dict(c=(0.07, 0.22, 0.07), r=0.80),
    "MAT_Vlak_Lak":         dict(c=(0.75, 0.77, 0.80), r=0.25, m=0.5),
    "MAT_Drvo":             dict(c=(0.35, 0.22, 0.12), r=0.70),
    # emisivni (blok)
    "EKRAN_REKLAMA_ROZI":       dict(c=(1.0, 0.1, 0.6), e=(1.0, 0.1, 0.6), s=10.0),
    "EKRAN_REKLAMA_LJUBICASTI": dict(c=(0.55, 0.15, 1.0), e=(0.55, 0.15, 1.0), s=10.0),
    "EKRAN_REKLAMA_NARANCASTI": dict(c=(1.0, 0.45, 0.05), e=(1.0, 0.45, 0.05), s=10.0),
    "NEON_ROZI":            dict(c=(1.0, 0.1, 0.55), e=(1.0, 0.1, 0.55), s=20.0),
    "NEON_ZUTI":            dict(c=(1.0, 0.8, 0.1), e=(1.0, 0.8, 0.1), s=20.0),
    "NEON_ZELENI":          dict(c=(0.2, 1.0, 0.3), e=(0.2, 1.0, 0.3), s=20.0),
    "NEON_CRVENI":          dict(c=(1.0, 0.1, 0.08), e=(1.0, 0.1, 0.08), s=20.0),
    "NEON_LJUBICASTI":      dict(c=(0.6, 0.2, 1.0), e=(0.6, 0.2, 1.0), s=20.0),
    "IZLOG_TOPLO":          dict(c=(1.0, 0.8, 0.55), e=(1.0, 0.78, 0.5), s=6.0),
    "IZLOG_HLADNO":         dict(c=(0.8, 0.92, 1.0), e=(0.8, 0.92, 1.0), s=6.0),
    "IZLOG_ROZI":           dict(c=(1.0, 0.6, 0.85), e=(1.0, 0.55, 0.85), s=6.0),
    "LAMPA_ULICNA":         dict(c=(1.0, 0.85, 0.65), e=(1.0, 0.85, 0.65), s=30.0),
    "SEMAFOR_CRVENA":       dict(c=(1.0, 0.05, 0.02), e=(1.0, 0.05, 0.02), s=25.0),
    "SEMAFOR_ZUTA":         dict(c=(1.0, 0.6, 0.0), e=(1.0, 0.6, 0.0), s=5.0),
    "SEMAFOR_ZELENA":       dict(c=(0.1, 1.0, 0.5), e=(0.1, 1.0, 0.5), s=5.0),
    "AUTO_FAR":             dict(c=(1.0, 0.95, 0.85), e=(1.0, 0.95, 0.85), s=30.0),
    "AUTO_STOP":            dict(c=(1.0, 0.05, 0.02), e=(1.0, 0.05, 0.02), s=15.0),
    "LAMPION_CRVENI":       dict(c=(1.0, 0.2, 0.08), e=(1.0, 0.2, 0.08), s=12.0),
    "VLAK_PROZORI":         dict(c=(0.8, 0.9, 1.0), e=(0.8, 0.9, 1.0), s=8.0),
    "PRUGA_LED_TRAKA":      dict(c=(0.2, 0.9, 1.0), e=(0.2, 0.9, 1.0), s=15.0),
    "SIGNAL_CRVENI":        dict(c=(1.0, 0.05, 0.02), e=(1.0, 0.05, 0.02), s=30.0),
    "HELIODROM_SVJETLA":    dict(c=(1.0, 0.85, 0.4), e=(1.0, 0.85, 0.4), s=20.0),
    "LEBDENJE_CIJAN":       dict(c=(0.1, 0.9, 1.0), e=(0.1, 0.9, 1.0), s=30.0),
}
MATERIALS.update({
    "MAT_Zid_Bijeli":       dict(c=(0.82, 0.81, 0.78), r=0.90),
    "MAT_Zid_Krem":         dict(c=(0.80, 0.72, 0.58), r=0.90),
    "MAT_Zid_Zeleni":       dict(c=(0.45, 0.58, 0.48), r=0.90),
    "MAT_Zid_Plavi":        dict(c=(0.45, 0.55, 0.68), r=0.90),
    "MAT_Zid_Rozi":         dict(c=(0.78, 0.55, 0.58), r=0.90),
    "MAT_Strop":            dict(c=(0.85, 0.85, 0.83), r=0.90),
    "MAT_Pod_Parket":       dict(c=(0.42, 0.27, 0.15), r=0.45),
    "MAT_Pod_Plocice":      dict(c=(0.60, 0.60, 0.58), r=0.25),
    "MAT_Mramor":           dict(c=(0.80, 0.78, 0.75), r=0.20),
    "MAT_Tekstil_Crveni":   dict(c=(0.50, 0.08, 0.08), r=0.90),
    "MAT_Tekstil_Plavi":    dict(c=(0.10, 0.20, 0.45), r=0.90),
    "MAT_Tekstil_Sivi":     dict(c=(0.35, 0.35, 0.37), r=0.90),
    "MAT_Tekstil_Zuti":     dict(c=(0.70, 0.55, 0.15), r=0.90),
    "MAT_Tekstil_Zeleni":   dict(c=(0.15, 0.35, 0.20), r=0.90),
    "MAT_Posteljina":       dict(c=(0.86, 0.86, 0.83), r=0.90),
    "MAT_Zavjesa_Bez":      dict(c=(0.75, 0.68, 0.55), r=0.90),
    "MAT_Zavjesa_Crvena":   dict(c=(0.55, 0.10, 0.10), r=0.90),
    "MAT_Zavjesa_Plava":    dict(c=(0.20, 0.30, 0.55), r=0.90),
    "MAT_Zavjesa_Zelena":   dict(c=(0.25, 0.40, 0.30), r=0.90),
    "MAT_Zavjesa_Bijela":   dict(c=(0.90, 0.90, 0.88), r=0.90),
    "MAT_Plastika_Bijela":  dict(c=(0.85, 0.85, 0.85), r=0.40),
    "MAT_Karton":           dict(c=(0.55, 0.40, 0.25), r=0.90),
    "MAT_Lonac":            dict(c=(0.55, 0.25, 0.15), r=0.80),
    "MAT_Staklo_Tamno":     dict(c=(0.25, 0.30, 0.35), r=0.03, glass=True),
    "MAT_Koza":             dict(c=(0.60, 0.45, 0.35), r=0.60),
    "MAT_Kosa":             dict(c=(0.04, 0.03, 0.03), r=0.70),
    "MAT_Odjeca_Crna":      dict(c=(0.03, 0.03, 0.035), r=0.80),
    "MAT_Odjeca_Plava":     dict(c=(0.10, 0.18, 0.35), r=0.80),
    "MAT_Odjeca_Crvena":    dict(c=(0.45, 0.06, 0.06), r=0.80),
    "MAT_Odjeca_Bijela":    dict(c=(0.80, 0.80, 0.78), r=0.80),
    "MAT_Odjeca_Zuta":      dict(c=(0.80, 0.60, 0.10), r=0.80),
    "SOBA_SVJETLO_TOPLO":   dict(c=(1.0, 0.8, 0.55), e=(1.0, 0.8, 0.55), s=25.0),
    "SOBA_SVJETLO_HLADNO":  dict(c=(0.85, 0.93, 1.0), e=(0.85, 0.93, 1.0), s=25.0),
    "EKRAN_MONITOR":        dict(c=(0.6, 0.8, 1.0), e=(0.6, 0.8, 1.0), s=6.0),
    "EKRAN_TV":             dict(c=(0.5, 0.6, 1.0), e=(0.5, 0.6, 1.0), s=8.0),
})
MATERIALS["MAT_Asfalt"] = dict(c=(0.03, 0.03, 0.035), r=0.18)   # mokri asfalt -> odsjaji neona nocu
NEON_COLORS = ["NEON_CIJAN", "NEON_ROZI", "NEON_ZUTI", "NEON_ZELENI", "NEON_CRVENI", "NEON_LJUBICASTI"]
SCREEN_COLORS = ["EKRAN_REKLAMA_PLAVI", "EKRAN_REKLAMA_ROZI", "EKRAN_REKLAMA_LJUBICASTI", "EKRAN_REKLAMA_NARANCASTI"]
FACADE_MATS = ["MAT_Fasada_Zelena", "MAT_Fasada_Ruzicasta", "MAT_Fasada_Bez", "MAT_Fasada_Plava",
               "MAT_Fasada_Siva", "MAT_Plocice_Bijele"]
SHOP_GLOW = ["IZLOG_TOPLO", "IZLOG_HLADNO", "IZLOG_ROZI"]


def _set_input(node, names, value):
    for n in names:
        if n in node.inputs:
            node.inputs[n].default_value = value
            return


def get_mat(name):
    mat = bpy.data.materials.get(name)
    if mat:
        return mat
    spec = MATERIALS[name]
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    bsdf = mat.node_tree.nodes.get("Principled BSDF")
    col = (*spec["c"], 1.0)
    mat.diffuse_color = col
    _set_input(bsdf, ["Base Color"], col)
    _set_input(bsdf, ["Roughness"], spec.get("r", 0.5))
    _set_input(bsdf, ["Metallic"], spec.get("m", 0.0))
    if spec.get("glass"):
        _set_input(bsdf, ["Transmission Weight", "Transmission"], 1.0)
        _set_input(bsdf, ["IOR"], 1.5)
        mat.diffuse_color = (*spec["c"], 0.35)
    if "e" in spec:
        _set_input(bsdf, ["Emission Color", "Emission"], (*spec["e"], 1.0))
        _set_input(bsdf, ["Emission Strength"], spec["s"])
    return mat


# --------------------------------------------------------------------------
# KONTEKST / HIJERARHIJA
# --------------------------------------------------------------------------
class Ctx:
    def __init__(self, lod, coll, lcoll):
        self.lod = lod
        self.__dict__.update(LOD_SETTINGS[lod])
        self.coll = coll      # kolekcija za modele
        self.lcoll = lcoll    # kolekcija za svjetla
        self.counter = {}
        self.assets = {}

    def name(self, base):
        return f"{base}_{self.lod}"

    def numbered(self, base):
        i = self.counter.get(base, 0) + 1
        self.counter[base] = i
        return f"{base}_{i:02d}_{self.lod}"


def empty(ctx, name, parent=None, loc=(0, 0, 0), coll=None, raw_name=False, rot=0.0):
    ob = bpy.data.objects.new(name if raw_name else ctx.name(name), None)
    ob.empty_display_type = "PLAIN_AXES"
    ob.empty_display_size = 1.0
    ob.location = loc
    ob.rotation_euler = (0.0, 0.0, rot)
    (coll or ctx.coll).objects.link(ob)
    if parent:
        ob.parent = parent
    return ob


class MB:
    """Mesh builder: jedan bmesh + lista materijala -> jedan objekt."""

    def __init__(self, ctx):
        self.ctx = ctx
        self.bm = bmesh.new()
        self.mats = []

    def mi(self, mat):
        if mat not in self.mats:
            self.mats.append(mat)
        return self.mats.index(mat)

    def tag(self, faces, mat):
        idx = self.mi(mat)
        for f in faces:
            f.material_index = idx
        return faces

    def face(self, verts, mat):
        f = self.bm.faces.new(verts)
        f.material_index = self.mi(mat)
        return f

    # ------------------------------------------------------------ finalize
    def to_mesh(self, name, bevel=False, smooth=SMOOTH_ANGLE, pivot="BOTTOM"):
        bm = self.bm
        ctx = self.ctx
        if bevel and ctx.bevel > 0:
            edges = [e for e in bm.edges
                     if len(e.link_faces) == 2 and e.calc_face_angle(0.0) > radians(30)]
            if edges:
                bmesh.ops.bevel(bm, geom=edges, offset=ctx.bevel, offset_type="OFFSET",
                                segments=ctx.bevel_segs, profile=0.5, affect="EDGES",
                                clamp_overlap=True, loop_slide=True)
        bmesh.ops.recalc_face_normals(bm, faces=bm.faces[:])
        # pivot: dno-sredina bounding boxa
        piv = Vector((0, 0, 0))
        if pivot == "BOTTOM" and bm.verts:
            xs = [v.co.x for v in bm.verts]
            ys = [v.co.y for v in bm.verts]
            zs = [v.co.z for v in bm.verts]
            piv = Vector(((min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2, min(zs)))
            piv = Vector((round(piv.x, 4), round(piv.y, 4), round(piv.z, 4)))
            bmesh.ops.translate(bm, verts=bm.verts[:], vec=-piv)
        box_uv(bm, piv)
        me = bpy.data.meshes.new(name)
        bm.to_mesh(me)
        bm.free()
        for m in self.mats:
            me.materials.append(get_mat(m))
        me.polygons.foreach_set("use_smooth", [True] * len(me.polygons))
        if hasattr(me, "set_sharp_from_angle"):
            me.set_sharp_from_angle(angle=radians(smooth))
        else:  # Blender <= 4.0
            me.use_auto_smooth = True
            me.auto_smooth_angle = radians(smooth)
        me.update()
        return me, piv

    def obj(self, name, parent, bevel=False, smooth=SMOOTH_ANGLE, light=False, raw_name=False):
        if not self.bm.faces:          # prazan mesh se ne stvara
            self.bm.free()
            return None
        nm = name if raw_name else self.ctx.name(name)
        me, piv = self.to_mesh(nm, bevel=bevel, smooth=smooth)
        ob = bpy.data.objects.new(nm, me)
        (self.ctx.lcoll if light else self.ctx.coll).objects.link(ob)
        ob.parent = parent
        ob.location = piv
        return ob


def instance(ctx, name, mesh, parent, loc, rot_z=0.0, light=False):
    ob = bpy.data.objects.new(name, mesh)
    (ctx.lcoll if light else ctx.coll).objects.link(ob)
    ob.parent = parent
    ob.location = loc
    ob.rotation_euler = (0.0, 0.0, rot_z)
    return ob


def box_uv(bm, piv):
    """Box projekcija u svjetskim metrima (1 m = 1 UV jedinica)."""
    uv = bm.loops.layers.uv.verify()
    for f in bm.faces:
        n = f.normal
        ax = max(range(3), key=lambda i: abs(n[i]))
        for lp in f.loops:
            co = lp.vert.co + piv
            if ax == 0:
                lp[uv].uv = (co.y if n.x > 0 else -co.y, co.z)
            elif ax == 1:
                lp[uv].uv = (-co.x if n.y > 0 else co.x, co.z)
            else:
                lp[uv].uv = (co.x, co.y if n.z > 0 else -co.y)


# --------------------------------------------------------------------------
# GEOMETRIJSKI PRIMITIVI (svi stvaraju zatvorene solide)
# --------------------------------------------------------------------------
def V(*a):
    return Vector(a)


def box(mb, mat, x0, x1, y0, y1, z0, z1):
    return obox(mb, mat, V((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2),
                V(1, 0, 0), V(0, 1, 0), V(0, 0, 1), x1 - x0, y1 - y0, z1 - z0)


def obox(mb, mat, c, X, Y, Z, sx, sy, sz):
    """Orijentirani kvadar: centar c, jedinicne osi X/Y/Z, dimenzije sx/sy/sz."""
    bm = mb.bm
    vs = {}
    for i in (-1, 1):
        for j in (-1, 1):
            for k in (-1, 1):
                vs[i, j, k] = bm.verts.new(c + X * (sx / 2 * i) + Y * (sy / 2 * j) + Z * (sz / 2 * k))
    quads = [
        [(-1, -1, -1), (-1, 1, -1), (1, 1, -1), (1, -1, -1)],
        [(-1, -1, 1), (1, -1, 1), (1, 1, 1), (-1, 1, 1)],
        [(-1, -1, -1), (1, -1, -1), (1, -1, 1), (-1, -1, 1)],
        [(-1, 1, -1), (-1, 1, 1), (1, 1, 1), (1, 1, -1)],
        [(-1, -1, -1), (-1, -1, 1), (-1, 1, 1), (-1, 1, -1)],
        [(1, -1, -1), (1, 1, -1), (1, 1, 1), (1, -1, 1)],
    ]
    return [mb.face([vs[q] for q in quad], mat) for quad in quads]


def prism(mb, mat, pts, z0, z1, cap_mat=None, top_mat=None):
    """Vertikalna prizma iz zatvorenog CCW 2D obrisa (cap_mat = dno, top_mat = vrh)."""
    return loft(mb, mat, pts, z0, pts, z1, cap_mat, top_mat)


def loft(mb, mat, pa, za, pb, zb, cap_mat=None, top_mat=None):
    """Zatvoreni solid izmedju dva obrisa jednakog broja tocaka."""
    bm = mb.bm
    b = [bm.verts.new((x, y, za)) for x, y in pa]
    t = [bm.verts.new((x, y, zb)) for x, y in pb]
    n = len(b)
    for i in range(n):
        j = (i + 1) % n
        mb.face((b[i], b[j], t[j], t[i]), mat)
    mb.face(list(reversed(b)), cap_mat or mat)
    mb.face(t, top_mat or cap_mat or mat)


def ring(mb, mat, outer, inner, z0, z1):
    """Zatvoreni prsten (zid) izmedju vanjskog i unutarnjeg obrisa."""
    bm = mb.bm
    ob = [bm.verts.new((x, y, z0)) for x, y in outer]
    ot = [bm.verts.new((x, y, z1)) for x, y in outer]
    ib = [bm.verts.new((x, y, z0)) for x, y in inner]
    it = [bm.verts.new((x, y, z1)) for x, y in inner]
    n = len(ob)
    for i in range(n):
        j = (i + 1) % n
        mb.face((ob[i], ob[j], ot[j], ot[i]), mat)
        mb.face((ib[j], ib[i], it[i], it[j]), mat)
        mb.face((ot[i], ot[j], it[j], it[i]), mat)
        mb.face((ob[j], ob[i], ib[i], ib[j]), mat)


def strip(mb, mat, outer, inner, z0, z1, side_mat=None):
    """Otvorena traka (npr. staklo uz fasadu) - zatvoreni solid s krajnjim plohama."""
    bm = mb.bm
    ob = [bm.verts.new((x, y, z0)) for x, y in outer]
    ot = [bm.verts.new((x, y, z1)) for x, y in outer]
    ib = [bm.verts.new((x, y, z0)) for x, y in inner]
    it = [bm.verts.new((x, y, z1)) for x, y in inner]
    sm = side_mat or mat
    for i in range(len(ob) - 1):
        j = i + 1
        mb.face((ob[i], ob[j], ot[j], ot[i]), mat)
        mb.face((ib[j], ib[i], it[i], it[j]), mat)
        mb.face((ot[i], ot[j], it[j], it[i]), sm)
        mb.face((ob[j], ob[i], ib[i], ib[j]), sm)
    mb.face((ob[0], ot[0], it[0], ib[0]), sm)
    e = len(ob) - 1
    mb.face((ob[e], ib[e], it[e], ot[e]), sm)


def extrude_poly(mb, mat, poly, O, U, Vv, W, w0, w1):
    """2D poligon (u,v) u ravnini (O,U,V) istisnut po W od w0 do w1."""
    bm = mb.bm
    a = [bm.verts.new(O + U * u + Vv * v + W * w0) for u, v in poly]
    b = [bm.verts.new(O + U * u + Vv * v + W * w1) for u, v in poly]
    n = len(a)
    for i in range(n):
        j = (i + 1) % n
        mb.face((a[i], a[j], b[j], b[i]), mat)
    mb.face(list(reversed(a)), mat)
    mb.face(b, mat)


def dedupe(path, closed=False, eps=1e-6):
    out = []
    for p in path:
        p = Vector(p)
        if not out or (p - out[-1]).length > eps:
            out.append(p)
    if closed and len(out) > 2 and (out[0] - out[-1]).length <= eps:
        out.pop()
    return out


def sweep(mb, mat, path, r, nv, closed=False, rot=0.0):
    """Cijev po putanji s tocnim 'miter' spojevima (paralelni transport okvira)."""
    P = dedupe(path, closed)
    n = len(P)
    nseg = n if closed else n - 1
    T = [(P[(i + 1) % n] - P[i]).normalized() for i in range(nseg)]
    ref = V(0, 0, 1) if abs(T[0].z) < 0.95 else V(1, 0, 0)
    u = (ref - T[0] * ref.dot(T[0])).normalized()
    U = [u]
    for k in range(1, nseg):
        u = T[k - 1].rotation_difference(T[k]) @ u
        u = (u - T[k] * u.dot(T[k])).normalized()
        U.append(u)
    rings = []
    for i in range(n):
        if closed:
            kin, kout = (i - 1) % nseg, i % nseg
        else:
            kin, kout = max(i - 1, 0), min(i, nseg - 1)
        tin, tout = T[kin], T[kout]
        uu = U[kin]
        vv = tin.cross(uu)
        nrm = tin + tout
        nrm = tin if nrm.length < 1e-6 else nrm.normalized()
        rg = []
        for j in range(nv):
            a = 2 * pi * j / nv + rot
            off = (uu * cos(a) + vv * sin(a)) * r
            s = -off.dot(nrm) / tin.dot(nrm)
            rg.append(mb.bm.verts.new(P[i] + off + tin * s))
        rings.append(rg)
    for k in range(nseg):
        a, b = rings[k], rings[(k + 1) % n]
        for j in range(nv):
            jj = (j + 1) % nv
            mb.face((a[j], a[jj], b[jj], b[j]), mat)
    if not closed:
        mb.face(list(reversed(rings[0])), mat)
        mb.face(rings[-1], mat)


def cyl(mb, mat, p0, p1, r, nv):
    sweep(mb, mat, [p0, p1], r, nv)


def sq_tube(mb, mat, path, half):
    """Kvadratni profil (4 strane) - celicni profili, nosaci."""
    sweep(mb, mat, path, half * math.sqrt(2), 4, rot=pi / 4)


def lathe(mb, mat, prof, nv, M):
    """Rotacijsko tijelo; profil (r,z) od osi do osi -> zatvoren solid."""
    bm = mb.bm
    rings = []
    for r, z in prof:
        if r < 1e-9:
            rings.append([bm.verts.new(M @ V(0, 0, z))])
        else:
            rings.append([bm.verts.new(M @ V(r * cos(2 * pi * j / nv), r * sin(2 * pi * j / nv), z))
                          for j in range(nv)])
    for a, b in zip(rings[:-1], rings[1:]):
        if len(a) == 1:
            for j in range(nv):
                mb.face((a[0], b[(j + 1) % nv], b[j]), mat)
        elif len(b) == 1:
            for j in range(nv):
                mb.face((a[j], a[(j + 1) % nv], b[0]), mat)
        else:
            for j in range(nv):
                jj = (j + 1) % nv
                mb.face((a[j], a[jj], b[jj], b[j]), mat)


def stripes(mb, mats, A, B, out, n, thick):
    """Tenda: ploca s n pruga naizmjenicnih materijala (jedan zatvoreni solid)."""
    bm = mb.bm
    nrm = (B - A).cross(out).normalized()
    if nrm.z > 0:
        nrm = -nrm
    r0 = [bm.verts.new(A + (B - A) * (k / n)) for k in range(n + 1)]
    r1 = [bm.verts.new(A + (B - A) * (k / n) + out) for k in range(n + 1)]
    b0 = [bm.verts.new(v.co + nrm * thick) for v in r0]
    b1 = [bm.verts.new(v.co + nrm * thick) for v in r1]
    for k in range(n):
        m = mats[k % len(mats)]
        mb.face((r0[k], r0[k + 1], r1[k + 1], r1[k]), m)
        mb.face((b0[k + 1], b0[k], b1[k], b1[k + 1]), m)
        mb.face((r1[k], r1[k + 1], b1[k + 1], b1[k]), m)
        mb.face((r0[k + 1], r0[k], b0[k], b0[k + 1]), mats[0])
    mb.face((r0[0], r1[0], b1[0], b0[0]), mats[0])
    mb.face((r0[n], b0[n], b1[n], r1[n]), mats[0])


def fillet(path, rad, segs):
    """Zaobljava kutove putanje (kvadratni bezier) - koljena cijevi."""
    P = [Vector(p) for p in path]
    if segs <= 0 or len(P) < 3:
        return P
    out = [P[0]]
    for i in range(1, len(P) - 1):
        A, B, C = P[i - 1], P[i], P[i + 1]
        l = min(rad, (A - B).length * 0.45, (C - B).length * 0.45)
        p1 = B + (A - B).normalized() * l
        p2 = B + (C - B).normalized() * l
        for k in range(segs + 1):
            t = k / segs
            out.append(p1 * (1 - t) ** 2 + B * (2 * (1 - t) * t) + p2 * (t * t))
    out.append(P[-1])
    return out


def catenary(p0, p1, sag, n):
    p0, p1 = Vector(p0), Vector(p1)
    return [p0.lerp(p1, i / n) - V(0, 0, sag * 4 * (i / n) * (1 - i / n)) for i in range(n + 1)]


def glyph_strokes(r, u0, u1, v0, v1, cell, gap, cols=3):
    """'Znakovi' natpisa kao NEPREKLAPAJUCI pravokutnici (u,v): redovi visine cell,
    svaki red ima 1..cols poteza u zasebnim stupcima -> nema koplanarnog preklapanja."""
    out = []
    cw = (u1 - u0) / cols
    v = v1 - 0.06
    while v - cell > v0 + 0.04:
        picks = [c for c in range(cols) if r.random() < 0.6] or [r.randrange(cols)]
        for c in picks:
            hh = cell * r.uniform(0.35, 1.0)
            out.append((u0 + c * cw + 0.025, u0 + (c + 1) * cw - 0.025, v - hh, v))
        v -= cell + gap
    return out


def circle_path(c, X, Y, r, n):
    return [c + X * (r * cos(2 * pi * i / n)) + Y * (r * sin(2 * pi * i / n)) for i in range(n)]


# --------------------------------------------------------------------------
# TLOCRT: pravokutnik s razlicitim radijusima kutova (CCW, prednja strana = -Y)
# --------------------------------------------------------------------------
class Plan:
    def __init__(self, ctx, w, d, radii, cx=0.0, cy=0.0, pane=0.7, arc=None):
        """radii = (prednji-desni, straznji-desni, straznji-lijevi, prednji-lijevi)
        arc = broj segmenata po zaobljenju (1 = ravni 45 deg rez / 'chamfer')"""
        self.w, self.d, self.r, self.cx, self.cy = w, d, radii, cx, cy
        self.arc = arc or ctx.arc
        lens = [d - radii[0] - radii[1], w - radii[1] - radii[2],
                d - radii[2] - radii[3], w - radii[3] - radii[0]]
        assert all(l > -1e-9 for l in lens), "radijusi preveliki za tlocrt"
        self.div = [max(1, round(l / ctx.step)) if l > 1e-6 else 1 for l in lens]
        divs = [q for q in range(1, self.arc + 1) if self.arc % q == 0]
        self.stride = []
        for r in radii:
            want = max(1.0, r * pi / 2 / pane)
            self.stride.append(self.arc // min(divs, key=lambda q: abs(q - want)) if r > 0 else 1)

    def pts(self, off=0.0, flags=False):
        hw, hd = self.w / 2 + off, self.d / 2 + off
        rr = [r + off if r > 0 else 0.0 for r in self.r]
        assert all(r > 1e-6 for r, r0 in zip(rr, self.r) if r0 > 0), "offset veci od radijusa"
        cen = [(hw - rr[0], -hd + rr[0]), (hw - rr[1], hd - rr[1]),
               (-hw + rr[2], hd - rr[2]), (-hw + rr[3], -hd + rr[3])]
        a0 = (-90, 0, 90, 180)
        arcs, fl = [], []
        for k in range(4):
            (cx, cy), r = cen[k], rr[k]
            if r <= 0:
                arcs.append([(cx, cy)])
                fl.append([True])
                continue
            arcs.append([(cx + r * cos(radians(a0[k] + 90 * j / self.arc)),
                          cy + r * sin(radians(a0[k] + 90 * j / self.arc))) for j in range(self.arc + 1)])
            fl.append([j % self.stride[k] == 0 for j in range(self.arc + 1)])
        out, ofl = [], []
        for k in range(4):
            out += arcs[k]
            ofl += fl[k]
            p0, p1, n = arcs[k][-1], arcs[(k + 1) % 4][0], self.div[k]
            for i in range(1, n):
                t = i / n
                out.append((p0[0] + (p1[0] - p0[0]) * t, p0[1] + (p1[1] - p0[1]) * t))
                ofl.append(True)
        res, rf = [], []
        for p, f in zip(out, ofl):
            if res and math.dist(p, res[-1]) < 1e-7:
                rf[-1] = rf[-1] or f
                continue
            res.append(p)
            rf.append(f)
        if math.dist(res[0], res[-1]) < 1e-7:
            res.pop()
            rf[0] = rf[0] or rf.pop()
        res = [(x + self.cx, y + self.cy) for x, y in res]
        return (res, rf) if flags else res


def open_path(pts, keep, start, end, flags=None):
    """Iz zatvorenog obrisa uzima neprekinuti niz 'keep' tocaka + krajnje tocke."""
    n = len(pts)
    i0 = next(i for i in range(n) if keep[i] and not keep[i - 1])
    path, fl = [tuple(start)], [False]
    i = i0
    while keep[i]:
        path.append(pts[i])
        fl.append(flags[i] if flags else True)
        i = (i + 1) % n
        if i == i0:
            break
    path.append(tuple(end))
    fl.append(False)
    return path, fl


def path_normals(path, closed=False):
    """Vanjske normale vrhova za CCW putanju."""
    P = [Vector((p[0], p[1])) for p in path]
    n = len(P)
    res = []
    for i in range(n):
        ns = []
        if closed or i > 0:
            e = P[i] - P[i - 1]
            ns.append(Vector((e.y, -e.x)).normalized())
        if closed or i < n - 1:
            e = P[(i + 1) % n] - P[i]
            ns.append(Vector((e.y, -e.x)).normalized())
        res.append(sum(ns, Vector((0, 0))).normalized())
    return res


def sample(path, s):
    """Tocka i tangenta na duljini s po otvorenoj 2D putanji."""
    P = [Vector((p[0], p[1])) for p in path]
    for a, b in zip(P[:-1], P[1:]):
        L = (b - a).length
        if s <= L or b is P[-1]:
            t = min(max(s / L, 0.0), 1.0)
            return a.lerp(b, t), (b - a).normalized()
        s -= L


def path_len(path):
    return sum(math.dist(a, b) for a, b in zip(path[:-1], path[1:]))


def out_rot(n2):
    """Rotacija oko Z koja lokalni -Y okrece u smjer normale n2."""
    return math.atan2(n2.x, -n2.y)


# --------------------------------------------------------------------------
# DIJELJENI MESHEVI (instance) - klima uredjaj, satelitska antena
# --------------------------------------------------------------------------
def ac_mesh(ctx, drop=0.36):
    """Klima: pivot na zidu (y=0), jedinica izlazi prema -Y, dno jedinice z=0.
    drop = koliko nosaci sezu ispod jedinice."""
    key = ("ac", drop)
    if key in ctx.assets:
        return ctx.assets[key]
    mb = MB(ctx)
    W, D, H = 0.84, 0.30, 0.58
    fy = -(D - 0.03)
    box(mb, "MAT_Klima_Kuciste", -W / 2, W / 2, fy, 0.03, 0.0, H)
    if ctx.detail:
        c = V(-0.10, fy - 0.008, H / 2)
        R = 0.20
        sweep(mb, "MAT_Klima_Resetka", circle_path(c, V(1, 0, 0), V(0, 0, 1), R, 32), 0.012, 6, closed=True)
        for dz in (-0.12, -0.06, 0.0, 0.06, 0.12):
            hl = math.sqrt(R * R - dz * dz)
            box(mb, "MAT_Klima_Resetka", c.x - hl, c.x + hl, fy - 0.015, fy + 0.005, c.z + dz - 0.004, c.z + dz + 0.004)
        cyl(mb, "MAT_Klima_Resetka", V(c.x, fy + 0.008, c.z), V(c.x, fy - 0.03, c.z), 0.045, 12)
        for k in range(7):  # bocne lamele
            z = 0.12 + k * 0.05
            box(mb, "MAT_Klima_Resetka", 0.20, 0.38, fy - 0.012, fy + 0.005, z, z + 0.012)
        for x in (-0.30, 0.30):  # L nosaci
            box(mb, "MAT_Metal_Pocincani", x - 0.02, x + 0.02, fy - 0.03, 0.025, -0.045, 0.005)
            box(mb, "MAT_Metal_Pocincani", x - 0.018, x + 0.018, -0.02, 0.035, -drop, -0.03)
            sq_tube(mb, "MAT_Metal_Pocincani", [V(x, 0.0, -drop + 0.03), V(x, fy + 0.03, -0.035)], 0.012)
    me, _ = mb.to_mesh(ctx.name(f"Klima_Uredjaj_{int(drop * 100):02d}_MESH"), bevel=True, pivot=None)
    ctx.assets[key] = me
    return me


def dish_mesh(ctx):
    """Satelitska antena: pivot na zidu, tanjur gleda van (-Y) i 30 deg prema gore."""
    if "dish" in ctx.assets:
        return ctx.assets["dish"]
    mb = MB(ctx)
    nv = 32 if ctx.detail else 10
    M = Matrix.Translation(V(0, -0.55, 0.35)) @ Matrix.Rotation(radians(-120), 4, "X")
    prof = [(0, 0.0), (0.12, 0.012), (0.25, 0.05), (0.33, 0.085), (0.35, 0.10),
            (0.355, 0.085), (0.25, 0.034), (0.12, -0.004), (0, -0.016)]
    if not ctx.detail:
        prof = [(0, 0.0), (0.35, 0.10), (0.35, 0.08), (0, -0.016)]
    lathe(mb, "MAT_Metal_Pocincani", prof, nv, M)
    axis = (M.to_3x3() @ V(0, 0, 1)).normalized()
    back = M @ V(0, 0, -0.01)
    sq_tube(mb, "MAT_Metal_Okvir", [V(0, 0.03, 0.0), V(0, -0.30, 0.0), back - axis * 0.0], 0.02)
    if ctx.detail:
        rim = M @ V(0, -0.34, 0.09)
        focus = M @ V(0, 0, 0.36)
        sweep(mb, "MAT_Metal_Okvir", [rim, focus], 0.008, 6)
        obox(mb, "MAT_Metal_Okvir", focus, V(1, 0, 0), axis.cross(V(1, 0, 0)).normalized(), axis, 0.05, 0.05, 0.08)
        box(mb, "MAT_Metal_Okvir", -0.08, 0.08, -0.02, 0.035, -0.08, 0.08)
    me, _ = mb.to_mesh(ctx.name("Satelitska_Antena_MESH"), pivot=None)
    ctx.assets["dish"] = me
    return me


# --------------------------------------------------------------------------
# SVJETLA
# --------------------------------------------------------------------------
def light(ctx, name, kind, parent, loc, direction=V(0, 0, -1), energy=100.0,
          color=(1.0, 0.8, 0.6), size=(0.5, 0.5), spot_deg=60.0):
    nm = ctx.numbered(name)
    ld = bpy.data.lights.new(nm, kind)
    ld.energy = energy
    ld.color = color
    if kind == "AREA":
        ld.shape = "RECTANGLE"
        ld.size, ld.size_y = size
    elif kind == "SPOT":
        ld.spot_size = radians(spot_deg)
        ld.spot_blend = 0.3
        ld.shadow_soft_size = 0.1
    else:
        ld.shadow_soft_size = 0.1
    ob = bpy.data.objects.new(nm, ld)
    ctx.lcoll.objects.link(ob)
    ob.parent = parent
    ob.location = loc
    ob.rotation_euler = V(0, 0, -1).rotation_difference(Vector(direction).normalized()).to_euler()
    return ob


# ==========================================================================
# ZGRADA A - "STREAMLINE"
# ==========================================================================
def build_A(ctx, root, lroot, pos, rot=0.0):
    rng = lambda tag: random.Random("A_" + tag)   # isti raspored u HP i LP
    det = ctx.detail
    B = empty(ctx, "Zgrada_A_Streamline", root, pos, rot=rot)
    L = empty(ctx, "Zgrada_A_Svjetla", lroot, pos, coll=ctx.lcoll, rot=rot)
    g_pr = empty(ctx, "A_Prizemlje_Arkada", B)
    g_mz = empty(ctx, "A_Mezanin", B)
    g_kt = empty(ctx, "A_Katovi", B)
    g_kr = empty(ctx, "A_Krov", B)
    g_in = empty(ctx, "A_Instalacije", B)
    g_kl = empty(ctx, "A_Klima_Uredjaji", g_in)
    g_dt = empty(ctx, "A_Detalji", B)

    W, D = 20.0, 14.0
    P = Plan(ctx, W, D, (6.0, 0.0, 0.0, 6.0))
    hw, hd = W / 2, D / 2
    base, _ = P.pts(0.0, flags=True)
    L_END, R_END = 6.4, 2.6          # fasada zavrsava u straznjem zidu / servisnom oknu
    keep = [(y < L_END - 1e-3) if x < 0 else (y < R_END - 1e-3) for x, y in base]

    def fpath(off, le=L_END, re=R_END):
        pts, fl = P.pts(off, flags=True)
        return open_path(pts, keep, (-(hw + off), le), (hw + off, re), fl)

    # ---------------------------------------------------------------- prizemlje
    col_line, _ = fpath(0.3)
    Lc = path_len(col_line)
    nb = max(2, round(Lc / 4.2))
    cols = [sample(col_line, Lc * k / nb) for k in range(nb + 1)]
    mb = MB(ctx)
    for p, t in cols:
        n2 = Vector((t.y, -t.x))
        c = V(p.x, p.y, 0)
        X, Y = V(t.x, t.y, 0), V(n2.x, n2.y, 0)
        cz0 = 0.03 if det else 0.0          # stup pocinje unutar baze (HP) -> razlicita dna
        obox(mb, "MAT_Beton_Svijetli", c + V(0, 0, (cz0 + 4.42) / 2), X, Y, V(0, 0, 1), 0.7, 0.7, 4.42 - cz0)
        if det:
            obox(mb, "MAT_Beton_Tamni", c + V(0, 0, 0.2), X, Y, V(0, 0, 1), 0.86, 0.86, 0.4)
            obox(mb, "MAT_Beton_Svijetli", c + V(0, 0, 2.86), X, Y, V(0, 0, 1), 0.84, 0.84, 0.24)
    mb.obj("A_Arkada_Stupovi", g_pr, bevel=True)

    mb = MB(ctx)
    aseg = 16 if det else 4
    for k in range(nb):
        (p0, _), (p1, _) = cols[k], cols[k + 1]
        U = V(p1.x - p0.x, p1.y - p0.y, 0)
        span = U.length
        U.normalize()
        Wn = V(U.y, -U.x, 0)
        u0, u1 = 0.30, span - 0.30
        um, ha = (u0 + u1) / 2, (u1 - u0) / 2
        poly = [(u0, 3.0)]
        for i in range(1, aseg):
            a = pi - pi * i / aseg
            poly.append((um + ha * cos(a), 3.0 + 0.9 * sin(a)))
        poly += [(u1, 3.0), (u1, 4.44), (u0, 4.44)]
        poly.reverse()
        extrude_poly(mb, "MAT_Beton_Svijetli", poly, V(p0.x, p0.y, 0), U, V(0, 0, 1), Wn, -0.175, 0.175)
    mb.obj("A_Arkada_Lukovi", g_pr, bevel=True)

    mb = MB(ctx)
    prism(mb, "MAT_Rolo_Vrata", P.pts(-1.4), 0.0, 4.45, cap_mat="MAT_Beton_Tamni")
    mb.obj("A_Ducani_Rolo_Vrata", g_pr)
    if det:
        mb = MB(ctx)
        ring(mb, "MAT_Metal_Okvir", P.pts(-1.15), P.pts(-1.45), 3.85, 4.43)
        mb.obj("A_Ducani_Kutije_Rolo", g_pr, bevel=True)
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Svijetli", P.pts(0.75), 4.4, 5.0)
    mb.obj("A_Ploca_Arkade", g_pr, bevel=True)

    # svjetla arkade (po jedno po polju)
    for k in range(nb):
        (p0, _), (p1, _) = cols[k], cols[k + 1]
        m = (p0 + p1) / 2
        t = (p1 - p0).normalized()
        n2 = Vector((t.y, -t.x))
        q = m - n2 * 0.75
        light(ctx, "SVJETLO_ARKADA", "AREA", L, V(q.x, q.y, 4.36), V(0, 0, -1), 60.0,
              (1.0, 0.75, 0.5), (1.6, 0.4))

    # ---------------------------------------------------------------- tende (prizemlje i mezanin)
    mb = MB(ctx)
    for k in range(nb):
        (p0, _), (p1, _) = cols[k], cols[k + 1]
        if (p0.y + p1.y) / 2 > -3.0:
            continue
        U = V(p1.x - p0.x, p1.y - p0.y, 0)
        span = U.length
        U.normalize()
        Wn = V(U.y, -U.x, 0)
        o = V(p0.x, p0.y, 0) + Wn * (0.175 - EMBED)
        n_str = max(2, round((span - 0.9) / 0.3)) if det else 1
        mats = ["MAT_Tenda_Zuta", "MAT_Tenda_Bijela"] if det else ["MAT_Tenda_Zuta"]
        A = o + U * 0.45 + V(0, 0, 3.0)
        Bp = o + U * (span - 0.45) + V(0, 0, 3.0)
        out = Wn * 1.1 + V(0, 0, -0.55)
        stripes(mb, mats, A, Bp, out, n_str, 0.025)
        if det:
            stripes(mb, mats, A + out * 0.985 + U * 0.01, Bp + out * 0.985 - U * 0.01, V(0, 0, -0.25), n_str, 0.02)
        # mezanin
        A2 = o + U * 0.6 + Wn * 0.3 + V(0, 0, 8.15)
        B2 = o + U * (span - 0.6) + Wn * 0.3 + V(0, 0, 8.15)
        stripes(mb, mats, A2, B2, Wn * 1.2 + V(0, 0, -0.75), n_str, 0.025)
    mb.obj("A_Tende", g_dt)

    # ---------------------------------------------------------------- mezanin
    mb = MB(ctx)
    prism(mb, "MAT_Opeka", P.pts(0.05), 4.98, 5.70)
    mb.obj("A_Mezanin_Parapet_Opeka", g_mz, bevel=True)

    outer, ofl = fpath(-0.15)
    inner, _ = fpath(-0.18)
    mb = MB(ctx)
    strip(mb, "MAT_Staklo", outer, inner, 5.65, 8.25)
    mb.obj("A_Mezanin_Staklo", g_mz)
    if det:
        mb = MB(ctx)
        nrm = path_normals(outer)
        for i in range(1, len(outer) - 1):
            if not ofl[i]:
                continue
            n2 = nrm[i]
            t = V(-n2.y, n2.x, 0)
            c = V(outer[i][0], outer[i][1], 6.95) + V(n2.x, n2.y, 0) * 0.02
            obox(mb, "MAT_Metal_Okvir", c, t, V(n2.x, n2.y, 0), V(0, 0, 1), 0.07, 0.09, 2.58)
        for z in (6.55, 7.55):
            o2, _ = fpath(-0.10, L_END + 0.05, R_END + 0.05)
            i2, _ = fpath(-0.22, L_END + 0.05, R_END + 0.05)
            strip(mb, "MAT_Metal_Okvir", o2, i2, z, z + 0.07)
        mb.obj("A_Mezanin_Okviri_Prozora", g_mz)

    mb = MB(ctx)
    for p, t in cols:
        n2 = Vector((t.y, -t.x))
        c = V(p.x, p.y, 0) - V(n2.x, n2.y, 0) * 0.3
        obox(mb, "MAT_Beton_Svijetli", c + V(0, 0, 6.935), V(t.x, t.y, 0), V(n2.x, n2.y, 0), V(0, 0, 1),
             0.55, 0.6, 2.67)
    mb.obj("A_Mezanin_Pilastri", g_mz, bevel=True)

    mb = MB(ctx)
    prism(mb, "MAT_Beton_Svijetli", P.pts(0.45), 8.2, 8.62)
    mb.obj("A_Mezanin_Vijenac", g_mz, bevel=True)
    mb = MB(ctx)
    loft(mb, "MAT_Krov_Tamni", P.pts(1.5), 8.58, P.pts(0.15), 9.62)
    if det:
        ring(mb, "MAT_Metal_Okvir", P.pts(1.56), P.pts(1.3), 8.50, 8.66)
    mb.obj("A_Nadstresnica", g_mz, bevel=True)

    # ---------------------------------------------------------------- katovi
    FL0, FH, NF = 9.6, 3.3, 7
    ARD = 4.0
    ztop_a = FL0 + FH * NF
    core = MB(ctx)
    prism(core, "MAT_Zid_Bijeli", Plan(ctx, W - 2 * ARD, D - 2 * ARD, (6.0 - ARD, 0.0, 0.0, 6.0 - ARD)).pts(0.0),
          5.68, ztop_a + 0.05)
    box(core, "MAT_Zid_Bijeli", -9.8, 9.8, 2.96, 3.1, 5.685, 8.22)                # hodnik - mezanin
    box(core, "MAT_Zid_Bijeli", -9.6, 9.7, 2.96, 3.1, FL0 - 0.04, ztop_a + 0.04)     # hodnik - katovi
    box(core, "MAT_Zid_Bijeli", -6.06, -5.94, 3.05, hd - 0.68, 5.69, ztop_a + 0.03)
    core.obj("A_Jezgra_Hodnik", g_kt)
    glow_a = MB(ctx)

    def a_rooms(off, zf, zc, kinds, spacing, dO, sill, seed_, lit_p, ms, mf):
        rp, _ = fpath(off)
        ring_rooms(ctx, rp, False, ARD + off + 0.05, zf, zc, ms, mf, glow_a, seed_, kinds, sill, spacing, dO,
                   p_lit=lit_p, keep=lambda q: q.y < 2.8)
        # straznja lijeva soba (iza hodnika, uz lijevu staklenu stijenu)
        Fb = room_frame(V(-hw + 0.41 + dO, 4.7, zf), V(0, -1, 0), V(1, 0, 0), 3.2 - 0.12, -6.06 - (-hw + 0.41 + dO),
                        zc - zf, sill)
        furnish(ctx, Fb, dict(room_decision(seed_ + "_straznja", kinds, lit_p), curtain=False), mf, glow_a)

    ms, mf = MB(ctx), MB(ctx)
    a_rooms(-0.21, 5.7, 8.2, ["restoran"], 5.0, 0.02, 0.0, "A_mezanin", 0.85, ms, mf)
    ms.obj("A_Mezanin_Pregrade", g_mz)
    mf.obj("A_Mezanin_Interijer", g_mz)

    duct_L = Vector((-10.75, -1.0))
    excl = [(duct_L, 1.3)]
    acm = ac_mesh(ctx)
    band_path, _ = fpath(0.0)
    BL = path_len(band_path)
    rods = MB(ctx) if det else None
    for f in range(NF):
        z0 = FL0 + FH * f
        gf = empty(ctx, f"A_Kat_{f + 1:02d}", g_kt)
        mb = MB(ctx)
        ring(mb, "MAT_Beton_Svijetli", P.pts(0.0), P.pts(-0.405), z0, z0 + 1.05)
        if det:
            ring(mb, "MAT_Beton_Svijetli", P.pts(0.12), P.pts(-0.2), z0 + 0.97, z0 + 1.07)
            ring(mb, "MAT_Beton_Svijetli", P.pts(0.06), P.pts(-0.2), z0 - 0.02, z0 + 0.08)
        mb.obj(f"A_Kat_{f + 1:02d}_Traka_Parapet", gf, bevel=True)
        mb = MB(ctx)
        prism(mb, "MAT_Beton_Svijetli", P.pts(-0.39), z0 - 0.06, z0 + 0.2, cap_mat="MAT_Strop", top_mat="MAT_Pod_Parket")
        mb.obj(f"A_Kat_{f + 1:02d}_Ploca", gf)
        ms, mf = MB(ctx), MB(ctx)
        a_rooms(-0.41, z0 + 0.2, (z0 + FH - 0.06) if f < NF - 1 else ztop_a, HOME_KINDS, 3.3, 0.01, 0.85,
                f"A_kat{f}", 0.45, ms, mf)
        ms.obj(f"A_Kat_{f + 1:02d}_Pregrade", gf)
        mf.obj(f"A_Kat_{f + 1:02d}_Interijer", gf)

        outer, ofl = fpath(-0.35)
        inner, _ = fpath(-0.38)
        mb = MB(ctx)
        strip(mb, "MAT_Staklo", outer, inner, z0 + 1.0, z0 + FH + 0.05)
        mb.obj(f"A_Kat_{f + 1:02d}_Staklo", gf)

        if det:
            mb = MB(ctx)
            nrm = path_normals(outer)
            hgt = FH + 0.05 - 1.0
            for i in range(1, len(outer) - 1):
                if not ofl[i]:
                    continue
                n2 = nrm[i]
                c = V(outer[i][0], outer[i][1], z0 + 1.0 + hgt / 2) + V(n2.x, n2.y, 0) * 0.02
                obox(mb, "MAT_Metal_Okvir", c, V(-n2.y, n2.x, 0), V(n2.x, n2.y, 0), V(0, 0, 1), 0.06, 0.09,
                     hgt - 0.02)
            o2, _ = fpath(-0.30, L_END + 0.05, R_END + 0.05)
            i2, _ = fpath(-0.39, L_END + 0.05, R_END + 0.05)
            strip(mb, "MAT_Metal_Okvir", o2, i2, z0 + 2.45, z0 + 2.52)
            mb.obj(f"A_Kat_{f + 1:02d}_Okviri_Prozora", gf)

        # klima uredjaji - nasumicno ali deterministicki (isti u HP i LP)
        r = rng(f"ac{f}")
        placed = []
        for _ in range(r.randint(2, 4)):
            for _try in range(20):
                s = r.uniform(1.2, BL - 1.2)
                p, t = sample(band_path, s)
                if all(abs(s - q) > 1.4 for q in placed) and all((p - c).length > rr for c, rr in excl):
                    placed.append(s)
                    n2 = Vector((t.y, -t.x))
                    instance(ctx, ctx.numbered("A_Klima_Uredjaj"), acm, g_kl,
                             V(p.x, p.y, z0 + 0.30), out_rot(n2))
                    break
        # sipke za susenje rublja (HP)
        if det:
            for _ in range(r.randint(0, 3)):
                s = r.uniform(1.0, BL - 1.0)
                p, t = sample(band_path, s)
                n2 = V(t.y, -t.x, 0)
                a = V(p.x, p.y, z0 + 1.02)
                for dx in (-0.25, 0.25):
                    off = V(t.x, t.y, 0) * dx
                    sweep(rods, "MAT_Metal_Pocincani",
                          [a + off - n2 * 0.05, a + off + n2 * 0.85 + V(0, 0, 0.55)], 0.012, 6)
    if rods:
        rods.obj("A_Sipke_Za_Rublje", g_dt, smooth=70)
    glow_a.obj("A_RASVJETA_SOBA", L, light=True)

    # ---------------------------------------------------------------- krov
    ztop = FL0 + FH * NF
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Svijetli", P.pts(0.05), ztop, ztop + 1.3)
    mb.obj("A_Krov_Atika", g_kr, bevel=True)
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Tamni", P.pts(0.15), ztop + 1.2, ztop + 1.42)
    mb.obj("A_Krov_Pokrov", g_kr, bevel=True)
    zr = ztop + 1.42

    mb = MB(ctx)
    rail = P.pts(-0.5)          # ograda ostaje 7.5 cm ispred servisnog okna
    rail_closed = rail + [rail[0]]
    for zz in ((0.55, 1.1) if det else (1.1,)):
        sweep(mb, "MAT_Metal_Pocincani", [V(x, y, zr + zz) for x, y in rail], 0.025 if det else 0.03,
              ctx.small, closed=True)
    RL = path_len(rail_closed)
    npost = round(RL / (1.6 if det else 3.2))
    for k in range(npost):
        p, t = sample(rail_closed, RL * k / npost)
        cyl(mb, "MAT_Metal_Pocincani", V(p.x, p.y, zr - EMBED), V(p.x, p.y, zr + 1.12), 0.022, ctx.small)
    mb.obj("A_Krov_Ograda", g_kr, smooth=70)

    mb = MB(ctx)
    yF = -hd - 0.05 + 0.5
    apex = V(0, yF, zr + 2.4)
    sq_tube(mb, "MAT_Metal_Zlatni", [V(-1.1, yF, zr - EMBED), apex], 0.05)
    sq_tube(mb, "MAT_Metal_Zlatni", [V(1.1, yF + 0.012, zr - EMBED), apex + V(0, 0.012, 0)], 0.05)
    sq_tube(mb, "MAT_Metal_Zlatni", [V(-0.62, yF, zr + 1.05), V(0.62, yF, zr + 1.05)], 0.04)
    if det:
        box(mb, "MAT_Metal_Zlatni", -0.35, 0.35, yF - 0.04, yF + 0.04, zr + 1.3, zr + 1.75)
    mb.obj("A_Krov_Zlatni_Okvir", g_kr)

    # reflektori na prednjim zaobljenjima krova
    for sgn in (-1, 1):
        a = radians(-45) if sgn > 0 else radians(225)
        cx, cy = sgn * (hw - 6.0), -hd + 6.0
        p = V(cx + 6.15 * cos(a), cy + 6.15 * sin(a), zr + 0.25)
        n2 = V(cos(a), sin(a), 0)
        mb = MB(ctx)
        sq_tube(mb, "MAT_Metal_Zlatni", [p - n2 * 0.4, p + n2 * 0.55], 0.04)
        cyl(mb, "MAT_Metal_Zlatni", p + n2 * 0.5 + V(0, 0, 0.12), p + n2 * 0.95 - V(0, 0, 0.1), 0.14, ctx.small * 2)
        mb.obj(f"A_Krov_Reflektor_{'L' if sgn < 0 else 'D'}", g_kr)
        light(ctx, "SVJETLO_REFLEKTOR_KROV", "SPOT", L, p + n2 * 1.0 - V(0, 0, 0.13),
              n2 + V(0, 0, -0.6), 400.0, (1.0, 0.85, 0.65), spot_deg=50)

    mb = MB(ctx)
    box(mb, "MAT_Beton_Svijetli", -6.0, -1.0, 2.5, 6.0, zr - EMBED, zr + 2.8)
    box(mb, "MAT_Beton_Tamni", -6.15, -0.85, 2.35, 6.15, zr + 2.75, zr + 2.95)
    box(mb, "MAT_Metal_Okvir", -4.1, -3.0, 2.42, 2.55, zr - 0.01, zr + 2.2)
    mb.obj("A_Krov_Kucica_Stubista", g_kr, bevel=True)
    mb = MB(ctx)
    cyl(mb, "MAT_Metal_Pocincani", V(4.0, 4.0, zr - EMBED), V(4.0, 4.0, zr + 2.6), 1.1, ctx.small * 3)
    if det:
        for k in range(3):
            z = zr + 0.5 + k * 0.8
            sweep(mb, "MAT_Metal_Okvir", circle_path(V(4.0, 4.0, z), V(1, 0, 0), V(0, 1, 0), 1.11, 48), 0.025,
                  6, closed=True)
    mb.obj("A_Krov_Spremnik_Vode", g_kr, bevel=True)

    # ---------------------------------------------------------------- instalacije
    mb = MB(ctx)
    box(mb, "MAT_Beton_Svijetli", hw - 0.4, hw + 1.6, R_END - 0.1, hd + 0.03, -0.01, zr + 1.6)
    box(mb, "MAT_Beton_Tamni", hw - 0.5, hw + 1.75, R_END - 0.25, hd + 0.1, zr + 1.55, zr + 1.8)
    if det:
        for f in range(NF):
            z = FL0 + FH * f + 1.6
            box(mb, "MAT_Metal_Okvir", hw + 0.3, hw + 1.1, R_END - 0.14, R_END - 0.05, z, z + 0.8)
    mb.obj("A_Servisno_Okno", g_in, bevel=True)

    fs = 6 if det else 1
    mb = MB(ctx)
    path = [V(hw + 0.6, R_END - 0.52, 9.0), V(hw + 0.6, R_END - 0.52, zr + 0.6), V(hw + 0.6, R_END + 0.8, zr + 0.6)]
    sweep(mb, "MAT_Metal_Pocincani", fillet(path, 0.8, fs), 0.42, ctx.tube)
    if det:
        for k in range(8):
            z = 11.0 + k * 3.3
            sweep(mb, "MAT_Metal_Okvir", circle_path(V(hw + 0.6, R_END - 0.52, z), V(1, 0, 0), V(0, 1, 0),
                                                       0.43, 32), 0.02, 4, closed=True)
    mb.obj("A_Kanal_Ventilacija_Desni", g_in, smooth=60)
    mb = MB(ctx)
    zL = FL0 + FH * 4 + 0.5
    path = [V(duct_L.x, duct_L.y, 9.3), V(duct_L.x, duct_L.y, zL), V(-hw + 0.3, duct_L.y, zL)]
    sweep(mb, "MAT_Metal_Pocincani", fillet(path, 0.6, fs), 0.3, ctx.tube)
    mb.obj("A_Kanal_Ventilacija_Lijevi", g_in, smooth=60)

    mb = MB(ctx)
    box(mb, "MAT_Beton_Tamni", -hw - 0.03, hw - 0.3, hd - 0.7, hd - 0.05, -0.015, zr - 0.05)
    mb.obj("A_Zid_Straznji_Kalkan", g_dt, bevel=True)

    dm = dish_mesh(ctx)
    for i, s in enumerate((0.15, 0.5, 0.85)):
        p, t = sample(col_line, Lc * s)
        n2 = Vector((t.y, -t.x))
        q = Vector((p.x, p.y)) - n2 * 0.3
        instance(ctx, ctx.numbered("A_Satelitska_Antena"), dm, g_in, V(q.x, q.y, 6.0) + V(n2.x, n2.y, 0) * 0.3,
                 out_rot(n2))
    return B


# ==========================================================================
# ZGRADA B - "TORANJ MORE"
# ==========================================================================
def build_B(ctx, root, lroot, pos, rot=0.0, on_water=True):
    rng = lambda tag: random.Random("B_" + tag)
    det = ctx.detail
    B = empty(ctx, "Zgrada_B_Toranj_More" if on_water else "Zgrada_B_Toranj", root, pos, rot=rot)
    L = empty(ctx, "Zgrada_B_Svjetla", lroot, pos, coll=ctx.lcoll, rot=rot)
    g_pl = empty(ctx, "B_Platforma_Pasarele", B) if on_water else None
    g_er = empty(ctx, "B_Erker_Lijevi", B)
    g_kd = empty(ctx, "B_Katovi_Desni", B)
    g_st = empty(ctx, "B_Stupovi", B)
    g_pz = empty(ctx, "B_Prizemlje", B)
    g_kr = empty(ctx, "B_Krov", B)
    g_in = empty(ctx, "B_Instalacije", B)
    g_rk = empty(ctx, "B_Reklame", B)

    GF, FH, NF = 3.6, 3.4, 6
    ztop = GF + FH * NF            # 24.0
    PL = Plan(ctx, 5.4, 10.0, (0.0, 0.0, 2.4, 2.4), cx=-4.3, pane=0.7)
    base, _ = PL.pts(0.0, flags=True)
    keep = [x < -1.75 for x, y in base]
    XE = -1.7

    def lpath(off, xe=XE):
        pts, fl = PL.pts(off, flags=True)
        return open_path(pts, keep, (xe, 5.0 + off), (xe, -5.0 - off), fl)

    # ---------------------------------------------------------------- platforma i pasarele
    if on_water:
        mb = MB(ctx)
        prism(mb, "MAT_Beton_Mokri", Plan(ctx, 20.0, 14.0, (1.5, 1.5, 1.5, 1.5)).pts(0.0), -2.6, 0.0)
        mb.obj("B_Platforma_Betonska", g_pl, bevel=True)
        mb = MB(ctx)
        for x in (-7.5, 0.0, 7.5):
            for y in (-4.5, 4.5):
                cyl(mb, "MAT_Beton_Mokri", V(x, y, -8.0), V(x, y, -2.6 + EMBED), 0.6, ctx.small * 2)
        mb.obj("B_Platforma_Piloti", g_pl, smooth=60)

        lamps = []
        for side in (-1, 1):
            nm = "Lijeva" if side < 0 else "Desna"
            x0, x1 = (-32.0, -9.8) if side < 0 else (9.8, 32.0)
            mb = MB(ctx)
            if det:
                n_pl = round((x1 - x0) / 0.3)
                for k in range(n_pl):
                    xa = x0 + (x1 - x0) * k / n_pl + 0.01
                    xb = x0 + (x1 - x0) * (k + 1) / n_pl - 0.01
                    box(mb, "MAT_Drvo_Pasarela", xa, xb, -1.25, 1.25, -0.10, -0.02)
                for y in (-1.0, 0.0, 1.0):
                    box(mb, "MAT_Metal_Okvir", x0, x1, y - 0.08, y + 0.08, -0.32, -0.10 + EMBED)
            else:
                box(mb, "MAT_Drvo_Pasarela", x0, x1, -1.25, 1.25, -0.32, -0.02)
            mb.obj(f"B_Pasarela_{nm}_Gaziste", g_pl, bevel=True)

            mb = MB(ctx)
            n_leg = round((x1 - x0) / 5.5)
            for k in range(n_leg + 1):
                x = x0 + 0.3 + (x1 - x0 - 0.6) * k / n_leg
                for y in (-1.0, 1.0):
                    box(mb, "MAT_Metal_Okvir", x - 0.09, x + 0.09, y - 0.09, y + 0.09, -8.0, -0.30)
                box(mb, "MAT_Metal_Okvir", x - 0.1, x + 0.1, -1.2, 1.2, -0.52, -0.30)
                if det:
                    sq_tube(mb, "MAT_Metal_Okvir", [V(x, -0.95, -0.6), V(x, 0.95, -3.5)], 0.03)
                    sq_tube(mb, "MAT_Metal_Okvir", [V(x, 0.95, -0.6), V(x, -0.95, -3.5)], 0.03)
            mb.obj(f"B_Pasarela_{nm}_Nosaci", g_pl, bevel=True)

            mb = MB(ctx)
            lm = MB(ctx) if det else None
            npost = round((x1 - x0) / (1.6 if det else 3.2))
            for y in (-1.18, 1.18):
                for zz in ((0.55, 1.05) if det else (1.05,)):
                    sweep(mb, "MAT_Metal_Pocincani", [V(x0 + 0.05, y, zz), V(x1 - 0.05, y, zz)], 0.025, ctx.small)
                for k in range(npost + 1):
                    x = x0 + 0.1 + (x1 - x0 - 0.2) * k / npost
                    box(mb, "MAT_Metal_Pocincani", x - 0.025, x + 0.025, y - 0.025, y + 0.025, -0.04, 1.07)
                    if lm and k < npost:
                        xn = x0 + 0.1 + (x1 - x0 - 0.2) * (k + 1) / npost
                        sweep(lm, "LAMPA_TOPLA", catenary(V(x, y, 1.0), V(xn, y, 1.0), 0.18, 8), 0.012, 5)
            mb.obj(f"B_Pasarela_{nm}_Ograda", g_pl, smooth=70)
            if lm:
                lm.obj(f"SVJETLA_NIZ_PASARELA_{nm.upper()}", L, light=True, raw_name=False, smooth=80)
            for k in range(4):
                x = x0 + (x1 - x0) * (k + 0.5) / 4
                lamps.append(V(x, 0.0, 0.95))

        for p in lamps:
            light(ctx, "SVJETLO_PASARELA", "POINT", L, p, energy=25.0, color=(1.0, 0.6, 0.3))

        # stupovi struje + kabeli
        mb = MB(ctx)
        cab = MB(ctx)
        poles = [(V(-30.0, -1.9, 0), V(-7.0, 0.6, 20.5)), (V(30.0, 1.9, 0), V(7.0, -0.8, 21.0))]
        for base_p, anchor in poles:
            top = base_p + V(0, 0, 10.0)
            cyl(mb, "MAT_Drvo_Pasarela", base_p + V(0, 0, -8.0), top, 0.16, ctx.small * 2)
            box(mb, "MAT_Metal_Okvir", top.x - 0.06, top.x + 0.06, top.y - 1.0, top.y + 1.0, top.z - 0.6, top.z - 0.45)
            for k, dy in enumerate((-0.85, -0.3, 0.3, 0.85)):
                a = V(top.x, top.y + dy, top.z - 0.45 + 0.02)
                b = anchor + V(0, dy * 0.7, -0.1 * k)
                cab_path = catenary(a - V(0, 0, 0.03), b, 1.2 + 0.25 * k, 24 if det else 8)
                sweep(cab, "MAT_Kabel", cab_path, 0.018, 6 if det else 4)
        mb.obj("B_Stupovi_Struje", g_in, bevel=True)
        cab.obj("B_Kabeli", g_in, smooth=80)
        mb = MB(ctx)
        for (_, anchor) in poles:
            x_w = -7.0 if anchor.x < 0 else 7.0
            box(mb, "MAT_Metal_Okvir", min(x_w, anchor.x) - 0.25, max(x_w, anchor.x) + 0.25,
                anchor.y - 0.75, anchor.y + 0.75, anchor.z - 0.6, anchor.z + 0.05)
        mb.obj("B_Kabeli_Zidni_Nosaci", g_in, bevel=True)

    # ---------------------------------------------------------------- lijevi erker
    for f in range(NF + 1):
        z0 = GF + FH * f
        mb = MB(ctx)
        if f < NF:
            prism(mb, "MAT_Beton_Tamni", PL.pts(0.25), z0 - 0.12, z0 + 0.22)
            mb.obj(f"B_Erker_Kat_{f + 1:02d}_Ploca", g_er, bevel=True)
        else:
            prism(mb, "MAT_Beton_Tamni", PL.pts(0.25), z0 - 0.12, z0 + 0.9)
            if det:
                prism(mb, "MAT_Beton_Tamni", PL.pts(0.32), z0 + 0.8, z0 + 1.0)
            mb.obj("B_Erker_Krovna_Ploca", g_er, bevel=True)
            continue
        outer, ofl = lpath(-0.05)
        inner, _ = lpath(-0.08)
        mb = MB(ctx)
        strip(mb, "MAT_Staklo", outer, inner, z0 + 0.18, z0 + FH - 0.08)
        mb.obj(f"B_Erker_Kat_{f + 1:02d}_Staklo", g_er)
        if det:
            mb = MB(ctx)
            nrm = path_normals(outer)
            hgt = FH - 0.26
            for i in range(1, len(outer) - 1):
                if ofl[i]:
                    n2 = nrm[i]
                    c = V(outer[i][0], outer[i][1], z0 + 0.18 + hgt / 2) + V(n2.x, n2.y, 0) * 0.02
                    obox(mb, "MAT_Metal_Okvir", c, V(-n2.y, n2.x, 0), V(n2.x, n2.y, 0), V(0, 0, 1),
                         0.06, 0.09, hgt - 0.02)
            o2, _ = lpath(0.03, XE - 0.03)
            i2, _ = lpath(-0.12, XE - 0.03)
            strip(mb, "MAT_Metal_Okvir", o2, i2, z0 + 2.55, z0 + 2.62)
            strip(mb, "MAT_Metal_Okvir", o2, i2, z0 + 0.20, z0 + 0.32)
            mb.obj(f"B_Erker_Kat_{f + 1:02d}_Okviri", g_er)
    glow_b = MB(ctx)
    for f in range(NF):
        z0 = GF + FH * f
        zf, zc = z0 + 0.22, z0 + FH - 0.12
        ms, mf = MB(ctx), MB(ctx)
        box(ms, "MAT_Zid_Bijeli", -6.89, -1.75, -0.06, 0.06, zf - 0.03, zc + 0.03)
        for k_, (O, U_, D_) in enumerate((((-3.25, -4.86), (1, 0, 0), (0, 1, 0)), ((-3.25, 4.86), (-1, 0, 0), (0, -1, 0)))):
            F = room_frame(V(O[0], O[1], zf), V(*U_), V(*D_), 2.8, 4.8, zc - zf, 0.0)
            furnish(ctx, F, dict(room_decision(f"B_erker_{f}_{k_}", HOME_KINDS), curtain=False), mf, glow_b)
        ms.obj(f"B_Erker_Kat_{f + 1:02d}_Pregrade", g_er)
        mf.obj(f"B_Erker_Kat_{f + 1:02d}_Interijer", g_er)

    # ---------------------------------------------------------------- desni katovi
    for f in range(NF + 1):
        z0 = GF + FH * f
        mb = MB(ctx)
        if f < NF:
            box(mb, "MAT_Beton_Tamni", 0.5, 4.9, -5.4, 4.9, z0 - 0.15, z0 + 0.25)
            mb.obj(f"B_Desno_Kat_{f + 1:02d}_Ploca", g_kd, bevel=True)
        else:
            box(mb, "MAT_Beton_Tamni", 0.5, 4.9, -5.4, 4.9, z0 - 0.15, z0 + 0.9)
            mb.obj("B_Desno_Krovna_Ploca", g_kd, bevel=True)
            continue
        mb = MB(ctx)
        box(mb, "MAT_Staklo", 0.55, 4.85, -4.62, -4.58, z0 + 0.2, z0 + FH - 0.1)
        mb.obj(f"B_Desno_Kat_{f + 1:02d}_Staklo", g_kd)
        if det:
            mb = MB(ctx)
            for k in range(1, 4):
                x = 0.55 + 4.3 * k / 4
                box(mb, "MAT_Metal_Okvir", x - 0.03, x + 0.03, -4.66, -4.54, z0 + 0.19, z0 + FH - 0.09)
            box(mb, "MAT_Metal_Okvir", 0.56, 4.84, -4.665, -4.535, z0 + 2.6, z0 + 2.67)
            for y in (-5.25,):
                sweep(mb, "MAT_Metal_Pocincani", [V(0.5, y, z0 + 1.25), V(4.9, y, z0 + 1.25)], 0.025, ctx.small)
                for k in range(6):
                    x = 0.75 + 3.9 * k / 5
                    box(mb, "MAT_Metal_Pocincani", x - 0.02, x + 0.02, y - 0.02, y + 0.02, z0 + 0.23, z0 + 1.27)
            mb.obj(f"B_Desno_Kat_{f + 1:02d}_Okviri_Ograda", g_kd, smooth=70)
        light(ctx, "SVJETLO_INTERIJER_DESNO", "AREA", L, V(2.7, -4.1, z0 + FH - 0.25), V(0, 0, -1), 40.0,
              (0.8, 0.9, 1.0), (4.0, 0.5))
        a = radians(225)
        cxy = V(-4.6 + 1.75 * cos(a), -2.6 + 1.75 * sin(a), z0 + FH - 0.3)
        light(ctx, "SVJETLO_INTERIJER_ERKER", "POINT", L, cxy, energy=60.0, color=(1.0, 0.72, 0.42))
    for f in range(NF):
        z0 = GF + FH * f
        zf, zc = z0 + 0.25, z0 + FH - 0.15
        ms, mf = MB(ctx), MB(ctx)
        box(ms, "MAT_Zid_Bijeli", 0.55, 4.85, 0.0, 0.12, zf - 0.03, zc + 0.03)
        F = room_frame(V(2.7, -4.52, zf), V(1, 0, 0), V(0, 1, 0), 4.2, 4.52, zc - zf, 0.0)
        furnish(ctx, F, room_decision(f"B_desno_{f}", OFFICE_KINDS), mf, glow_b)
        ms.obj(f"B_Desno_Kat_{f + 1:02d}_Pregrada", g_kd)
        mf.obj(f"B_Desno_Kat_{f + 1:02d}_Interijer", g_kd)
    glow_b.obj("B_RASVJETA_SOBA", L, light=True)
    mb = MB(ctx)
    box(mb, "MAT_Beton_Tamni", 0.56, 4.84, 4.55, 4.85, GF - 0.12, ztop + 0.12)
    mb.obj("B_Desno_Zid_Straznji", g_kd, bevel=True)

    # ---------------------------------------------------------------- stupovi (pilastri)
    mb = MB(ctx)
    box(mb, "MAT_Beton_Svijetli", -1.8, 0.6, -5.3, 5.02, -0.06, ztop + 1.4)
    if det:
        for x0 in (-1.75, 0.35):
            box(mb, "MAT_Beton_Svijetli", x0, x0 + 0.2, -5.42, -5.27, -0.05, ztop + 1.38)
        box(mb, "MAT_Beton_Tamni", -1.9, 0.7, -5.4, 5.1, ztop + 1.35, ztop + 1.55)
    mb.obj("B_Stup_Srednji", g_st, bevel=True)
    mb = MB(ctx)
    box(mb, "MAT_Beton_Svijetli", 4.8, 7.0, -5.5, 5.0, -0.07, ztop + 2.6)
    if det:
        box(mb, "MAT_Beton_Tamni", 4.7, 7.1, -5.6, 5.1, ztop + 2.55, ztop + 2.75)
        for k in range(9):
            z = 2.0 + k * 2.6
            box(mb, "MAT_Beton_Tamni", 6.97, 7.03, -5.0, 4.5, z, z + 0.04)
    mb.obj("B_Stup_Desni", g_st, bevel=True)

    # ---------------------------------------------------------------- prizemlje
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Tamni", PL.pts(0.0), -0.05, GF - 0.1)
    box(mb, "MAT_Beton_Tamni", 0.55, 4.85, -4.9, 4.88, -0.05, GF - 0.1)
    mb.obj("B_Prizemlje_Volumen", g_pz, bevel=True)
    doors = [(-3.4, -5.0, "VRATA_SVJETLO_TOPLO", (1.0, 0.7, 0.4)), (2.7, -4.9, "VRATA_SVJETLO_HLADNO", (0.7, 0.9, 1.0))]
    mb = MB(ctx)
    for x, yf, _, _ in doors:
        box(mb, "MAT_Metal_Okvir", x - 0.69, x - 0.55, yf - 0.11, yf + 0.04, -0.02, 2.45)
        box(mb, "MAT_Metal_Okvir", x + 0.55, x + 0.69, yf - 0.11, yf + 0.04, -0.02, 2.45)
        box(mb, "MAT_Metal_Okvir", x - 0.7, x + 0.7, yf - 0.12, yf + 0.05, 2.4, 2.55)
        box(mb, "MAT_Metal_Okvir", x - 0.75, x + 0.75, yf - 0.75, yf + 0.06, 2.65, 2.8)
    mb.obj("B_Prizemlje_Ulazi_Okviri", g_pz, bevel=True)
    for i, (x, yf, mat, col) in enumerate(doors):
        mb = MB(ctx)
        box(mb, mat, x - 0.56, x + 0.56, yf - 0.04, yf + 0.02, -0.01, 2.41)
        mb.obj(f"{mat}_{i + 1:02d}", L, light=True)
        light(ctx, "SVJETLO_ULAZ", "POINT", L, V(x, yf - 0.6, 2.5), energy=80.0, color=col)
    if det:
        mb = MB(ctx)
        box(mb, "MAT_Metal_Pocincani", 1.0, 1.7, -5.05, -4.85, 0.8, 1.9)
        box(mb, "MAT_Metal_Pocincani", 3.7, 4.4, -5.05, -4.85, 0.5, 1.2)
        mb.obj("B_Prizemlje_Elektro_Ormarici", g_pz, bevel=True)

    # ---------------------------------------------------------------- reklame / neon
    mb = MB(ctx)
    box(mb, "MAT_Metal_Okvir", -1.05, -0.25, -5.48, -5.25, 9.0, 17.5)
    mb.obj("B_Neon_Vertikalni_Okvir", g_rk, bevel=True)
    mb = MB(ctx)
    box(mb, "NEON_CIJAN", -0.95, -0.35, -5.52, -5.44, 9.1, 17.4)
    if det:
        for ua, ub, va, vb in glyph_strokes(rng("glyph"), -0.92, -0.38, 9.2, 17.3, 0.4, 0.12):
            box(mb, "NEON_BIJELI", ua, ub, -5.56, -5.50, va, vb)
    mb.obj("NEON_VERTIKALNI_ZNAK", L, light=True)
    light(ctx, "SVJETLO_NEON_VERTIKALNI", "AREA", L, V(-0.65, -5.75, 13.25), V(0, -1, 0), 80.0,
          (0.1, 0.85, 1.0), (0.6, 8.2))

    mb = MB(ctx)
    box(mb, "MAT_Metal_Okvir", 4.6, 7.1, -5.85, -5.45, 8.8, 15.8)
    if det:
        for zz in (9.4, 15.2):
            box(mb, "MAT_Metal_Okvir", 5.4, 6.3, -5.52, -5.2, zz - 0.1, zz + 0.1)
    mb.obj("B_Ekran_Reklama_Okvir", g_rk, bevel=True)
    mb = MB(ctx)
    box(mb, "EKRAN_REKLAMA_PLAVI", 4.7, 7.0, -5.9, -5.82, 8.9, 15.7)
    if det:
        X, Z = V(1, 0, 0), V(0, 0, 1)
        icons = [(5.35, 14.6, 0.36), (6.35, 14.3, 0.28), (5.6, 13.0, 0.25), (6.3, 12.4, 0.40),
                 (5.4, 11.3, 0.30), (6.4, 10.6, 0.22), (5.7, 9.8, 0.33)]
        for x, z, rr in icons:
            sweep(mb, "NEON_BIJELI", circle_path(V(x, -5.925, z), X, Z, rr, 32), 0.022, 6, closed=True)
            box(mb, "NEON_BIJELI", x - rr * 0.5, x + rr * 0.5, -5.95, -5.88, z - 0.02, z + 0.02)
    mb.obj("EKRAN_REKLAMA_NEON", L, light=True)
    light(ctx, "SVJETLO_EKRAN_REKLAMA", "AREA", L, V(5.85, -6.2, 12.3), V(0, -1, 0), 150.0,
          (0.15, 0.55, 1.0), (2.3, 6.8))

    mb = MB(ctx)
    box(mb, "MAT_Natpis_Ploca", 5.3, 6.5, -5.62, -5.45, 17.0, 25.6)
    if det:
        for ua, ub, va, vb in glyph_strokes(rng("letters"), 5.4, 6.4, 17.15, 25.45, 0.55, 0.15, cols=4):
            box(mb, "MAT_Natpis_Slova", ua, ub, -5.68, -5.6, va, vb)
    mb.obj("B_Natpis_Vertikalni", g_rk, bevel=True)

    # ---------------------------------------------------------------- instalacije
    fs = 5 if det else 1
    mb = MB(ctx)
    sweep(mb, "MAT_Metal_Hrdja", fillet([V(0.05, -5.45, 0.4), V(0.05, -5.45, 23.0), V(0.05, -5.0, 23.0)], 0.3, fs),
          0.09, ctx.small * 2)
    sweep(mb, "MAT_Metal_Hrdja", fillet([V(-1.35, -5.38, 0.4), V(-1.35, -5.38, 21.5), V(-1.35, -5.0, 21.5)],
                                        0.15, fs), 0.04, ctx.small)
    sweep(mb, "MAT_Metal_Pocincani", fillet([V(7.15, 3.5, 0.2), V(7.15, 3.5, 25.8), V(6.7, 3.5, 25.8)], 0.25, fs),
          0.1, ctx.small * 2)
    if det:
        for k in range(9):
            z = 2.0 + k * 2.5
            box(mb, "MAT_Metal_Okvir", -0.05, 0.15, -5.56, -5.25, z, z + 0.06)
    mb.obj("B_Cijevi_Fasada", g_in, smooth=60)

    # ---------------------------------------------------------------- krov
    zr = ztop + 0.9
    mb = MB(ctx)
    box(mb, "MAT_Metal_Pocincani", -5.0, -3.0, 0.5, 3.5, zr - EMBED, zr + 1.4)
    if det:
        for k in range(6):
            z = zr + 0.15 + k * 0.2
            box(mb, "MAT_Klima_Resetka", -5.05, -2.95, 0.8, 1.2, z, z + 0.05)
    cyl(mb, "MAT_Metal_Pocincani", V(-5.2, -2.2, zr - EMBED), V(-5.2, -2.2, zr + 1.6), 0.8, ctx.small * 3)
    cyl(mb, "MAT_Metal_Pocincani", V(2.0, -2.0, zr - EMBED), V(2.0, -2.0, zr + 1.3), 0.25, ctx.small * 2)
    box(mb, "MAT_Metal_Pocincani", 1.2, 4.0, 1.0, 3.8, zr - EMBED, zr + 1.0)
    mb.obj("B_Krov_Strojarnica", g_kr, bevel=True)

    mb = MB(ctx)
    masts = [(V(-3.0, 3.6, zr), 6.5), (V(6.1, 3.8, ztop + 2.6), 7.0), (V(2.6, 3.4, zr + 1.0), 3.5), (V(-1.0, 4.0, ztop + 1.4), 4.0)]
    for b0, h in masts:
        cyl(mb, "MAT_Metal_Okvir", b0 - V(0, 0, EMBED), b0 + V(0, 0, h), 0.05, ctx.small)
        for k, z in enumerate((0.55, 0.75, 0.9) if det else (0.75,)):
            half = 0.6 - 0.15 * k
            zz = b0.z + h * z
            cyl(mb, "MAT_Metal_Okvir", V(b0.x - half, b0.y, zz), V(b0.x + half, b0.y, zz), 0.02, ctx.small)
        if det:
            cyl(mb, "MAT_Metal_Okvir", b0 + V(0, 0, h * 0.3), b0 + V(0, 0, h * 0.3 + 0.8), 0.09, ctx.small)
    mb.obj("B_Krov_Antene", g_kr, smooth=70)
    for b0, h in masts[:2]:
        light(ctx, "SVJETLO_ANTENA_SIGNAL", "POINT", L, b0 + V(0, 0, h + 0.15), energy=5.0, color=(1.0, 0.1, 0.05))
    dm = dish_mesh(ctx)
    instance(ctx, ctx.numbered("B_Satelitska_Antena"), dm, g_kr, V(6.2, -5.5, ztop + 1.8), 0.0)
    return B


# ==========================================================================
# INTERIJERI - svaka soba iza svakog prozora
# Soba je opisana okvirom F: O = tocka na unutarnjem rubu fasade (u razini poda),
# U = smjer duz fasade, D = smjer u dubinu sobe, W = sirina, L = dubina, H = visina,
# sill = visina parapeta. Namjestaj se gradi u lokalnim (u, d, z) koordinatama.
# Sva pravila: dna 0.5 cm ispod poda, dijelovi koji se dodiruju preklapaju se,
# nikoja dva lica nisu u istoj ravnini s preklopom.
# ==========================================================================
WALL_MATS = ["MAT_Zid_Bijeli", "MAT_Zid_Krem", "MAT_Zid_Zeleni", "MAT_Zid_Plavi", "MAT_Zid_Rozi"]
FABRICS = ["MAT_Tekstil_Crveni", "MAT_Tekstil_Plavi", "MAT_Tekstil_Sivi", "MAT_Tekstil_Zuti", "MAT_Tekstil_Zeleni"]
CURTAINS = ["MAT_Zavjesa_Bez", "MAT_Zavjesa_Crvena", "MAT_Zavjesa_Plava", "MAT_Zavjesa_Zelena", "MAT_Zavjesa_Bijela"]
PRODUCTS = ["MAT_Tekstil_Crveni", "MAT_Tekstil_Plavi", "MAT_Tekstil_Zuti", "MAT_Tekstil_Zeleni",
            "MAT_Plastika_Bijela", "MAT_Karton", "MAT_Automat_Crveni"]
HOME_KINDS = ["dnevna", "spavaca", "kuhinja", "ured", "skladiste", "prazno", "dnevna", "spavaca"]
OFFICE_KINDS = ["ured", "ured", "ured", "dnevna", "skladiste", "prazno"]


def room_frame(O, U, D, W, L, H, sill=0.0):
    return dict(O=Vector(O), U=Vector(U).normalized(), D=Vector(D).normalized(), W=W, L=L, H=H, sill=sill)


def fbox(mb, mat, F, u0, u1, d0, d1, z0, z1):
    u0, u1 = sorted((u0, u1))
    d0, d1 = sorted((d0, d1))
    c = F["O"] + F["U"] * ((u0 + u1) / 2) + F["D"] * ((d0 + d1) / 2) + V(0, 0, (z0 + z1) / 2)
    obox(mb, mat, c, F["U"], F["D"], V(0, 0, 1), u1 - u0, d1 - d0, z1 - z0)


def fpt(F, u, d, z):
    return F["O"] + F["U"] * u + F["D"] * d + V(0, 0, z)


def room_decision(seed, kinds, p_lit=0.45):
    r = random.Random(seed)
    return dict(kind=r.choice(kinds), lit=r.random() < p_lit, warm=r.random() < 0.7,
                curtain=r.random() < 0.75, ccol=r.choice(CURTAINS), cov=r.uniform(0.12, 0.40),
                wall=r.choice(WALL_MATS), fab=r.choice(FABRICS), fab2=r.choice(FABRICS), seed=str(seed))


def _plant(ctx, mf, F, u, d, big=False):
    s = 1.3 if big else 1.0
    cyl(mf, "MAT_Lonac", fpt(F, u, d, -0.005), fpt(F, u, d, 0.38 * s), 0.17 * s, ctx.small * 2)
    a, h = 0.32 * s, 0.42 * s
    c = fpt(F, u, d, 0.38 * s + h - 0.05)
    seg = 8 if ctx.detail else 3
    prof = [(a * sin(pi * i / seg), c.z - h * cos(pi * i / seg)) for i in range(seg + 1)]
    prof[0], prof[-1] = (0.0, prof[0][1]), (0.0, prof[-1][1])
    lathe(mf, "MAT_Lisce", prof, ctx.small * 2, Matrix.Translation(V(c.x, c.y, 0)))


def _legs(mf, mat, F, u0, u1, d0, d1, ztop, t=0.04):
    u0, u1 = sorted((u0, u1))
    d0, d1 = sorted((d0, d1))
    for u in (u0 + t, u1 - t):
        for d in (d0 + t, d1 - t):
            fbox(mf, mat, F, u - t / 2, u + t / 2, d - t / 2, d + t / 2, -0.005, ztop)


def _shelf_unit(mf, F, s, ua, ub, d0, d1, Hc, r, items):
    """Polica uz bocni zid (s=+1 desni, s=-1 lijevi). ub je strana uza zid. items: 'knjige' / 'proizvodi'."""
    U = lambda u: s * u
    fbox(mf, "MAT_Drvo", F, U(ub - 0.02), U(ub), d0 + 0.01, d1 - 0.01, -0.005, Hc - 0.01)
    for dd0, dd1 in ((d0, d0 + 0.02), (d1 - 0.02, d1)):
        fbox(mf, "MAT_Drvo", F, U(ua), U(ub - 0.01), dd0, dd1, -0.012, Hc)
    levels = [0.05, 0.47, 0.89, 1.31]
    for lv in levels:
        fbox(mf, "MAT_Drvo", F, U(ua + 0.01), U(ub - 0.015), d0 + 0.015, d1 - 0.015, lv, lv + 0.02)
    fbox(mf, "MAT_Drvo", F, U(ua + 0.01), U(ub - 0.015), d0 + 0.015, d1 - 0.015, Hc - 0.035, Hc - 0.015)
    for lv in levels:
        d = d0 + 0.03
        while True:
            if items == "knjige":
                bw, bh, inset = r.uniform(0.025, 0.05), r.uniform(0.17, 0.33), 0.04
            else:
                bw, bh, inset = r.uniform(0.08, 0.2), r.uniform(0.1, 0.3), r.uniform(0.04, 0.12)
            if d + bw > d1 - 0.03:
                break
            if r.random() < 0.9:
                fbox(mf, r.choice(PRODUCTS if items != "knjige" else FABRICS), F, U(ua + inset), U(ub - 0.04),
                     d, d + bw, lv + 0.015, lv + 0.015 + bh)
            d += bw + (0.004 if items == "knjige" else 0.02)


def furnish(ctx, F, dec, mf, mg, walls=False, curtains=True, lamp=True, floor_mat="MAT_Pod_Parket",
            glow_mat=None):
    det = ctx.detail
    ctx.__dict__["rooms"] = ctx.__dict__.get("rooms", 0) + 1
    W, L, H = F["W"], F["L"], F["H"]
    hw = W / 2
    lit = dec["lit"]
    gmat = glow_mat or ("SOBA_SVJETLO_TOPLO" if dec["warm"] else "SOBA_SVJETLO_HLADNO")
    r = random.Random(dec["seed"] + "_namjestaj")
    k = dec["kind"]
    if walls:   # zid sobe u boji + podna obloga
        fbox(mf, dec["wall"], F, -hw - 0.035, hw + 0.035, L - 0.025, L + 0.03, -0.02, H + 0.02)
        fbox(mf, floor_mat, F, -hw - 0.025, hw + 0.025, -0.05, L + 0.01, -0.008, 0.012)
    if lamp and W > 0.8 and L > 0.8:
        dl = min(0.3, L / 2 - 0.1)
        fbox(mg if lit else mf, gmat if lit else "MAT_Plastika_Bijela", F, -0.3, 0.3, L / 2 - dl, L / 2 + dl,
             H - 0.05, H + 0.01)
    if curtains and dec["curtain"] and W > 1.0:
        cov = 0.47 if k == "prazno" else dec["cov"]
        for s_ in (-1, 1):
            fbox(mf, dec["ccol"], F, s_ * (hw - 0.02), s_ * (hw - 0.02 - cov * W), 0.06, 0.10, F["sill"] + 0.05, H - 0.1)
        cyl(mf, "MAT_Metal_Okvir", fpt(F, -hw - 0.04, 0.08, H - 0.1), fpt(F, hw + 0.04, 0.08, H - 0.1), 0.012,
            ctx.small)

    if not det:  # LP: samo glavni komad kao blok
        if k == "dnevna" and W >= 2.2 and L >= 2.7:
            s = min(1.0, hw - 0.3)
            fbox(mf, dec["fab"], F, -s, s, L - 0.92, L - 0.08, -0.005, 0.86)
        elif k == "spavaca" and W >= 1.4 and L >= 2.45:
            b = 0.75 if W >= 2.4 else 0.48
            fbox(mf, dec["fab"], F, -b, b, L - 2.05, L - 0.05, -0.005, 0.56)
        elif k == "ured" and W >= 1.6 and L >= 1.8:
            dh = min(0.8, hw - 0.15)
            fbox(mf, "MAT_Drvo", F, -dh, dh, L - 0.78, L - 0.06, -0.005, 0.76)
        elif k == "kuhinja" and W >= 2.0 and L >= 2.4:
            fbox(mf, "MAT_Drvo", F, -hw + 0.04, hw - 0.05, L - 0.62, L - 0.02, -0.005, 0.89)
        elif k == "ducan" and W >= 2.0:
            for s_ in (-1, 1):
                fbox(mf, "MAT_Drvo", F, s_ * (hw - 0.42), s_ * (hw - 0.02), 0.5, L - 0.15, -0.005, 1.85)
        return

    if k == "dnevna" and W >= 2.2 and L >= 2.7:
        s = min(1.0, hw - 0.3)
        fab = dec["fab"]
        fbox(mf, fab, F, -s, s, L - 0.92, L - 0.08, -0.005, 0.42)
        fbox(mf, fab, F, -s + 0.005, s - 0.005, L - 0.3, L - 0.06, 0.40, 0.86)
        for a, b in ((-s - 0.01, -s + 0.17), (s - 0.17, s + 0.01)):
            fbox(mf, fab, F, a, b, L - 0.94, L - 0.07, 0.39, 0.62)
        for a, b in ((-s + 0.19, -0.01), (0.01, s - 0.19)):
            fbox(mf, dec["fab2"], F, a, b, L - 0.85, L - 0.32, 0.41, 0.5)
        fbox(mf, "MAT_Drvo", F, -0.45, 0.45, L - 1.75, L - 1.25, 0.36, 0.40)
        _legs(mf, "MAT_Drvo", F, -0.43, 0.43, L - 1.73, L - 1.27, 0.37)
        rw = min(1.2, hw - 0.15)
        fbox(mf, dec["fab2"], F, -rw, rw, L - 2.3, L - 0.5, -0.012, 0.02)
        fbox(mf, "MAT_Plastika_Tamna", F, -hw + 0.03, -hw + 0.48, 0.5, 1.5, -0.005, 0.5)
        fbox(mg if lit else mf, "EKRAN_TV" if lit else "MAT_Plastika_Tamna", F, -hw + 0.2, -hw + 0.25, 0.55, 1.45,
             0.62, 1.15)
        fbox(mf, "MAT_Plastika_Tamna", F, -hw + 0.19, -hw + 0.27, 0.95, 1.05, 0.49, 0.63)
        if L >= 3.0:
            _plant(ctx, mf, F, hw - 0.4, 0.6)
    elif k == "spavaca" and W >= 1.4 and L >= 2.45:
        b = 0.75 if W >= 2.4 else 0.48
        fbox(mf, "MAT_Drvo", F, -b, b, L - 2.05, L - 0.05, -0.005, 0.35)
        fbox(mf, "MAT_Posteljina", F, -b + 0.03, b - 0.03, L - 2.02, L - 0.08, 0.33, 0.52)
        fbox(mf, "MAT_Drvo", F, -b - 0.03, b + 0.03, L - 0.12, L - 0.035, -0.012, 1.0)
        fbox(mf, dec["fab"], F, -b + 0.01, b - 0.01, L - 2.04, L - 0.72, 0.5, 0.56)
        pil = ((-b + 0.12, -0.04), (0.04, b - 0.12)) if b > 0.6 else ((-b + 0.1, b - 0.1),)
        for a, c in pil:
            fbox(mf, "MAT_Posteljina", F, a, c, L - 0.5, L - 0.16, 0.5, 0.62)
        if hw - b >= 0.6:
            for s_ in (-1, 1):
                fbox(mf, "MAT_Drvo", F, s_ * (b + 0.08), s_ * (b + 0.5), L - 0.45, L - 0.05, -0.005, 0.55)
                cyl(mf, "MAT_Metal_Okvir", fpt(F, s_ * (b + 0.29), L - 0.25, 0.545), fpt(F, s_ * (b + 0.29), L - 0.25, 0.75),
                    0.02, ctx.small)
                M = Matrix.Translation(fpt(F, s_ * (b + 0.29), L - 0.25, 0.0))
                lathe(mg if lit else mf, "SOBA_SVJETLO_TOPLO" if lit else "MAT_Posteljina",
                      [(0, 0.92), (0.11, 0.9), (0.15, 0.74), (0, 0.74)], ctx.small * 2, M)
        if L >= 3.0 and min(1.7, L - 2.15) - 0.5 >= 0.6:
            d1 = min(1.7, L - 2.15)
            fbox(mf, "MAT_Drvo", F, -hw + 0.03, -hw + 0.63, 0.5, d1, -0.005, min(2.0, H - 0.15))
            for dm in ((0.5 + d1) / 2 - 0.06, (0.5 + d1) / 2 + 0.04):
                fbox(mf, "MAT_Metal_Okvir", F, -hw + 0.62, -hw + 0.66, dm, dm + 0.02, 1.0, 1.2)
    elif k == "ured" and W >= 1.6 and L >= 1.8:
        dh = min(0.8, hw - 0.15)
        fbox(mf, "MAT_Drvo", F, -dh, dh, L - 0.78, L - 0.06, 0.72, 0.76)
        _legs(mf, "MAT_Metal_Okvir", F, -dh, dh, L - 0.78, L - 0.06, 0.73)
        fbox(mg if lit else mf, "EKRAN_MONITOR" if lit else "MAT_Plastika_Tamna", F, -0.28, 0.28, L - 0.3, L - 0.27,
             0.86, 1.22)
        fbox(mf, "MAT_Plastika_Tamna", F, -0.04, 0.04, L - 0.33, L - 0.26, 0.75, 0.87)
        fbox(mf, "MAT_Plastika_Tamna", F, -0.22, 0.22, L - 0.62, L - 0.47, 0.755, 0.775)
        fbox(mf, "MAT_Plastika_Tamna", F, -0.24, 0.24, L - 1.28, L - 0.84, 0.44, 0.5)
        fbox(mf, "MAT_Plastika_Tamna", F, -0.23, 0.23, L - 1.33, L - 1.26, 0.47, 0.95)
        cyl(mf, "MAT_Metal_Okvir", fpt(F, 0, L - 1.06, 0.02), fpt(F, 0, L - 1.06, 0.46), 0.03, ctx.small)
        cyl(mf, "MAT_Metal_Okvir", fpt(F, 0, L - 1.06, -0.005), fpt(F, 0, L - 1.06, 0.03), 0.25, ctx.small * 2)
        if hw >= 1.1 and min(1.5, L - 0.95) - 0.5 >= 0.7:
            _shelf_unit(mf, F, 1, hw - 0.36, hw - 0.02, 0.5, min(1.5, L - 0.95), 1.85, r, "knjige")
    elif k == "kuhinja" and W >= 2.0 and L >= 2.4:
        fbox(mf, "MAT_Plastika_Bijela", F, -hw + 0.04, -hw + 0.72, L - 0.7, L - 0.03, -0.005, min(1.9, H - 0.2))
        fbox(mf, "MAT_Drvo", F, -hw + 0.75, hw - 0.05, L - 0.62, L - 0.02, -0.005, 0.86)
        fbox(mf, "MAT_Mramor", F, -hw + 0.74, hw - 0.04, L - 0.65, L - 0.01, 0.84, 0.89)
        if H >= 2.5:
            fbox(mf, "MAT_Drvo", F, -hw + 0.76, hw - 0.06, L - 0.36, L - 0.03, 1.45, min(2.15, H - 0.08))
        fbox(mf, "MAT_Drvo", F, -0.45, 0.45, 0.8, 1.5, 0.72, 0.76)
        _legs(mf, "MAT_Drvo", F, -0.45, 0.45, 0.8, 1.5, 0.73)
        for s_ in (-1, 1):
            fbox(mf, dec["fab"], F, s_ * 0.55, s_ * 0.95, 0.95, 1.35, 0.44, 0.48)
            fbox(mf, dec["fab"], F, s_ * 0.93, s_ * 0.97, 0.96, 1.34, 0.46, 0.9)
            _legs(mf, "MAT_Metal_Okvir", F, s_ * 0.56, s_ * 0.94, 0.96, 1.34, 0.45, t=0.03)
    elif k == "skladiste" and W >= 1.0 and L >= 1.4:
        u = -hw + 0.1
        while u + 0.55 <= hw - 0.1:
            n = r.randint(1, 3)
            for j in range(n):
                z0 = j * 0.49 - 0.005
                fbox(mf, "MAT_Karton", F, u + 0.01 * j, u + 0.55 - 0.01 * j, L - 0.6 + 0.01 * j, L - 0.06 - 0.01 * j,
                     z0, z0 + 0.5)
            u += 0.62
    elif k == "ducan" and W >= 2.0 and L >= 1.8:
        for s_ in (-1, 1):
            _shelf_unit(mf, F, s_, hw - 0.42, hw - 0.02, 0.5, L - 0.15, min(1.85, H - 0.3), r, "proizvodi")
        if hw - 0.42 > 0.9:
            fbox(mf, "MAT_Drvo", F, -0.8, 0.8, L - 1.0, L - 0.45, -0.005, 1.0)
            fbox(mf, "MAT_Mramor", F, -0.84, 0.84, L - 1.03, L - 0.42, 0.98, 1.04)
            fbox(mf, "MAT_Plastika_Tamna", F, -0.2, 0.2, L - 0.85, L - 0.6, 1.035, 1.2)
    elif k == "restoran" and W >= 1.8 and L >= 2.4:
        n = max(1, int((W - 0.6) / 1.7))
        for j in range(n):
            u = -hw + (W / n) * (j + 0.5)
            dm = L / 2
            fbox(mf, "MAT_Drvo", F, u - 0.4, u + 0.4, dm - 0.4, dm + 0.4, 0.72, 0.76)
            cyl(mf, "MAT_Metal_Okvir", fpt(F, u, dm, 0.02), fpt(F, u, dm, 0.73), 0.05, ctx.small)
            cyl(mf, "MAT_Metal_Okvir", fpt(F, u, dm, -0.005), fpt(F, u, dm, 0.03), 0.25, ctx.small * 2)
            for s_ in (-1, 1):
                d0 = dm + s_ * 0.65
                fbox(mf, dec["fab"], F, u - 0.22, u + 0.22, d0 - 0.2, d0 + 0.2, 0.44, 0.48)
                fbox(mf, dec["fab"], F, u - 0.21, u + 0.21, d0 + s_ * 0.18, d0 + s_ * 0.22, 0.46, 0.9)
                _legs(mf, "MAT_Metal_Okvir", F, u - 0.2, u + 0.2, d0 - 0.18, d0 + 0.18, 0.45, t=0.03)
    elif k != "prazno" and W >= 0.9 and L >= 1.2:
        _plant(ctx, mf, F, 0.0, L / 2 + 0.6 if L > 2.4 else L / 2, big=True)


def ring_rooms(ctx, pts, closed, Lp, zf, zc, ms, mf, mg, seed, kinds, sill, spacing, dO, p_lit=0.45,
               corner_gap=0.0, keep=None, struct_mat="MAT_Zid_Bijeli"):
    """Sobe uz obod jednog kata. pts = linija pocetka pregrada (CCW); pregrade se postavljaju po
    izmjerenoj duljini duz RAVNIH zidova (>= 2.5 m), okomito na zid, duljine Lp (do jezgre + 5 cm).
    corner_gap = slobodna zona uz kutove (sprjecava krizanje pregrada susjednih strana).
    keep(tocka) -> False izbacuje pregradu. Isti raspored u HP i LP verziji."""
    P2 = [Vector((x, y)) for x, y in pts]
    n = len(P2)
    ne = n if closed else n - 1
    dirs = [(P2[(e + 1) % n] - P2[e]).normalized() for e in range(ne)]
    runs = []
    for e in range(ne):
        if runs and (dirs[e] - dirs[runs[-1][-1]]).length < 1e-6:
            runs[-1].append(e)
        else:
            runs.append([e])
    if closed and len(runs) > 1 and (dirs[runs[0][0]] - dirs[runs[-1][-1]]).length < 1e-6:
        runs[0] = runs.pop() + runs[0]
    sacc = [0.0]
    for e in range(ne):
        sacc.append(sacc[-1] + (P2[(e + 1) % n] - P2[e]).length)
    total = sacc[-1]
    pos = []       # (s, tocka, normala, id_zida)
    for ri, run in enumerate(runs):
        A, B = P2[run[0]], P2[(run[-1] + 1) % n]
        S = (B - A).length
        if S < 2.5:
            continue
        t = (B - A) / S
        nn = Vector((t.y, -t.x))
        g0 = 0.0 if (not closed and run[0] == 0) else corner_gap
        g1 = 0.0 if (not closed and run[-1] == ne - 1) else corner_gap
        usable = S - g0 - g1
        if usable < 1.5:
            continue
        m = max(1, round(usable / spacing))
        for k in range(m + 1):
            q = A + t * (g0 + usable * k / m)
            if keep is None or keep(q):
                pos.append(((sacc[run[0]] + g0 + usable * k / m) % total if closed else sacc[run[0]] + g0 + usable * k / m,
                            q, nn, ri))
    pos.sort(key=lambda it: it[0])
    h = zc - zf
    for _, q, nn, _r in pos:
        c = V(q.x, q.y, (zf + zc) / 2) - V(nn.x, nn.y, 0) * (Lp / 2)
        obox(ms, struct_mat, c, V(-nn.y, nn.x, 0), V(nn.x, nn.y, 0), V(0, 0, 1), 0.12, Lp, h + 0.06)
    pairs = list(zip(pos[:-1], pos[1:]))
    if closed and len(pos) > 1:
        pairs.append((pos[-1], pos[0]))
    Ld = Lp - dO - 0.05
    for k, (pa, pb) in enumerate(pairs):
        dec = room_decision(f"{seed}_{k}", kinds, p_lit)
        if pa[3] == pb[3]:                       # ravna soba izmedju dvije pregrade istog zida
            a, b, nn = pa[1], pb[1], pa[2]
            U = (b - a).normalized()
            O2 = (a + b) / 2 - nn * dO
            F = room_frame(V(O2.x, O2.y, zf), V(U.x, U.y, 0), V(-nn.x, -nn.y, 0), (b - a).length - 0.12, Ld, h, sill)
            furnish(ctx, F, dec, mf, mg)
        else:                                    # kutna soba: biljka + rasvjeta
            nA, nB = pa[2], pb[2]
            na = (nA + nB)
            if na.length < 1e-6:
                continue
            na.normalize()
            ca = (pa[1] + pb[1]) / 2
            if (pb[1] - pa[1]).length < 1.0:
                continue
            F = room_frame(V(ca.x - na.x * dO, ca.y - na.y * dO, zf), V(-na.y, na.x, 0), V(-na.x, -na.y, 0),
                           1.2, Ld, h, sill)
            furnish(ctx, F, dict(dec, kind="biljka", curtain=False), mf, mg)
    return len(pairs)


def straight_cands(pts, closed=True):
    """Vrhovi na ravnim dijelovima obrisa (oba susjedna brida kolinearna) - tu smiju stajati pregrade."""
    n = len(pts)
    P2 = [Vector(p) for p in pts]
    out = []
    for i in range(n):
        if not closed and (i == 0 or i == n - 1):
            out.append(False)
            continue
        e1 = (P2[i] - P2[i - 1]).normalized()
        e2 = (P2[(i + 1) % n] - P2[i]).normalized()
        out.append(abs(e1.cross(e2)) < 1e-6 and e1.dot(e2) > 0)
    return out


# ==========================================================================
# GRADSKI BLOK - zajednicke dimenzije
# ==========================================================================
BLK_X, BLK_Y = 64.0, 46.0       # pola dimenzije bloka (128 x 92 m)
ROAD_MAIN = 6.0                  # glavna ulica:   |y| < 6
ROAD_CROSS = 5.0                 # poprecna ulica: |x| < 5
MEDIAN = 0.8                     # razdjelni otok: |y| < 0.8
PILLARS_X = (-57.0, -42.0, -27.0, -12.0, 12.0, 27.0, 42.0, 57.0)
RAIL_TOP = 14.55                 # vrh tracnica nadzemne pruge


def rz(rot):
    return Matrix.Rotation(rot, 4, "Z")


def to_block(pos, rot, local):
    """Lokalna tocka grupe (pos, rot) -> koordinate bloka."""
    return Vector(pos) + (rz(rot) @ Vector(local).to_4d()).to_3d()


# --------------------------------------------------------------------------
# TEREN, ULICE, OZNAKE
# --------------------------------------------------------------------------
def build_ground(ctx, root):
    g = empty(ctx, "Blok_Teren_Ulice", root)
    mb = MB(ctx)
    box(mb, "MAT_Asfalt", -BLK_X + 0.1, BLK_X - 0.1, -BLK_Y + 0.1, BLK_Y - 0.1, -0.5, 0.0)
    mb.obj("Kolnik_Asfalt", g)

    # cetiri parcele (plocnik + zemljiste) - jedan solid po kvadrantu, zaobljeni rubnjak na raskrizju
    for nm, sx, sy, corner in (("SI", 1, 1, 3), ("SZ", -1, 1, 0), ("JI", 1, -1, 2), ("JZ", -1, -1, 1)):
        x0, x1 = sorted((sx * ROAD_CROSS, sx * BLK_X))
        y0, y1 = sorted((sy * ROAD_MAIN, sy * BLK_Y))
        radii = [0.0] * 4
        radii[corner] = 2.5
        pl = Plan(ctx, x1 - x0, y1 - y0, tuple(radii), cx=(x0 + x1) / 2, cy=(y0 + y1) / 2)
        mb = MB(ctx)
        prism(mb, "MAT_Plocnik", pl.pts(0.0), -0.1, SW_Z)
        mb.obj(f"Plocnik_Parcela_{nm}", g, bevel=True)

    mb = MB(ctx)
    for sgn in (-1, 1):
        pl = Plan(ctx, 54.5, 2 * MEDIAN, (MEDIAN,) * 4, cx=sgn * 36.25)
        prism(mb, "MAT_Plocnik", pl.pts(0.0), -0.05, SW_Z)
    mb.obj("Razdjelni_Otok", g, bevel=True)

    # oznake na kolniku (1 cm iznad asfalta, medjusobno se ne preklapaju)
    mb = MB(ctx)
    W, Y = "MAT_Oznake_Bijele", "MAT_Oznake_Zute"
    z0, z1 = -0.01, 0.01
    mir = lambda a, b, sgn: (a, b) if sgn > 0 else (-b, -a)
    for sgn in (-1, 1):
        for yy in (3.4, -3.4):          # isprekidane linije trakova
            x = 10.0
            while x + 3.0 < 63.0:
                box(mb, W, *mir(x, x + 3.0, sgn), yy - 0.075, yy + 0.075, z0, z1)
                x += 6.0
        y = 10.6                        # sredisnja linija poprecne ulice
        while y + 3.0 < 45.5:
            box(mb, Y, -0.075, 0.075, *mir(y, y + 3.0, sgn), z0, z1)
            y += 6.0
        for k in range(11):             # zebre preko glavne ulice
            ya = -5.5 + k * 1.0
            box(mb, W, *mir(5.6, 8.6, sgn), ya, ya + 0.5, z0, z1)
        for k in range(10):             # zebre preko poprecne ulice
            xa = -4.6 + k * 0.95
            box(mb, W, xa, xa + 0.5, *mir(6.6, 9.6, sgn), z0, z1)
    box(mb, W, 9.0, 9.4, 0.9, 5.8, z0, z1)        # stop linije
    box(mb, W, -9.4, -9.0, -5.8, -0.9, z0, z1)
    box(mb, W, 0.2, 4.6, -10.1, -9.8, z0, z1)
    box(mb, W, -4.6, -0.2, 9.8, 10.1, z0, z1)
    mb.obj("Oznake_Na_Kolniku", g)

    mb = MB(ctx)
    for x, y in ((20.0, 1.8), (-30.0, -1.7), (2.0, 28.0), (-2.2, -31.0), (46.0, -4.6)):
        cyl(mb, "MAT_Metal_Okvir", V(x, y, -0.02), V(x, y, 0.012), 0.35, ctx.small * 3)
    mb.obj("Sahtovi", g)


# --------------------------------------------------------------------------
# NADZEMNA PRUGA + VLAK
# --------------------------------------------------------------------------
def build_track(ctx, root, lroot):
    det = ctx.detail
    g = empty(ctx, "Blok_Pruga", root)
    lg = empty(ctx, "Pruga_Svjetla", lroot, coll=ctx.lcoll)
    mb = MB(ctx)
    for x in PILLARS_X:
        pl = Plan(ctx, 1.4, 1.1, (0.35,) * 4, cx=x)
        prism(mb, "MAT_Beton_Svijetli", pl.pts(0.0), SW_Z - 0.05, 12.9)
        if det:
            prism(mb, "MAT_Beton_Tamni", pl.pts(0.12), SW_Z - 0.04, 0.75)
        box(mb, "MAT_Beton_Svijetli", x - 0.75, x + 0.75, -2.3, 2.3, 12.2, 13.05)
    mb.obj("Pruga_Stupovi", g, bevel=True)

    mb = MB(ctx)
    box(mb, "MAT_Beton_Svijetli", -63.5, 63.5, -1.6, 1.6, 13.0, 14.4)
    for s_ in (-1, 1):
        y0, y1 = sorted((s_ * 1.3, s_ * 1.62))
        box(mb, "MAT_Beton_Svijetli", -63.45, 63.45, y0, y1, 14.35, 14.95)
    mb.obj("Pruga_Nosac", g, bevel=True)
    mb = MB(ctx)
    for s_ in (-1, 1):
        y0, y1 = sorted((s_ * 0.68, s_ * 0.82))
        box(mb, "MAT_Metal_Pocincani", -63.4, 63.4, y0, y1, 14.36, RAIL_TOP)
    mb.obj("Pruga_Tracnice", g)
    mb = MB(ctx)
    box(mb, "PRUGA_LED_TRAKA", -63.3, 63.3, -0.5, 0.5, 12.97, 13.01)
    mb.obj("PRUGA_LED_TRAKA", lg, light=True)

    gt = empty(ctx, "Vlak", g, (0.0, 0.0, RAIL_TOP))
    lt = empty(ctx, "Vlak_Svjetla", lg, (0.0, 0.0, RAIL_TOP), coll=ctx.lcoll)
    cars = [(-29.0, "Straznji"), (-12.4, "Srednji"), (4.2, "Celni")]
    for k, (cx, nm) in enumerate(cars):
        if nm == "Celni":
            poly = [(-8, 0.25), (8, 0.25), (8, 1.3), (6.8, 3.0), (-8, 3.0)]
        elif nm == "Straznji":
            poly = [(-8, 0.25), (8, 0.25), (8, 3.0), (-6.8, 3.0), (-8, 1.3)]
        else:
            poly = [(-8, 0.25), (8, 0.25), (8, 3.0), (-8, 3.0)]
        mb = MB(ctx)
        extrude_poly(mb, "MAT_Vlak_Lak", poly, V(cx, 0, 0), V(1, 0, 0), V(0, 0, 1), V(0, 1, 0), -1.2, 1.2)
        for bx in (-5.5, 5.5):
            box(mb, "MAT_Metal_Okvir", cx + bx - 1.3, cx + bx + 1.3, -0.95, 0.95, -0.03, 0.3)
        if k < len(cars) - 1:
            box(mb, "MAT_Plastika_Tamna", cx + 7.95, cx + 8.65, -1.0, 1.0, 0.5, 2.7)
        mb.obj(f"Vlak_Vagon_{k + 1}_{nm}", gt, bevel=True)
        mb = MB(ctx)
        x0 = cx - 7.4
        x1 = cx + (6.4 if nm == "Celni" else 7.4)
        if nm == "Straznji":
            x0 = cx - 6.4
        box(mb, "VLAK_PROZORI", x0, x1, -1.215, 1.215, 1.75, 2.35)
        if nm == "Celni":
            for s_ in (-1, 1):
                y0, y1 = sorted((s_ * 0.6, s_ * 0.95))
                box(mb, "AUTO_FAR", cx + 7.97, cx + 8.02, y0, y1, 0.75, 0.95)
        mb.obj(f"VLAK_PROZORI_VAGON_{k + 1}", lt, light=True)


# --------------------------------------------------------------------------
# HK "SHOPHOUSE" KUCE (proceduralni niz)
# lokalno: fasada na y=0 gleda prema -Y, kuca ide u +Y do DEPTH
# --------------------------------------------------------------------------
GH, FHS, DEPTH = 4.2, 3.1, 12.0
RD = 3.6        # dubina soba iza fasade (do straznjeg zida sobe)
# razliciti uvuceni rubovi elemenata unutar zabatnih zidova -> nema koplanarnih lica
INS = dict(shop=0.10, head=0.105, coping=0.11, backing=0.11, housing=0.115, pier=0.12,
           ground=0.13, fascia=0.14, spandrel=0.15, atika=0.16, body=0.17, slab=0.18)


def shophouse(ctx, grow, lrow, tag, x0, w, nfl, seed):
    det = ctx.detail
    r = random.Random(seed)
    # ---- sve odluke unaprijed (identicno za HP i LP)
    fac = r.choice(FACADE_MATS)
    shop = r.choice(["rolo", "izlog", "izlog", "izlog"])
    shop_glow = r.choice(SHOP_GLOW)
    fascia_col = r.choice(NEON_COLORS)
    awning = r.random() < 0.55
    awn_mats = r.choice([("MAT_Tenda_Zuta", "MAT_Tenda_Bijela"), ("MAT_Automat_Crveni", "MAT_Tenda_Bijela"),
                         ("MAT_Fasada_Zelena", "MAT_Tenda_Bijela")])
    W_in = w - 2 * INS["spandrel"]
    k = max(1, round((W_in - 0.6) / 2.6))
    ww = min(2.4, (W_in - (k + 1) * 0.6) / k)
    p = (W_in - k * ww) / (k + 1)
    xa = x0 + INS["spandrel"]
    wins = [(xa + p + i * (ww + p), xa + p + i * (ww + p) + ww) for i in range(k)]
    piers = [(xa + i * (ww + p), xa + i * (ww + p) + p) for i in range(k + 1)]
    piers[0] = (x0 + INS["pier"], piers[0][1])
    piers[-1] = (piers[-1][0], x0 + w - INS["pier"])
    top = GH + nfl * FHS
    roof = top + 0.25
    lit = [[r.random() < 0.45 for _ in range(k)] for _ in range(nfl)]
    cage = [[r.random() < 0.3 for _ in range(k)] for _ in range(nfl)]
    ac = [[f >= 1 and not cage[f][i] and not cage[f - 1][i] and r.random() < 0.4 for i in range(k)]
          for f in range(nfl)]
    n_signs = 1 if k == 1 else r.choice([1, 2])
    signs = []
    for pi in r.sample(range(k + 1), min(n_signs, k + 1)):
        L = round(r.uniform(3.0, min(9.0, top - GH - 1.0)) * 20) / 20
        za = round((GH + 0.4 + r.uniform(0.0, max(0.0, top - GH - 1.0 - L - 0.4))) * 20) / 20 + 0.013
        signs.append((pi, za, za + L, r.choice(NEON_COLORS)))     # .013 -> nikad u ravnini ploca/parapeta
    tank = r.random() < 0.6
    tank_xy = (r.uniform(x0 + 1.3, x0 + w - 1.3), r.uniform(4.8, 6.4))
    billboard = w >= 7.0 and r.random() < 0.35
    bb_col = r.choice(SCREEN_COLORS)
    ants = [(x0 + w * f, r.uniform(2.5, 4.5)) for f in (0.25, 0.75)][:r.randint(0, 2)]
    dish = r.random() < 0.5
    roof_ac = r.randint(0, 2)

    gh = empty(ctx, tag, grow)
    lh = empty(ctx, tag + "_Svjetla", lrow, coll=ctx.lcoll)

    # ---- konstrukcija: tijelo iza soba, ploce, parapeti, stupici, atika
    mb = MB(ctx)
    box(mb, "MAT_Beton_Tamni", x0 + INS["ground"], x0 + w - INS["ground"], RD + 0.01, DEPTH - 0.02, -0.05, GH - 0.15)
    box(mb, fac, x0 + INS["body"], x0 + w - INS["body"], RD - 0.02, DEPTH, GH - 0.23, roof)
    for f in range(nfl):
        fz = GH + f * FHS
        box(mb, "MAT_Strop", x0 + INS["slab"], x0 + w - INS["slab"], 0.02, RD, fz - 0.21, fz)
        box(mb, fac, x0 + INS["spandrel"], x0 + w - INS["spandrel"], -0.05, 0.3, fz - 0.2, fz + 0.9)
        for pa, pb in piers:
            box(mb, fac, pa, pb, 0.0, 0.32, fz + 0.88, fz + FHS + 0.02)
    box(mb, "MAT_Strop", x0 + INS["slab"], x0 + w - INS["slab"], 0.02, RD + 0.015, top - 0.2, top + 0.24)
    box(mb, fac, x0 + INS["atika"], x0 + w - INS["atika"], -0.05, 1.02, top, top + 1.15)
    box(mb, "MAT_Beton_Tamni", x0 + INS["coping"], x0 + w - INS["coping"], -0.12, 1.1, top + 1.1, top + 1.22)
    box(mb, fac, x0 + INS["fascia"], x0 + w - INS["fascia"], -0.35, 0.10, 3.55, 4.25)
    mb.obj(tag + "_Konstrukcija", gh, bevel=True)

    # ---- prozori: staklo, okviri, kavezi
    gl, fr = MB(ctx), MB(ctx)
    for f in range(nfl):
        fz = GH + f * FHS
        for i, (wa, wb) in enumerate(wins):
            box(gl, "MAT_Staklo", wa - 0.02, wb + 0.02, 0.12, 0.15, fz + 0.87, fz + FHS - 0.19)
            if det:
                c = (wa + wb) / 2
                box(fr, "MAT_Metal_Okvir", c - 0.025, c + 0.025, 0.08, 0.19, fz + 0.86, fz + FHS - 0.18)
                box(fr, "MAT_Metal_Okvir", wa - 0.03, wb + 0.03, 0.075, 0.185, fz + FHS - 0.75, fz + FHS - 0.70)
            if cage[f][i] and det:
                box(fr, "MAT_Metal_Pocincani", wa + 0.03, wb - 0.03, -0.45, -0.03, fz + 0.85, fz + 0.92)
                box(fr, "MAT_Metal_Pocincani", wa + 0.03, wb - 0.03, -0.45, -0.03, fz + FHS - 0.25, fz + FHS - 0.15)
                for xx in (wa + 0.035, wb - 0.065):
                    box(fr, "MAT_Metal_Pocincani", xx, xx + 0.03, -0.455, -0.415, fz + 0.90, fz + FHS - 0.23)
                nb = max(2, round((wb - wa - 0.2) / 0.15))
                for b in range(1, nb):
                    xx = wa + 0.065 + (wb - wa - 0.13) * b / nb
                    box(fr, "MAT_Metal_Pocincani", xx - 0.01, xx + 0.01, -0.44, -0.42, fz + 0.90, fz + FHS - 0.23)
                box(fr, "MAT_Metal_Pocincani", wa + 0.03, wb - 0.03, -0.445, -0.435, fz + 1.8, fz + 1.83)
    gl.obj(tag + "_Staklo", gh)
    if det:
        fr.obj(tag + "_Okviri_Kavezi", gh)

    # ---- sobe: jedna soba iza svakog prozora (pregrade u osi unutarnjih stupica)
    walls_x = [x0 + 0.2]
    for pa, pb in piers[1:-1]:
        c = (pa + pb) / 2
        walls_x += [c - 0.06, c + 0.06]
    walls_x.append(x0 + w - 0.2)
    rooms_x = list(zip(walls_x[0::2], walls_x[1::2]))
    glow = MB(ctx)
    for f in range(nfl):
        fz = GH + f * FHS
        ceil = (fz + FHS - 0.21) if f < nfl - 1 else (top - 0.2)
        ms, mf = MB(ctx), MB(ctx)
        for pa, pb in piers[1:-1]:
            c = (pa + pb) / 2
            box(ms, "MAT_Zid_Bijeli", c - 0.06, c + 0.06, 0.29, RD - 0.005, fz - 0.03, ceil + 0.03)
        for i, (xa_, xb_) in enumerate(rooms_x):
            dec = room_decision(f"{seed}_soba_{f}_{i}", HOME_KINDS)
            dec["lit"] = lit[f][i]
            F = room_frame(V((xa_ + xb_) / 2, 0.32, fz), V(1, 0, 0), V(0, 1, 0), xb_ - xa_, RD - 0.34, ceil - fz, 0.9)
            furnish(ctx, F, dec, mf, glow, walls=True)
        if ms.bm.faces:
            ms.obj(f"{tag}_Kat_{f + 1:02d}_Pregrade", gh)
        else:
            ms.bm.free()
        mf.obj(f"{tag}_Kat_{f + 1:02d}_Interijer", gh)

    # ---- ducan u prizemlju (sa stvarnim interijerom)
    mb = MB(ctx)
    gm = MB(ctx)
    if shop == "rolo":
        box(mb, "MAT_Rolo_Vrata", x0 + INS["shop"], x0 + w - INS["shop"], 1.12, 1.24, -0.04, 3.45)
        box(mb, "MAT_Metal_Okvir", x0 + INS["housing"], x0 + w - INS["housing"], 0.98, 1.25, 3.4, 3.62)
        box(mb, "MAT_Beton_Tamni", x0 + 0.21, x0 + w - 0.21, 1.235, 1.3, -0.03, GH - 0.18)
    else:
        box(mb, "MAT_Staklo", x0 + INS["shop"], x0 + w - INS["shop"], 1.10, 1.14, -0.04, 3.5)
        box(mb, "MAT_Metal_Okvir", x0 + INS["head"], x0 + w - INS["head"], 1.07, 1.18, 3.45, 3.62)
        if det:
            nm_ = max(1, round((w - 0.3) / 1.6))
            for m in range(1, nm_):
                c = x0 + 0.15 + (w - 0.3) * m / nm_
                box(mb, "MAT_Metal_Okvir", c - 0.03, c + 0.03, 1.08, 1.16, -0.03, 3.52)
        mf = MB(ctx)
        Fs = room_frame(V(x0 + w / 2, 1.2, 0.0), V(1, 0, 0), V(0, 1, 0), w - 0.4, RD + 0.01 - 1.2, GH - 0.21)
        dec = dict(room_decision(f"{seed}_ducan", ["ducan"]), lit=True, curtain=False)
        furnish(ctx, Fs, dec, mf, gm, walls=True, curtains=False, lamp=False, floor_mat="MAT_Pod_Plocice")
        for dd in (0.3, 0.7):
            fbox(gm, shop_glow, Fs, -Fs["W"] / 2 + 0.5, Fs["W"] / 2 - 0.5, Fs["L"] * dd - 0.08, Fs["L"] * dd + 0.08,
                 Fs["H"] - 0.05, Fs["H"] + 0.01)
        mf.obj(tag + "_Ducan_Interijer", gh)
        light(ctx, "SVJETLO_IZLOG", "POINT", lh, V(x0 + w / 2, 0.3, 3.0), energy=60.0,
              color=MATERIALS[shop_glow]["e"])
    mb.obj(tag + "_Ducan", gh)
    if glow.bm.faces:
        glow.obj((tag + "_RASVJETA_SOBA").upper(), lh, light=True)
    else:
        glow.bm.free()
    # natpis iznad ducana
    box(gm, fascia_col, x0 + 0.5, x0 + w - 0.5, -0.38, -0.32, 3.68, 4.12)
    gm.obj((tag + "_NATPIS_DUCAN").upper(), lh, light=True)
    if det:
        mb = MB(ctx)
        for ua, ub, va, vb in glyph_strokes(random.Random(seed + "_f"), 3.74, 4.06, x0 + 0.65, x0 + w - 0.65,
                                            0.3, 0.12, cols=2):
            box(mb, "MAT_Plastika_Tamna", va, vb, -0.40, -0.36, ua, ub)
        mb.obj(tag + "_Natpis_Slova", gh)

    if awning:
        mb = MB(ctx)
        n_str = max(2, round((w - 0.6) / 0.35)) if det else 1
        mats = list(awn_mats) if det else [awn_mats[0]]
        A = V(x0 + 0.3, -0.20, 3.57)
        B = V(x0 + w - 0.3, -0.20, 3.57)
        stripes(mb, mats, A, B, V(0, -1.4, -0.6), n_str, 0.025)
        mb.obj(tag + "_Tenda", gh)

    # ---- vertikalni neonski natpisi (HK stil) na stupicima fasade
    for si, (pi, za, zb, col) in enumerate(signs):
        c = (piers[pi][0] + piers[pi][1]) / 2
        mb = MB(ctx)
        box(mb, "MAT_Metal_Okvir", c - 0.125, c + 0.125, -1.75, 0.25, za, zb)
        mb.obj(f"{tag}_Natpis_Okomiti_{si + 1}", gh, bevel=True)
        mb = MB(ctx)
        box(mb, col, c - 0.155, c + 0.155, -1.65, -0.10, za + 0.1, zb - 0.1)
        if det:
            for sgn in (-1, 1):
                for ua, ub, va, vb in glyph_strokes(random.Random(f"{seed}_s{si}_{sgn}"), -1.55, -0.2,
                                                    za + 0.2, zb - 0.2, 0.4, 0.1):
                    x_a, x_b = sorted((c + sgn * 0.15, c + sgn * 0.175))
                    box(mb, "NEON_BIJELI", x_a, x_b, ua, ub, va, vb)
        mb.obj(f"{tag}_NATPIS_OKOMITI_{si + 1}".upper(), lh, light=True)
        light(ctx, "SVJETLO_NATPIS", "POINT", lh, V(c, -2.3, (za + zb) / 2), energy=40.0,
              color=MATERIALS[col]["e"])

    # ---- klima uredjaji na parapetima
    acm = ac_mesh(ctx, drop=0.25)
    for f in range(nfl):
        for i, (wa, wb) in enumerate(wins):
            if ac[f][i]:
                instance(ctx, ctx.numbered(tag + "_Klima"), acm, gh,
                         V((wa + wb) / 2, -0.05, GH + f * FHS + 0.30), 0.0)

    # ---- krov
    if tank or billboard or ants or roof_ac:
        mb = MB(ctx)
        if tank:
            tx, ty = tank_xy
            cyl(mb, "MAT_Metal_Pocincani", V(tx, ty, roof - 0.02), V(tx, ty, roof + 1.6), 0.9, ctx.small * 3)
            cyl(mb, "MAT_Metal_Okvir", V(tx, ty, roof + 1.58), V(tx, ty, roof + 1.66), 0.95, ctx.small * 3)
        for ax, h in ants:
            cyl(mb, "MAT_Metal_Okvir", V(ax, 10.8, roof - 0.02), V(ax, 10.8, roof + h), 0.04, ctx.small)
            cyl(mb, "MAT_Metal_Okvir", V(ax - 0.5, 10.8, roof + h * 0.75), V(ax + 0.5, 10.8, roof + h * 0.75),
                0.015, ctx.small)
        if billboard:
            for lx in (x0 + 1.0, x0 + w - 1.0):
                sq_tube(mb, "MAT_Metal_Okvir", [V(lx, 3.3, roof - 0.02), V(lx, 3.3, roof + 6.0)], 0.06)
            box(mb, "MAT_Metal_Okvir", x0 + 0.6, x0 + w - 0.6, 2.9, 3.15, roof + 2.0, roof + 5.8)
        mb.obj(tag + "_Krov_Oprema", gh, smooth=60)
        if billboard:
            mb = MB(ctx)
            box(mb, bb_col, x0 + 0.7, x0 + w - 0.7, 2.85, 2.93, roof + 2.1, roof + 5.7)
            mb.obj(tag + "_REKLAMA_KROV", lh, light=True)
            light(ctx, "SVJETLO_REKLAMA_KROV", "AREA", lh, V(x0 + w / 2, 1.6, roof + 3.9), V(0, -1, 0), 120.0,
                  MATERIALS[bb_col]["e"], (w - 1.4, 3.6))
    for j in range(roof_ac):
        instance(ctx, ctx.numbered(tag + "_Klima_Krov"), ac_mesh(ctx), gh,
                 V(x0 + w * (0.3 + 0.4 * j), 8.6, roof - 0.01), 0.0)
    if dish:
        instance(ctx, ctx.numbered(tag + "_Satelitska"), dish_mesh(ctx), gh, V(x0 + w * 0.5, 1.02, top + 0.55), pi)
    return top + 1.22


def shop_row(ctx, g_parent, lg_parent, tag, origin, rot, length, seed):
    """Niz kuca duz lokalne osi X (fasade prema lokalnom -Y). Vraca tocke za kabele."""
    r = random.Random(seed)
    n = max(1, round(length / 7.6))
    ws = [r.uniform(0.85, 1.15) for _ in range(n)]
    sc = length / sum(ws)
    ws = [w_ * sc for w_ in ws]
    floors, prev = [], None
    for _ in range(n):
        f = r.randint(4, 9)
        while prev is not None and f == prev:
            f = r.randint(4, 9)
        floors.append(f)
        prev = f
    g = empty(ctx, f"Niz_Kuca_{tag}", g_parent, origin, rot=rot)
    lg = empty(ctx, f"Niz_Kuca_{tag}_Svjetla", lg_parent, origin, coll=ctx.lcoll, rot=rot)
    xs, x, tops = [0.0], 0.0, []
    for i, (w_, f) in enumerate(zip(ws, floors)):
        tops.append(shophouse(ctx, g, lg, f"Kuca_{tag}_{i + 1:02d}", x, w_, f, f"{seed}_{i}"))
        x += w_
        xs.append(x)
    mb = MB(ctx)
    anchors = []
    for j, b in enumerate(xs):
        H = max(tops[i] for i in (j - 1, j) if 0 <= i < n) + 0.35
        box(mb, "MAT_Beton_Svijetli", b - 0.2, b + 0.2, -0.25, DEPTH + 0.1, -0.06, H)
        anchors.append(to_block(origin, rot, (b, -0.25, 0.0)))
    mb.obj(f"Niz_Kuca_{tag}_Zabatni_Zidovi", g, bevel=True)
    return anchors


# --------------------------------------------------------------------------
# MEGATORANJ (Heijin stil)
# --------------------------------------------------------------------------
def build_megatower(ctx, root, lroot, pos, rot=0.0):
    det = ctx.detail
    M = empty(ctx, "Megatoranj", root, pos, rot=rot)
    L = empty(ctx, "Megatoranj_Svjetla", lroot, pos, coll=ctx.lcoll, rot=rot)
    g_pod = empty(ctx, "MT_Podij", M)
    g_tor = empty(ctx, "MT_Toranj", M)
    g_kr = empty(ctx, "MT_Krov", M)
    g_rk = empty(ctx, "MT_Reklame", M)

    PP = Plan(ctx, 34.0, 28.0, (3.0, 0.0, 0.0, 3.0))
    mb = MB(ctx)
    ring(mb, "MAT_Staklo", PP.pts(-1.0), PP.pts(-1.03), -0.06, 4.55)
    mb.obj("MT_Podij_Izlozi_Staklo", g_pod)
    # predvorje: mramorna jezgra, recepcija, biljke, stropna rasvjeta, ekran
    mb, mf, mg = MB(ctx), MB(ctx), MB(ctx)
    prism(mb, "MAT_Mramor", Plan(ctx, 20.0, 14.0, (0.5, 0.0, 0.0, 0.5)).pts(0.0), -0.05, 4.55)
    mb.obj("MT_Predvorje_Jezgra", g_pod)
    box(mf, "MAT_Drvo", -3.0, 3.0, -8.4, -7.6, -0.01, 1.05)
    box(mf, "MAT_Mramor", -3.05, 3.05, -8.45, -7.55, 1.03, 1.09)
    F0 = room_frame(V(0, 0, 0), V(1, 0, 0), V(0, 1, 0), 30.0, 25.0, 4.5)
    for x, y in ((-6.0, -9.5), (6.0, -9.5), (-12.0, -9.0), (12.0, -9.0), (-14.0, 4.0), (14.0, 4.0)):
        _plant(ctx, mf, F0, x, y, big=True)
    mf.obj("MT_Predvorje_Namjestaj", g_pod)
    for gx in range(-5, 6):
        for gy in range(-4, 5):
            x, y = gx * 3.0, gy * 3.0
            if abs(x) > 14.4 or abs(y) > 11.4 or (abs(x) < 10.8 and abs(y) < 7.8):
                continue
            if abs(x) > 11.5 and y < -9.0:
                continue
            box(mg, "IZLOG_HLADNO", x - 0.6, x + 0.6, y - 0.3, y + 0.3, 4.46, 4.52)
    box(mg, "EKRAN_REKLAMA_PLAVI", -4.0, 4.0, -7.03, -6.97, 1.6, 4.0)
    mg.obj("MT_PREDVORJE_RASVJETA", L, light=True)
    loop = PP.pts(-0.45)
    loop_c = loop + [loop[0]]
    LL = path_len(loop_c)
    nc = round(LL / 4.5)
    mb = MB(ctx)
    for k in range(nc):
        p_, t_ = sample(loop_c, LL * k / nc)
        n2 = V(t_.y, -t_.x, 0)
        obox(mb, "MAT_Beton_Tamni", V(p_.x, p_.y, 2.27), V(t_.x, t_.y, 0), n2, V(0, 0, 1), 0.6, 0.6, 4.64)
    mb.obj("MT_Podij_Stupovi", g_pod, bevel=True)
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Tamni", PP.pts(0.0), 4.5, 14.0)
    mb.obj("MT_Podij_Volumen", g_pod, bevel=True)
    mb = MB(ctx)
    ring(mb, "MAT_Metal_Zlatni", PP.pts(0.06), PP.pts(-0.1), 4.45, 4.7)
    ring(mb, "MAT_Metal_Zlatni", PP.pts(0.06), PP.pts(-0.1), 13.5, 13.8)
    ring(mb, "MAT_Beton_Tamni", PP.pts(0.02), PP.pts(-0.3), 13.95, 15.0)
    mb.obj("MT_Podij_Zlatni_Vijenci_Atika", g_pod, bevel=True)

    # LED ekrani podija (prednja strana y=-14, istocna x=+17)
    screens = [(-12.0, -4.0, "EKRAN_REKLAMA_ROZI"), (-2.5, 6.0, "EKRAN_REKLAMA_PLAVI"),
               (7.5, 12.5, "EKRAN_REKLAMA_LJUBICASTI")]
    mf, mg = MB(ctx), MB(ctx)
    for xa_, xb_, col in screens:
        box(mf, "MAT_Metal_Okvir", xa_, xb_, -14.35, -13.95, 6.0, 12.0)
        box(mg, col, xa_ + 0.1, xb_ - 0.1, -14.4, -14.32, 6.1, 11.9)
        light(ctx, "SVJETLO_EKRAN_PODIJ", "AREA", L, V((xa_ + xb_) / 2, -15.2, 9.0), V(0, -1, 0), 150.0,
              MATERIALS[col]["e"], (xb_ - xa_, 5.8))
    box(mf, "MAT_Metal_Okvir", 16.95, 17.35, -8.0, 2.0, 6.0, 12.0)
    box(mg, "EKRAN_REKLAMA_NARANCASTI", 17.32, 17.4, -7.9, 1.9, 6.1, 11.9)
    mf.obj("MT_Ekrani_Podij_Okviri", g_rk, bevel=True)
    mg.obj("MT_EKRANI_PODIJ", L, light=True)

    # ---- toranj
    TP = Plan(ctx, 18.0, 18.0, (2.0,) * 4, cy=2.0, arc=1)
    Z0, ZT = 13.9, 92.0
    mb = MB(ctx)
    ring(mb, "MAT_Staklo_Tamno", TP.pts(0.0), TP.pts(-0.03), Z0, ZT)
    mb.obj("MT_Toranj_Staklena_Fasada", g_tor)
    MFH, MNF = 3.9, 20
    mb = MB(ctx)
    for k in range(MNF):
        fz = 14.0 + MFH * k
        prism(mb, "MAT_Beton_Tamni", TP.pts(-0.025), fz - 0.15, fz + 0.05, cap_mat="MAT_Strop", top_mat="MAT_Pod_Parket")
    prism(mb, "MAT_Beton_Tamni", TP.pts(-0.02), 14.0 + MFH * MNF - 0.15, ZT + 0.05)
    mb.obj("MT_Toranj_Ploce_Katova", g_tor)
    mb = MB(ctx)
    prism(mb, "MAT_Zid_Bijeli", Plan(ctx, 8.0, 8.0, (0.5,) * 4, cy=2.0, arc=1).pts(0.0), Z0, 14.0 + MFH * MNF - 0.13)
    mb.obj("MT_Toranj_Jezgra", g_tor)
    rp = TP.pts(-0.06)
    glow = MB(ctx)
    g_kat = empty(ctx, "MT_Uredi_Katovi", g_tor)
    for k in range(MNF):
        fz = 14.0 + MFH * k
        ms, mf = MB(ctx), MB(ctx)
        ring_rooms(ctx, rp, True, 5.0 - 0.06 + 0.05, fz + 0.05, fz + MFH - 0.15, ms, mf, glow, f"MT_kat{k}",
                   OFFICE_KINDS, 0.0, 3.0, 0.02, p_lit=0.55, corner_gap=5.2)
        ms.obj(f"MT_Kat_{k + 1:02d}_Pregrade", g_kat)
        mf.obj(f"MT_Kat_{k + 1:02d}_Interijer", g_kat)
    glow.obj("MT_RASVJETA_UREDA", L, light=True)
    bands = [14.2 + 12.0 * k for k in range(7)]
    mb = MB(ctx)
    for zb in bands:
        ring(mb, "MAT_Metal_Okvir", TP.pts(0.3), TP.pts(-0.05), zb, zb + 0.6)
    mb.obj("MT_Toranj_Pojasevi", g_tor, bevel=True)
    if det:
        mb = MB(ctx)
        pts, fl = TP.pts(0.0, flags=True)
        nrm = path_normals(pts, closed=True)
        for (x, y), n2 in zip(pts, nrm):
            obox(mb, "MAT_Metal_Okvir", V(x, y, (Z0 + 0.05 + ZT - 0.05) / 2) + V(n2.x, n2.y, 0) * 0.17,
                 V(-n2.y, n2.x, 0), V(n2.x, n2.y, 0), V(0, 0, 1), 0.08, 0.35, ZT - Z0 - 0.1)
        mb.obj("MT_Toranj_Vertikalna_Rebra", g_tor)
    # zlatne letve na kosim kutovima
    mb = MB(ctx)
    for (cx, cy), a in (((8.0, -6.0), -45), ((8.0, 10.0), 45), ((-8.0, 10.0), 135), ((-8.0, -6.0), 225)):
        n2 = V(cos(radians(a)), sin(radians(a)), 0)
        obox(mb, "MAT_Metal_Zlatni", V(cx, cy, (Z0 + ZT) / 2) + n2 * 0.1, V(-n2.y, n2.x, 0), n2, V(0, 0, 1),
             1.0, 0.3, ZT - Z0 - 0.1)
    mb.obj("MT_Toranj_Zlatne_Letve", g_tor)
    # mega X ukrute na prednjoj strani (y = -7); krajevi ulaze u pojaseve
    mb = MB(ctx)
    for z_a, z_b in ((bands[0] + 0.5, bands[2] + 0.1), (bands[2] + 0.5, bands[4] + 0.1), (bands[4] + 0.5, bands[6] + 0.1)):
        for a, b in ((-6.6, 6.6), (6.6, -6.6)):
            yb = -7.25 if a < 0 else -7.28     # dijagonale u razlicitim ravninama
            sq_tube(mb, "MAT_Metal_Zlatni", [V(a, yb, z_a), V(b, yb, z_b)], 0.22)
    mb.obj("MT_Toranj_X_Ukrute", g_tor)
    # vertikalne LED reklame (istocna strana x = 9) i logo (prednja strana, iznad ukruta)
    mf, mg = MB(ctx), MB(ctx)
    box(mf, "MAT_Metal_Okvir", 9.25, 9.75, -2.0, 6.0, 27.0, 49.0)
    box(mg, "EKRAN_REKLAMA_ROZI", 9.72, 9.82, -1.9, 5.9, 27.1, 48.9)
    box(mf, "MAT_Metal_Okvir", 9.25, 9.75, -2.0, 6.0, 55.0, 80.0)
    box(mg, "EKRAN_REKLAMA_PLAVI", 9.72, 9.82, -1.9, 5.9, 55.1, 79.9)
    box(mf, "MAT_Metal_Okvir", -4.0, 4.0, -7.7, -7.3, 87.2, 91.5)
    box(mg, "NEON_CIJAN", -3.5, -2.5, -7.78, -7.66, 87.6, 91.1)
    box(mg, "NEON_CIJAN", 2.5, 3.5, -7.78, -7.66, 87.6, 91.1)
    box(mg, "NEON_CIJAN", -2.55, 2.55, -7.77, -7.67, 89.0, 89.6)
    mf.obj("MT_Toranj_Reklame_Okviri", g_rk, bevel=True)
    mg.obj("MT_TORANJ_REKLAME_LOGO", L, light=True)
    light(ctx, "SVJETLO_EKRAN_TORANJ", "AREA", L, V(11.0, 2.0, 38.0), V(1, 0, 0), 300.0,
          MATERIALS["EKRAN_REKLAMA_ROZI"]["e"], (21.8, 7.8))
    light(ctx, "SVJETLO_EKRAN_TORANJ", "AREA", L, V(11.0, 2.0, 67.5), V(1, 0, 0), 300.0,
          MATERIALS["EKRAN_REKLAMA_PLAVI"]["e"], (24.8, 7.8))

    # ---- kruna, heliodrom, antena
    mb = MB(ctx)
    prism(mb, "MAT_Metal_Okvir", TP.pts(-1.2), ZT - 0.1, 97.0)
    ring(mb, "MAT_Metal_Zlatni", TP.pts(-1.1), TP.pts(-1.6), 96.6, 97.1)
    mb.obj("MT_Kruna", g_kr, bevel=True)
    mb = MB(ctx)
    cyl(mb, "MAT_Beton_Tamni", V(0, 2, 96.95), V(0, 2, 97.45), 5.5, ctx.small * 6)
    box(mb, "MAT_Oznake_Bijele", -1.4, -1.0, 0.0, 4.0, 97.4, 97.47)
    box(mb, "MAT_Oznake_Bijele", 1.0, 1.4, 0.0, 4.0, 97.4, 97.47)
    box(mb, "MAT_Oznake_Bijele", -1.05, 1.05, 1.8, 2.2, 97.41, 97.46)
    sweep(mb, "MAT_Oznake_Zute", circle_path(V(0, 2, 97.45), V(1, 0, 0), V(0, 1, 0), 4.5, ctx.small * 8), 0.06,
          ctx.small, closed=True)
    box(mb, "MAT_Metal_Okvir", 5.6, 6.8, 7.6, 8.8, 96.98, 97.8)
    cyl(mb, "MAT_Metal_Okvir", V(6.2, 8.2, 97.7), V(6.2, 8.2, 118.0), 0.35, ctx.small * 2)
    cyl(mb, "MAT_Metal_Okvir", V(6.2, 8.2, 117.9), V(6.2, 8.2, 124.0), 0.12, ctx.small)
    mb.obj("MT_Heliodrom_Antena", g_kr, bevel=False, smooth=60)
    mb = MB(ctx)
    for k in range(12):
        a = 2 * pi * k / 12
        x, y = 5.3 * cos(a), 2 + 5.3 * sin(a)
        cyl(mb, "HELIODROM_SVJETLA", V(x, y, 97.4), V(x, y, 97.56), 0.08, ctx.small)
    lathe(mb, "SIGNAL_CRVENI", [(0, 124.25), (0.12, 124.15), (0.18, 124.0), (0.12, 123.88), (0, 123.85)],
          ctx.small * 2, Matrix.Translation(V(6.2, 8.2, 0)))
    mb.obj("MT_HELIODROM_SIGNAL", L, light=True)
    light(ctx, "SVJETLO_SIGNAL_ANTENA", "POINT", L, V(6.2, 8.2, 124.6), energy=20.0, color=(1.0, 0.05, 0.02))
    light(ctx, "SVJETLO_HELIODROM", "AREA", L, V(0.0, 2.0, 104.0), V(0, 0, -1), 300.0, (1.0, 0.9, 0.7), (8.0, 8.0))

    # krovni vrt na podiju
    tm = tree_meshes(ctx)
    for x in (-12.0, -4.0, 4.0, 12.0):
        put_asset(ctx, "Drvo_Zardinjera", tm, g_pod, L, V(x, -10.5, 14.0 - 0.02), 0.0, name="MT_Krovni_Vrt_Drvo")


# --------------------------------------------------------------------------
# POZADINSKI TORNJEVI (skyline)
# --------------------------------------------------------------------------
def filler_tower(ctx, g_parent, lg_parent, tag, pos, rot, w, d, H, seed):
    det = ctx.detail
    r = random.Random(seed)
    style = r.choice(["Trake", "Zavjesa"])
    corner = r.choice(["oblo", "rez", "ostro"])
    rr = {"oblo": round(min(w, d) * 0.22, 2), "rez": 1.5, "ostro": 0.0}[corner]
    interior = r.choice(["INTERIJER_TOPLO", "INTERIJER_HLADNI", "MAT_Interijer"])
    fac = r.choice(["MAT_Beton_Svijetli", "MAT_Fasada_Siva", "MAT_Beton_Tamni", "MAT_Fasada_Bez"])
    screen = r.random() < 0.6
    scol = r.choice(SCREEN_COLORS)
    vneon = r.random() < 0.5
    ncol = r.choice(NEON_COLORS)
    roof_bb = r.random() < 0.5
    bbcol = r.choice(SCREEN_COLORS)
    FHT = 3.4
    n = int((H - 5.0) / FHT)
    lit_floors = [r.random() < 0.35 for _ in range(n)]

    P = Plan(ctx, w, d, (rr,) * 4, arc=1 if corner == "rez" else None, pane=1.2)
    G = empty(ctx, tag, g_parent, pos, rot=rot)
    L = empty(ctx, tag + "_Svjetla", lg_parent, pos, coll=ctx.lcoll, rot=rot)
    ztop = 5.0 + n * FHT
    mb = MB(ctx)
    prism(mb, "MAT_Beton_Tamni", P.pts(0.3), 3.55, 5.0)
    mb.obj(tag + "_Podnozje", G, bevel=True)
    mb = MB(ctx)
    ring(mb, "MAT_Staklo", P.pts(-0.2), P.pts(-0.23), -0.06, 3.6)
    mb.obj(tag + "_Prizemlje_Staklo", G)

    # ---- jezgra zgrade (straznji zid svih soba) i sobe po katovima
    TRD = 4.0
    CP = Plan(ctx, w - 2 * TRD, d - 2 * TRD, ((0.5,) * 4) if rr > 0 else (0.0,) * 4,
              arc=1 if corner == "rez" else None)
    mb = MB(ctx)
    prism(mb, "MAT_Zid_Bijeli", CP.pts(0.0), -0.05, ztop + 0.045)
    mb.obj(tag + "_Jezgra", G)
    glow = MB(ctx)
    kinds = OFFICE_KINDS if r.random() < 0.5 else HOME_KINDS
    gp = P.pts(-0.26)
    ms, mf = MB(ctx), MB(ctx)
    ring_rooms(ctx, gp, True, TRD - 0.26 + 0.05, 0.0, 3.55, ms, mf, glow, f"{seed}_prizemlje",
               ["ducan", "restoran", "ducan"], 0.0, 4.5, 0.03, p_lit=0.9, corner_gap=TRD + 0.2)
    ms.obj(tag + "_Prizemlje_Pregrade", G)
    mf.obj(tag + "_Prizemlje_Interijer", G)

    face_out = 0.0
    if style == "Trake":
        bands, gl, fr = MB(ctx), MB(ctx), MB(ctx)
        outer, flags = P.pts(-0.3, flags=True)
        nrm = path_normals(outer, closed=True)
        for f in range(n):
            fz = 5.0 + f * FHT
            ring(bands, fac, P.pts(0.0), P.pts(-0.4), fz - 0.05, fz + 1.0)
            prism(bands, fac, P.pts(-0.38), fz - 0.06, fz + 0.2, cap_mat="MAT_Strop", top_mat="MAT_Pod_Parket")
            ring(gl, "MAT_Staklo", outer, P.pts(-0.33), fz + 0.95, fz + FHT + 0.05)
            if det:
                for (x, y), fl_, n2 in zip(outer, flags, nrm):
                    if fl_:
                        obox(fr, "MAT_Metal_Okvir", V(x, y, fz + 0.95 + (FHT - 0.9) / 2) + V(n2.x, n2.y, 0) * 0.02,
                             V(-n2.y, n2.x, 0), V(n2.x, n2.y, 0), V(0, 0, 1), 0.06, 0.09, FHT - 0.92)
        bands.obj(tag + "_Parapeti_Ploce", G, bevel=True)
        gl.obj(tag + "_Staklo", G)
        if det:
            fr.obj(tag + "_Okviri_Prozora", G)
        rp, dO, sill, zoff, ceil_off = P.pts(-0.36), 0.04, 0.8, 0.2, -0.06
    else:
        face_out = 0.3
        mb = MB(ctx)
        ring(mb, "MAT_Staklo_Tamno", P.pts(0.0), P.pts(-0.03), 4.95, ztop + 0.05)
        mb.obj(tag + "_Staklena_Fasada", G)
        mb = MB(ctx)
        for f in range(n):
            fz = 5.0 + f * FHT
            prism(mb, "MAT_Beton_Tamni", P.pts(-0.025), fz - 0.15, fz + 0.05, cap_mat="MAT_Strop",
                  top_mat="MAT_Pod_Parket")
        mb.obj(tag + "_Ploce_Katova", G)
        mb = MB(ctx)
        for f in range(0, n, 3):
            zf = 5.0 + f * FHT
            ring(mb, "MAT_Metal_Okvir", P.pts(0.15), P.pts(-0.05), zf + 0.3, zf + 0.7)
        if det:
            pts, flags = P.pts(0.0, flags=True)
            nrm = path_normals(pts, closed=True)
            for (x, y), fl_, n2 in zip(pts, flags, nrm):
                if fl_:
                    obox(mb, "MAT_Metal_Okvir", V(x, y, (4.98 + ztop + 0.02) / 2) + V(n2.x, n2.y, 0) * 0.15,
                         V(-n2.y, n2.x, 0), V(n2.x, n2.y, 0), V(0, 0, 1), 0.08, 0.34, ztop - 4.96)
        mb.obj(tag + "_Okvir_Rebra", G)
        rp, dO, sill, zoff, ceil_off = P.pts(-0.06), 0.02, 0.0, 0.05, -0.15
    Lp = TRD - (0.36 if style == "Trake" else 0.06) + 0.05
    for f in range(n):
        fz = 5.0 + f * FHT
        zc = (fz + FHT + ceil_off) if f < n - 1 else ztop
        ms, mf = MB(ctx), MB(ctx)
        ring_rooms(ctx, rp, True, Lp, fz + zoff, zc, ms, mf, glow, f"{seed}_kat{f}", kinds, sill, 3.6, dO,
                   corner_gap=TRD + 0.2)
        ms.obj(f"{tag}_Kat_{f + 1:02d}_Pregrade", G)
        mf.obj(f"{tag}_Kat_{f + 1:02d}_Interijer", G)
    glow.obj((tag + "_RASVJETA_SOBA").upper(), L, light=True)

    mb = MB(ctx)
    prism(mb, fac, P.pts(0.05), ztop, ztop + 1.4)
    box(mb, "MAT_Metal_Pocincani", -w * 0.2, w * 0.2, d * 0.1, d * 0.35, ztop + 1.38, ztop + 3.5)
    cyl(mb, "MAT_Metal_Okvir", V(w * 0.3, d * 0.25, ztop + 1.38), V(w * 0.3, d * 0.25, ztop + 9.0), 0.08, ctx.small)
    if roof_bb:
        y0 = -d / 2 + 1.2
        for lx in (-w * 0.3, w * 0.3):
            sq_tube(mb, "MAT_Metal_Okvir", [V(lx, y0 + 0.125, ztop + 1.38), V(lx, y0 + 0.125, ztop + 7.6)], 0.08)
        box(mb, "MAT_Metal_Okvir", -w * 0.35, w * 0.35, y0, y0 + 0.25, ztop + 3.0, ztop + 7.4)
    mb.obj(tag + "_Krov", G, bevel=True)

    mg = MB(ctx)
    mf = MB(ctx)
    yF = -d / 2 - face_out
    if screen:
        sx = (w / 2 - rr - 0.5) * 0.7
        za, zb = 10.0, min(ztop - 2.0, 25.0)
        box(mf, "MAT_Metal_Okvir", -sx, sx, yF - 0.3, yF + 0.05, za, zb)
        box(mg, scol, -sx + 0.1, sx - 0.1, yF - 0.36, yF - 0.28, za + 0.1, zb - 0.1)
        light(ctx, "SVJETLO_EKRAN_TORANJ", "AREA", L, V(0, yF - 1.2, (za + zb) / 2), V(0, -1, 0), 150.0,
              MATERIALS[scol]["e"], (2 * sx, zb - za))
    if vneon:
        xa_ = -w / 2 + rr + 0.4
        box(mg, ncol, xa_, xa_ + 0.3, -d / 2 - 0.12, -d / 2 + 0.04, 5.98, ztop - 1.0)
    if roof_bb:
        y0 = -d / 2 + 1.2
        box(mg, bbcol, -w * 0.35 + 0.1, w * 0.35 - 0.1, y0 - 0.05, y0 + 0.03, ztop + 3.1, ztop + 7.3)
    if mf.bm.faces:
        mf.obj(tag + "_Reklama_Okvir", G, bevel=True)
    else:
        mf.bm.free()
    if mg.bm.faces:
        mg.obj((tag + "_NEON_REKLAME").upper(), L, light=True)
    else:
        mg.bm.free()
    light(ctx, "SVJETLO_SIGNAL_ANTENA", "POINT", L, V(w * 0.3, d * 0.25, ztop + 9.3), energy=8.0, color=(1, 0.05, 0.02))


# --------------------------------------------------------------------------
# INVENTAR (dijeljeni meshevi = instance): model + emisivni dio + svjetla
# --------------------------------------------------------------------------
def _asset(ctx, key, build):
    if key not in ctx.assets:
        ctx.assets[key] = build()
    return ctx.assets[key]


def _finish_asset(ctx, name, mb, gm=None, lights=(), bevel=True, smooth=SMOOTH_ANGLE):
    me, _ = mb.to_mesh(ctx.name(name + "_MESH"), bevel=bevel, pivot=None, smooth=smooth)
    ge = None
    if gm is not None:
        ge, _ = gm.to_mesh(ctx.name(name.upper() + "_SVJETLO_MESH"), pivot=None)
    return dict(name=name, model=me, glow=ge, lights=list(lights))


OCC_R = dict(lamp=0.35, traffic=0.3, bench=1.05, vend=0.8, bin=0.35, bollard=0.2, tree=1.6, stall=2.1,
             dumpster=1.1, ulicno_drvo=0.75, hydrant=0.3, stanica=2.2)


def put_asset(ctx, kind, asset, g, lg, loc, rot, name=None):
    if kind in OCC_R:
        ctx.__dict__.setdefault("occupied", []).append((loc.x, loc.y, OCC_R[kind]))
    nm = name or asset["name"]
    instance(ctx, ctx.numbered(nm), asset["model"], g, loc, rot)
    if asset["glow"] is not None:
        instance(ctx, ctx.numbered(nm.upper() + "_SVJETLO"), asset["glow"], lg, loc, rot, light=True)
    for lname, kind_, lloc, ldir, energy, col, size in asset["lights"]:
        light(ctx, lname, kind_, lg, to_block(loc, rot, lloc), (rz(rot).to_3x3() @ Vector(ldir)), energy, col,
              size, spot_deg=110.0)


def lamp_asset(ctx):
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        box(mb, "MAT_Metal_Okvir", -0.2, 0.2, -0.2, 0.2, -0.03, 0.5)
        cyl(mb, "MAT_Metal_Okvir", V(0, 0, 0.45), V(0, 0, 8.0), 0.09, ctx.small * 2)
        sq_tube(mb, "MAT_Metal_Okvir", fillet([V(0, 0, 7.6), V(0, 0, 8.05), V(1.75, 0, 8.05)], 0.3, 4 if det else 1),
                0.05)
        box(mb, "MAT_Metal_Okvir", 1.35, 2.05, -0.17, 0.17, 7.9, 8.14)
        if det:
            cyl(mb, "MAT_Metal_Okvir", V(0, 0, 2.5), V(0, 0, 2.6), 0.12, ctx.small * 2)
        box(gm, "LAMPA_ULICNA", 1.42, 1.98, -0.13, 0.13, 7.87, 7.92)
        return _finish_asset(ctx, "Ulicna_Svjetiljka", mb, gm,
                             [("SVJETLO_ULICNA_LAMPA", "SPOT", V(1.7, 0, 7.84), V(0, 0, -1), 700.0,
                               (1.0, 0.82, 0.6), (0.5, 0.5))])
    return _asset(ctx, "lamp", build)


def traffic_asset(ctx):
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        box(mb, "MAT_Metal_Okvir", -0.18, 0.18, -0.18, 0.18, -0.03, 0.25)
        cyl(mb, "MAT_Metal_Okvir", V(0, 0, 0.2), V(0, 0, 6.2), 0.11, ctx.small * 2)
        sq_tube(mb, "MAT_Metal_Okvir", [V(0, 0, 5.95), V(4.6, 0, 5.95)], 0.06)
        obox(mb, "MAT_Plastika_Tamna", V(4.3, 0, 5.385), V(1, 0, 0), V(0, 1, 0), V(0, 0, 1), 0.36, 0.3, 1.05)
        for zc, m in ((5.715, "SEMAFOR_CRVENA"), (5.385, "SEMAFOR_ZUTA"), (5.055, "SEMAFOR_ZELENA")):
            cyl(gm, m, V(4.3, 0.13, zc), V(4.3, 0.19, zc), 0.1, ctx.small * 2)
            if det:
                box(mb, "MAT_Plastika_Tamna", 4.17, 4.43, 0.14, 0.34, zc + 0.11, zc + 0.13)
        if det:
            box(mb, "MAT_Oznake_Zute", -0.07, 0.07, 0.08, 0.2, 1.0, 1.25)
        return _finish_asset(ctx, "Semafor", mb, gm,
                             [("SVJETLO_SEMAFOR", "POINT", V(4.3, 0.4, 5.715), V(0, 0, -1), 3.0, (1, 0.05, 0.02),
                               (0.1, 0.1))])
    return _asset(ctx, "traffic", build)


def vending_asset(ctx, variant):
    body, head, panel = {"A": ("MAT_Automat_Crveni", "NEON_CIJAN", "IZLOG_HLADNO"),
                         "B": ("MAT_Automat_Bijeli", "NEON_ROZI", "IZLOG_TOPLO")}[variant]

    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        box(mb, body, -0.55, 0.55, -0.4, 0.4, -0.03, 1.85)
        if det:
            box(mb, "MAT_Plastika_Tamna", -0.45, 0.2, -0.46, -0.38, 0.15, 0.45)
            box(mb, "MAT_Plastika_Tamna", 0.27, 0.5, -0.44, -0.38, 0.9, 1.4)
        box(gm, panel, -0.5, 0.22, -0.43, -0.38, 0.62, 1.75)
        box(gm, head, -0.5, 0.5, -0.43, -0.38, 1.78, 1.83)
        return _finish_asset(ctx, f"Automat_{variant}", mb, gm)
    return _asset(ctx, "vend" + variant, build)


def bench_asset(ctx):
    def build():
        det = ctx.detail
        mb = MB(ctx)
        for x in (-0.8, 0.8):
            box(mb, "MAT_Metal_Okvir", x - 0.04, x + 0.04, -0.25, 0.25, -0.03, 0.45)
            box(mb, "MAT_Metal_Okvir", x - 0.045, x + 0.045, 0.2, 0.26, 0.43, 0.95)
        if det:
            for k in range(4):
                y0 = -0.22 + k * 0.117
                box(mb, "MAT_Drvo", -0.95, 0.95, y0, y0 + 0.09, 0.42, 0.47)
            for z in (0.6, 0.78):
                box(mb, "MAT_Drvo", -0.95, 0.95, 0.205, 0.255, z, z + 0.08)
        else:
            box(mb, "MAT_Drvo", -0.95, 0.95, -0.22, 0.22, 0.42, 0.47)
            box(mb, "MAT_Drvo", -0.95, 0.95, 0.205, 0.255, 0.6, 0.86)
        return _finish_asset(ctx, "Klupa", mb)
    return _asset(ctx, "bench", build)


def bin_asset(ctx):
    def build():
        mb = MB(ctx)
        cyl(mb, "MAT_Metal_Zeleni", V(0, 0, -0.03), V(0, 0, 0.9), 0.28, ctx.small * 3)
        cyl(mb, "MAT_Plastika_Tamna", V(0, 0, 0.88), V(0, 0, 0.95), 0.3, ctx.small * 3)
        return _finish_asset(ctx, "Kanta_Za_Smece", mb, bevel=False, smooth=60)
    return _asset(ctx, "bin", build)


def bollard_asset(ctx):
    def build():
        mb = MB(ctx)
        cyl(mb, "MAT_Metal_Okvir", V(0, 0, -0.03), V(0, 0, 0.9), 0.11, ctx.small * 2)
        lathe(mb, "MAT_Metal_Okvir", [(0, 0.98), (0.08, 0.965), (0.12, 0.92), (0.12, 0.86), (0, 0.86)],
              ctx.small * 2, Matrix())
        if ctx.detail:
            cyl(mb, "MAT_Oznake_Zute", V(0, 0, 0.6), V(0, 0, 0.66), 0.115, ctx.small * 2)
        return _finish_asset(ctx, "Stupic", mb, bevel=False, smooth=60)
    return _asset(ctx, "bollard", build)


def tree_meshes(ctx):
    def build():
        det = ctx.detail
        mb = MB(ctx)
        pl = Plan(ctx, 2.2, 2.2, (0.25,) * 4)
        ring(mb, "MAT_Beton_Svijetli", pl.pts(0.0), pl.pts(-0.15), -0.03, 0.6)
        prism(mb, "MAT_Zemlja", pl.pts(-0.13), -0.02, 0.5)
        cyl(mb, "MAT_Kora_Drveta", V(0, 0, 0.45), V(0, 0, 3.3), 0.14, ctx.small * 2)
        seg, nv = (12, 24) if det else (4, 8)

        def blob(c, a, h):
            prof = [(a * sin(pi * i / seg), c.z - h * cos(pi * i / seg)) for i in range(seg + 1)]
            prof[0] = (0.0, prof[0][1])
            prof[-1] = (0.0, prof[-1][1])
            lathe(mb, "MAT_Lisce", prof, nv, Matrix.Translation(V(c.x, c.y, 0)))
        blob(V(0, 0, 4.2), 1.45, 1.4)
        if det:
            blob(V(0.5, 0.35, 4.9), 0.95, 0.9)
            blob(V(-0.45, -0.3, 4.7), 0.9, 0.85)
        return _finish_asset(ctx, "Drvo_Zardinjera", mb, smooth=50)
    return _asset(ctx, "tree", build)


def stall_asset(ctx, col):
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        box(mb, "MAT_Drvo", -1.5, 1.5, -0.6, 0.6, -0.03, 1.0)
        box(mb, "MAT_Metal_Pocincani", -1.6, 1.6, -0.75, 0.7, 0.98, 1.06)
        ztop = lambda y: 2.55 - 0.25 * (0.8 - y) / 1.9
        for x in (-1.45, 1.45):
            for y in (-0.55, 0.55):
                sq_tube(mb, "MAT_Metal_Okvir", [V(x, y, 1.02), V(x, y, ztop(y) - 0.015)], 0.035)
        n = 10 if det else 1
        stripes(mb, ["MAT_Automat_Crveni", "MAT_Tenda_Bijela"] if det else ["MAT_Automat_Crveni"],
                V(-1.75, 0.8, 2.55), V(1.75, 0.8, 2.55), V(0, -1.9, -0.25), n, 0.03)
        box(mb, "MAT_Metal_Okvir", -1.3, 1.3, 0.72, 0.80, 2.42, 3.0)
        if det:
            box(mb, "MAT_Drvo", -1.5, 1.5, 0.56, 0.62, 1.04, ztop(0.59) - 0.015)
            for x in (-0.8, 0.0, 0.8):
                cyl(mb, "MAT_Metal_Okvir", V(x, -1.15, -0.03), V(x, -1.15, 0.65), 0.04, ctx.small)
                cyl(mb, "MAT_Automat_Crveni", V(x, -1.15, 0.62), V(x, -1.15, 0.7), 0.2, ctx.small * 2)
        box(gm, col, -1.2, 1.2, 0.69, 0.74, 2.6, 2.92)
        prof = [(0, 2.31), (0.03, 2.27), (0.16, 2.2), (0.19, 2.05), (0.16, 1.9), (0.03, 1.84), (0, 1.82)]
        for x in (-1.1, 0.0, 1.1):
            lathe(gm, "LAMPION_CRVENI", prof, ctx.small * 2, Matrix.Translation(V(x, -0.95, 0)))
        return _finish_asset(ctx, "Strit_Food_Stand", mb, gm,
                             [("SVJETLO_STAND", "POINT", V(0, -0.6, 2.0), V(0, 0, -1), 40.0, (1.0, 0.5, 0.3),
                               (0.1, 0.1))])
    return _asset(ctx, "stall" + col, build)


def dumpster_asset(ctx):
    def build():
        mb = MB(ctx)
        rect = lambda a, b: [(-a, -b), (a, -b), (a, b), (-a, b)]
        loft(mb, "MAT_Metal_Zeleni", rect(0.8, 0.5), 0.12, rect(0.9, 0.55), 1.1)
        box(mb, "MAT_Plastika_Tamna", -0.93, 0.93, -0.58, 0.6, 1.08, 1.16)
        for x in (-0.65, 0.65):
            for y in (-0.42, 0.42):
                cyl(mb, "MAT_Guma", V(x, y - 0.04, 0.06), V(x, y + 0.04, 0.06), 0.075, ctx.small)
        return _finish_asset(ctx, "Kontejner", mb)
    return _asset(ctx, "dumpster", build)


def car_asset(ctx, kind, paint):
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        wv = 24 if det else 8
        rect = lambda x0, x1, b: [(x0, -b), (x1, -b), (x1, b), (x0, b)]
        if kind == "Sedan":
            box(mb, paint, -2.25, 2.25, -0.9, 0.9, 0.28, 0.92)
            loft(mb, "MAT_Auto_Staklo", rect(-1.55, 1.25, 0.86), 0.9, rect(-1.15, 0.55, 0.72), 1.42)
            if det:
                box(mb, paint, -1.1, 0.5, -0.69, 0.69, 1.40, 1.445)
                box(mb, "MAT_Plastika_Tamna", 2.22, 2.3, -0.85, 0.85, 0.3, 0.45)
                box(mb, "MAT_Plastika_Tamna", -2.3, -2.22, -0.85, 0.85, 0.3, 0.45)
            wx, wr, wy0, wy1, fx, fz = 1.45, 0.34, 0.66, 0.93, 2.25, (0.7, 0.82)
        else:  # Kombi
            box(mb, paint, -2.5, 2.5, -1.0, 1.0, 0.3, 2.3)
            box(mb, "MAT_Auto_Staklo", 2.45, 2.52, -0.85, 0.85, 1.35, 2.1)
            box(mb, "MAT_Auto_Staklo", 1.2, 2.3, -1.02, 1.02, 1.4, 2.0)
            wx, wr, wy0, wy1, fx, fz = 1.75, 0.36, 0.76, 1.03, 2.5, (0.8, 0.95)
        for x in (-wx, wx):
            for s_ in (-1, 1):
                cyl(mb, "MAT_Guma", V(x, s_ * wy0, wr - 0.02), V(x, s_ * wy1, wr - 0.02), wr, wv)
                if det:
                    cyl(mb, "MAT_Felga", V(x, s_ * (wy1 - 0.01), wr - 0.02), V(x, s_ * (wy1 + 0.015), wr - 0.02),
                        wr * 0.6, wv)
        for s_ in (-1, 1):
            y0, y1 = sorted((s_ * 0.55, s_ * 0.8))
            box(gm, "AUTO_FAR", fx - 0.03, fx + 0.02, y0, y1, fz[0], fz[1])
            box(gm, "AUTO_STOP", -fx - 0.02, -fx + 0.03, y0, y1, fz[0], fz[1])
        return _finish_asset(ctx, f"Auto_{kind}_{paint[12:]}", mb, gm)
    return _asset(ctx, f"car{kind}{paint}", build)


def hover_asset(ctx, paint):
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        poly = [(-2.3, 0.0), (2.4, 0.0), (2.4, 0.32), (1.1, 0.72), (-1.5, 0.9), (-2.3, 0.58)]
        extrude_poly(mb, paint, poly, V(0, 0, 0), V(1, 0, 0), V(0, 0, 1), V(0, 1, 0), -0.95, 0.95)
        rect = lambda x0, x1, b: [(x0, -b), (x1, -b), (x1, b), (x0, b)]
        loft(mb, "MAT_Auto_Staklo", rect(-1.2, 0.9, 0.8), 0.7, rect(-0.9, 0.3, 0.6), 1.25)
        if det:
            box(mb, paint, -2.28, -1.9, -0.9, 0.9, 0.56, 0.66)
        for x in (-1.6, 1.6):
            for y in (-0.95, 0.95):
                cyl(gm, "LEBDENJE_CIJAN", V(x, y, -0.1), V(x, y, 0.06), 0.3, ctx.small * 3)
        box(gm, "LEBDENJE_CIJAN", -1.2, 1.2, -0.7, 0.7, -0.03, 0.02)
        box(gm, "AUTO_FAR", 2.37, 2.42, -0.7, 0.7, 0.12, 0.22)
        return _finish_asset(ctx, f"Leteci_Auto_{paint[12:]}", mb, gm,
                             [("SVJETLO_LEBDENJE", "POINT", V(0, 0, -0.6), V(0, 0, -1), 100.0, (0.1, 0.9, 1.0),
                               (0.1, 0.1))])
    return _asset(ctx, "hover" + paint, build)


def street_tree_asset(ctx):
    def build():
        det = ctx.detail
        mb = MB(ctx)
        box(mb, "MAT_Metal_Okvir", -0.6, 0.6, -0.6, 0.6, -0.01, 0.012)
        if det:
            for k in range(-4, 5):
                box(mb, "MAT_Metal_Okvir", -0.55, 0.55, k * 0.12 - 0.015, k * 0.12 + 0.015, 0.008, 0.02)
        cyl(mb, "MAT_Kora_Drveta", V(0, 0, -0.05), V(0, 0, 3.0), 0.13, ctx.small * 2)
        seg, nv = (12, 24) if det else (4, 8)
        for c, a, h in ((V(0, 0, 4.2), 1.4, 1.35),) + (((V(0.45, 0.3, 4.85), 0.9, 0.85), (V(-0.4, -0.3, 4.6), 0.85, 0.8))
                                                        if det else ()):
            prof = [(a * sin(pi * i / seg), c.z - h * cos(pi * i / seg)) for i in range(seg + 1)]
            prof[0], prof[-1] = (0.0, prof[0][1]), (0.0, prof[-1][1])
            lathe(mb, "MAT_Lisce", prof, nv, Matrix.Translation(V(c.x, c.y, 0)))
        return _finish_asset(ctx, "Ulicno_Drvo", mb, smooth=50)
    return _asset(ctx, "street_tree", build)


def hydrant_asset(ctx):
    def build():
        mb = MB(ctx)
        cyl(mb, "MAT_Automat_Crveni", V(0, 0, -0.03), V(0, 0, 0.6), 0.11, ctx.small * 2)
        cyl(mb, "MAT_Automat_Crveni", V(0, 0, -0.04), V(0, 0, 0.08), 0.15, ctx.small * 2)
        lathe(mb, "MAT_Automat_Crveni", [(0, 0.72), (0.06, 0.70), (0.12, 0.62), (0.12, 0.58), (0, 0.58)],
              ctx.small * 2, Matrix())
        cyl(mb, "MAT_Metal_Pocincani", V(-0.2, 0, 0.42), V(0.2, 0, 0.42), 0.045, ctx.small)
        return _finish_asset(ctx, "Hidrant", mb, bevel=False, smooth=60)
    return _asset(ctx, "hydrant", build)


def shelter_asset(ctx):
    """Autobusna stanica: otvorena strana prema +Y (prema kolniku)."""
    def build():
        det = ctx.detail
        mb, gm = MB(ctx), MB(ctx)
        for x in (-1.6, 1.6):
            for y in (-0.65, 0.65):
                sq_tube(mb, "MAT_Metal_Okvir", [V(x, y, -0.03), V(x, y, 2.62)], 0.04)
        box(mb, "MAT_Metal_Okvir", -1.75, 1.75, -0.75, 0.75, 2.6, 2.7)
        for z0, z1 in ((0.1, 0.16), (2.42, 2.48)):
            box(mb, "MAT_Metal_Okvir", -1.6, 1.6, -0.68, -0.62, z0, z1)
        box(mb, "MAT_Staklo", -1.595, 1.595, -0.665, -0.635, 0.15, 2.45)
        box(mb, "MAT_Metal_Okvir", 1.56, 1.66, -0.6, 0.55, 0.3, 2.3)
        box(gm, "EKRAN_REKLAMA_ROZI", 1.545, 1.675, -0.55, 0.5, 0.35, 2.25)
        box(gm, "IZLOG_HLADNO", -1.4, 1.4, -0.1, 0.1, 2.58, 2.61)
        if det:
            box(mb, "MAT_Drvo", -1.2, 1.2, -0.6, -0.2, 0.42, 0.47)
            for x in (-1.0, 1.0):
                box(mb, "MAT_Metal_Okvir", x - 0.03, x + 0.03, -0.55, -0.25, -0.03, 0.43)
        cyl(mb, "MAT_Metal_Okvir", V(-2.1, 0.3, -0.03), V(-2.1, 0.3, 2.8), 0.05, ctx.small)
        box(mb, "MAT_Oznake_Zute", -2.35, -1.85, 0.27, 0.33, 2.3, 2.75)
        return _finish_asset(ctx, "Autobusna_Stanica", mb, gm,
                             [("SVJETLO_STANICA", "AREA", V(0, 0, 2.55), V(0, 0, -1), 40.0, (0.8, 0.9, 1.0), (2.8, 0.3))])
    return _asset(ctx, "shelter", build)


def person_asset(ctx, v):
    top, pants, umbrella = [("MAT_Odjeca_Crna", "MAT_Odjeca_Plava", True), ("MAT_Odjeca_Crvena", "MAT_Odjeca_Crna", False),
                            ("MAT_Odjeca_Bijela", "MAT_Odjeca_Plava", False), ("MAT_Odjeca_Zuta", "MAT_Odjeca_Crna", True),
                            ("MAT_Odjeca_Plava", "MAT_Odjeca_Crna", False)][v]

    def build():
        det = ctx.detail
        mb = MB(ctx)
        rect = lambda a, b: [(-a, -b), (a, -b), (a, b), (-a, b)]
        for x in (-0.1, 0.1):
            box(mb, pants, x - 0.065, x + 0.065, -0.075, 0.075, 0.06, 0.88)
            box(mb, "MAT_Odjeca_Crna", x - 0.06, x + 0.06, -0.09, 0.12, -0.005, 0.075)
        loft(mb, top, rect(0.18, 0.11), 0.86, rect(0.22, 0.12), 1.45)
        for s_ in (-1, 1):
            x0, x1 = sorted((s_ * 0.205, s_ * 0.3))
            box(mb, top, x0, x1, -0.05, 0.05, 0.82, 1.43)
            box(mb, "MAT_Koza", x0 + 0.005, x1 - 0.005, -0.045, 0.045, 0.70, 0.83)
        cyl(mb, "MAT_Koza", V(0, 0, 1.42), V(0, 0, 1.56), 0.055, ctx.small)
        seg, nv = (10, 16) if det else (4, 6)
        prof = [(0.11 * sin(pi * i / seg), 1.64 - 0.11 * cos(pi * i / seg)) for i in range(seg + 1)]
        prof[0], prof[-1] = (0.0, prof[0][1]), (0.0, prof[-1][1])
        lathe(mb, "MAT_Koza", prof, nv, Matrix())
        if det:
            hp = [(0.0, 1.775)] + [(0.118 * sin(pi / 2 * i / 4), 1.655 + 0.12 * cos(pi / 2 * i / 4)) for i in range(1, 5)] + \
                 [(0.0, 1.655)]
            lathe(mb, "MAT_Kosa", hp, nv, Matrix())
        if umbrella:
            cyl(mb, "MAT_Metal_Okvir", V(0.26, 0.0, 0.8), V(0.26, 0.0, 2.08), 0.012, ctx.small)
            lathe(mb, "MAT_Odjeca_Crna", [(0, 2.16), (0.25, 2.12), (0.45, 2.02), (0.52, 1.95), (0.5, 1.94), (0, 2.05)],
                  ctx.small * 3, Matrix.Translation(V(0.26, 0, 0)))
        return _finish_asset(ctx, f"Pjesak_{v + 1}", mb, bevel=False, smooth=50)
    return _asset(ctx, f"person{v}", build)


# --------------------------------------------------------------------------
# INVENTAR, VOZILA, VEGETACIJA - raspored
# --------------------------------------------------------------------------
def build_street_props(ctx, root, lroot):
    g = empty(ctx, "Blok_Inventar", root)
    lg = empty(ctx, "Inventar_Svjetla", lroot, coll=ctx.lcoll)
    gv = empty(ctx, "Blok_Vegetacija", root)
    z = SW_Z
    lamp = lamp_asset(ctx)
    for x in (-56.0, -42.0, -28.0, -16.0, 16.0, 28.0, 42.0, 56.0):
        put_asset(ctx, "lamp", lamp, g, lg, V(x, 6.7, z), -pi / 2)
        put_asset(ctx, "lamp", lamp, g, lg, V(x, -6.7, z), pi / 2)
    for y in (-38.0, -22.0, 22.0, 38.0):
        put_asset(ctx, "lamp", lamp, g, lg, V(5.7, y, z), pi)
        put_asset(ctx, "lamp", lamp, g, lg, V(-5.7, y, z), 0.0)
    tl = traffic_asset(ctx)
    for x, y, rot in ((6.8, 7.0, -pi / 2), (-6.8, 7.0, 0.0), (-6.8, -7.0, pi / 2), (6.8, -7.0, pi)):
        put_asset(ctx, "traffic", tl, g, lg, V(x, y, z), rot)

    # SZ trg (zelena zona uz megatoranj)
    tree = tree_meshes(ctx)
    for y in (17.0, 27.0, 37.0):
        put_asset(ctx, "tree", tree, gv, lg, V(-11.5, y, z - 0.0), 0.0)
    put_asset(ctx, "tree", tree, gv, lg, V(-11.5, -40.0, z), 0.0)
    bench = bench_asset(ctx)
    for y in (22.0, 32.0):
        put_asset(ctx, "bench", bench, g, lg, V(-9.0, y, z), pi / 2)
    put_asset(ctx, "bench", bench, g, lg, V(-8.5, -41.0, z), pi / 2)
    va, vb = vending_asset(ctx, "A"), vending_asset(ctx, "B")
    put_asset(ctx, "vend", va, g, lg, V(-15.9, 21.0, z), pi / 2)
    put_asset(ctx, "vend", vb, g, lg, V(-15.9, 22.4, z), pi / 2)
    put_asset(ctx, "vend", vb, g, lg, V(-15.8, -36.0, z), pi / 2)
    put_asset(ctx, "vend", va, g, lg, V(-15.8, -37.4, z), pi / 2)
    bn = bin_asset(ctx)
    for x, y in ((-8.5, 12.0), (-8.5, 42.0), (-8.0, -12.0), (-8.0, -33.0), (8.6, 8.8), (-8.6, 8.6)):
        put_asset(ctx, "bin", bn, g, lg, V(x, y, z), 0.0)
    bl = bollard_asset(ctx)
    for sgn in (1, -1):
        y = 9.5
        while y < 44.5:
            if all(abs(y - q) > 1.5 for q in (22.0, 38.0)):
                put_asset(ctx, "bollard", bl, g, lg, V(-5.75, sgn * y, z), 0.0)
            y += 3.0
    # JZ strit-food trznica
    for y, col in ((-15.0, "NEON_ROZI"), (-22.0, "NEON_ZUTI"), (-29.0, "NEON_CIJAN")):
        put_asset(ctx, "stall", stall_asset(ctx, col), g, lg, V(-11.5, y, z), pi / 2)
    dm = dumpster_asset(ctx)
    for x, y, rot in ((6.8, 28.5, pi / 2), (40.0, 26.0, 0.0), (52.0, 26.5, 0.0), (20.0, -26.0, 0.0),
                      (45.0, -26.5, 0.0)):
        put_asset(ctx, "dumpster", dm, g, lg, V(x, y, z), rot)

    # drvored uz glavnu ulicu, hidranti, autobusna stanica
    st = street_tree_asset(ctx)
    for x in (-62.0, -49.0, -35.0, -22.0, 22.0, 35.0, 49.0, 62.0):
        for sy in (1, -1):
            put_asset(ctx, "ulicno_drvo", st, gv, lg, V(x, sy * 7.2, z), 0.0)
    hy = hydrant_asset(ctx)
    for x, y in ((12.0, -7.4), (-24.5, 7.4), (52.5, 7.4), (-45.0, -7.4), (6.4, 40.0), (-6.4, -42.0)):
        put_asset(ctx, "hydrant", hy, g, lg, V(x, y, z), 0.0)
    put_asset(ctx, "stanica", shelter_asset(ctx), g, lg, V(31.3, -8.4, z), 0.0)

    # pjesaci (deterministicki raspored, izbjegavaju sav inventar i jedni druge)
    r = random.Random("pjesaci")
    zones = [(9.5, 63.0, 7.0, 9.8), (-63.0, -9.5, 7.0, 9.8), (9.5, 63.0, -9.8, -7.0), (-63.0, -9.5, -9.8, -7.0),
             (-10.4, -6.4, 9.5, 44.0), (-10.2, -6.4, -44.0, -9.5)]
    occ = list(ctx.__dict__.get("occupied", []))
    placed = 0
    for zi, (x0, x1, y0, y1) in enumerate(zones):
        target = 9 if zi < 4 else 5
        tries = 0
        n_ok = 0
        while n_ok < target and tries < 400:
            tries += 1
            x, y = r.uniform(x0, x1), r.uniform(y0, y1)
            rot, v = r.uniform(0, 2 * pi), r.randrange(5)
            rad = 0.6 if v in (0, 3) else 0.35
            if any((x - ox) ** 2 + (y - oy) ** 2 < (orr + rad + 0.25) ** 2 for ox, oy, orr in occ):
                continue
            if 31.3 - 2.6 < x < 31.3 + 2.6 and -9.4 < y < -7.4:
                continue
            occ.append((x, y, rad))
            put_asset(ctx, "person", person_asset(ctx, v), g, lg, V(x, y, z), rot)
            n_ok += 1
            placed += 1


def build_vehicles(ctx, root, lroot):
    g = empty(ctx, "Blok_Vozila", root)
    lg = empty(ctx, "Vozila_Svjetla", lroot, coll=ctx.lcoll)
    cars = [(-40.0, -2.1, 0.0, "Sedan", "MAT_Auto_Lak_Crveni"), (-22.0, -4.7, 0.0, "Kombi", "MAT_Auto_Lak_Bijeli"),
            (25.0, -2.1, 0.0, "Sedan", "MAT_Auto_Lak_Crni"), (48.0, -4.7, 0.0, "Sedan", "MAT_Auto_Lak_Plavi"),
            (35.0, 2.1, pi, "Sedan", "MAT_Auto_Lak_Bijeli"), (-15.0, 4.7, pi, "Sedan", "MAT_Auto_Lak_Crni"),
            (-50.0, 2.1, pi, "Kombi", "MAT_Auto_Lak_Zuti"), (55.0, 4.7, pi, "Sedan", "MAT_Auto_Lak_Crveni"),
            (2.5, -25.0, pi / 2, "Sedan", "MAT_Auto_Lak_Zuti"), (-2.5, 30.0, -pi / 2, "Sedan", "MAT_Auto_Lak_Plavi")]
    for x, y, rot, kind, paint in cars:
        put_asset(ctx, "car", car_asset(ctx, kind, paint), g, lg, V(x, y, 0.0), rot)
    for (x, y, zz, rot, paint) in ((10.0, 0.5, 24.0, pi / 2 + 0.3, "MAT_Auto_Lak_Crni"),
                                   (-30.0, -1.0, 31.0, 0.2, "MAT_Auto_Lak_Crveni")):
        put_asset(ctx, "hover", hover_asset(ctx, paint), g, lg, V(x, y, zz), rot)


def build_cables(ctx, root, lroot, north, south):
    """Kabeli s lampionima preko glavne ulice. Krajevi su na konzolama duljine 2 m koje
    izlaze iz zabatnih zidova (dalje od okomitih natpisa) -> kabel ne sijece nista."""
    g = empty(ctx, "Blok_Kabeli", root)
    lg = empty(ctx, "Kabeli_Svjetla", lroot, coll=ctx.lcoll)
    cab, brk, lan = MB(ctx), MB(ctx), MB(ctx)
    nseg = 24 if ctx.detail else 8
    prof = [(0, 0.0), (0.03, -0.04), (0.16, -0.11), (0.19, -0.26), (0.16, -0.41), (0.03, -0.47), (0, -0.49)]
    ZC, ARM, SAG = 10.0, 2.0, 1.0
    pairs, last_b = [], -1e9
    for a in sorted(north, key=lambda v: v.x):
        cand = [b for b in south if b.x > last_b + 0.5 and abs(b.x - a.x) < 4.0]
        if not cand:
            continue
        b = min(cand, key=lambda v: abs(v.x - a.x))
        xm = (a.x + b.x) / 2
        if any(abs(xm - px) < 2.0 for px in PILLARS_X) or abs(xm) < 10.0:
            continue
        pairs.append((a, b))
        last_b = b.x
    for a, b in pairs:
        tips = []
        for pt, s_ in ((a, -1), (b, 1)):
            root_ = V(pt.x, pt.y - s_ * 0.05, ZC)            # 5 cm u zabatnom zidu
            tip = V(pt.x, pt.y + s_ * ARM, ZC)
            sq_tube(brk, "MAT_Metal_Okvir", [root_, tip + V(0, s_ * 0.04, 0)], 0.04)
            sq_tube(brk, "MAT_Metal_Okvir", [V(pt.x, pt.y - s_ * 0.05, ZC - 1.2), tip - V(0, s_ * 0.3, 0.02)], 0.025)
            tips.append(tip)
        A, Bp = tips
        sweep(cab, "MAT_Kabel", catenary(A, Bp, SAG, nseg), 0.02, 6 if ctx.detail else 4)
        for t in (0.3, 0.5, 0.7):
            lathe(lan, "LAMPION_CRVENI", prof, ctx.small * 2,
                  Matrix.Translation(A.lerp(Bp, t) - V(0, 0, SAG * 4 * t * (1 - t))))
    cab.obj("Kabeli_Preko_Ulice", g, smooth=80)
    brk.obj("Kabeli_Konzole", g)
    lan.obj("LAMPIONI_NA_KABELIMA", lg, light=True)
    return len(pairs)


# --------------------------------------------------------------------------
# SCENA, KONTROLA KVALITETE, IZVOZ
# --------------------------------------------------------------------------
def new_coll(name, parent=None):
    c = bpy.data.collections.new(name)
    (parent or bpy.context.scene.collection).children.link(c)
    return c


def clear_scene():
    for ob in list(bpy.data.objects):
        bpy.data.objects.remove(ob, do_unlink=True)
    for coll in list(bpy.data.collections):
        bpy.data.collections.remove(coll)
    for blk in (bpy.data.meshes, bpy.data.lights, bpy.data.cameras, bpy.data.materials):
        for d in list(blk):
            if d.users == 0:
                blk.remove(d)


def descendants(ob):
    out = [ob]
    for c in ob.children:
        out += descendants(c)
    return out


def validate(objs):
    """Topoloska kontrola: manifold, normale, degenerirani elementi, duplikati, planarnost."""
    report = dict(meshes=0, tris=0, nonmanifold=0, flipped=0, degenerate=0, duplicates=0,
                  loose=0, nonplanar=0, neg_volume=0)
    seen = set()
    bad = []
    for ob in objs:
        if ob.type != "MESH" or ob.data.name in seen:
            continue
        seen.add(ob.data.name)
        report["meshes"] += 1
        bm = bmesh.new()
        bm.from_mesh(ob.data)
        bm.verts.ensure_lookup_table()
        nm = sum(1 for e in bm.edges if not e.is_manifold)
        fl = sum(1 for e in bm.edges if e.is_manifold and not e.is_contiguous)
        dg = sum(1 for f in bm.faces if f.calc_area() < 1e-8) + sum(1 for e in bm.edges if e.calc_length() < 1e-6)
        lo = sum(1 for v in bm.verts if not v.link_faces)
        npf = 0
        for f in bm.faces:
            if len(f.verts) > 3:
                c, n = f.calc_center_median(), f.normal
                if max(abs((v.co - c).dot(n)) for v in f.verts) > 1e-4:
                    npf += 1
        from mathutils.kdtree import KDTree
        kd = KDTree(len(bm.verts))
        for i, v in enumerate(bm.verts):
            kd.insert(v.co, i)
        kd.balance()
        dup = sum(1 for v in bm.verts if len(kd.find_range(v.co, 1e-6)) > 1)
        # volumen po otocima (mora biti pozitivan -> normale prema van)
        neg = 0
        unvisited = set(bm.faces)
        while unvisited:
            stack = [unvisited.pop()]
            isl = []
            while stack:
                f = stack.pop()
                isl.append(f)
                for e in f.edges:
                    for g in e.link_faces:
                        if g in unvisited:
                            unvisited.remove(g)
                            stack.append(g)
            vol = 0.0
            for f in isl:
                vs = [v.co for v in f.verts]
                for i in range(1, len(vs) - 1):
                    vol += vs[0].dot(vs[i].cross(vs[i + 1])) / 6.0
            if vol <= 0:
                neg += 1
        report["tris"] += sum(len(f.verts) - 2 for f in bm.faces) * max(1, ob.data.users)
        for k, v in (("nonmanifold", nm), ("flipped", fl), ("degenerate", dg), ("duplicates", dup),
                     ("loose", lo), ("nonplanar", npf), ("neg_volume", neg)):
            report[k] += v
            if v:
                bad.append((ob.name, k, v))
        bm.free()
    return report, bad


def setup_preview(night=False):
    """Preview svijet (NE izvozi se): nebo, sunce danju, tamno nebo nocu."""
    sc = bpy.context.scene
    sc.unit_settings.system = "METRIC"
    sc.unit_settings.scale_length = 1.0
    pc = bpy.data.collections.get("_PREVIEW (ne izvoziti)") or new_coll("_PREVIEW (ne izvoziti)")
    sun = bpy.data.objects.get("Preview_Sunce")
    if not sun:
        sun = bpy.data.objects.new("Preview_Sunce", bpy.data.lights.new("Preview_Sunce", "SUN"))
        sun.data.angle = radians(2)
        sun.rotation_euler = (radians(50), radians(10), radians(35))
        pc.objects.link(sun)
    sun.data.energy = 0.0 if night else 3.5
    w = sc.world or bpy.data.worlds.new("World")
    sc.world = w
    w.use_nodes = True
    bg = w.node_tree.nodes.get("Background")
    bg.inputs[0].default_value = (0.006, 0.008, 0.016, 1) if night else (0.35, 0.40, 0.48, 1)
    bg.inputs[1].default_value = 1.0 if night else 0.8
    sc.view_settings.exposure = -1.0 if night else 0.0
    return pc


def add_camera(pc, name, loc, target, lens=24):
    cam = bpy.data.objects.new(name, bpy.data.cameras.new(name))
    cam.data.lens = lens
    cam.location = loc
    cam.rotation_euler = (Vector(target) - Vector(loc)).to_track_quat("-Z", "Y").to_euler()
    pc.objects.link(cam)
    return cam


def export_fbx(path, roots):
    """FBX za Cinema 4D. Instance (dijeljeni meshevi) se privremeno pretvaraju u
    zasebne kopije jer FBX exporter inace gubi materijale na instancama."""
    bpy.ops.object.select_all(action="DESELECT")
    swapped = []
    for r in roots:
        for ob in descendants(r):
            ob.select_set(True)
            if ob.type == "MESH" and ob.data.users > 1:
                swapped.append((ob, ob.data))
                ob.data = ob.data.copy()
    bpy.ops.export_scene.fbx(filepath=path, use_selection=True, object_types={"EMPTY", "MESH", "LIGHT"},
                             apply_scale_options="FBX_SCALE_UNITS", use_mesh_modifiers=True,
                             mesh_smooth_type="FACE", add_leaf_bones=False, bake_anim=False,
                             axis_forward="-Z", axis_up="Y", use_custom_props=False)
    for ob, me in swapped:
        tmp = ob.data
        ob.data = me
        bpy.data.meshes.remove(tmp)


LAYOUT = dict(
    A=(V(21.0, 19.0, SW_Z - 0.02), 0.0),
    B=(V(-24.0, -17.0, SW_Z), pi),
    MT=(V(-34.0, 27.0, SW_Z), 0.0),
    rows=[("SI", V(34.0, 10.6, SW_Z), 0.0, 29.7, "red_SI"), ("SZ", V(-63.7, 10.6, SW_Z), 0.0, 11.4, "red_SZ"),
          ("JI", V(63.7, -10.6, SW_Z), pi, 56.9, "red_JI"), ("JZ", V(-32.0, -10.6, SW_Z), pi, 31.7, "red_JZ")],
    towers=[("Toranj_01", (16.0, 37.0), 0.0, 14.0, 11.0, 55.0), ("Toranj_02", (38.0, 37.0), 0.0, 14.0, 11.0, 40.0),
            ("Toranj_03", (56.0, 37.0), 0.0, 12.0, 12.0, 65.0), ("Toranj_04", (-58.0, 37.0), 0.0, 9.0, 12.0, 45.0),
            ("Toranj_05", (15.0, -36.0), pi, 14.0, 12.0, 50.0), ("Toranj_06", (35.0, -36.0), pi, 14.0, 12.0, 75.0),
            ("Toranj_07", (55.0, -36.0), pi, 12.0, 12.0, 42.0), ("Toranj_08", (-24.0, -35.0), pi, 14.0, 12.0, 58.0),
            ("Toranj_09", (-50.0, -35.0), pi, 14.0, 12.0, 48.0)],
)


def build_block(ctx, root, lroot):
    build_ground(ctx, root)
    build_track(ctx, root, lroot)
    gz = empty(ctx, "Blok_Zgrade", root)
    lz = empty(ctx, "Zgrade_Svjetla", lroot, coll=ctx.lcoll)
    build_A(ctx, gz, lz, *LAYOUT["A"])
    build_B(ctx, gz, lz, *LAYOUT["B"], on_water=False)
    build_megatower(ctx, gz, lz, *LAYOUT["MT"])
    anchors = {}
    for tag, origin, rot, length, seed in LAYOUT["rows"]:
        anchors[tag] = shop_row(ctx, gz, lz, tag, origin, rot, length, seed)
    gt = empty(ctx, "Pozadinski_Tornjevi", gz)
    lt = empty(ctx, "Pozadinski_Tornjevi_Svjetla", lz, coll=ctx.lcoll)
    for tag, (x, y), rot, w, d, H in LAYOUT["towers"]:
        filler_tower(ctx, gt, lt, tag, V(x, y, SW_Z), rot, w, d, H, tag)
    build_street_props(ctx, root, lroot)
    build_vehicles(ctx, root, lroot)
    north = anchors["SI"] + anchors["SZ"]
    south = anchors["JI"] + anchors["JZ"]
    return build_cables(ctx, root, lroot, north, south)


def main(out_dir=None, render=False):
    if CLEAR_SCENE:
        clear_scene()
    roots = {}
    for lod in BUILD_LODS:
        suffix = "" if lod == "HP" else " LOW POLY"
        coll = new_coll("IP 3 MODELI" + suffix)
        lcoll = new_coll("SVJETLA" + suffix)
        ctx = Ctx(lod, coll, lcoll)
        off = Vector((0, 0, 0)) if lod == "HP" else LP_OFFSET
        root = empty(ctx, "IP 3 MODELI" + suffix, None, off, raw_name=True)
        lroot = empty(ctx, "SVJETLA" + suffix, None, off, coll=lcoll, raw_name=True)
        n_cab = build_block(ctx, root, lroot)
        roots[lod] = (root, lroot)
        print(f"[{lod}] kabela preko ulice: {n_cab}, soba s interijerom: {ctx.__dict__.get('rooms', 0)}")

    print("\n================ KONTROLA KVALITETE ================")
    ok = True
    for lod, (root, lroot) in roots.items():
        objs = descendants(root) + descendants(lroot)
        rep, bad = validate(objs)
        n_obj = len([o for o in objs if o.type == "MESH"])
        n_l = len([o for o in objs if o.type == "LIGHT"])
        print(f"[{lod}] objekata(mesh)={n_obj} svjetala={n_l} trokuta={rep['tris']:,}")
        print(f"[{lod}] " + " ".join(f"{k}={v}" for k, v in rep.items() if k != "tris"))
        for b in bad[:40]:
            print("   PROBLEM:", b)
        ok &= not bad
    print("REZULTAT:", "SVE ISPRAVNO" if ok else "IMA PROBLEMA")

    pc = setup_preview(night=False)
    cams = [
        add_camera(pc, "Kamera_Glavna_Ulica", (54.0, -3.6, 1.7), (0.0, 2.5, 9.0), 22),
        add_camera(pc, "Kamera_Raskrizje", (14.0, -8.2, 3.5), (-10.0, 14.0, 18.0), 18),
        add_camera(pc, "Kamera_Pregled", (115.0, -42.0, 98.0), (-4.0, 3.0, 0.0), 30),
        add_camera(pc, "Kamera_Trg_SZ", (-6.6, 8.2, 1.7), (-12.5, 30.0, 6.0), 22),
        add_camera(pc, "Kamera_Trznica_JZ", (-6.4, -8.6, 2.0), (-12.0, -27.0, 2.2), 22),
        add_camera(pc, "Kamera_Megatoranj", (2.0, -44.0, 1.7), (-34.0, 27.0, 52.0), 18),
        add_camera(pc, "Kamera_Pregled_LP", (115.0, 178.0, 98.0), (-4.0, 223.0, 0.0), 30),
        add_camera(pc, "Kamera_Interijer_Kuce", (44.0, 5.0, 8.6), (44.6, 14.0, 7.6), 32),
        add_camera(pc, "Kamera_Interijer_Uredi", (-26.0, 4.0, 31.0), (-31.0, 20.0, 30.5), 30),
    ]
    bpy.context.scene.camera = cams[0]

    if out_dir:
        os.makedirs(out_dir, exist_ok=True)
        bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out_dir, "cyberpunk_gradski_blok.blend"))
        export_fbx(os.path.join(out_dir, "cyberpunk_gradski_blok_HP.fbx"), roots["HP"])
        if "LP" in roots:
            export_fbx(os.path.join(out_dir, "cyberpunk_gradski_blok_LP.fbx"), roots["LP"])
        if render:
            sc = bpy.context.scene
            sc.render.engine = "CYCLES"
            sc.cycles.device = "CPU"
            sc.cycles.use_denoising = True
            sc.render.resolution_x, sc.render.resolution_y = 1280, 720
            vts = [i.identifier for i in sc.view_settings.bl_rna.properties["view_transform"].enum_items]
            sc.view_settings.view_transform = "AgX" if "AgX" in vts else "Filmic"
            jobs = [("Kamera_Pregled", False), ("Kamera_Pregled_LP", False), ("Kamera_Glavna_Ulica", True),
                    ("Kamera_Raskrizje", True), ("Kamera_Trg_SZ", True), ("Kamera_Trznica_JZ", True),
                    ("Kamera_Megatoranj", True), ("Kamera_Pregled", True)]
            for cam_name, night in jobs:
                setup_preview(night)
                sc.cycles.samples = 64 if night else 32
                sc.camera = bpy.data.objects[cam_name]
                sc.render.filepath = os.path.join(out_dir, f"render_{cam_name}_{'noc' if night else 'dan'}.png")
                bpy.ops.render.render(write_still=True)
    return ok


if __name__ == "__main__":
    argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
    out = argv[argv.index("--out") + 1] if "--out" in argv else None
    main(out, "--render" in argv)
