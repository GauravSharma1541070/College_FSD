// const myPromise = new Promise((resolve,reject) => {
//     let success = false;
//     if(success){
//         resolve("Data Send Successfully");
//     } else{
//         reject("data failed");
//     }
// });
// myPromise
//     .then((message) => {
//         console.log("Data Recieved" + message);
//     })
//     .catch((err) => {
//         console.log("Failed to Fetch: " + err);
//     });

    function task (msg, dely){
        return new Promise((resolve)=>{
            setTimeout(() => {
                console.log(msg);
                resolve();
            },dely);
        });
    }
   task("first task comp",1000)
   .then(() => task("second task is complted",2000))
   .then(() => task("third task is complted",3000))
   .then(() => task("fourth task is complted",4000))