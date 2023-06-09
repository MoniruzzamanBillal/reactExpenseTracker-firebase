import React, { createContext, useContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
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
  const [selectedDate, setSelectedDate] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [inc, setInc] = useState();
  const [exp, setExp] = useState();
  const [currentUser, setCurrentUser] = useState({});

  const [selected, setSelected] = useState("");

  const handleDateChange = (event) => {
    const inputDate = new Date(event.target.value);
    const options = { day: "numeric", month: "short", year: "numeric" };
    const formattedDate = inputDate.toLocaleDateString("en-GB", options);

    setSelected(formattedDate);
  };

  let sav;
  let inco;
  let expe;
  let timeZONE;
  let saving;
  const msgReference = collection(DataBase, "transactions");

  // navbar
  const [theme, changeTheme] = useState("light-theme");

  function ToggleTheme() {
    console.log("theme click");
    return theme === " " ? changeTheme("light-theme") : changeTheme(" ");
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // navbar ends

  useEffect(() => {
    const unsub = onAuthStateChanged(Auth, (user) => {
      setCurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);

  // google sign in function starts
  const signInGoogle = async () => {
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
    if (inc === undefined || exp === undefined || selected === null) {
      alert("You are lazy!!! enter proper value.");
      return;
    } else {
      sav = inc - exp;

      const { uid, displayName } = Auth.currentUser;
      await addDoc(msgReference, {
        name: displayName,
        income: inc,
        expense: exp,
        saving: sav,
        date: selected,
        uid,
        timespan: serverTimestamp(),
      });
      setInc(" ");
      setExp(" ");
      setSelectedDate(null); // Reset the date input value
    }
  };
  //   sending data to firebase ends

  // getting data from firebase
  useEffect(() => {
    // const FilterData = query(msgReference, orderBy("timespan"));
    const FilterData = query(msgReference, orderBy("timespan", "desc")); // Add "desc" to sort from newest to oldest
    const unscribe = onSnapshot(FilterData, (ele) => {
      let message = [];
      ele.forEach((doc) => {
        message.push({ ...doc.data(), id: doc.id });
      });

      let idMatchMsg = [];
      if (currentUser !== null) {
        message.map((ele) => {
          if (ele.uid === currentUser.uid) {
            idMatchMsg.push(ele);
          }
        });
        setData(idMatchMsg);
      }
    });

    return () => unscribe;
  }, [data, currentUser]);

  inco = data.map((ele) => ele.income);
  expe = data.map((ele) => ele.expense);
  saving = data.map((ele) => ele.saving);
  timeZONE = data.map((ele) => ele.date);

  let i;
  let save = 0;
  for (i = 0; i < saving.length; i++) {
    save += saving[i];
  }

  let savingDays = saving.length;

  let addSize = inco.length;
  let expSize = expe.length;
  let dateSize = timeZONE.length;
  let savingSize = saving.length;

  // let recentAdd = inco[addSize - 1];
  // let recentExp = expe[expSize - 1];
  // let recentDate = timeZONE[dateSize - 1];
  // let recentSaving = saving[savingSize - 1];

  let recentAdd = inco[0];
  let recentExp = expe[0];
  let recentDate = timeZONE[0];
  let recentSaving = saving[0];
  return (
    <AppContext.Provider
      value={{
        handleDateChange,
        selected,
        savingDays,
        theme,
        ToggleTheme,
        data,
        timeZONE,
        logOut,
        isAuth,
        recentAdd,
        recentExp,
        recentDate,
        recentSaving,
        save,
        inco,
        expe,
        saving,
        inc,
        exp,
        setSelectedDate,
        selectedDate,
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
