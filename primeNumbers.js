//prime number
//THE numBER which is divisble by it own
function prime(n){

if(n<2){
    return 'not a prime Number'
}

for(let i=2; i<n;i++){
    if(n%i ===1){
        return 'prime number'
    }
    else
        return 'return not a prime number'
}
}

console.log(prime(5))