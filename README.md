# Deployable Dashboard

This project is a responsive static dashboard built with plain HTML, CSS, and JavaScript.

## Files

- `index.html` - main dashboard page
- `styles.css` - layout, theme, and responsive styling
- `app.js` - lightweight data rendering for recent activity

## Run locally

You can open `index.html` directly in a browser, or serve the folder with any static server.

If you have Node.js available:

```bash
npx serve .
```

## Deploy

This project can be deployed easily on:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

For Vercel or Netlify, import the folder as a static site and deploy with the default settings.

### GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

To deploy on GitHub Pages:

1. Push this project to a GitHub repository.
2. In GitHub, open `Settings > Pages`.
3. Set the source to `GitHub Actions`.
4. Push to the `main` branch.

After the workflow completes, your dashboard will be live on GitHub Pages.

## Customize

- Update KPI values in `index.html`
- Change team activity data in `app.js`
- Adjust colors and layout tokens in `styles.css`
