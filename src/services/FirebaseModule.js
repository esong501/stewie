import {ref, get, set, child, update, remove, onValue} from "firebase/database";
import {db} from "./Firebase.js"

async function insertData(key, val) {
    // parse the search string
    console.log("SEARCHING");
    // insert the recipe
    const data = await set(ref(db,key), {
        value: val
    })
    .then(() => {
        console.log("insert successful!");
        return 0;
    })
    .catch((error) => {
        console.log("insert unsuccessful: "+error);
        return 1;
    });
    return data;
}

async function selectData(key) {
    const dbref = ref(db,key);
    const data = await get(dbref)
    .then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("no data found");
            return 1;
        }
    })
    .catch((error) => {
        console.log("select unsuccessful: "+error);
        return 1;
    });
    return data;
}

async function updateData(key, newValue) {
    console.log("UPDATING");
    // update the recipe
    const data = await update(ref(db,key), {
        value: newValue
    })
    .then(() => {
        console.log("update successful!");
        return 0;
    })
    .catch((error) => {
        console.log("update unsuccessful: "+ error);
        return 1;
    })
    return data;
}

async function removeData(key){
    console.log("REMOVING");
    // removing old recipes
    const data = await remove(ref(db,key))
    .then(()=> {
        console.log("old data found.. removing "+key);
        return 0;
    })
    .catch((error)=>{
        console.log("removal unsuccessful: " + error);
        return 1;
    });
    return data;
}

export {insertData, selectData, updateData, removeData}