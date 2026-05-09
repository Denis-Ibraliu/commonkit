import { If } from "../../if/if";
import { ConditionalProps } from "../../types";


export const Case = ({ condition, children }: ConditionalProps) => {
  return <If condition={condition}>{children}</If>;
};

