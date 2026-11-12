// Writes a real HTML file for every route, so GitHub Pages serves each page with
// a 200 and with the tracking tags from index.html (RB2B, Google Analytics).
// Keep ROUTES in step with src/app/App.tsx and src/app/data/buyers.ts.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const SITE = 'https://www.hellonotch.com';

const ROUTES = [
  {
    path: '/for/design-and-purchasing',
    title: 'Notch for design and purchasing | Notch',
    description:
      'Import the spec book, send quote requests to every vendor at once, compare pricing side by side and track orders through delivery.',
  },
  {
    path: '/for/homebuilders',
    title: 'Notch for homebuilders | Notch',
    description:
      'Send plans to trades and suppliers, compare what comes back option by option, and export awarded prices to your ERP or accounting system.',
  },
  {
    path: '/for/construction',
    title: 'Notch for construction | Notch',
    description:
      'Break plans and specs into scope by trade, collect subcontractor and vendor quotes in one place, and see what each one covers and leaves out.',
  },
  {
    path: '/for/higher-ed',
    title: 'Notch for higher ed and public institutions | Notch',
    description:
      'Run competitive furniture and equipment bids with every vendor on the same information and a clear record behind each award.',
  },
  {
    path: '/customers/statewide-university',
    title: 'Case study: a statewide public university system streamlines FF&E bidding | Notch',
    description:
      'How a statewide public university system cut bid processing time by 75% and saved 60+ hours on large projects with Notch.',
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const shell = readFileSync(join(dist, 'index.html'), 'utf8');

const withMeta = (html, { title, description, path }) =>
  html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${esc(description)}" />`)
    .replace('</head>', `  <link rel="canonical" href="${SITE}${path === '/' ? '/' : path + '/'}" />\n    </head>`);

for (const tag of ['reb2b', 'googletagmanager.com/gtag/js', '<meta name="description"']) {
  if (!shell.includes(tag)) throw new Error(`index.html is missing "${tag}"; refusing to write pages without it`);
}

for (const route of ROUTES) {
  const file = join(dist, route.path, 'index.html');
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, withMeta(shell, route));
}

// Unknown URLs still load the app (which sends them home), with tracking in place.
writeFileSync(join(dist, '404.html'), shell);
writeFileSync(join(dist, 'index.html'), shell.replace('</head>', `  <link rel="canonical" href="${SITE}/" />\n    </head>`));

console.log(`postbuild: wrote ${ROUTES.length} route pages and 404.html`);
