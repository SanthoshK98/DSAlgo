// class Node {
//     constructor(value){
//         this.value = value
//         this.next =null
//     }
// }

// class LinkedList {
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     print(){
//         if(this.isEmpty()){
//             console.log('List is Empty')
//         }else{
//             let curr = this.head
//             let listValue = ''
//             while(curr){
//                 listValue+=`${curr.value} `
//                 curr = curr.next
//             }
//             console.log(listValue)
//         }
        
        
//     }

//     append(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//         }else{
//             let prev = this.head
//             while(prev.next){
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }
// }

// const list = new LinkedList()
// console.log(list.isEmpty())
// list.print()
// // console.log(list.getSize())
// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.print()


class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.head === null
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i =0;i<index-1;i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removedValue
        if(index === 0){
            removedValue = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removedValue = prev.next
            prev.next = removedValue.next
        }
        this.size--
        return removedValue.value
    }

    print(){
        if(this.isEmpty()){
            console.log('List is Empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues+= `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next = node
        }
        this.size++
    }

    peek(){
        return this.head.value
    }
}

// const list = new LinkedList()
// console.log(list.isEmpty())
// console.log(list.getSize())
// // list.print()
// list.prepend(10)
// // list.print()
// list.prepend(20)
// list.prepend(30)
// list.print()
// list.append(40)
// list.append(50)
// list.append(60)
// list.print()
// list.insert(5,0)
// // list.print()
// list.insert(15,0)
// // list.print()
// // list.insert(30,1)
// // list.print()
// // list.insert(40,2)
// list.print()
// console.log(list.getSize())
// list.removeFrom(3)
// list.removeFrom(0)
// console.log(list.removeFrom(10))
// list.print()
//Optimised LinkedList

class LinkedListOpt {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        // console.log(node)
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
        // console.log(node)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            // console.log('Tail-Next',this.tail)
            this.tail = node
            // console.log('Tail',this.tail)
            // console.log('Head',JSON.stringify(this.head))
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log("Empty")
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues+= `${curr.value} `
                curr = curr.next
            }
            console.log(listValues)
        }
    }

    removeFromFirst(){
        if(this.isEmpty()){
            return null
        }
            const value = this.head.value
            this.head = this.head.next
        this.size--
        return value  
    }

    removeFromLast(){
        if(this.isEmpty()){
            return null
        }
        
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
        while(prev.next !== this.tail){
            prev = prev.next
        }
        prev.next = null
        this.tail = prev
        }
        this.size--
        return value
        
    }

    sort(list1,list2){
        let newNode = {next: null}
    }
}

const linkOpt = new LinkedListOpt()

// console.log(linkOpt.isEmpty())
// linkOpt.print()
// linkOpt.prepend(1)
// linkOpt.prepend(2)
// linkOpt.prepend(3)
// linkOpt.print()
// linkOpt.append(0)
// linkOpt.append(4)
// linkOpt.append(5)    
// linkOpt.print()
// console.log(linkOpt.getSize())
// console.log(linkOpt.removeFromFirst() )
// console.log(linkOpt.removeFromLast() )
// linkOpt.print()
// console.log(linkOpt.getSize())

