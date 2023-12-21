import { FC } from "preact/compat";

import { Item } from "./components/Item";
import s from "./Data.module.sass";

export type TDataViewerProps = {
  data?: any;
};

export const DataViewer: FC<TDataViewerProps> = ({ data }) => {
  return (
    <div class={s.viewer}>
      <Item data={data} show />
    </div>
  );
};
