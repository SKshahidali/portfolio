# Sk Shahid Ali: Portfolio Website

A fast, static portfolio built with plain HTML, CSS and JavaScript. No build step, no dependencies.

## Structure

```
shahid-portfolio/
├── index.html      Page content and SEO / LinkedIn share tags
├── css/style.css   Design tokens, layout, light and dark themes
├── js/main.js      Light/dark toggle (remembers the choice)
├── README.md
└── DEPLOY.md       How to put it online
```

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Before you publish: replace these placeholders

In `index.html` (they appear in the hero and contact sections):

| Find | Replace with |
|------|--------------|
| `YOUR-LINKEDIN-HANDLE` | Your LinkedIn profile slug |
| `YOUR-GITHUB-USERNAME/YOUR-REPO` | Your ATS Resume Analyzer repo path |
| `og:url` / `og:image` (see comment in `<head>`) | Your live URL and a 1200x630 preview image |

Phone number is intentionally left out.

## Customizing

- **Colors and fonts:** edit the variables at the top of `css/style.css`.
- **New job:** copy one `<li>` inside `.timeline` in `index.html` and put it on top.
- **New skill or certification:** add a `<span>` in `#skills` or an `<li>` in `#certifications`.
- **Default theme:** it follows the visitor's system setting until they use the toggle.

## Browser support

Current Chrome, Edge, Firefox and Safari.
