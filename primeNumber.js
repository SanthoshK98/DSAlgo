const isPrime = (n)=>{
    let isPrime = true
    if(n<2){
        console.log('Neither Prime nor Composite')
        return null
    }
    for(let i=2;i<n;i++){
        if(n%i===0){
            isPrime = false
            break
        }
    }
    if(isPrime){
        return isPrime
    }else{
        return isPrime
    }

}

console.log(isPrime(2))
console.log(isPrime(1))
console.log(isPrime(14))
console.log(isPrime(5))
console.log(isPrime(9))