//promises
// Promises are specical javascript objects that
//  represets the completion or failure of an asynchronus operations and resulting its value

//it has three states
// 1 pending : inital state not fulfiled or rejected
// 2 fullfilled :  operation competed succefully
// 3 rejected : operation failed

//aa basic promise 

const promise =new Promise((resolve, reject)=>{
    let succes = true
    if(succes){
        resolve('promise resolved')
    }
    else{
        reject('promise got rejected')
    }
})

// promise.then((result)=>{
// console.log('promise got resolved',result)
// })
// .catch((error)=>{
//     console.error('Error',error)
// })

//Promises has 4 Methods.
// 1 promise .all()
// 2 promise.allsettled()
// 3 promise.any()
// 4 promise.race

// Promise.all()

//takes a array of promises and returns a single promise
//return an array if all are resolved
// if one reejct return the error

// const promise1 = new Promise((resolve,reject)=>{
//     resolve('promise1 resolved')
// })
// const promise2 = new Promise((resolve, reject)=>{
//     resolve('promise. 2 rejected')
// })

// Promise.all([promise1,promise2])
// .then((values)=>console.log(values))
// .catch((error)=>console.error('Error',error))
// .finally('done')


//PROMISE.ALLSETTLED()
// takes an array of promises
// waits for all to resolve or reject 
// return the object


// const promiseAllSettled1 = new Promise((resolve,reject)=>{
//     resolve('promise 1 resolved')
// })

// const promiseAllSettled2 = new Promise((resolve,reject)=>{
//     reject('Promise 2 Rejected')
// })

// Promise.allSettled([promiseAllSettled1,promiseAllSettled2])
// .then((data)=>{console.log(data)})
// .catch((error)=>{console.log('Error',error)})
// .finally(()=>console.log('done'))


//PROMISE.ANY()

// 1. Takes array of promises
// 2. resolves first fullfilled promise
// 3. igonores the reject promise
// 4. if all rejected returns a aggregated error


// const promiseany1= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('first any promise resolved')
//     },3000)
// })

// const promiseany2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('second any promise resolved')
//     },1000)
// })

// const promiseany3= new Promise((resolve,reject)=>{
//     reject('preomise 3 rejected')
// })

// Promise.any([promiseany1,promiseany2,promiseany3])
// .then((data)=>console.log(data))
// .catch((error)=>console.error(error))
// .finally(()=>console.log('dopne'))


// const anypromiseany1= new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('first any promise rejetced')
//     },3000)
// })

// const anypromiseany2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject('second any promise rejeyctß')
//     },1000)
// })

// const anypromiseany3= new Promise((resolve,reject)=>{
//     reject('preomise 3 rejected')
// })


// Promise.any([anypromiseany1,anypromiseany2,anypromiseany3])
// .then((data)=>console.log(data))
// .catch((error)=>console.error(error))
// .finally(()=>console.log('dopne'))


//PROMISE.RACE

//Takes array of promises
// return which ever gets fullfilled or rejected
//
