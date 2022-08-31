import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { getItems } from "../services/List";
import { ListItemType } from "../types/allTypes";

interface IListContext {
  list: ListItemType[];

  setList: (list: ListItemType[]) => void;
}

interface IListProviderProps {
  children: ReactNode
}

const ListContext = createContext({} as IListContext);

export const useListContext = () => {

  return useContext(ListContext)
}


export const ListProvider: React.FC<IListProviderProps> = ({children}) => {

  const [list, setList] = useState([] as ListItemType[]);



  useEffect(() => {
    const getAllItems = async () => {
      setList(await getItems());
    };

    getAllItems();
  }, []);



  return (


    <ListContext.Provider value={{list, setList}}>
      {children}
    </ListContext.Provider>
  )
}
