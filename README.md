# Open Source Libs

This repository is my Nx monorepo for open-source libraries I create during day-to-day work.

Some packages start as small utilities or experiments that solve a real problem in production work, then graduate into reusable libraries here. The repo currently has one published library and is intended to keep expanding as new packages are extracted over time.

## Current Packages

- `@commonkit/conditional` - a small React library for declarative conditional rendering with `If`, `Switch.Case`, and `Switch.Default`

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

Examples for the current `@commonkit/conditional` package:

```bash
npm exec -- nx run '@commonkit/conditional:build'
npm exec -- nx run '@commonkit/conditional:test'
npm exec -- nx run '@commonkit/conditional:lint'
npm exec -- nx run '@commonkit/conditional:typecheck'
```

You can replace `@commonkit/conditional` with any future package name as the monorepo grows.

## Package Docs

- [`packages/conditional/README.md`](packages/conditional/README.md) - usage and API for the `@commonkit/conditional` package

## Releases

Nx Release is configured for workspace-managed publishing. Right now the release scope is set to `@commonkit/conditional`, and that can be expanded in `nx.json` as more libraries are added.

Useful commands:

```bash
# inspect the resolved release config
npm exec -- nx release --printConfig

# preview the next version and changelog changes from conventional commits
npm exec -- nx release version --dry-run

# apply the next version inferred from conventional commits
npm exec -- nx release version

# publish the versioned package
npm exec -- nx release publish
```

Commit messages should follow Conventional Commits for automatic versioning:

```text
feat(conditional): add support for nested fallback rendering
fix(conditional): avoid rendering default branch twice
```

`feat` triggers a minor bump, `fix` triggers a patch bump, and breaking changes trigger a major bump.

For the very first release, use `--first-release` because there is no previous tag yet:

```bash
npm exec -- nx release version --first-release --dry-run
npm exec -- nx release version --first-release
npm exec -- nx release publish --first-release
```
