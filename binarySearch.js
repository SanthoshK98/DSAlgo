const binarySearch = (arr,target)=>{
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    let leftIndex = left
    let rightindex = right
    if(arr.length === 0){
        return -1
    }
    const midIndex = Math.floor((left+right)/2)
    if(target === arr[midIndex]){
        return midIndex
    }
    if(target < arr[midIndex]){
        return
    }
}

console.log(binarySearch([-5,1,4,6,7],6))
console.log(binarySearch([-5,1,4,6,7],1))
console.log(binarySearch([-5,1,4,6,7],9))