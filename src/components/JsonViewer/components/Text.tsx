import { FC, JSX, ReactNode } from "preact/compat";

import s from "../JsonViewer.module.sass";

type TVari = 'comment' | 'regexp-flags' | 'index' | 'syntax' | 'number' | 'string' | 'boolean' | 'null' | 'date' | 'regexp' | 'identifier';

type TTextProps = {
  variant: TVari;
  noselect?: boolean;
  onClick?: JSX.MouseEventHandler<HTMLSpanElement>;
  children?: ReactNode;
};

export const Text: FC<TTextProps> = ({ variant, children, onClick, noselect }) => {
  return (
    <span
      onClick={onClick}
      data-noselect={noselect || undefined}
      class={`${s.text} ${s[variant]} ${s[onClick ? 'clicked' : '']}`}>
      {children}
    </span>
  );
};