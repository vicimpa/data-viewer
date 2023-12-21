import { FC, ReactNode } from "preact/compat";

import { MapView } from "./MapView";
import { Row } from "./Row";
import { Typo } from "./Typo";

export type TItemProps = {
  index?: string | number;
  data: any;
  show?: boolean;
  children?: ReactNode;
};

export const Item: FC<TItemProps> = ({ index, data, children, show = false }) => {
  if (data === undefined) {
    return (
      <Row index={index}>
        <Typo variant="undefined">undefined</Typo>
        {children}
      </Row>
    );
  }

  if (data === null)
    return (
      <Row index={index}>
        <Typo variant="null">null</Typo>
        {children}
      </Row>
    );

  if (typeof data === 'number')
    return (
      <Row index={index}>
        <Typo variant="number">{data}</Typo>
        {children}
      </Row>
    );

  if (typeof data === 'bigint')
    return (
      <Row index={index}>
        <Typo variant="number">{data.toString()}</Typo>
        <Typo variant="bigint">n</Typo>
        {children}
      </Row>
    );

  if (typeof data === 'string')
    return (
      <Row index={index}>
        <Typo>'</Typo>
        <Typo variant="string">{data}</Typo>
        <Typo>'</Typo>
        {children}
      </Row>
    );

  if (typeof data === 'boolean')
    return (
      <Row index={index}>
        <Typo variant="boolean">{JSON.stringify(data)}</Typo>
        {children}
      </Row>
    );

  if (typeof data === 'object') {
    if (Array.isArray(data)) {
      return (
        <MapView
          bracket="[]"
          index={index}
          type="array"
          show={show}
          data={data.map((v, i) => [i, v])}>
          {children}
        </MapView>
      );
    }

    return (
      <MapView
        index={index}
        show={show}
        data={Object.entries(data)}>
        {children}
      </MapView>
    );
  }

  return null;
};