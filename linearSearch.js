function linearSearch(arr,target){
console.log(arr,target)

for(let i =0 ;i<=arr.length;i++)
    if(arr[i] === target){
        return i
    }
    return -1
}

console.log(linearSearch([1,2,4,5,15],15))

