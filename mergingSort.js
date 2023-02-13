const mergeSort = (arr)=>{
    if(arr.length < 2){
        return arr
    }
    const mid = Math.floor(arr.length/2)
    const leftArr = arr.slice(0,mid)
    const rightArr = arr.slice(mid)
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
    let sorted = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}

const arr = [5,1,-6,-2]
console.log(mergeSort(arr)) // [-2,-6,1,5]

//O(nlogn)