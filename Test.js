let tail 

let head = {
    value: 1,
    next: null
}

let node = {
    value: 0,
    next : null
}

head = node
tail = node

head.next = head
// tail = node
// console.log(JSON.stringify(tail))
console.log(head)
// tail.next = node
// console.log(tail)
// tail = node
// console.log(tail)
