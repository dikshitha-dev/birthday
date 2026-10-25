# Birthday Gift Website

A single-page birthday surprise (HTML + CSS + vanilla JavaScript, no build step).

## Run it
Open `index.html` in any browser (double-click it), or serve the folder:
`python3 -m http.server 8000` then visit http://localhost:8000

## Structure
- `index.html`  - page markup
- `css/style.css` - all styling (desktop + mobile)
- `js/config.js` - name, date, letter title and message (edit here)
- `js/script.js` - animations, letter popup, 19 reasons, heart animation
- `assets/images/` - `cover.jpg` (front photo), `side-photo.jpg` (letter photo); replace with your own files of the same name

## Notes
- Fonts load from Google Fonts, so an internet connection is needed for the intended look.
- The 19 reasons are in the `REASONS` array in `js/script.js`.
- Host it free on Netlify, Vercel, GitHub Pages or Cloudflare Pages by uploading this folder.
