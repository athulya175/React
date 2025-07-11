const hello=(name,age)=>{
    console.log(`hello ${name}`)
    console.log(`how do you doing?`)
    console.log(`Now you are at ${age}`)
}
hello('Athu',21)

const numbers=[1,2,3,4,5,6,7]
const square=numbers.map((element)=>{
    return Math.pow(element,2)
})
console.log(square)

const even=numbers.filter((element)=>{
    return element%2===0
})
console.log(even)
const odd=numbers.filter((element)=>{
    return element%2!==0
})
console.log(odd)

const sum=numbers.reduce((accumulator,element)=>{
    return accumulator+element
})
console.log(sum)