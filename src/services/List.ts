import { db } from "../libs/firebase";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  updateDoc,
  getDoc,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export const addItem = async () => {
  const docRef = await setDoc(doc(db, "list", "nameID"), {
    name: "Samuell Stabille",
    date: new Date(),
    done: false,
  });
};

export const getItems = async () => {
  const queryList = await getDocs(collection(db, "list"));

  queryList.forEach((doc) => {
    console.log(doc.data());
  });
};

export const deleteItem = async () => {
  const item = await deleteDoc(doc(db, "list", ""));
};
