import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getCategories } from "../services/Categories";
import { CategoriesType } from "../types/allTypes";



interface ICategoriesContext {
  categories: CategoriesType[];
  setCategories: (categories: CategoriesType[]) => void;
}

interface ICategoriesProviderProps {
  children: ReactNode;
}

const CategoriesContext = createContext({} as ICategoriesContext);

export const useCategoriesContext = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider: React.FC<ICategoriesProviderProps> = ({
  children,
}) => {
  const [categories, setCategories] = useState([] as CategoriesType[]);

  useEffect(() => {
    const getAllCategories = async () => {
      setCategories(await getCategories());
    };

    getAllCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
