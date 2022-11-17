import { db } from '.././services/Firebase.js'
import { useState } from 'react';
import { onValue, ref } from 'firebase/database';

//const [recipes, setRecipes] = useState([]);
var data = null;
const recipeRef = ref(db,"recipe");

onValue(recipeRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();
    });
}, {
    onlyOnce: true
});

console.log(data);