# ScaleLab AI × South-West Roof Restoration

A standalone commercial proposal for a 30-day performance-based outbound campaign. It is intended to be reviewed in the browser and exported to PDF.

This project is not connected to any other ScaleLab AI application or production system.

## Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:4321](http://localhost:4321).

## Export to PDF

1. Open the proposal in Chrome (or another Chromium browser).
2. Click **Print / Save as PDF** in the top-right, or use `Cmd/Ctrl + P`.
3. Set the destination to **Save as PDF**.
4. Enable **Background graphics** so the dark branding is preserved.
5. Use Letter or A4, portrait.

The print stylesheet hides navigation and the print button, keeps related cards together, and starts major sections on new pages.

## Build

```bash
npm run build
npm run preview
```
