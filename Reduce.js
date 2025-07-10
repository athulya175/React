const prices=[5,30,10,25,15,20]
function sum(accumulator,element){
    return accumulator+element
}
console.log(prices.reduce(sum))
/*
    How it's work
    on first time
        function sum(5,30){
        return 5+30 --->ans accumulator->store
        }

    on second time
        function sum(30,10){
        return 30+10 -->ans accumulator
        }
        
*/

const grades=[75,80,85,90,60,99,30,26,100]
function max(accumulator,element){
    return Math.max(accumulator,element)
}
function min(accumulator,current){
    return Math.min(accumulator,current)
}
console.log(grades.reduce(max))
console.log(grades.reduce(min))