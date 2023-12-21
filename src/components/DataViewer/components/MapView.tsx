import { ReactNode } from "preact/compat";

import { useSignal } from "@preact/signals";

import { Item } from "./Item";
import { Row } from "./Row";
import { Tab } from "./Tab";
import { Typo } from "./Typo";

export type TMapViewProps<K extends string | number, V extends any> = {
  index?: string | number;
  bracket?: string;
  type?: string;
  data: [index: K, value: V][];
  show?: boolean;
  children?: ReactNode;
};

export const MapView = <K extends string | number, V extends any>(
  {
    index,
    data,
    children,
    show: initialShow = false,
    type = 'object',
    bracket = '{}'
  }: TMapViewProps<K, V>
) => {
  const [open = '{', close = '}'] = bracket;
  const show = useSignal(initialShow);

  return (
    <>
      <Row index={index}>
        <Typo>{open}</Typo>

        {
          data.length ? (
            <Typo
              variant="comment"
              noselect
              onClick={() => { show.value = !show.value; }}
            >
              {' '}
              {(show.value ? '˰' : '˯')}
              {' '}
              {show.value ? type : (data.length + ' items')}
              {' '}

            </Typo>
          ) : (
            <Typo variant="comment" noselect>{` empty `}</Typo>
          )
        }

        {
          (!data.length || !show.value) ? (
            <>
              <Typo>{close}</Typo>
              {children}
            </>
          ) : null
        }
      </Row>

      {
        (data.length && show.value) ? (
          <>
            <Tab>
              {
                data.map(([index, value], key) => (
                  <Item key={key} index={index} data={value}>
                    {
                      data.length - 1 > key ? (
                        <Typo>,</Typo>
                      ) : null
                    }
                  </Item>
                ))
              }
            </Tab>

            <Row>
              <Typo>{close}</Typo>
              {children}
            </Row>
          </>
        ) : null
      }

    </>
  );
};