//powerOfTwo

const powerOfTwo = (n)=>{
    if(n<1){
        return false
    }else if(n%2 !==0){
        return false
    }else{
        return true
    }
    
}

console.log(powerOfTwo(50))

//big-O O(1) constant