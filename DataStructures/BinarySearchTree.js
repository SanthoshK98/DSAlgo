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
        const newNode = new Node(value)
        // console.log(newNode)
        if(this.isEmpty()){
            this.root = newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }else{
            if(root.right === null){
                root.right = newNode
            }else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    min(root){
        if(!root.left){
            return root.value
        }else{
            return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        }else{
            return this.max(root.right)
        }
    }

    search(root,value){
        // console.log('HELLO',root)
        if(!root){
            return false
        }else{
            if(root.value === value){
                return true
            }else if(value < root.value){
                return this.search(root.left,value)
            }else{
                return this.search(root.right,value)
            }
        } 
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }else if(value > root.value){
            root.right = this.deleteNode(root.right,value)
        }else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }
    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root){
        if(root){
            
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root){
        if(root){
            
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        //Use the optimised queue
        let breadth = 0, depth = 0, nodes = 0
        if(this.isEmpty()){
            return
        }
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value)
            nodes++
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
            if(curr.left || curr.right){
                depth++
            }
            if(!curr.left && !curr.right){
                breadth++
            }
        }
        console.log("breadth",breadth)
        console.log("depth",depth) //need to check logic
        console.log("nodes",nodes)
    }
    
}

const bts = new BinarySearchTree()
bts.insert(10)
bts.insert(15)
bts.insert(5)
bts.insert(20)
bts.insert(7)
bts.insert(13)
bts.insert(3)
console.log(bts.isEmpty())
console.log(bts.root)
console.log(bts.search(bts.root,2))
bts.preOrder(bts.root)
console.log("------------------------------------------------------------")
bts.inOrder(bts.root)
console.log("------------------------------------------------------------")
bts.postOrder(bts.root)
console.log("------------------------------------------------------------")
bts.levelOrder()




class NodeR {
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinaryTree {
    constructor(){
        this.root = null
    }

    isEmpty(){
        return this.root === null
    }

    insert(val){
        let node = new NodeR(val)
        if(this.isEmpty()){
            this.root = node
        }else{
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.val < root.val){
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

    search(root,val){
        if(!root){
            return false
        }
        if(root.val === val){
            return true
        }else if(val < root.val){
            return this.search(root.left,val)
        }else{
            return this.search(root.right,val)
        }
    }

    min(root){
        if(this.isEmpty()){
            return null
        }
        if(!root.left){
            return root.val
        }
        return this.min(root.left)
    }

    max(root){
        if(this.isEmpty()){
            return null
        }
        if(!root.right){
            return root.val
        }
        return this.max(root.right)
    }

    delete(val){
        
        this.root = deleteNode(this.root,val)
    }

    deleteNode(root,val){
        if(root === null){
            return root
        }
        if(val === root.val){
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            if(!root.right){
                return root.left
            }
            root.val = this.min(root.right)
            root.right = this.deleteNode(root.right,root.val)
        }else if(val < root.val){
            root.left = this.deleteNode(root.left,val)
        }else{
            root.right = this.deleteNode(root.right,val)
        }
        return root
    }

    preOrder(root){
        if(!root){
            return
        }
        console.log(root?.val)
        this.preOrder(root?.left)
        this.preOrder(root?.right)
    }

}

// const bts = new BinaryTree()
// bts.insert(10)
// bts.insert(5)
// bts.insert(15)
// bts.insert(20)
// bts.insert(7)
// bts.insert(2)
// bts.insert(12)
// console.log(bts.search(bts.root,12))
// // console.log(bts.root)
// bts.preOrder(bts.root)