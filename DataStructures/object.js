const obj = {
    first_n: 'Santhosh',
    last_n: 'kumar',
    'full name': 'Santhosh Kumar',
    sayMyName: function(){    //arrow function wont work
        console.log(this.first_n)
    }
}
obj.hobby = 'cricket'
delete obj.hobby
console.log(obj.first_n)
console.log(obj['last_n'])
console.log(obj["full name"])

for(let item in obj){
    console.log(item)
}
console.log(obj)
obj.sayMyName()

//object.keys() .values() .entries()

