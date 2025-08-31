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

promise.then((result)=>{
console.log('promise got resolved',result)
})
.catch((error)=>{
    console.error('Error',error)
})