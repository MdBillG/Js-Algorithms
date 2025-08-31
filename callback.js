// callback is a function which it is passed as a argument into another function
//

function greet(name, callback) {
    console.log(`hello my ${name} is`)
    callback()
}

function sayHi() {
    console.log('hi from callback')
}

// greet('callback', sayHi)


// why callback are used

// 1 handinling the asynchronus operations
//  * handling api request(fetching and sending of data), reading files(nodejs file system)

//callbacks in handling functions

function cal(a, b, callback) {
    return callback(a, b)
}

function add(a, b) {
    return a + b
}
function mul(a, b) {
    return a * b
}

// console.log(cal(1,2,add))


function fetching(callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error('Error', error))
}

function handle(data) {
    console.log('ssssss', data)
}

// fetching(handle)

// callback hell

function step1(callback2) {
    const start = Date.now()
    setTimeout(() => {
        const end = Date.now()
        const diff = end - start
        console.log(`${step1.name} called after ${diff}`)
        callback2()
    }, 1000)
}

function step2(callback3) {
    const start = Date.now()
    setTimeout(() => {
        const end = Date.now()
        const diff = end - start
        console.log(`step2 called after ${diff}`)
        callback3()
    }, 1000)
}

function step3() {
    const start = Date.now()
    setTimeout(() => {
        const end = Date.now()
        const diff = end - start
        console.log(`step3 called after ${diff}`)
    }, 1000)
}

step1(()=>{
    step2(()=>{
        step3()
    })
})


