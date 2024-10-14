import { DataViewer } from "components/DataViewer";

export const App = () => {

  return (
    <>
      <DataViewer data={window} />
      <a href="https://github.com/vicimpa/data-viewer">GitHub Repository</a>
    </>
  );
};