import {ref, get, set, child, update, remove, onValue} from "firebase/database";
import {db} from "./Firebase.js"

function insertData(key, val) {
    // parse the search string
    console.log("SEARCHING");
    // insert the recipe
    set(ref(db,key), {
        value: val
    })
    .then(() => {
        console.log("insert successful!");
        return 1;
    })
    .catch((error) => {
        console.log("insert unsuccessful: "+error);
        return 1;
    });
    return 0;
}

function selectData(key) {
    const dbref = ref(db);
    get(child(dbref,key))
    .then((snapshot) => {
        if (snapshot.exists()) {
            return snapshot.val().value;
        } else {
            console.log("no data found");
            return 1;
        }
    })
    .catch((error) => {
        console.log("select unsuccessful: "+error);
        return 1;
    });
}

function updateData(key, newValue) {
    console.log("UPDATING");
    // update the recipe
    update(ref(db,key), {
        value: newValue
    })
    .then(() => {
        console.log("update successful!");
        return 1;
    })
    .catch((error) => {
        console.log("update unsuccessful: "+ error);
        return 1;
    })
    return 0;
}
function removeData(key){
    console.log("REMOVING");
    // removing old recipes
    remove(ref(db,key))
    .then(()=> {
        console.log("old data found.. removing "+key);
        return 0;
    })
    .catch((error)=>{
        console.log("removal unsuccessful: " + error);
        return 1;
    });
}

export {insertData, selectData, updateData, removeData}