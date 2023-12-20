import { FC, ReactNode } from "preact/compat";

import { useSignal } from "@preact/signals";

import { Item } from "./Item";
import { Row } from "./Row";
import { Tab, useTabContext } from "./Tab";
import { Text } from "./Text";

type TArrayViewProps = {
  data: any[];
  children?: ReactNode;
};

export const ArrayView: FC<TArrayViewProps> = ({ data, children }) => {
  const tab = useTabContext();
  const show = useSignal(true);

  const Top = (
    <>
      <Text variant="syntax">{`[`}</Text>

      {
        data.length ? (
          <Text variant="comment" noselect onClick={() => { show.value = !show.value; }}>
            {!show.value ? '˯ ' : '˰ '}
            {show.value ? 'array' : data.length + ' items'}
          </Text>
        ) : <Text variant="comment" noselect>empty</Text>
      }

      {(!show.value || !data.length) ? (
        <Text variant="syntax">{`]`}</Text>
      ) : null}
    </>
  );

  return (
    <>
      {tab ? Top : (<Row>{Top}</Row>)}

      {data.length && show.value ? (
        <>
          <Tab>
            {
              data.map((value, i, d) => value !== undefined ? (
                <Row key={i}>
                  <Text variant="index" noselect>
                    {i}
                  </Text>
                  <Text variant="syntax" noselect>
                    {`: `}
                  </Text>
                  <Item data={value}>
                    {d.length - 1 > i ? (
                      <Text variant="syntax">,</Text>
                    ) : null}
                  </Item>

                </Row>
              ) : null)
            }
          </Tab>
          <Row>
            <Text variant="syntax">{`]`}</Text>
            {children}
          </Row>
        </>
      ) : (
        null
      )}
    </>
  );
};