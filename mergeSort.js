//A divide-and-conquer algorithm.
// It works by splitting the array into halves, sorting each half, and then merging them back together.
// 🔹 Steps
// Divide: Split the array into two halves recursively until each half has only 1 element.
// Conquer: Sort the two halves.
// Combine: Merge the sorted halves into one sorted array.

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        }
        else {
            sortedArr.push(rightArr.shift())
        }

    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

const arr = [9, 8, -2, 88, 34, 1]
console.log(mergeSort(arr))