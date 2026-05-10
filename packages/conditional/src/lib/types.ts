import type { PropsWithChildren, ReactElement, ReactNode } from "react";

/**
 * Shared props for conditional rendering components that only render their
 * children when `condition` is truthy.
 */
export type ConditionalProps = PropsWithChildren<{ condition: boolean }>;

/**
 * Supported child shapes for `Switch` branch validation after React normalizes
 * `children` into an array.
 */
export type ChildType =
  | string
  | number
  | ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  | Iterable<ReactNode>
  | React.ReactPortal;
