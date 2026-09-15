# Public release security review

Reviewed on 2026-09-15. Scope is this independent original Neural Observatory repository, starting at commit6235bbb, its two existing commits and the dedicated Vercel deployment. No publication-blocking security issue was identified in this bounded review. This is not a guarantee of security or a penetration test.

## Checked

- A pattern scan of all79 unique tracked blobs across both commits found no private keys, common provider tokens, credential assignments or local user directory paths. Pattern scans cannot detect every secret. Local environment and Vercel authentication files are excluded from Git and deployment uploads.
- npm audit reported zero known vulnerabilities across production and development dependencies on the review date.
- Published data consists of standard anatomical templates and fictional overlays. No patient scans, participant tables or research source CSVs were found in the tracked release.
- Both browser import handlers limit JSON files to1MB. Validation constrains region counts, identifiers, numeric arrays and layer counts. Labels render as React text. No executable HTML sink or arbitrary script evaluation was found.
- Imported values are processed in browser memory. The application has no upload endpoint, server functions, account system or database. No import upload or browser-storage persistence path was found. Explicit JSON and GLB downloads save files on the user's device and can contain data the user chose to import.
- Application fetches load same-origin atlas assets. The stage GLB embeds its buffer and contains no external resource URIs. No source maps are emitted by the build.
- FreeSurfer notices, provenance and the stage provenance remain included. This review did not independently establish all upstream intellectual-property permissions.

## Remaining exposure

- Google Fonts is requested by src/observatory.css. Google receives normal connection metadata such as the visitor IP address. Vercel also necessarily receives site requests. The application does not send imported JSON contents with those requests.
- Public GitHub source, commit metadata and downloadable site assets can be copied. Making the repository private later does not recall copies. package.json private prevents accidental npm publication and does not control GitHub visibility.
- A malformed or expensive input may still cause a local rendering error or slow the browser. The1MB input limit reduces this risk but does not make arbitrary data trustworthy.
- Scientific values are explicitly synthetic. This application has not been validated for diagnosis or clinical use.

## Hosting hardening

vercel.json adds X-Content-Type-Options nosniff, X-Frame-Options DENY and Referrer-Policy no-referrer. The site remains directly accessible but cannot be embedded in an iframe. The referrer policy avoids disclosing the page URL when following links or requesting the external font. This does not hide the visitor IP address from the font provider.

Configuration reference [Vercel project configuration](https://vercel.com/docs/project-configuration/vercel-json#headers).

## Verification limits

The security review uses source inspection, dependency advisories, Git history, binary metadata and deployment HTTP checks. A fresh interactive browser connection was unavailable, so this review does not claim live WebGL, mobile, file-picker or adversarial browser testing. These hosting-only changes preserve the application source and data.
