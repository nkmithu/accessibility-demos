# Media assets

Everything here is generated locally by `python3 tools/make-media.py` using Pillow
and ffmpeg. Nothing is downloaded, so the repository carries no third-party media
and no licensing questions, and you can regenerate all of it offline.

| File | What it is | Used by |
|---|---|---|
| `shop-tour.mp4` | Synchronised media: picture **and** sound | 1.2.2, 1.2.3, 1.2.5, 1.2.6, 1.2.7, 1.2.8 |
| `shop-tour-silent.mp4` | The same picture with **no audio track** | 1.2.1 (video-only branch) |
| `shop-doorbell.mp3` | The same soundtrack with **no picture** | 1.2.1 (audio-only branch) |
| `shop-tour-captions.vtt` | Captions, including non-speech sound | 1.2.2 |
| `shop-tour-descriptions.vtt` | Description of on-screen information | 1.2.3, 1.2.5 |
| `shop-doorbell-transcript.txt` | Text alternative for the audio-only file | 1.2.1 |
| `book-cover.svg`, `divider.svg`, `award-badge.svg`, `sales-chart.svg` | Images | 1.1.1, 2.4.4 |

## Why the clip has no dialogue

The tour is built as a "silent film": the story is told with on-screen text cards
and the soundtrack is meaningful sound effects. That is deliberate, because it makes
every Guideline 1.2 criterion do real work on one short clip:

* the sounds carry information that is not on screen → **captions** are genuinely needed
* the text carries information that is not in the audio → **audio description** is genuinely needed
* a deafblind user needs both → a **full text alternative** is genuinely needed

A real project will also have speech. The caption file shows the `NAME: dialogue`
convention in its notes so you can see how spoken cues are written.
