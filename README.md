# Open Source Libs

This repository is my Nx monorepo for open-source libraries I create during day-to-day work.

Some packages start as small utilities or experiments that solve a real problem in production work, then graduate into reusable libraries here. The repo currently has one published library and is intended to keep expanding as new packages are extracted over time.

## Current Packages

- `conditional` - a small React library for declarative conditional rendering with `If`, `Switch.Case`, and `Switch.Default`

Each package lives under `packages/` and is developed, tested, and released independently through Nx.

## Workspace Stack

- Nx for workspace orchestration and release management
- TypeScript for source and type declarations
- Vite for library builds
- Vitest for unit tests
- ESLint for linting

## Getting Started

```bash
npm install
bun install
yarn install
pnpm install
```

To see all projects in the workspace:

```bash
npm exec -- nx show projects
```

## Working With A Package

Examples for the current `conditional` package:

```bash
npm exec -- nx run conditional:build
npm exec -- nx run conditional:test
npm exec -- nx run conditional:lint
npm exec -- nx run conditional:typecheck
```

You can replace `conditional` with any future package name as the monorepo grows.

## Package Docs

- [`packages/conditional/README.md`](packages/conditional/README.md) - usage and API for the `conditional` package

## Releases

Nx Release is configured for workspace-managed publishing. Right now the release scope is set to `conditional`, and that can be expanded in `nx.json` as more libraries are added.

Useful commands:

```bash
# inspect the resolved release config
npm exec -- nx release --printConfig

# preview the next version and changelog changes
npm exec -- nx release version patch --dry-run

# generate a release plan
npm exec -- nx release plan minor

# publish a prepared release
npm exec -- nx release publish
```
