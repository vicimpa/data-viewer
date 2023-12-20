import { createContext } from "preact";
import { FC, ReactNode } from "preact/compat";
import { useContext } from "preact/hooks";

export const TabContext = createContext(0);
export const useTabContext = () => useContext(TabContext);

type TTabProps = {
  children?: ReactNode;
};

export const Tab: FC<TTabProps> = ({ children }) => {
  const tab = useTabContext();

  return (
    <TabContext.Provider value={tab + 1}>
      {children}
    </TabContext.Provider>
  );
};