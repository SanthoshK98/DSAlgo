const arr = [
    {id:1,schNo: 1},
    {id:2,schNo: 2},
    {id:3,schNo: 3},
    {id:4,schNo: 4},
]


const map = new Map([['mo',1],['refCat',1]])  //same as object

// for(let item of map){
//     console.log(item)
// }

const setMap = (item)=>{
    const mapObj = new Map()
    mapObj.set('id',item.id)
    mapObj.set('schNo',item.schNo)
    for(let item of mapObj){
        console.log(item)
    }
}

const obj = {}
for(const item of arr){
    // const mapObj = new Map()
    // map.set('id',item.id)
    // map.set('schNo',item.schNo)
    // console.log(map)
    setMap(item)
    obj.id = item.id
    obj.schNo = item.schNo
}
// console.log(map)
// for(let item of mapObj){
//     console.log(item)
// }
console.log(obj)