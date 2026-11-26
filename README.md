# Pretorius – Painters, Construction & Management

Website for Pretorius Painters, Construction & Management (Paarl).
It is a plain static site: no build step, no frameworks. GitHub Pages serves the files as they are.

## Folder layout

```
.
├── index.html          ← all page text: services, about, contact
├── assets/
│   ├── css/style.css   ← all styling (colours, fonts, layout)
│   ├── js/main.js      ← small script: footer year + "Expand all" button
│   └── img/logo.jpg    ← logo (also used as the browser tab icon)
├── .nojekyll           ← tells GitHub Pages to serve files as-is
└── README.md
```

## Common edits

| I want to…                         | Edit this                                                                 |
|-----------------------------------|---------------------------------------------------------------------------|
| Change phone number or email      | `index.html`: search for `0626611313` / `wpretorius825` (they appear several times, including in the `tel:`, `wa.me` and `mailto:` links) |
| Add, remove or reword a service   | `index.html`: copy one `<details> … </details>` block in the Services section |
| Change brand colours              | `assets/css/style.css`: the `:root` block at the top                      |
| Make the grid lines stronger/softer | `assets/css/style.css`: `--grid-line` and `--blueprint-line`             |
| Swap the logo                     | Replace `assets/img/logo.jpg` (keep the same file name)                  |
| Change a photo                    | `index.html`: replace the `images.unsplash.com/photo-…` address in that service's `<img>`, and update the photographer's name/link in its `<figcaption>` |
| Change the banner photo           | `index.html`: the `--hero-photo: url(…)` on the `<div class="hero">`, plus the "Photo:" credit just below the buttons |

## Look and feel

The blueprint style (grid-paper background, blueprint-grid banner, handwritten
"Architects Daughter" headings with `//` marks) is inspired by the
[Architect](https://github.com/pages-themes/architect) GitHub Pages theme
(CC0 licence). It is recreated in CSS with the Pretorius teal colours, so no
theme or extra images are needed.

## Photos

Photos come from [Unsplash](https://unsplash.com) and are free to use under the
[Unsplash licence](https://unsplash.com/license). They load directly from
Unsplash's image servers (`images.unsplash.com`), the way Unsplash recommends,
and each one credits its photographer. Keep those credits when you change a photo.

When you have photos of your own jobs, put them in `assets/img/` and point the
`<img src="…">` at them, e.g. `assets/img/roof-job-1.jpg` (remove the credit line).
Real before/after photos of your own work will do more for customers than stock photos.

## Preview locally

Open `index.html` in a browser, or run a small server from this folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.
