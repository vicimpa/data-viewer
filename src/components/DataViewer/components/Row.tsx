import { FC, ReactNode } from "preact/compat";

import s from "../Data.module.sass";
import { useTabContext } from "./Tab";
import { Typo } from "./Typo";

export type TRowProps = {
  index?: string | number;
  children?: ReactNode;
};

export const Row: FC<TRowProps> = ({ index, children, }) => {
  const tab = useTabContext();

  return (
    <div class={s.row} >
      <span>
        {`  `.repeat(tab)}
      </span>
      {
        index !== undefined ? (
          <>
            <Typo
              noselect={typeof index !== 'string'}
              variant={typeof index === 'string' ? 'identifier' : 'syntax'}>
              {index}
            </Typo>
            <Typo noselect={typeof index !== 'string'}>{`: `}</Typo>
          </>
        ) : null
      }
      {children}
    </div>
  );
};