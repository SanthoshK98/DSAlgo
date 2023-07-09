class CircularQueue {
    constructor(capacity){
        this.items = new Array(capacity)
        /**
         * items = [10,20,{name:"sanhok"},"kosak",[1,2,3]]
         */
        this.capacity = capacity
        this.currentValue = 0
        this.front = 0
        this.rear = 0
    }

    isEmpty(){
        return this.currentValue === 0
    }

    isFull(){
        return this.currentValue === this.capacity
    }

    enQueue(element){
        if(!this.isFull()){
            
            this.items[this.rear] = element
            this.rear+=1
            this.currentValue++
            console.log('Rear:',this.rear)
            console.log('Current Value:',this.currentValue)
            console.log('Value:',this.items)
        }
    }

    deQueue(){
        if(this.isEmpty()){
            return null
        }
        let item = this.items[this.front]
        this.items[this.front] = null
        this.front++
        this.currentValue--
        if(this.isEmpty()){
            this.front = 0
            this.rear = 0
        }
        return item
    }

    print(){
        if(this.isEmpty()){
            console.log('Queue is Empty')
        }else{
            let listItems = ''
        for(let i=this.front;i<this.rear;i++){
            // console.log('i Value',i)
            listItems += this.items[i] + ' '
            // console.log(this.items[this.front])
        }
        console.log(listItems)
        }
        
    }
    peek(){
        return this.items[this.front]
    }

    search(value){
        const val = this.items.find((each)=>{
            // console.log(JSON.stringify(each))
            return each === value
        })
        if(val){
            return true
        }else{
            return false
        }
    }
}

const cirQueue = new CircularQueue(10)
console.log(cirQueue.isFull())
cirQueue.enQueue(10)
// cirQueue.enQueue(20)
// cirQueue.enQueue(30)
// cirQueue.enQueue(40)
// cirQueue.enQueue(50)
cirQueue.enQueue(60)
cirQueue.enQueue("sanhok")
cirQueue.enQueue({name:"kosak"})
cirQueue.enQueue([1,2,3])
cirQueue.enQueue(50)
cirQueue.print()
// console.log(cirQueue.isFull())
// console.log(cirQueue.peek())
console.log(cirQueue.search(60))
cirQueue.deQueue()
cirQueue.deQueue()
cirQueue.deQueue()
cirQueue.deQueue()
cirQueue.deQueue()
// cirQueue.print()
// console.log(cirQueue.isFull())