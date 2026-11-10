#!/bin/bash
# usage: finish.sh <projdir> <cover_time_s> "<COVER LINE 1>" "<COVER LINE 2>" "<pill subtitle>" "<line2 hex color>" <out.mp4>
# Concats rendered chunks s_a..s_d, muxes mix.wav, renders a clean cover frame + title, prepends it as the first 0.1 s,
# and encodes a ~8-14 MB 1080x1920 30fps H.264 MP4 ready for TikTok/IG/FB.
set -e
D=$(cd "$1" && pwd); CT=$2; L1=$3; L2=$4; L3=$5; COL=$6; OUT=$7
P=$(cd "$(dirname "$0")" && pwd)
cd "$D"
printf "file 's_%s.mp4'\n" a b c d > list.txt
ffmpeg -y -loglevel error -f concat -safe 0 -i list.txt -c copy silent.mp4
node "$P/common/cover.js" "$D" "$CT"
python3 "$P/common/mkcover.py" "$D" "$L1" "$L2" "$L3" "$COL"
ffmpeg -y -loglevel error -loop 1 -framerate 30 -t 0.1 -i cover.jpg -i silent.mp4 -i mix.wav \
  -filter_complex "[0:v]scale=1080:1920,fps=30,format=yuv420p,setsar=1[c];[1:v]setsar=1[v];[c][v]concat=n=2:v=1:a=0[outv];[2:a]adelay=100|100[outa]" \
  -map "[outv]" -map "[outa]" -c:v libx264 -preset veryfast -crf 22 -maxrate 4M -bufsize 8M -pix_fmt yuv420p -r 30 \
  -c:a aac -b:a 160k -shortest -movflags +faststart "$OUT"
ls -l "$OUT"; ffprobe -v error -show_entries format=duration -of csv=p=0 "$OUT"
