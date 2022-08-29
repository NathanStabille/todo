import { db } from "../libs/firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const addItem = async (value: string, categorie: string) => {
  const docRef = await addDoc(collection(db, "list"), {
    value: value,
    categorie: categorie,
    done: false,
  });
};

export const getItems = async () => {
  const newQueryList = [] as any;
  const queryList = await getDocs(collection(db, "list"));

  queryList.forEach((item) => {
    newQueryList.push(item.data());
    console.log(item.id)
  });

  return newQueryList;
};

export const deleteItem = async () => {
  const item = await deleteDoc(doc(db, "list", ""));
};
