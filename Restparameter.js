function greeting(...wish){ // rest parameter
    console.log(wish)       // this will gives a result as an  array 
    console.log(...wish)    //by using spread operator we can get as element not like array
}
const one="hello"
greeting('hey','oi',one)        // we can sent any number of


function sum(...number){                
    let result=0
    for(let x of number)            // key word is "of"
    {
          result+=x                        // x
    }
    return result
  
}
console.log(sum(1,2,4,5,6,7,8))

