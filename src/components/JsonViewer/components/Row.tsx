import { FC, ReactNode } from "preact/compat";

import s from "../JsonViewer.module.sass";
import { useTabContext } from "./Tab";

type TRowProps = {
  children?: ReactNode;
};

export const Row: FC<TRowProps> = ({ children }) => {
  const tab = useTabContext();

  return (
    <div class={s.row}>
      <span style={{ paddingLeft: (16 * tab) + 'px' }} />
      {children}
    </div>
  );
}; 
