# Eden Ibiza: front-end coding challenge

Welcome, and thanks for your time. This repo is the starter for a small take-home
exercise. The design you were sent is for **Eden Ibiza, a fictional brand**. This
is an exercise only and **is not spec work**: nothing you build will be used
commercially.

## The task

1. Open the Adobe XD design and pick **one** component from the homepage. The
   choices are listed in [COMPONENTS.md](COMPONENTS.md).
2. Build it to the XD spec, replacing its stub in `src/components/sections/`.
3. Ask questions if anything is unclear. Questions are welcome and expected, and
   asking is better than guessing.

Header, Footer and Button are already built. Follow the conventions you see in
the existing code.

After you submit, we will have a live session where you walk us through your code.

**Suggested time box: 2-3 hours.** Do not spend more. Tell us in the PR what you
would do with more time.

## Setup

Requires the Node version in `.nvmrc` (`nvm use` if you use nvm).

```bash
npm ci && npm run dev
```

Then open http://localhost:3000.

## Fonts

Heading and display fonts (`pt-sans-narrow`, `above-the-beyond`) come from an
Adobe Fonts (Typekit) kit, loaded with a stylesheet `<link>` in
`src/app/layout.tsx`. That is a third-party request, so those fonts need an
internet connection and fall back to the system sans-serif when offline. The
body font, Urbanist, is loaded through `next/font/google`. The font stacks are
defined in `src/styles/_tokens.scss`.

## Scripts

| Script          | What it does                         |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server                 |
| `npm run build` | Production build                     |
| `npm run lint`  | ESLint (including a11y) and Prettier |
| `npm test`      | Run the test suite once              |

## Submitting

1. Click **Use this template** → **Create a new repository** at the top of this
   repo. Set it to **Private** and create it under your own GitHub account.
   Clone that copy (not this one).
2. In your new repo, go to **Settings → Collaborators** and add
   **mbbdevelop** so we can review your work.
3. Create a branch off `main` (for example `your-name/hero`). Do not commit
   directly to `main`.
4. Commit as you go with clear messages.
5. Open a pull request from your branch into `main` **in your own repo**, fill
   in the PR template, and request a review from **mbbdevelop**. Leave
   the PR open; please don't merge it.
6. Email the PR link to **jrezac@mbbagency.com** so we know you're done.

Your repo stays private, and we won't share or reuse your work. Once the
process wraps up, we'll let you know you're free to delete it.

## AI tools

AI tools are allowed. Disclose which tools you used, and what for, in the PR
description. You should be able to explain every line you submit.

## Questions

Contact TODO: name / email. We respond within TODO: X hours.
