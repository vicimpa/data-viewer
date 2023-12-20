import { FC } from "preact/compat";

import { ObjectView } from "./components/ObjectView";
import s from "./JsonViewer.module.sass";

type TJsonViewerProps = {
  data: object;
  show?: boolean;
};

export const JsonViewer: FC<TJsonViewerProps> = ({ data, show = true }) => {

  return (
    <div class={s.viewer}>
      <ObjectView data={data} show={show} />
    </div>
  );
};