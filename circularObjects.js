let node = {
    val:10,
    next: null
}

let head = node
let tail = node
node = {
    val:20,
    next: null
}
node.next = head
head = node
// tail.next = 'email'
console.log(head)
console.log(tail)