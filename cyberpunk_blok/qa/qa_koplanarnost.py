"""
QA: trazi koplanarna lica koja se preklapaju izmedju RAZLICITIH solida (objekata ili
otoka unutar istog mesha) u cijeloj sceni, u svjetskim koordinatama.
  ISTI SMJER    -> vidljivi z-fighting (kriticno)
  SUPROTAN SMJER-> dva solida se dodiruju licem o lice (skriveno, ali nije cisto)
Pokretanje: blender -b datoteka.blend -P qa_koplanarnost.py   (treba 'shapely' + 'numpy')
"""
import math
import sys
from collections import defaultdict

import bmesh
import bpy
import numpy as np
from mathutils import Vector
from shapely.geometry import Polygon
from shapely.strtree import STRtree

D_TOL = 0.0015      # lica unutar 1.5 mm smatraju se istom ravninom
MIN_AREA = 1e-4     # preklop manji od 1 cm2 se zanemaruje
N_Q = 200           # kvantizacija normale


def islands(me):
    bm = bmesh.new()
    bm.from_mesh(me)
    bm.faces.ensure_lookup_table()
    isl = [-1] * len(bm.faces)
    cur = 0
    for f in bm.faces:
        if isl[f.index] >= 0:
            continue
        stack = [f]
        isl[f.index] = cur
        while stack:
            g = stack.pop()
            for e in g.edges:
                for h in e.link_faces:
                    if isl[h.index] < 0:
                        isl[h.index] = cur
                        stack.append(h)
        cur += 1
    bm.free()
    return isl


def run(roots):
    objs = []
    for r in roots:
        stack = [r]
        while stack:
            o = stack.pop()
            objs.append(o)
            stack.extend(o.children)
    buckets = defaultdict(list)
    cache = {}
    for ob in objs:
        if ob.type != "MESH":
            continue
        me = ob.data
        if me.name not in cache:
            cache[me.name] = islands(me)
        isl = cache[me.name]
        mw = ob.matrix_world
        m3 = mw.to_3x3()
        co = np.empty(len(me.vertices) * 3)
        me.vertices.foreach_get("co", co)
        co = co.reshape(-1, 3)
        M = np.array(mw)
        wco = co @ M[:3, :3].T + M[:3, 3]
        for poly in me.polygons:
            if poly.area < MIN_AREA:
                continue
            n = (m3 @ poly.normal).normalized()
            sgn = 1
            for c in n:
                if abs(c) > 1e-6:
                    sgn = 1 if c > 0 else -1
                    break
            nc = n * sgn
            pts = wco[list(poly.vertices)]
            d = float(np.dot(pts[0], np.array(nc)))
            key = (round(nc.x * N_Q), round(nc.y * N_Q), round(nc.z * N_Q))
            buckets[key + (math.floor(d / D_TOL),)].append((ob.name, isl[poly.index], sgn, pts, nc, d))
    same, opp = [], []
    seen = set()
    for key, items in buckets.items():
        nb = buckets.get(key[:3] + (key[3] + 1,), [])
        allf = items + nb
        if len(allf) < 2 or len({(a[0], a[1]) for a in allf}) < 2:
            continue
        nc = allf[0][4]
        u = nc.orthogonal().normalized()
        v = nc.cross(u)
        U, Vv = np.array(u), np.array(v)
        polys = []
        for it in allf:
            p2 = [(float(np.dot(p, U)), float(np.dot(p, Vv))) for p in it[3]]
            pg = Polygon(p2)
            if not pg.is_valid:
                pg = pg.buffer(0)
            polys.append(pg)
        tree = STRtree(polys)
        for i in range(len(items)):
            for j in tree.query(polys[i]):
                j = int(j)
                if j <= i and j < len(items):
                    continue
                a, b = allf[i], allf[j]
                if (a[0], a[1]) == (b[0], b[1]) or abs(a[5] - b[5]) > D_TOL:
                    continue
                inter = polys[i].intersection(polys[j])
                area = inter.area
                if area < MIN_AREA:
                    continue
                pair = tuple(sorted([(a[0], a[1]), (b[0], b[1])])) + (a[2] == b[2],)
                if pair in seen:
                    continue
                seen.add(pair)
                cc = inter.centroid
                wc = U * cc.x + Vv * cc.y + np.array(nc) * a[5]
                (same if a[2] == b[2] else opp).append((a[0], b[0], round(area, 4), round(a[5], 3),
                                                        tuple(round(c, 2) for c in nc), tuple(round(float(c), 3) for c in wc)))
    return same, opp


if __name__ == "__main__":
    ok = True
    for rn in (("IP 3 MODELI", "SVJETLA"), ("IP 3 MODELI LOW POLY", "SVJETLA LOW POLY")):
        roots = [bpy.data.objects[n] for n in rn if n in bpy.data.objects]
        if not roots:
            continue
        same, opp = run(roots)
        print(f"== {rn[0]}: z-fighting (isti smjer) = {len(same)}, dodir lice-o-lice = {len(opp)}")
        for s in same[:60]:
            print("   ZFIGHT", s)
        for s in opp[:60]:
            print("   DODIR ", s)
        ok &= not same and not opp
    print("KOPLANARNOST:", "CISTO" if ok else "IMA PROBLEMA")
