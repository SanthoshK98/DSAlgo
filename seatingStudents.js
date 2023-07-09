let occupied = [6,7,11]

function seating(noOfDesks,occupied){
    let occupiedDesks = new Set(occupied)
    let count =0

    for(let desk=1;desk<=noOfDesks;desk++){
        if(!occupiedDesks.has(desk)){
            if(desk+1 <=noOfDesks && 
                !occupiedDesks.has(desk+1) && 
                ((desk %2=== 1 && (desk+1) %2 === 0) 
                // || (desk %2 ===9 && (desk+1) % 2 === 1)
                )){
                console.log('*')
                count++
            }
            if(desk+2 <=noOfDesks && !occupiedDesks.has(desk+2)){
                console.log('**')
                count++
            }
        }
    }
    return count
}
console.log(seating(12,occupied))