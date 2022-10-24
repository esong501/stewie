// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
