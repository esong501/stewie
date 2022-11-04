// Import the functions
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCW1ie6WabQheLgw7liLn2sXhVkiJWSxew",
  authDomain: "firsttimechef.firebaseapp.com",
  databaseURL: "https://firsttimechef-default-rtdb.firebaseio.com",
  projectId: "firsttimechef",
  storageBucket: "firsttimechef.appspot.com",
  messagingSenderId: "551750245679",
  appId: "1:551750245679:web:9d8028c300b1b0ff4195da",
  measurementId: "G-B52ZNM4BLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getDatabase(app)

export {db}