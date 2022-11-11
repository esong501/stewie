import {insertData, selectData, updateData, removeData} from "../Services/FirebaseModule.js"

const data = selectData("recipe");
// if (data == 1){
//     console.log("selected failed");
// } else {
//     console.log(data);
// //     Object.values(data).map((recipe) => {
// //     setRecipes((oldArray)  => [recipe]); // Add each recipe to the recipes array
// //   });
// }