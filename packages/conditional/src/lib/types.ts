import type { PropsWithChildren, ReactElement, ReactNode } from "react";

export type ConditionalProps = PropsWithChildren<{ condition: boolean }>;

export type ChildType =
  | string
  | number
  | ReactElement<unknown, string | React.JSXElementConstructor<unknown>>
  | Iterable<ReactNode>
  | React.ReactPortal;
