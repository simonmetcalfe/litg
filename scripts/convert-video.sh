#!/usr/bin/env bash
# convert-video.sh — Convert a video to web-optimised MP4 + WebM
#
# Usage:
#   ./scripts/convert-video.sh <input-file> [output-basename]
#
# Requirements:
#   brew install ffmpeg
#
# Output (placed alongside the source file):
#   <output-basename>.mp4   — H.264, good browser support, small file
#   <output-basename>.webm  — VP9,   even smaller, modern browsers
#
# Typical hero background video settings:
#   - Max width 1920px (height scales automatically)
#   - 25 fps (motion smoothness vs file size)
#   - No audio (background video)
#   - CRF 26 (H.264) / CRF 33 (VP9) — adjust lower for better quality

set -euo pipefail

INPUT="${1:-}"
if [[ -z "$INPUT" ]]; then
  echo "Usage: $0 <input-file> [output-basename]"
  exit 1
fi

if ! command -v ffmpeg &>/dev/null; then
  echo "ffmpeg not found. Install with: brew install ffmpeg"
  exit 1
fi

DIR="$(dirname "$INPUT")"
BASENAME="${2:-$(basename "${INPUT%.*}")}"

MP4_OUT="$DIR/${BASENAME}.mp4"
WEBM_OUT="$DIR/${BASENAME}.webm"

COMMON_FILTERS="scale='min(1920,iw)':-2:flags=lanczos,fps=25"

echo "→ Converting: $INPUT"
echo ""

# ── MP4 (H.264) ────────────────────────────────────────────
echo "[1/2] Encoding MP4 (H.264)…"
ffmpeg -i "$INPUT" \
  -vf "$COMMON_FILTERS" \
  -c:v libx264 \
  -crf 26 \
  -preset slow \
  -profile:v high \
  -movflags +faststart \
  -an \
  -y "$MP4_OUT"
echo "  ✓ $MP4_OUT ($(du -sh "$MP4_OUT" | cut -f1))"

# ── WebM (VP9) ─────────────────────────────────────────────
echo "[2/2] Encoding WebM (VP9)…"
ffmpeg -i "$INPUT" \
  -vf "$COMMON_FILTERS" \
  -c:v libvpx-vp9 \
  -crf 33 \
  -b:v 0 \
  -an \
  -y "$WEBM_OUT"
echo "  ✓ $WEBM_OUT ($(du -sh "$WEBM_OUT" | cut -f1))"

echo ""
echo "Done. Add both files to assets/background/ and update the Hero component:"
echo ""
echo '  <video autoplay muted loop playsinline class="...">'
echo "    <source src=\"{\`\${base}background/${BASENAME}.webm\`}\" type=\"video/webm\" />"
echo "    <source src=\"{\`\${base}background/${BASENAME}.mp4\`}\"  type=\"video/mp4\" />"
echo '  </video>'
