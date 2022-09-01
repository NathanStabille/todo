import { db } from "../libs/firebase";
import {
  collection,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
  setDoc,
} from "firebase/firestore";
import { ListItemType } from "../types/allTypes";

export const addCategory = async (category: string, color: string) => {
  await setDoc(doc(db, "categories", category), {
    category: category,
    color: color,
  });
};

export const getCategories = async () => {
  const newQueryList = [] as any;
  const queryList = await getDocs(collection(db, "categories"));

  queryList.forEach((item) => {
    newQueryList.push({ id: item.id, ...item.data() });
  });

  return newQueryList;
};

export const editCategory = async (value: string, id: string) => {
  const docRef = doc(db, "categories", id);

  await updateDoc(docRef, {
    value: value,
  });
};

export const deleteCategory = async (id: string) => {
  await deleteDoc(doc(db, "categories", id));
};

export const filterCategory = async (category: string) => {
  const docRef = collection(db, "list");
  const newQueryList = [] as any;

  const q = query(docRef, where("category", "==", category));

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((item) => {
    newQueryList.push({ id: item.id, ...item.data() });
  });

  return newQueryList as ListItemType[];
};
