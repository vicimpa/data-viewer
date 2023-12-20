import { FC, ReactNode } from "preact/compat";

import { useSignal } from "@preact/signals";

import { Item } from "./Item";
import { Row } from "./Row";
import { Tab, useTabContext } from "./Tab";
import { Text } from "./Text";

type TObjectViewProps = {
  data: object;
  show?: boolean;
  children?: ReactNode;
};

export const ObjectView: FC<TObjectViewProps> = ({ data, children, show: initialShow }) => {
  const tab = useTabContext();
  const show = useSignal(!!initialShow);
  const array = Object.entries(data);

  const Top = (
    <>
      <Text variant="syntax">{`{`}</Text>

      {
        array.length ? (
          <Text variant="comment" noselect onClick={() => { show.value = !show.value; }}>
            {!show.value ? '˯ ' : '˰ '}
            {show.value ? 'object' : array.length + ' items'}
          </Text>
        ) : <Text variant="comment" noselect>empty</Text>
      }

      {(!show.value || !array.length) ? (
        <Text variant="syntax">{`}`}</Text>
      ) : null}
    </>
  );

  return (
    <>
      {tab ? Top : (<Row>{Top}</Row>)}

      {array.length && show.value ? (
        <>
          <Tab>
            {
              array.map(([key, value], i, d) => value !== undefined ? (
                <Row key={i}>
                  <Text variant="identifier">
                    {key}
                  </Text>
                  <Text variant="syntax">
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
            <Text variant="syntax">{`}`}</Text>
            {children}
          </Row>
        </>
      ) : (
        null
      )}
    </>
  );
};