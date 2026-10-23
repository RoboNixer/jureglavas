"""QA: namjestaj (objekti *_Interijer) ne smije sjeci staklo, okvire prozora, kaveze, fasadne
elemente izvana niti namjestaj drugog kata/sobe. Pod, strop i zidovi su namjerni dodiri."""
import bpy
from mathutils.bvhtree import BVHTree


def tree(o):
    mw = o.matrix_world
    return BVHTree.FromPolygons([mw @ v.co for v in o.data.vertices], [p.vertices[:] for p in o.data.polygons])


def bb(o):
    pts = [o.matrix_world @ v.co for v in o.data.vertices]
    return [min(p[i] for p in pts) for i in range(3)], [max(p[i] for p in pts) for i in range(3)]


FORBID = ("Staklo", "Okviri", "Kavezi", "Klima", "Natpis", "Tenda", "Rebra", "Ukrute", "Fasada")
ok = True
for suf in ("_HP", "_LP"):
    objs = [o for o in bpy.data.objects if o.type == "MESH" and o.name.endswith(suf)]
    inter = [o for o in objs if "Interijer" in o.name]
    others = [o for o in objs if any(k in o.name for k in FORBID)] + inter
    data = {o.name: (tree(o), bb(o)) for o in set(others)}
    hits = []
    for a in inter:
        ta, (la, ha) = data[a.name]
        for b in others:
            if b is a:
                continue
            tb, (lb, hb) = data[b.name]
            if any(ha[i] < lb[i] or hb[i] < la[i] for i in range(3)):
                continue
            if "Interijer" in b.name and b.name < a.name:
                continue
            if ta.overlap(tb):
                hits.append((a.name, b.name))
    print(f"== {suf}: interijera={len(inter)} sudara={len(hits)}")
    for h in hits[:40]:
        print("   SUDAR", h)
    ok &= not hits
print("INTERIJER:", "CISTO" if ok else "IMA PROBLEMA")
