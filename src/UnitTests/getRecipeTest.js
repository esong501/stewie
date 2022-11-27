import { selectData } from '.././services/FirebaseModule.js'

const data = await selectData("recipe")
.finally((res) => {
    return res
})

console.log(data);