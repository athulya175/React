//Odd even
let number=[1,2,3,4,5]
function forEven(element){
    return element%2===0
}
function forOdd(element){
    return element %2!==0
}
const itsOdd=number.filter(forOdd)
const itsEven=number.filter(forEven)
console.log(itsEven)
console.log(itsOdd)

//filtering age under 18
const age=[17,16,18,18,17,60,20,19]
function underage(element){
   return element<18
}
console.log(age.filter(underage))

//short word...
const words=["apple","Kiwi","Cherry","plum","orange","banana"]
function shortwords(element){
    return element.length<=5
}
console.log(words.filter(shortwords))

