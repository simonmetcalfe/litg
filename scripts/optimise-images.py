#!/usr/bin/env python3
"""
Optimise images in assets/ for web delivery.

Usage:
    python scripts/optimise-images.py

Requirements:
    pip install Pillow

What it does:
  - Resizes images so the longest edge is <= MAX_LONG_EDGE pixels
  - Saves as JPEG (or PNG for transparent sources) with QUALITY compression
  - Skips images that are already small enough
  - Writes optimised files in-place (backs up originals with .orig extension first)

Tweak MAX_LONG_EDGE / QUALITY to taste before running.
"""

import os
import shutil
from pathlib import Path
from PIL import Image

# ── Config ────────────────────────────────────────────────
ASSETS_ROOT = Path(__file__).parent.parent / "assets"

# Directories to process (relative to ASSETS_ROOT)
TARGET_DIRS = [
    "background",
    "photos_bands",
    "photos_venue",
    "photos_accom",
    "map",
]

MAX_LONG_EDGE = 1920   # pixels — hero/carousel images
MAP_LONG_EDGE  = 2400  # larger for the map (detail matters)
QUALITY        = 82    # JPEG quality 0-100
BACKUP_SUFFIX  = ".orig"
# ─────────────────────────────────────────────────────────


def optimise(path: Path, max_edge: int) -> None:
    img = Image.open(path)
    w, h = img.size
    if max(w, h) <= max_edge:
        print(f"  skip  {path.name}  ({w}×{h} already within limit)")
        return

    # Backup original
    backup = path.with_suffix(path.suffix + BACKUP_SUFFIX)
    if not backup.exists():
        shutil.copy2(path, backup)

    # Resize preserving aspect ratio
    ratio = max_edge / max(w, h)
    new_size = (int(w * ratio), int(h * ratio))
    img = img.resize(new_size, Image.LANCZOS)

    # Convert RGBA → RGB for JPEG
    if img.mode in ("RGBA", "P") and path.suffix.lower() in (".jpg", ".jpeg"):
        img = img.convert("RGB")

    img.save(path, quality=QUALITY, optimize=True)
    saved = os.path.getsize(backup) - os.path.getsize(path)
    print(f"  ✓     {path.name}  {w}×{h} → {new_size[0]}×{new_size[1]}  (saved {saved/1024:.0f} KB)")


def main():
    print(f"Optimising images in {ASSETS_ROOT}\n")
    for dir_name in TARGET_DIRS:
        target = ASSETS_ROOT / dir_name
        if not target.exists():
            print(f"[skip] {dir_name} — directory not found")
            continue
        print(f"[{dir_name}]")
        max_edge = MAP_LONG_EDGE if dir_name == "map" else MAX_LONG_EDGE
        for ext in ("*.jpg", "*.jpeg", "*.JPG", "*.JPEG", "*.png", "*.PNG"):
            for img_path in sorted(target.rglob(ext)):
                if BACKUP_SUFFIX in img_path.suffix:
                    continue
                if "_Removed" in str(img_path):
                    continue
                try:
                    optimise(img_path, max_edge)
                except Exception as e:
                    print(f"  ERROR {img_path.name}: {e}")
        print()
    print("Done. Originals saved with .orig extension if changed.")


if __name__ == "__main__":
    main()
