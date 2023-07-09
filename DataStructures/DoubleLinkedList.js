class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.previous = null
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    prepend(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
            
        }else{
            node.next = this.head
            this.head.previous = node
            // this.tail = node.next
            this.head = node
        }
        this.size++
    }

    append(val){
        const node = new Node(val)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
            
        }else{
            this.tail.next = node
            node.previous = this.tail
            this.tail = node
        }
        this.size++
    }

    removeFromFirst(){
        if(this.isEmpty()){
            return null
        }
        let item = this.head.val
        this.head = this.head.next
        this.head.previous = null
        this.size--
        return item
    }

    removeFromLast(){
        if(this.isEmpty()){
            return null
        }
        let item = this.tail.val
        this.tail = this.tail.previous
        this.tail.next = null
        this.size--
        return item
    }

    insert(val,index){
        const node = new Node(val)
        if(index === 0){
            this.prepend(val)
        }else{
            let curr = this.head
            for(let i=0;i<index-1;i++){
                curr = curr.next
            }
            node.next = curr.next
            node.previous = curr
            curr.next = node
            
            this.size++
        }

    }

    print(){
        let listItems = ''
        let curr = this.head
        while(curr){
            listItems+= curr.val + ' '
            curr = curr.next
        }
        console.log(listItems)
    }
}

const dll = new DoubleLinkedList()
dll.prepend(10)
dll.prepend(20)
dll.prepend(30)
dll.prepend(40)
dll.prepend(50)
dll.append(60)
dll.append(70)
dll.append(80)
dll.append(90)
dll.append(100)
dll.removeFromFirst()
dll.removeFromLast()
dll.insert(15,2)
dll.print()
console.log(dll.head)
console.log(dll.tail)