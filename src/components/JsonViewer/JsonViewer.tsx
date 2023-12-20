import { FC } from "preact/compat";

import { ObjectView } from "./components/ObjectView";
import s from "./JsonViewer.module.sass";

type TJsonViewerProps = {
  data: object;
};

export const JsonViewer: FC<TJsonViewerProps> = ({ data }) => {

  return (
    <div class={s.viewer}>
      <ObjectView data={data} show />
    </div>
  );
};