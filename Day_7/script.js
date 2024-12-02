sayhello = () => {
   console.log("hello")
};
console.log("task staretes")
setTimeout(sayhello, 3000)
console.log("task end")
console.log("task started")
setTimeout(() => {
    console.log("fist task completed");
setTimeout(() => {
    console.log("second task completed");
setTimeout(() => {
    console.log("third task completed");
},3000)

},2000)

},5000)

