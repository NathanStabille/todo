import { db } from "../libs/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDocs,
  deleteDoc,
  query,
  where,
} from "firebase/firestore";

export const addCategory = async (categorie: string) => {
  await addDoc(collection(db, "categories"), {
    value: categorie,

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

export const editItem = async (value: string, id: string) => {
  const docRef = doc(db, "categories", id);

  await updateDoc(docRef, {
    value: value,
  });
};

export const toggleCheckbox = async (done: boolean, id: string) => {
  const docRef = doc(db, "categories", id);

  await updateDoc(docRef, {
    done: done ? false : true,
  });
};

export const deleteItem = async (id: string) => {
  await deleteDoc(doc(db, "categories", id));
};

export const filterCategory = async (category: string) => {
  const docRef = collection(db, "categories");

  const q = query(docRef, where("category", "==", category));
};
