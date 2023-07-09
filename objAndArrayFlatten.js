
console.log(Array.from({length: 100}, (_, x) => x+1 ));

const a = {
name: "Rajeev",
age: 28,
address: {
  city: "Chandigarh",
  pincode: 160023, 
  data: {
      name: 'Science',
      age: 54,
      shali: {
          name: 'Shalinder',
          last: 'Randhava',
          Mohi: {
              first: 'Chandigarh',
              last: 'Mohali'
          }
      }
  }
},
mail: {
  email: 'torajeevmehta@gmail.com',
  domain: 'google'
}
};

function makeFlattenObject(property, parentKey = null) {
    let flattenObj = {};
    Object.keys(property).forEach((key) => {
    if (typeof(property[key]) === 'object') {
        flattenObj =  {...flattenObj, ...makeFlattenObject(property[key], key) };

    } else if (parentKey) {
         flattenObj =  {...flattenObj, [parentKey+'_'+key]: property[key] };
    } 
    else {
        flattenObj = {...flattenObj, [key]: property[key] };
    }
        });
    return flattenObj;
}

 

console.log(makeFlattenObject(a));
let obj ={
    a:1,
    b:{
        c:1
    },
    d:{
        e:1
    }
}


function check (data){
    let res = {}
Object.keys(data).forEach((key)=>{
    // console.log(key)
      if(typeof data[key] == 'object'){
        
        // check(data[key])
        res = {...res,...check(data[key])}
        // console.log(res)
    }else{
      res[key] = data[key]
    // let newKey = `${key}_`
    // res = {...res,newKey:data[key]}
    // console.log(`${key}:${data[key]}`)
    
    }
    

    
    
    
    
    
})

return res
    
}


 console.log(check(obj))

 const arr = [1,[2,3],4,[5,[6,7]]]

 const arrFlat = (arr)=>{
    let newArr = []
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
            newArr = [...newArr,...arrFlat(arr[i])]
        }else{
            newArr = [...newArr,arr[i]]
        }
    }
    return newArr
 }

 console.log(arrFlat(arr))