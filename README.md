# Verbolica Help

The public knowledge base for Verbolica, served at **help.verbolica.com**.

Static docs site: Next.js + [Fumadocs](https://fumadocs.dev), Markdown/MDX articles in git, built-in
search (Orama, no external service). No database, no server-side state. Hosted on Vercel.

Separate from the SaaS app (`content-strat.git`, app.verbolica.com) and from the WordPress marketing
site (www.verbolica.com). A broken article can never break either of them.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run verify   # typecheck + lint + build — run before every push
```

Node 22+. TypeScript is pinned to 6.x because `typescript-eslint` does not support TS 7 yet.

## Writing articles

- Articles live in `content/docs/<section>/<slug>.mdx`. URL = `/docs/<section>/<slug>`.
- Sidebar order and section titles: each folder's `meta.json`; top-level grouping: `content/docs/meta.json`.
- Frontmatter: `title`, `description`, `icon` (a [Lucide](https://lucide.dev) icon name).
- Components available in MDX: `Callout`, `Cards`/`Card`, `Steps`/`Step`, `Tabs`/`Tab`.
- Link with the full path (`/docs/connections/wordpress-plugin`), not the bare slug.

### House style

- Name UI exactly as the app labels it, in **bold**: **Brand Settings → Connections**, **Request approval**.
  Check the label in the app source before writing it.
- Plain English, short sentences, second person. No em dashes. British/international spelling.
- Describe what the user sees and does, never internals (table names, cron jobs, models).
- Never publish internal pricing (points, per-action costs, rate cards): clients read this site.
- When a feature changes in the app, update its article in the same piece of work.

## Design

MOSS identity, from the AIOS design system (`projects/verbolica/docs/design system/`): paper `#F3F1EA`,
ink `#2C312C`, khaki-550 `#5D6539` for interactive fills, warm charcoal dark theme. Newsreader for
headings, Hanken Grotesk for body, IBM Plex Mono for code. Tokens are in `app/global.css`.

## Machine-readable docs

`/llms.txt`, `/llms-full.txt` and `/docs/<page>.md` serve the articles as Markdown, so AI assistants
(including Verbolica's own Strategist) can read them.
