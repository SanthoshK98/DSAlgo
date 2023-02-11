const claimbingStairs = (n)=>{
    let noOfWays = [1,2]
    for(let i = 2; i<n; i++){
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2]
        // console.log('Value',noOfWays[i])
    }
    return noOfWays[n-1]
}

console.log(claimbingStairs(1))
console.log(claimbingStairs(2))
console.log(claimbingStairs(3))
console.log(claimbingStairs(4))