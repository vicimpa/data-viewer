import { FC } from "preact/compat";

import { Item } from "./components/Item";
import s from "./JsonViewer.module.sass";

type TJsonViewerProps = {
  data?: any;
};

export const JsonViewer: FC<TJsonViewerProps> = ({ data }) => {

  return (
    <div class={s.viewer}>
      <Item data={data} />
    </div>
  );
};