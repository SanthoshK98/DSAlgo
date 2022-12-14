//fibonacci

const fibonacci = (n)=>{
    let num1 = 0
    let num2 = 1
    let sum;
    for(let i=0; i<n; i++){
        console.log(num1) // 0 1 1 2 3
        sum = num1 + num2 // 1 2 3 5
        num1 = num2 // 1 1 2 3
        num2 = sum  // 1 2 3 5
    }
    
}

fibonacci(5)

const fibonacci2 = (n)=>{
    let fib=[0,1]
    for(let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2] // 1 
    }
    return fib
}

console.log(fibonacci2(5))

//Big -O- Notation - O(n) Linear

const numbers = [1,-1,2,4,7];

// let sum = numbers.reduce((accumalator,currentvalue)=>{
//     return accumalator + currentvalue;
//  },10)
 
//  console.log(sum);