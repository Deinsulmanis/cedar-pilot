# ScaleLab AI × South-West Roof Restoration

A standalone commercial proposal for a 30-day performance-based outbound campaign.

This project is not connected to any other ScaleLab AI application or production system.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Deploy to Netlify

This is a Vite + React static site. Netlify is already configured via `netlify.toml`.

1. Push this project to a GitHub repository.
2. In [Netlify](https://app.netlify.com), choose **Add new site → Import an existing project**.
3. Connect GitHub and select this repo.
4. Netlify should detect:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy. Netlify will give you a live URL such as `https://something.netlify.app`.

Later deploys happen automatically on pushes to `main`.

## Build

```bash
npm run build
npm run preview
```
