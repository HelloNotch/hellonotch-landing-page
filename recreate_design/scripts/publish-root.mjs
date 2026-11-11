// Copies the built site to the repository root, which is what GitHub Pages serves.
import { cpSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const dist = join(here, '..', 'dist');
const root = join(here, '..', '..');

if (!existsSync(join(dist, 'index.html'))) throw new Error('Run the build first: dist/index.html is missing');

for (const entry of ['index.html', '404.html', 'assets', 'for', 'customers']) {
  cpSync(join(dist, entry), join(root, entry), { recursive: true });
}
console.log('publish-root: copied index.html, 404.html, assets/, for/ and customers/ to the repository root');
