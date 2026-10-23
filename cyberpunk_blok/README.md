# Cyberpunk gradski blok (Blender -> Cinema 4D)

Dio cyberpunk grada 128 x 92 m u realnoj velicini (1 BU = 1 m), HIGH POLY i LOW POLY.
835 soba s interijerom (svaki prozor ima svoju sobu), 133 svjetla.

| Datoteka | Sadrzaj |
|---|---|
| `cyberpunk_gradski_blok_blend.zip` | Gotova Blender scena (.blend) |
| `cyberpunk_gradski_blok_HP_fbx.zip` | FBX za Cinemu 4D, high poly |
| `cyberpunk_gradski_blok_LP_fbx.zip` | FBX za Cinemu 4D, low poly |
| `cyberpunk_gradski_blok.py` | Skripta koja gradi cijeli blok (Blender 4.2+) |
| `qa/` | Provjere: z-fighting/koplanarnost, sudari sklopova, interijeri |
| `renders/` | Preview renderi (dan/noc) |

Preuzimanje: otvori datoteku na GitHubu i klikni "Download raw file".

Ponovna izgradnja: `blender -b -P cyberpunk_gradski_blok.py -- --out <mapa>`

Uvoz u C4D: File > Merge > .fbx (1 m = 100 cm). Hijerarhija: `IP 3 MODELI` i `SVJETLA` (Null grupe).
