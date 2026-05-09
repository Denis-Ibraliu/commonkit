# Conditional

Nx workspace for a single publishable React library: `@org/conditional`.

## Workspace

- `packages/conditional` is the only library in the repo.
- The package is buildable and publishable.
- `react` is declared as a peer dependency of `@org/conditional`.
- TypeScript, ESLint, Vite, and Vitest are configured through Nx.

## Development

```bash
npm install
npm exec -- nx build @org/conditional
npm exec -- nx test @org/conditional
npm exec -- nx lint @org/conditional
```

## Package Usage

```tsx
import { Conditional } from '@org/conditional';

export function Example() {
  return <Conditional />;
}
```

## Release Management

Nx Release is scoped to `@org/conditional`, so versioning and publishing commands only affect this package.

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

The release pre-step is configured in `nx.json` to build `@org/conditional` before versioning.
