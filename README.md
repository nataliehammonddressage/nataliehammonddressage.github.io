# Natalie Hammond Dressage

The [nataliehammond.com](https://www.nataliehammond.com) website, built with [Astro](https://astro.build).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

Requires Node 22.23.4+ (see `.nvmrc`).

## Writing a blog post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL (`my-post.md` → `/blog/my-post`).

```md
---
title: "A great weekend at the show"
description: "One or two sentences for Google and social shares."
date: 2026-11-01
image: ../../assets/images/2026/show-1.jpg
imageAlt: Natalie and Rufus in the show ring
album: fall-show-2026 # optional: shows that photo album under the post
draft: true # optional: visible in `npm run dev`, left out of the live site
---

Post text goes here.
```

## Adding a photo album

1. Put the photos in a folder such as `src/assets/images/2026/fall-show/` (full-size originals are fine; Astro resizes them).
2. Add `src/content/albums/fall-show-2026.yaml`:

```yaml
title: "Fall Show 2026"
date: 2026-10-15
description: "Natalie and Rufus at the fall show."
cover: "../../assets/images/2026/fall-show/1.jpg"
photos:
  - src: "../../assets/images/2026/fall-show/1.jpg"
    alt: "Natalie and Rufus in the extended trot"
```

The album appears on `/photos/` and gets its own page at `/photos/fall-show-2026/`. Add `hidden: true` to show it only inside a blog post.

## Deploying

Pushing to `dev` runs `.github/workflows/github-pages.yaml`, which builds the site and pushes `dist/` to the `main` branch. Netlify hosts the site; old URL redirects live in `public/_redirects`.
