class Stack {
    constructor(){
        this.items = []
    }
    push(element){
        this.items.push(element)
    }
    pop(){
        return this.items.pop()
    }
    isEmpty(){
        return this.items.length === 0
    }
    peek(){
        return this.items[this.items.length-1]
    }
    size(){
        return this.items.length
    }
    print(){
        console.log(this.items.toString())
    }
}

const stackObj = new Stack()
console.log(stackObj)
console.log(stackObj.isEmpty())
stackObj.push(20)
stackObj.push(30)
stackObj.push(20)
console.log(stackObj.peek())