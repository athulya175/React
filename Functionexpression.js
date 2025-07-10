/*
    function hello(){
        console.log("hello")
    }
    setTimeout(hello,3000)  //taks 2 parameters callback fn and time intervel
*/
setTimeout(() => {
    console.log("hey")
}, 3000);                   // here we give a entire fn as a argument

const numbers=[1,2,3,4,5,6]
const squares=numbers.map(function(element){
    return Math.pow(element,2)
})
console.log(squares)                //here we give the entire function as a argument so we doesnot need a fn name

const evennumber=numbers.filter(function(element){
    return element%2==0
})
console.log(evennumber)

const sum=numbers.reduce(function(accumulator,element){
    return accumulator+element
})
console.log(sum)

