import {insertData, selectData, updateData, removeData} from "../Services/FirebaseModule.js"

insertData("UNIT_TEST_123", "HELLO WORLD");
if (selectData("UNIT_TEST_123") == 1){
    console.log("INSERT 0");
} else
    console.log("INSERT 1");

updateData("UNIT_TEST_123", "HELO DATABASE");
if (selectData("UNIT_TEST_123") != "HELO DATABASE"){
    console.log("UPDATE 0");

} else
    console.log("UPDATE 1");

removeData("UNIT_TEST_123", "HELO DATABASE");
if (selectData("UNIT_TEST_123") != 0){
    console.log("REMOVE 0");
} else
    console.log("REMOVE 1");