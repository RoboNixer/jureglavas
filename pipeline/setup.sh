#!/bin/bash
# One-time setup per fresh session (~2-3 min). Installs Kokoro TTS (fp32) from npm shards + python deps.
set -e
mkdir -p ~/tts && cd ~/tts
if [ ! -f kokoro-fp32.onnx ] || [ "$(stat -c%s kokoro-fp32.onnx)" != "325532232" ]; then
  for p in kokoro-fp32a-shards kokoro-fp32b-shards kokoro-fp32c-shards; do
    npm pack $p@1.0.0 >/dev/null && mkdir -p $p && tar xzf $p-1.0.0.tgz -C $p
  done
  cat $(for i in $(seq 0 18); do ls kokoro-fp32*-shards/package/kokoro-fp32.part$i.bin; done) > kokoro-fp32.onnx
fi
ls -l kokoro-fp32.onnx   # must be 325532232 bytes
if [ ! -f voices.npz ]; then
  npm pack kokoro-js@1.2.1 >/dev/null && mkdir -p kjs && tar xzf kokoro-js-1.2.1.tgz -C kjs
  python3 -c "import numpy as np,glob,os;np.savez('voices.npz',**{os.path.basename(f)[:-4]:np.fromfile(f,dtype=np.float32).reshape(-1,1,256) for f in glob.glob('kjs/package/voices/*.bin')})"
fi
pip install kokoro-onnx==0.6.1 soundfile scipy pillow --break-system-packages -q
fc-list | grep -q "Inter" || echo "WARNING: Inter font missing (fonts-inter). Captions/cover need it: apt-get install -y fonts-inter fonts-noto-color-emoji"
node -e "require('playwright')" 2>/dev/null || echo "WARNING: playwright missing: npm i -g playwright && npx playwright install chromium"
echo SETUP_OK
