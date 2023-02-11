const insertionSort = (arr)=>{
    for(let i=0;i<arr.length;i++){
        // let nti = arr[i+1]
        // let sv = arr[i]
        if(arr[i] > arr[i+1]){
            let nti = arr[i+1]
            let se = arr[i]
            arr[i+1] = se
            // nti = arr[i+1]
        }
    }
}

const arr = [20,-5,-3,10,5,-6]
insertionSort(arr)
console.log(arr)