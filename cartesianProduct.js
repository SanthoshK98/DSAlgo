const cartesianProduct = (one, two)=>{
    if(one.length < 1 || two.legth < 1){
        return "Array is Empty"
    }else{
        let newArr = []
        one.forEach((each)=>{
            return two.forEach((item)=>{
                newArr.push([each,item])
            })
        })
        return newArr
    }
}

console.log(cartesianProduct([1,2],[3,4,5]))

// let two = [3,4,5]
// const res = two.map((item)=>{
//     return [1,item]
// })
// console.log(res)