import { db } from "../libs/firebase";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
  setDoc,
} from "firebase/firestore";
import { ListItemType } from "../types/allTypes";

export const addItem = async (value: string, category: string) => {
  const queryList = await getDocs(collection(db, "list"));
  const queryCategories = await getDocs(collection(db, "categories"));

  const color = [] as string[];

  queryCategories.forEach((item) => {
    color.push(item.data().category === category ? item.data().color : "");
  });

  const id = queryList.empty
    ? "1"
    : (queryList.docs.at(-1)?.id as string) + "1";

  await setDoc(doc(db, "list", id), {
    value: value,
    category: category,
    done: false,
    color: color.join(""),
  });
};

export const getItems = async () => {
  const newQueryList = [] as any;
  const queryList = await getDocs(collection(db, "list"));

  queryList.forEach((item) => {
    newQueryList.push({ id: item.id, ...item.data() });
  });

  return newQueryList as ListItemType[];
};

export const editItem = async (value: string, id: string) => {
  const docRef = doc(db, "list", id);

  await updateDoc(docRef, {
    value: value,
  });
};

export const toggleCheckbox = async (done: boolean, id: string) => {
  const docRef = doc(db, "list", id);

  await updateDoc(docRef, {
    done: done ? false : true,
  });
};

export const deleteItem = async (id: string) => {
  await deleteDoc(doc(db, "list", id));
};
