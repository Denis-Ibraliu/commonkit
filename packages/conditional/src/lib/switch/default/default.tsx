import type { PropsWithChildren } from "react";

/**
 * Defines the fallback branch rendered by `Switch` when no `Switch.Case`
 * matches.
 */
export const Default = ({ children }: PropsWithChildren) => children;
