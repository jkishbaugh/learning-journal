const arrayToSort = [10, 4, 98, 36, 83, 12, 1, 0, 982, 912, 2, 3, 76]

//imperative
for(let i=0 ,size=arrayToSort.length; i < size - 1;i++){
    for(let j = 0; j < size -1 - i; j++){
        if(arrayToSort[j] > arrayToSort[j+1]){
            let tmp = arrayToSort[j]
            arrayToSort[j] = arrayToSort[j+1]
            arrayToSort[j+1] = tmp
        }
    }
}

console.log(arrayToSort, "sorted")

//functional
const sortedArray = arrayToSort.map((a, b) => {
        return arrayToSort[a] < arrayToSort[b]?arrayToSort[a]:arrayToSort[b]
})
console.log(sortedArray, "functional")

