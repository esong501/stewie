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

import {getDatabase, ref, set, child, update, remove} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-database.js";
import {fetchData, parseData} from "fetchData.mjs"
//import parseQuery from "parseQuery.js"

const db = getDatabase();

var inputStr = document.getElementById("input-query");
var searchBtn = document.getElementById("search-button");

function searchData() {
    // parse the search string
    console.log("SEARCHING");
    return null;
    // fetch with proper format
    // removing old recipes
    remove(ref(db,"Recipe Name"))
    .then(()=> {
        console.log("old data found.. updating data");
    })
    .catch(()=>{
        console.log("data not found.. insertting new data");
    });

    // insert the recipe
    set(ref(db,"Recipe Name"), {
        json: JSONString.value,
        QueryFields: [],
    })
    .then(() => {
        alert("search successful!");
    })
    .catch((error) => {
        alert("search unsuccessful: "+error);
    })
}

// assign event listener
searchBtn.addEventListener('onclick', searchData);