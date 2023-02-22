class node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        let listValues = ''
        let curr = this.head
        while(curr){
            listValues+=`${curr.value}`
            curr=curr.next
        }
        console.log(listValues)
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size--
    }

    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }

    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        let prev = this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next = null
        this.tail = prev
        this.size--
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return null
        }
        const node = new Node(value)
        if(this.isEmpty()){
            this.prepend(value)
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        let i = 0
        while(curr){
            if(curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    removeFrom(index){
        if(index <0 || index > this.size){
            return null
        }
        
        let prev = this.head
        let i = 0
        while(prev){
            if(index === i){
               
            }
            prev = prev.next
            i++
        }
        this.size--
    }

    remove(value){
        let prev = this.head
        if(value === this.head.value){
            this.removeFromFront()
        }
        while(prev.next.value !== value){
            prev = prev.next
        }
        prev = prev.next
        prev.next = null
    }
}