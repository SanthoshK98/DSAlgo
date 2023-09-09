let arr = [8,1,5,4,6,5]
let lar = 0
let secLar = 0
let hashMap = {
    
}
const buySell = (arr)=>{
    let small = arr[0]
for(let i=0;i<arr.length;i++){
    let obj = {
        
    }
    if(small > arr[i]){
        small = arr[i]
        obj[small] = i
        hashMap['small'] = obj
    }
    
    if(arr[i]>lar){
        secLar = lar
        lar = arr[i]
        obj[lar] = i
        hashMap['lar'] = obj
    }else if(arr[i]>secLar && lar !== arr[i]){
        secLar = arr[i]
    }
    // console.log(obj)
}
let high = Object.keys(hashMap.lar)
let low = Object.keys(hashMap.small)

if(hashMap.lar[high[0]] > hashMap.small[low[0]]){
    return {
        "buyOnDay":hashMap.small[low[0]]+1,
        "sellOnDay":hashMap.lar[high[0]]+1
    }
}else{
    return 0
}
}    
// console.log(buySell(arr))
// console.log(hashMap.lar[high[0]])
// console.log(lar)
// console.log(secLar)
// console.log(hashMap)
// console.log(small)

// let week = [8,7,5,4,2,1], minSofar=week[0], maxProfit=0
let week = [7,1,5,4,2,8], minSofar=week[0], maxProfit=0
for(let i=0;i<week.length;i++){
    minSofar = Math.min(minSofar,week[i])
    let profit = week[i] - minSofar
    maxProfit = Math.max(profit,maxProfit)
}
console.log(maxProfit)
