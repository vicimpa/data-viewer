import { JsonViewer } from "components/JsonViewer/JsonViewer";

export const App = () => {
  console.log(typeof true);

  return (
    <>
      <JsonViewer data={{
        testString: "Hello world!",
        testNumber: 123,
        testBoolean: true,
        testNull: null,
        testDate: new Date(),
        testRegExp: /123/gi,
        testObject: {
          hello: 'world',
          emptyObject: {},
          fullArray: [
            1, 2, 3, 4, 5, 6
          ]
        },
        testArray: [
          'Roman',
          'Igor',
          'Masha',
          {
            test: 123
          }
        ]
      }} />
    </>
  );
};