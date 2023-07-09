let area = [
    [1,1,1,0,0,0],
    [1,1,0,0,0,0],
    [0,0,1,0,0,0],
    [1,1,0,0,0,0]
]

let i,j,total =0
// let i=0,j=0,total =0
function dfs(area,i,j){

    if(i<0 || j<0 || i>=area.length || j>=area[i].length || area[i][j]=== 0){
        return
    }
    area[i][j] = 0
   dfs(area,i+1,j)
   dfs(area,i-1,j)
    dfs(area,i,j+1)
    dfs(area,i,j-1)
}

for(i=0;i<area.length;i++){
    for(j=0;j<area[i].length;j++){
    if(area[i][j]===1){
        total += 1
        dfs(area,i,j)
        
    }
}
}
// while(i<area.length && j<area[i].length){
//     if(area[i][j]===1){
//         total += 1
//         dfs(area,i,j)
                
//     }
//     i++
//     j++
// }
console.log(total)