class Graph {
    constructor(){
        this.adjacentlists = {}
        this.size = 0
    }


    // isEmpty(){
    //     return this.size === 0
    // }

    addVertex(vertex){
        this.adjacentlists[vertex] = new Set()
        // this.size++
    }

    addEdge(vertex1,vertex2){
        if(this.adjacentlists[vertex1]){
            this.adjacentlists[vertex1].add(vertex2)
        }
        if(this.adjacentlists[vertex2]){
            this.adjacentlists[vertex2].add(vertex1)
        }
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacentlists[vertex1]){
            this.adjacentlists[vertex1].delete(vertex2)
        }
        if(this.adjacentlists[vertex2]){
            this.adjacentlists[vertex2].delete(vertex1)
        }
    }

    removeVertex(vertex){
        if(this.adjacentlists[vertex]){
            for(let item of this.adjacentlists[vertex]){
                this.removeEdge(vertex,item)
            }
            delete this.adjacentlists[vertex]
        }
    }

    hasEdge(vertex1,vertex2){
        return this.adjacentlists[vertex1].has(vertex2) && this.adjacentlists[vertex2].has(vertex1)
    }

    display(){
        
            for(let item in this.adjacentlists){
                console.log(`${item} -> ${[...this.adjacentlists[item]]}`)
            }
        
    }
}

// const graph = new Graph()
// // console.log(graph.isEmpty())
// graph.addVertex('A')
// graph.addVertex('B')
// graph.addVertex('C')
// // console.log(graph.isEmpty())
// // graph.print()
// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','C')
// console.log(graph.hasEdge('A','C'))
// graph.removeVertex('B')
// console.log(graph.hasEdge('A','B'))
// graph.display()


class HashTable {
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    // isEmpty(){
    //     return this.table.length === 0
    // }

    hash(key){
        let total = 0
        for(let i=0; i< key.length;i++){
            total+= key.charCodeAt(i)
        }
        return total % this.size
    }

    set(key,value){
        const index = this.hash(key)
        let bucket = this.table[index]
        if(!bucket){
            this.table[index] = [[key,value]]
        }else{
            const exist = bucket.find((item)=>{
                return item[0] === key
            })
            if(exist){
                exist[1] = value
            }else{
                bucket.push([key,value])
            }
            
        }
    }

    get(key){
        const index = this.hash(key)
        const bucket = this.table[index]
        if(bucket){
            const exist = bucket.find((item)=> item[0] === key)
            if(exist){
                return exist[1]
            }
        }
        return undefined
    }

    search(key){
        const index = this.hash(key)
        if(this.table[index]){
            return true
        }else{
            return false
        }
    }

    remove(key){
        const index = this.hash(key)
         let bucket = this.table[index]
        //  console.log(bucket)
        if(bucket){
            let exist = bucket.find((item)=>item[0] === key)
            // console.log(exist)
            if(exist){
                bucket.splice(bucket.indexOf(exist),1)
            }
        }
    }

    display(){
        for(let i =0;i<this.size;i++){
            // console.log(i)
            if(this.table[i]){
                console.log(i, this.table[i])
            }
            
        }
    }
}

// const hash = new HashTable(50)
// hash.set('name','san')
// hash.set('age',20)
// hash.set('mane','ram')
// hash.set('mane','krishna')
// hash.set('maen','rahim')
// hash.remove('maen')
// hash.display()
// // console.log(hash.table)
// console.log(hash.search('name'))


class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value < root.value){
            if(root.left === null){
                root.left = node
            }else{
                this.insertNode(root.left,node)
            }
        }else{
            if(root.right === null){
                root.right = node
            }else{
                this.insertNode(root.right,node)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        if(value === root.value){
            return true
        }else{
            if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        }
    }

    preOrder(root){
        if(!root){
            return
        }
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    inOrder(root){
        if(!root){
            return
        }
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }

    postOrder(root){
        if(!root){
            return
        }
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            const curr = queue.shift()
            console.log(curr.value)
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
}

const bst = new BinarySearchTree()
// console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(7)
bst.insert(3)
bst.insert(13)
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
bst.levelOrder()
// console.log(bst.search(bst.root,13))


class CircularQueue {
    constructor(capacity){
        this.queue = new Array(capacity)
        this.capacity = capacity
        this.currentLength = 0
        this.front = -1
        this.rear = -1
    }

    isEmpty(){
        return this.currentLength === 0
    }

    isFull(){
        return this.currentLength === this.capacity
    }

    enQueue(value){
        if(!this.isFull()){
            this.rear = (this.rear + 1) % this.capacity
            this.queue[this.rear] = value
            if(this.front === -1){
                this.front = this.rear
            }
            this.currentLength++
        }
    }

    deQueue(){
        let item = this.queue[this.front]
        this.queue[this.front] = null
        this.front = (this.front + 1 ) % this.capacity
        if(this.isEmpty()){
            this.front = -1
            this.rear = -1
        }
        return item
    }

    print(){
        if(this.isEmpty()){
            return null
        }
        let list = ''
        for(let i= this.front;i !== this.rear;i=(i+1)%this.capacity){
            list += `${this.queue[i]}  `
        }
        list+= this.queue[this.rear]
        return list
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.queue[this.front]
    }
}

// const circle = new CircularQueue(5)
// console.log(circle.isEmpty())
// console.log(circle.isFull())
// circle.enQueue(10)
// circle.enQueue(20)
// circle.enQueue(30)
// circle.enQueue(40)
// circle.enQueue(50)
// circle.enQueue(60)
// console.log(circle.print())
// circle.deQueue()
// circle.deQueue()
// circle.deQueue()
// circle.deQueue()
// circle.deQueue()
// console.log(circle.isEmpty())
// console.log(circle.print())
// console.log(circle.peek())
// console.log(circle.front)