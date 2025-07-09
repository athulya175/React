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


function avg(...num){
    let avgrslt=0
    for(let x of num){
        avgrslt+=x
    }
    return avgrslt/num.length                       // find the sum first then dividee
}
console.log(avg(16,15,15,16))

//Rest parameter to combine strings together


function combinestring(...strings){
    return strings.join(" ")
}
console.log(`Full name is:`+combinestring(" Augustus"," Leopold","Bartholomew"))

