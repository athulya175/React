const matrix=[[1,2,3,4],[5,6,7,8],[9,10,11]]
    for(let x of matrix){
        const result=x.join (' ')
        console.log(result)
    }
    matrix[0][0]='x'
    console.log(matrix[0][0]) 