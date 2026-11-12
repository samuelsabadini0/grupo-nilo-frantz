import { defineConfig } from 'astro/config';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// No GitHub Pages o site fica em uma subpasta (usuario.github.io/grupo-nilo-frantz/).
// Localmente (npm run dev) ele continua na raiz.
const PAGES_BASE = process.env.GITHUB_PAGES ? '/grupo-nilo-frantz' : '';

/** Acrescenta a subpasta aos links internos ("/blog/", "/img/...") do HTML gerado. */
const prefixLinks = () => ({
  name: 'prefix-internal-links',
  hooks: {
    'astro:build:done': ({ dir }) => {
      if (!PAGES_BASE) return;
      const escaped = PAGES_BASE.slice(1).replace(/[-/]/g, '\\$&');
      const pattern = new RegExp(`(href|src|srcset)="/(?!/|${escaped}/)`, 'g');
      const walk = (folder) => {
        for (const entry of fs.readdirSync(folder, { withFileTypes: true })) {
          const file = path.join(folder, entry.name);
          if (entry.isDirectory()) walk(file);
          else if (entry.name.endsWith('.html')) {
            const html = fs.readFileSync(file, 'utf8');
            fs.writeFileSync(file, html.replace(pattern, `$1="${PAGES_BASE}/`));
          }
        }
      };
      walk(fileURLToPath(dir));
    },
  },
});

export default defineConfig({
  site: 'https://samuelsabadini0.github.io',
  base: PAGES_BASE || undefined,
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  integrations: [prefixLinks()],
});
