// usage.js
import promise, { output } from "./awaiting.js";

function outputPlusValue(value) { return output + value };


promise.then(data => console.log(data)).catch(err => {
    console.log(err)
})
// promise.then(() => {
//   console.log(outputPlusValue(100));
//   setTimeout(() => console.log(outputPlusValue(100)), 1000);
// });