class Hashtable {  //it is an array stores key value pair
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
        let total = 0
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index] = value
    }

    get(key){
        let index = this.hash(key)
        return this.table[index]
    }

    display(){
        console.log('Length',this.table.length)
        for(let i=0; i<this.table.length;i++){
            if(this.table[i]){
                console.log('IF',i)
                console.log(i,this.table[i])
            }
            
        }
    }
}

const table = new Hashtable(25)
// console.log(table.table)
// console.log(table.size)
// console.log(table.hash('id'))
table.set('id',1)
table.set('name','san')
table.set('age',18)
// console.log(table.get('name'))
// console.log(table.get('id'))


table.display()