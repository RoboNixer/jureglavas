"""
QA: sudari izmedju NEZAVISNIH sklopova (zgrade, nizovi kuca, tornjevi, inventar, vozila,
pruga, kabeli). Teren se ne provjerava (objekti su namjerno 2-5 cm ukopani u plocnik).
Koristi tocan test presjeka trokuta (BVHTree.overlap).
Pokretanje: blender -b datoteka.blend -P qa_kolizije.py
"""
import bpy
from mathutils import Vector
from mathutils.bvhtree import BVHTree

EXPECTED = {("Blok_Kabeli", "Niz_Kuca")}   # konzole kabela su namjerno usidrene u zabatne zidove


def assemblies(root):
    out = {}
    for grp in root.children:
        base = grp.name.rsplit("_", 1)[0]
        if base == "Blok_Teren_Ulice":
            continue
        if base in ("Blok_Zgrade",):
            for sub in grp.children:
                if sub.name.startswith("Pozadinski_Tornjevi"):
                    for t in sub.children:
                        out[t.name] = t
                else:
                    out[sub.name] = sub
        elif base in ("Blok_Inventar", "Blok_Vozila", "Blok_Vegetacija"):
            for o in grp.children:
                out[o.name] = o
        else:
            out[grp.name] = grp
    return out


def meshes(ob):
    st, res = [ob], []
    while st:
        o = st.pop()
        if o.type == "MESH":
            res.append(o)
        st.extend(o.children)
    return res


def bvh(objs):
    verts, polys = [], []
    for o in objs:
        mw = o.matrix_world
        off = len(verts)
        verts += [mw @ v.co for v in o.data.vertices]
        polys += [[off + i for i in p.vertices] for p in o.data.polygons]
    if not verts:
        return None, None
    lo = Vector([min(v[i] for v in verts) for i in range(3)])
    hi = Vector([max(v[i] for v in verts) for i in range(3)])
    return BVHTree.FromPolygons(verts, polys, epsilon=0.0), (lo, hi)


def family(n):
    for k in ("Blok_Kabeli", "Niz_Kuca"):
        if n.startswith(k):
            return k
    return n


def run(root):
    asm = assemblies(root)
    data = {}
    for n, ob in asm.items():
        t, bb = bvh(meshes(ob))
        if t:
            data[n] = (t, bb)
    names = sorted(data)
    hits = []
    for i, a in enumerate(names):
        ta, (la, ha) = data[a]
        for b in names[i + 1:]:
            tb, (lb, hb) = data[b]
            if any(ha[k] < lb[k] or hb[k] < la[k] for k in range(3)):
                continue
            if tuple(sorted((family(a), family(b)))) in {tuple(sorted(e)) for e in EXPECTED}:
                continue
            ov = ta.overlap(tb)
            if ov:
                hits.append((a, b, len(ov)))
    return len(names), hits


if __name__ == "__main__":
    ok = True
    for rn in ("IP 3 MODELI", "IP 3 MODELI LOW POLY"):
        if rn in bpy.data.objects:
            n, hits = run(bpy.data.objects[rn])
            print(f"== {rn}: sklopova={n}, sudara={len(hits)}")
            for h in hits:
                print("   SUDAR", h)
            ok &= not hits
    print("KOLIZIJE:", "CISTO" if ok else "IMA PROBLEMA")
