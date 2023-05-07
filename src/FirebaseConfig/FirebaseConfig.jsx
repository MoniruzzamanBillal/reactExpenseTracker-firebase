import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import {} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAlOBMgHEQSlkD5kDMLCK0J2QN1EnUdKtI",
  authDomain: "expense-tracker-4099e.firebaseapp.com",
  projectId: "expense-tracker-4099e",
  storageBucket: "expense-tracker-4099e.appspot.com",
  messagingSenderId: "416648274647",
  appId: "1:416648274647:web:ec0f060c30edbe8e494692",
  measurementId: "G-YDTQKEWDWT",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
