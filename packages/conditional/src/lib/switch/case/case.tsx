import { If } from "../../if/if";
import { ConditionalProps } from "../../types";

/**
 * Defines a conditional branch within `Switch`.
 *
 * `Switch` renders the first `Switch.Case` whose `condition` is `true`.
 */
export const Case = ({ condition, children }: ConditionalProps) => {
  return <If condition={condition}>{children}</If>;
};
