import { copyFileSync } from 'node:fs';

// The original Neural Observatory opens at the standalone site root.
copyFileSync(new URL('../dist/observatory.html', import.meta.url),
  new URL('../dist/index.html', import.meta.url));
