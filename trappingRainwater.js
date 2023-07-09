let arr = [1,5,3,8,7,9,1,2]


let left = [], n=arr.length, right = [], total=0
left[0] = arr[0]
right[n-1] = arr[n-1]
for(let i=1;i<arr.length;i++){
    left[i] = Math.max(arr[i],left[i-1])

}
for(let i=n-2;i>=0;i--){
    right[i] =  Math.max(arr[i],right[i+1])
   
}
for(let i=1;i<arr.length;i++){
    total += Math.min(left[i],right[i]) - arr[i]
}
console.log(left)
console.log(right)
console.log(total)