function rFibonnaci(n){
    if(n<2)
        return n
return rFibonnaci(n-1)+rFibonnaci(n-2)
}

console.log(rFibonnaci(3))