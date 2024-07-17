// promise combinator methods
// Promise.all()
// Promise.any()
// Promise.race()
// Promise.allSettled()

// program 1
// 1. Promise.all() 
/* async function PromiseAll(){
    let a = await PromiseAll([
        Promise.resolve("Hello1"),
        Promise.reject("Hello2"),
        Promise.resolve("Hello3"),
    ])

    console.log(a)
}

PromiseAll()
*/

// program 2
// Promise.allSettled()
// async function PromiseAllSettled(){
//     let b =  await Promise.allSettled([
//          Promise.resolve("hello"),
//          Promise.reject("hello2"),
//          Promise.resolve("hello3"),
//      ])

//      console.log(b)
//  }
//  PromiseAllSettled()

// program 3
// Promise.race()
function Student() {
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentA is called')
        },3000)
    })
}

function StudentB(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve('studentB is called')
        },3000)
    })
}
    
// async function getRacePromise(){
//     let b = await Promise.race([
//         Student(),
//         StudentB()
//     ])
//     console.log(b)
// }
// getRacePromise()

// Promise.any()
async function getPromiseAny(){
    let b =  await Promise.any([
         Promise.resolve("bye"),
         Promise.reject("bye2"),
         Student(),
         StudentB()
     ])
     console.log(b)
  }
getPromiseAny()
