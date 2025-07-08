function add(x,y){
    let result=x+y
    return result
}

function sub(x,y){
    return x-y
}

function mult(x,y){
    return x*y
}

function even(x){
    if(x%2===0){
        return true
}
else{
    return false
}
}
function email(x){
    if(x.includes("@")){
        return true
    }
    else{
        return false
    }
}
console.log(add(10,12),sub(10,5),mult(10,30))
console.log(even(5))
console.log(email('athulya@gmail.com'))