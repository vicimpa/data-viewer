import { DataViewer } from "components/DataViewer";

export const App = () => {

  return (
    <>
      <DataViewer data={{
        testString: 'My string',
        testNumber: 123.123,
        testBigint: 123n,
        testBoolean: true,
        testNull: null,
        testUndefined: undefined,
        testObject: {
          a: 1,
          b: 2,
        },
        testArray: [
          1, 2, 3, 4, 5
        ],
        emptyObject: {},
        emotyArray: []
      }} />
    </>
  );
};