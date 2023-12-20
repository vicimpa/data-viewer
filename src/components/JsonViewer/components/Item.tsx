import { FC, ReactNode } from "preact/compat";

import { ArrayView } from "./ArrayView";
import { ObjectView } from "./ObjectView";
import { Text } from "./Text";

type TItemProps = {
  data?: any;
  children?: ReactNode;
};

export const Item: FC<TItemProps> = ({ data, children }) => {
  if (data === null) {
    return (
      <>
        <Text variant="null">null</Text>
        {children}
      </>
    );
  }

  if (typeof data === 'string')
    return (
      <>
        <Text variant="syntax">"</Text>
        <Text variant="string">{data}</Text>
        <Text variant="syntax">"</Text>
        {children}
      </>
    );

  if (typeof data === 'number' || typeof data === 'bigint')
    return (
      <>
        <Text variant="number">{data}</Text>
        {children}
      </>
    );

  if (typeof data === 'boolean')
    return (
      <>
        <Text variant="boolean">{JSON.stringify(data)}</Text>
        {children}
      </>
    );

  if (data instanceof RegExp) {
    return (
      <>
        <Text variant="syntax">/</Text>
        <Text variant="regexp">{data.source}</Text>
        <Text variant="syntax">/</Text>
        <Text variant="regexp-flags">{data.flags}</Text>
        {children}
      </>
    );
  }

  if (data instanceof Date) {
    return (
      <>
        <Text variant="syntax">"</Text>
        <Text variant="date">{data.toISOString()}</Text>
        <Text variant="syntax">"</Text>
        {children}
        <Text variant="comment">date</Text>
      </>
    );
  }

  if (typeof data === 'object') {
    if (!Array.isArray(data)) {
      return (
        <ObjectView data={data}>
          {children}
        </ObjectView>
      );
    }

    return (
      <ArrayView data={data}>
        {children}
      </ArrayView>
    );
  }

  return null;
};