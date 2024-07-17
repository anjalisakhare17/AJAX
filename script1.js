/*
sync and async
1. sync
3       3       3
A ----->B------>C -----> 9 sec , i.e serial execution

2. Async
// A ----> 2
// B ----> 2
// C ----> 2
2 sec , i.e parallel execution

*/

// program 1
// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }
// additionB()
// additionA()

// program 2

// function additionB(){
//     setTimeout(function(){
//         console.log("B is  executed")
//     },3000)
// }

// function addtionC(){
//     console.log("c is executed")
// }

// additionB()
// addtionC()

// program 3 ----> by using set time out function
// user create ----> user id -------> getInfo

// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//     }, 3000)

//     setTimeout(function () {
//         console.log("user id")
//     }, 2000)

//     setTimeout(function () {
//         console.log("get info")
//     }, 1000)
// }
//getInfo()

// program 4
// async execution --- sync
// function getInfo() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log("getId")
//             setTimeout(function () {
//                 console.log('getInfo')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
//getInfo()

// program 5

//promise 
// resolve , reject , pending
// promise ------async ---- sync 
// promise combinators 


let pro = new Promise(function (resolve, reject) {
    let a = 10
    if (a == 10) {
        resolve("hello")
    }
    else {
        reject("bye")
    }
})
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// pro.then(function (str) {
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })

// pro
// .then(function (str) {
//     console.log(str)
// })
// .catch(function (str) {
//     console.log(str)
// })
// .finally(function(){
//     console.log("i will run always")
// })


pro
.then(function (str) {
    console.log(str)
    return "hello"
})
.then(function(str3){
    console.log("hello3")
})
.catch(function (str) {
    console.log(str)
})
.finally(function(){
    console.log("i will run always")
})





