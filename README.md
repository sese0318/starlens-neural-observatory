# StarLens Neural Observatory

The original StarLens 3D brain viewer, in its own repository and Vercel project.

App https://starlens-neural-observatory.vercel.app/

Repository https://github.com/sese0318/starlens-neural-observatory

This is the original Neural Observatory previously published at https://starlens-brain-atlas.sese16180.chatgpt.site/observatory . It is based on the verified version5 source25c9d10b449edf017f7ab84923aeab2a32496276. The later Anatomy Studio is a separate app and repository, sese0318/starlens-brain-atlas. The unpublished Workbench redesign is not included.

## Run and build

Use Node.js22.12 or newer. Run npm ci, then npm run dev. Open /observatory.html on the local development server. npm run build creates dist and places Observatory at the production site root. /observatory is also available, and /prototype opens the original research view.

npm test runs38 existing checks. These include an independent Python reference using only the standard library. Install Python3 for that check. On Windows, the PYTHON environment variable can select the executable.

## Deployment

The dedicated Vercel project uses this repository root, Vite, npm run build and dist. The corrected root vercel.json and .vercelignore replace the inherited upstream landing-site deployment settings. Old docs/deployment.md describes the historical DopaTeam site and is not authoritative for this independent project.

The dedicated Vercel project is connected to this GitHub repository. A reviewed push to main triggers Vercel production deployment. Check the deployment and GitHub Vercel status before treating an update as live. The CI workflow also installs locked dependencies, runs the38 checks and builds the app.

## Use

Drag to rotate and scroll to zoom. Explore regions opens the region list. Data & evidence opens inputs and comparisons. Load dummy data loads the fictional cortical values. Change Profile and Reference to compare patterns. How to use contains the original English guide, and About explains sources and limits.

The standard anatomy contains68 cortical numeric regions and14 anatomy-only deep structures. No patient MRI or measured atrophy is included. Synthetic overlays are not clinical measurements. See BRAIN_ATLAS.md and public/atlas/SCIENTIFIC_READINESS.md for details.

## Credits

DopaTeam supplies the research workspace and numerical functions. FreeSurfer supplies converted anatomical templates, whose notices and license are retained under public/atlas. The exhibition stage was authored with Higgsfield3D Jutsu and its provenance is retained under public/observatory. No blanket license supersedes third-party notices.

## Verification scope

See [Public release security review](docs/publication-security.md) for the2026-09-15 audit, browser-local data handling, Google Fonts request, security headers and remaining limitations.

The original source and its published build were previously compared to version5. This extraction changes hosting setup, source documentation and the root entry only. Fresh browser interaction still requires an available browser connection; automated checks and successful HTTP requests alone do not verify WebGL interaction.

## License

The StarLens source code is released under the [MIT License](LICENSE).
FreeSurfer-derived brain surface data in `public/atlas/` (`lh.json`, `rh.json`,
`subcortex.json` and their provenance/validation metadata) is **not** MIT-licensed: it
remains under the FreeSurfer Software License Agreement from The General Hospital
Corporation (MGH), reproduced in [`public/atlas/LICENSE-FreeSurfer.txt`](public/atlas/LICENSE-FreeSurfer.txt).
See [NOTICE.md](NOTICE.md) and [`public/atlas/PROVENANCE.md`](public/atlas/PROVENANCE.md).
`public/observatory/stage.glb` is a third-party-generated Higgsfield 3D Jutsu asset and is also outside the MIT grant.
