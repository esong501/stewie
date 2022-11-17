import FirebaseModule from "FirebaseModule"


// userJSON is a string of all session data
// serialization
function saveData(userJSON) {
    localStorage.setItem("Progress",JSON.stringify(userJSON));
}

function fetchData(storageID) {
    return localStorage.setItem("Progress",userJSON);
}