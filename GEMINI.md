# Project Overview

This repository contains the source code for the documentation website for **Lumberjack**, a framework designed to "Supercharge your WordPress Development". The site is built using **Docusaurus**, a modern static website generator based on React.

The project is configured with TypeScript and includes a versioning system to manage documentation for multiple releases of the Lumberjack framework.

## Key Technologies

- **Docusaurus:** Static site generator.
- **React:** UI framework.
- **TypeScript:** For type safety.
- **Markdown (MDX):** For writing documentation content.
- **GitHub Actions:** For CI/CD.
- **Algolia:** For search functionality.

---

# Development Workflow

## Initial Setup

To get started, clone the repository and install the dependencies using npm.

```bash
npm install
```

## Running the Development Server

To preview your changes as you edit the files, you can run the local development server.

```bash
npm start
```

This command starts a local development server (usually on `http://localhost:3000`) and opens up a browser window. Most changes are reflected live without having to restart the server.

## Building the Site

To generate a static production build of the website, run the following command.

```bash
npm run build
```

This command generates static content into the `build/` directory.

## Linting and Type-Checking

The project uses ESLint for linting and TypeScript for type-checking. The CI pipeline runs these checks on every pull request.

```bash
# Run the linter
npm run lint

# Check for TypeScript errors
npm run typecheck
```

---

# Content and Versioning

## Content Directory

All documentation content is written in Markdown (`.md` or `.mdx`) and is located in the following directories:

- **`docs/`**: Contains the documentation for the _next_ or _unreleased_ version of Lumberjack.
- **`versioned_docs/`**: Contains snapshots of the documentation for previous, tagged versions of Lumberjack (e.g., `version-v8`, `version-v7`).

## Sidebars

The navigation structure for the documentation is defined in these files:

- **`sidebars.ts`**: Defines the sidebar for the _next_ version.
- **`versioned_sidebars/`**: Contains the sidebar configurations for each versioned documentation.

## Docusaurus Commands for Versioning and Maintenance

For Docusaurus-specific commands, we generally use the `npm run docusaurus` prefix.

To create a new version of the documentation (e.g., when a new version of Lumberjack is released), use the following Docusaurus command:

```bash
npm run docusaurus docs:version <version_name>
```

This will create a new versioned copy of the `docs/` and `sidebars.ts` files, making them specific to the new version.

Other useful `docusaurus` commands include:

- `npm run docusaurus deploy`: Deploys the site.
- `npm run docusaurus clear`: Clears the build cache.
- `npm run docusaurus serve`: Serves the built static site.
- `npm run docusaurus write-translations`: Extracts text for internationalization.
- `npm run docusaurus write-heading-ids`: Generates heading IDs for Markdown files.
- `npm run docusaurus swizzle`: Ejects and customizes Docusaurus components.

---

# Deployment

The website is automatically deployed to GitHub Pages via a GitHub Actions workflow defined in `.github/workflows/main.yml`.

The workflow is triggered on every push to the `main` branch. It performs the following steps:

1.  **Lint:** Runs `npm run lint` to check for code style issues.
2.  **Build:** Runs `npm run typecheck` and `npm run build` to ensure the project builds successfully.
3.  **Deploy:** Deploys the contents of the `build` directory to the `gh-pages` branch.
4.  **Algolia Crawl:** Triggers a new crawl in Algolia to update the search index with the latest content.
