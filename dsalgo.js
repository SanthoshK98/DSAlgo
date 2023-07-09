const map = new Map()
map.set('name','san')
map.set('email','san@gmail.com')
map.delete('email')
console.log(map.get('name'))
console.log(map.has('name'))
console.log(map.size)
console.log(map)

const set = new Set()
set.add(10)
set.add(22)
set.delete(22)
set.clear()
console.log(set.has(10))
console.log(set.size)
console.log(set)

/**
 * interface Stack {
 *  
 * 
 */
class Stack {
    constructor(){
        this.items = {}
    }
}

