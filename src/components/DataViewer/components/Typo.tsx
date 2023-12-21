import { FC, JSX, ReactNode } from "preact/compat";

import s from "../Data.module.sass";

export type TVariant =
  never
  | 'string'
  | 'number'
  | 'boolean'
  | 'bigint'
  | 'identifier'
  | 'syntax'
  | 'comment'
  | 'null'
  | 'undefined';

export type TTypoProps = {
  noselect?: boolean;
  variant?: TVariant;
  children?: ReactNode;
  onClick?: JSX.MouseEventHandler<HTMLSpanElement>;
};

export const Typo: FC<TTypoProps> = ({
  children,
  variant = 'syntax',
  noselect,
  onClick,
}) => {
  return (
    <span
      data-noselect={noselect || undefined}
      data-variant={variant}
      data-clicked={onClick ? true : undefined}
      class={s.typo}
      onClick={onClick}
    >
      {children}
    </span>
  );
};