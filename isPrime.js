//isPrime

const isPrime = (n)=>{
    if(n<2){
        return false
    }else if(n%2 == 0){
        return false
    }else{
        return true
    }

}
// console.log(isPrime(4))
//big-O O(1) Constant

const isPrime2 = (n)=>{
    if(n<2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false
        }
    }
    return true
}
console.log(isPrime2(11))

//big-O O(n) linear
