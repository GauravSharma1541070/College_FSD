// function fetchdata() {
//     return new Promise((resolve,reject) => {
//         let data = { id: 1, name:"Abhu", city:'GZB'}
//         setTimeout(() => {
//             resolve(data);
//         },3000);
//     });
// }
// fetchdata()
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })



function fetchdata() {
    return new Promise((resolve,reject) => {
        const student = [
               { name: 'Alice', score: 50},
               { name: 'Bob', score: 65},
               { name: 'Charlie', score: 80}
        ]
        setTimeout(() => {
            resolve(student);
        },3000);
    });
}
fetchdata()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
