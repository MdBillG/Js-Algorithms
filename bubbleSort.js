function bubbleSort(arr){

    for(let i=0;i<=arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp= arr[j]
                arr[j]= arr[j+1]
                arr[j+1]= temp
            }
        }
       
    }
return arr

}

console.log(bubbleSort([9,8,7,6,5,4,3,2,1]))

//⚡ Bubble Sort basically says:
//“Repeatedly compare two neighbors, and swap if they’re in the wrong order, until the largest elements bubble to the end.”