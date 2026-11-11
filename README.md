# VELO RUSH 2027 — Full Website

This is the complete VELO RUSH website packaged in the requested Next.js 14+ project setup.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production check

```bash
npm run typecheck
npm run build
```

## Project structure

- `app/` — Next.js App Router, metadata and global CSS
- `components/all-components/01-velo-rush-full-website.tsx` — full website entry component
- `components/ui/` — Button, Badge and Card primitives
- `lib/utils.ts` — `cn()` helper
- `lib/velo-rush-preview.html` — complete approved website document

## Visual and interaction fidelity

The complete approved full-page preview is preserved as one isolated document and displayed by the Next.js page through an iframe. This is intentional: it keeps the approved section layouts, scroll transitions, carousels, multi-step registration, FAQ behavior and footer intact while isolating the legacy preview scripts from React hydration. The Next.js app shell and requested component/tooling setup are in place.

This ZIP contains the updated hero typography, About paragraph scroll reveal, and FAQ with regular page scrolling.

## Notes

All photographs are bundled as WebP files in `src/assets/images/` and served by Next.js. The Google Fonts stylesheet still requires an internet connection. Registration is a front-end preview only; it does not submit data to a backend.

This package intentionally preserves the approved HTML experience inside an isolated frame. The individual visual sections have not yet been rewritten as independent React/Framer Motion components.
