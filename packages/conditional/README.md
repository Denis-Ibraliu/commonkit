# @commonkit/conditional

`@commonkit/conditional` is a small React package for declarative conditional rendering.

It helps you render UI branches in a more explicit, component-based way instead of relying on inline `&&` checks or nested ternaries in JSX.

It exports two components:

- `If` for simple boolean checks
- `Switch` for multi-branch rendering with `Switch.Case` and `Switch.Default`

## Installation

```bash
npm install @commonkit/conditional
yarn add @commonkit/conditional
pnpm add @commonkit/conditional
bun add @commonkit/conditional
```

`react` is a peer dependency and must be installed in the consuming app.

## Usage

```tsx
import { If, Switch } from "@commonkit/conditional";
```

### `If`

Render children only when a condition is truthy.

```tsx
import { If } from "@commonkit/conditional";

type Props = {
  isLoggedIn: boolean;
};

export function WelcomeMessage({ isLoggedIn }: Props) {
  return (
    <If condition={isLoggedIn}>
      <p>Welcome back.</p>
    </If>
  );
}
```

### `Switch`

Use `Switch` when you want to render the first matching branch.

```tsx
import { Switch } from "@commonkit/conditional";

type Status = "idle" | "loading" | "success" | "error";

type Props = {
  status: Status;
};

export function StatusView({ status }: Props) {
  return (
    <Switch>
      <Switch.Case condition={status === "loading"}>
        <p>Loading...</p>
      </Switch.Case>

      <Switch.Case condition={status === "error"}>
        <p>Something went wrong.</p>
      </Switch.Case>

      <Switch.Case condition={status === "success"}>
        <p>Saved successfully.</p>
      </Switch.Case>

      <Switch.Default>
        <p>Ready.</p>
      </Switch.Default>
    </Switch>
  );
}
```

## `Switch` Rules

- `Switch` must contain at least one `Switch.Case`
- `Switch` must contain exactly one `Switch.Default`
- `Switch` only accepts `Switch.Case` and `Switch.Default` as direct children
- If multiple cases are `true`, the first matching case is rendered

## API

### `If`

```tsx
type IfProps = {
  condition: boolean;
  children?: React.ReactNode;
};
```

### `Switch.Case`

```tsx
type SwitchCaseProps = {
  condition: boolean;
  children?: React.ReactNode;
};
```

### `Switch.Default`

```tsx
type SwitchDefaultProps = {
  children?: React.ReactNode;
};
```
