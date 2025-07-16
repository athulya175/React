//A function defined inside of another function, the inner function has acces to the variables and scope of the outer function
function outer(){
    let message="Hello"
    function inner(){
        console.log(message)
    }
    inner()
}
message="good bye"      //here  we modify the value of message but it doesn't work so thata hoe clousure allows for private variable
outer()

function createcount(){
    let count=0
    function incrementCount(){
        count++
        console.log(`count incremented to ${count}`)
    }
    function getCount(){                    //multiple clousure
        return count
    }
    return{
        incrementCount,getCount
    }
}
const counter=createcount()
counter.incrementCount()
counter.incrementCount()
counter.incrementCount()
console.log(`The current count is ${counter.getCount()}`)