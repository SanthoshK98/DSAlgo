const arr = [1,2,3,2,5]
let hashmap = {}
arr.forEach((each,index)=>{
    if(hashmap[each]){
        hashmap[each]++
    }else{
        hashmap[each] = 1
    }
})

console.log(hashmap)
let freq
for(let key in hashmap){
    if(hashmap[key] > 1){
        // console.log(hashmap[key])
         freq = hashmap[key]
    }
}
console.log(freq)