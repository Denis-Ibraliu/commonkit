import { ConditionalProps } from "../types";

/**
 * Renders its children only when the provided `condition` evaluates to `true`.
 *
 * @example
 * ```tsx
 * <If condition={user.isAdmin}>
 *   <AdminPanel />
 * </If>
 * ```
 */
export const If = ({ condition, children }: ConditionalProps) => {
  return condition ? children : null;
};
