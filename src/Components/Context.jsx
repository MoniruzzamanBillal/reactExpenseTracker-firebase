import React, { createContext, useContext, useState, useEffect } from "react";

import { signInWithPopup, signOut } from "firebase/auth";
import {
  Auth,
  GoogleSignProvider,
  DataBase,
} from "../FirebaseConfig/FirebaseConfig";

import {
  collection,
  orderBy,
  addDoc,
  serverTimestamp,
  where,
  query,
  onSnapshot,
} from "firebase/firestore";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [recentINCO, setRecentIn] = useState("");
  const [recentEXPE, setRecentEx] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [inc, setInc] = useState();
  const [exp, setExp] = useState();
  let sav;
  let inco;
  let expe;
  let saving;
  const msgReference = collection(DataBase, "transactions");

  //   console.log(Auth.currentUser.uid);
  const signInGoogle = async () => {
    // console.log("Sign in button click");
    try {
      const result = await signInWithPopup(Auth, GoogleSignProvider);
      setIsAuth(true);
    } catch (err) {
      console.log(err);
    }
  };
  // google sign in function ends

  // log out starts

  const logOut = async () => {
    console.log("logout click");
    try {
      await signOut(Auth);
      setIsAuth(false);
    } catch (err) {
      console.log(err);
    }
  };
  // log out ends

  //   sending data to firebase
  const onUpdateClick = async () => {
    if (inc === undefined || exp === undefined) {
      alert("You are lazy!!! enter proper value.");
      return;
    } else {
      setRecentIn(inc);
      setRecentEx(exp);
      sav = inc - exp;

      console.log(inc);
      console.log(exp);
      console.log(typeof inc);
      const { uid } = Auth.currentUser;
      await addDoc(msgReference, {
        income: inc,
        expense: exp,
        saving: sav,
        uid,
        timespan: serverTimestamp(),
      });

      setInc(" ");
      setExp(" ");
    }
  };
  //   sending data to firebase ends

  // getting data from firebase

  useEffect(() => {
    const FilterData = query(msgReference, orderBy("timespan"));
    const unscribe = onSnapshot(FilterData, (ele) => {
      let message = [];
      ele.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });

      setData(message);
      //   console.log(message);
    });

    return () => unscribe;
  }, []);

  inco = data.map((ele) => ele.income);
  expe = data.map((ele) => ele.expense);
  saving = data.map((ele) => ele.saving);
  let i;
  let save = 0;
  for (i = 0; i < saving.length; i++) {
    save += saving[i];
    // console.log(saving[i]);
    // console.log(save);
  }

  let addSize = inco.length;
  let expSize = expe.length;

  let recentAdd = inco[addSize - 1];
  let recentExp = expe[expSize - 1];

  //   console.log(inco);
  //   console.log(expe);
  //   console.log(saving);
  //   console.log(recentAdd);

  return (
    <AppContext.Provider
      value={{
        logOut,
        isAuth,
        recentAdd,
        recentExp,
        save,
        inco,
        expe,
        saving,
        inc,
        exp,
        recentINCO,
        recentEXPE,
        setInc,
        setExp,
        onUpdateClick,
        signInGoogle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, GlobalContext };
