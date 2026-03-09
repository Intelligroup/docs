# TheIntelliGroup Documentation Hub

This Astro + Starlight project collects and publishes the consolidated documentation for every active initiative under TheIntelliGroup umbrella. This repository serves as a single source of truth for guides, process notes, and reference material across the organization.

## Layout overview

Preview the structure you already have in the repo:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/docs/
│   │   └── index.mdx
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Add new documentation by dropping `.md` or `.mdx` files into `src/content/docs/`; Astro exposes each file as a route named after the file, so the documentation hub naturally grows with each project you document.

Static images belong in `src/assets/` and can be referenced with relative paths inside your Markdown. Global assets like favicons stay in `public/`.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |