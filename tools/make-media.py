#!/usr/bin/env python3
"""
Generates the media assets used by the Guideline 1.2 (Time-based Media) demos.

Everything is synthesised locally with Pillow and ffmpeg, so the repository ships
no third-party media and no licence questions, and any student can regenerate it.

Design note for teachers
------------------------
The tour clip is deliberately built as a "silent film": the story is told with
on-screen text cards, and the soundtrack is meaningful sound effects rather than
dialogue. That is not a shortcut - it makes every Guideline 1.2 criterion do real
work on the same clip:

  * the sounds carry information that is not on screen  -> captions are required
  * the text carries information that is not in the audio -> audio description is required
  * a deafblind user needs both  -> a full text alternative is required

Run:  python3 tools/make-media.py
"""
import math
import os
import struct
import subprocess
import sys
import wave
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / "assets" / "media"
BUILD = MEDIA / ".build"
W, H = 640, 360
FPS = 25
SCENE_SECONDS = 4
SR = 44100

INK = (20, 23, 28)
PAPER = (242, 245, 248)
ACCENT = (10, 79, 158)
MUTED = (68, 76, 85)

FONT_DIRS = [
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
]


def font(size, bold=False):
    path = FONT_DIRS[0] if bold else FONT_DIRS[1]
    if not os.path.exists(path):
        return ImageFont.load_default()
    return ImageFont.truetype(path, size)


SCENES = [
    # (heading, lines, accent_bar)
    ("Riverline Books", ["A short tour"], True),
    ("Opening hours", ["Monday to Friday, 9am - 6pm",
                       "Saturday, 10am - 4pm",
                       "Sunday, closed"], False),
    ("Reserve online", ["Collect in store", "within 7 days"], False),
    ("Free delivery", ["on orders over 25 pounds"], False),
    ("riverlinebooks.example", ["Thanks for visiting"], True),
]


def centre(draw, text, fnt, y, fill):
    box = draw.textbbox((0, 0), text, font=fnt)
    draw.text(((W - (box[2] - box[0])) / 2, y), text, font=fnt, fill=fill)
    return box[3] - box[1]


def render_scene(index, heading, lines, bar):
    img = Image.new("RGB", (W, H), PAPER)
    d = ImageDraw.Draw(img)
    if bar:
        d.rectangle([0, 0, W, 6], fill=ACCENT)
        d.rectangle([0, H - 6, W, H], fill=ACCENT)
    y = 96 if len(lines) < 3 else 74
    centre(d, heading, font(40, bold=True), y, ACCENT if bar else INK)
    y += 62
    for line in lines:
        centre(d, line, font(24), y, MUTED)
        y += 38
    out = BUILD / f"scene{index:02d}.png"
    img.save(out)
    return out


# --- audio -------------------------------------------------------------------
def tone(buf, start, seconds, freq, gain=0.32, decay=True):
    """Add a decaying sine to the sample buffer, in place."""
    n0 = int(start * SR)
    n = int(seconds * SR)
    for i in range(n):
        env = math.exp(-3.2 * i / n) if decay else 1.0
        # short fade-in avoids an audible click at the attack
        env *= min(1.0, i / (0.004 * SR))
        idx = n0 + i
        if 0 <= idx < len(buf):
            buf[idx] += gain * env * math.sin(2 * math.pi * freq * i / SR)


def build_audio(path, total_seconds, events):
    buf = [0.0] * int(total_seconds * SR)
    for start, seconds, freq, gain in events:
        tone(buf, start, seconds, freq, gain)
    with wave.open(str(path), "wb") as w:
        w.setnchannels(1)
        w.setsampwidth(2)
        w.setframerate(SR)
        frames = bytearray()
        for s in buf:
            v = max(-1.0, min(1.0, s))
            frames += struct.pack("<h", int(v * 32767))
        w.writeframes(bytes(frames))


def run(cmd):
    r = subprocess.run(cmd, capture_output=True, text=True)
    if r.returncode != 0:
        print("  ffmpeg failed:\n" + r.stderr[-1500:], file=sys.stderr)
        sys.exit(1)


def main():
    BUILD.mkdir(parents=True, exist_ok=True)
    total = len(SCENES) * SCENE_SECONDS

    # 1. scene stills -> a concat list ffmpeg can turn into video
    listfile = BUILD / "scenes.txt"
    with listfile.open("w") as f:
        for i, (head, lines, bar) in enumerate(SCENES):
            png = render_scene(i, head, lines, bar)
            f.write(f"file '{png.name}'\nduration {SCENE_SECONDS}\n")
        # concat demuxer needs the final frame repeated to hold its duration
        f.write(f"file '{BUILD.joinpath(f'scene{len(SCENES) - 1:02d}.png').name}'\n")

    # 2. the sound effects, placed to line up with the scene changes
    #    (these timings are what the captions file transcribes)
    events = [
        (0.6, 0.30, 880, 0.34), (0.95, 0.45, 660, 0.34),      # shop doorbell
        (9.0, 0.70, 1320, 0.26),                               # counter bell
        (13.0, 0.35, 520, 0.24), (13.55, 0.35, 520, 0.24),     # telephone, two rings
        (14.3, 0.35, 520, 0.24), (14.85, 0.35, 520, 0.24),
        (17.6, 0.30, 660, 0.32), (17.95, 0.45, 880, 0.32),     # doorbell again, closing
    ]
    wav = BUILD / "tour.wav"
    build_audio(wav, total, events)

    # 3. mux into the tour clip (synchronised media: has both audio and video)
    run(["ffmpeg", "-y", "-loglevel", "error",
         "-f", "concat", "-safe", "0", "-i", str(listfile),
         "-i", str(wav),
         "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", str(FPS),
         "-c:a", "aac", "-b:a", "128k", "-shortest",
         str(MEDIA / "shop-tour.mp4")])

    # 4. a video-only clip: identical picture, no audio track at all (1.2.1)
    run(["ffmpeg", "-y", "-loglevel", "error",
         "-f", "concat", "-safe", "0", "-i", str(listfile),
         "-an", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-r", str(FPS),
         str(MEDIA / "shop-tour-silent.mp4")])

    # 5. an audio-only file: the sound effects with no picture (1.2.1)
    run(["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav),
         "-c:a", "libmp3lame", "-b:a", "128k",
         str(MEDIA / "shop-doorbell.mp3")])

    for f in ["shop-tour.mp4", "shop-tour-silent.mp4", "shop-doorbell.mp3"]:
        size = (MEDIA / f).stat().st_size
        print(f"  {f:26} {size / 1024:7.1f} KB")


if __name__ == "__main__":
    main()
