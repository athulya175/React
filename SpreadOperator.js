let numbers=[1,2,3,4,5] 
//console.log(`max of the array is :`+Math.max(numbers))  // the o/p is nan that is we cant perform like this in array so we use spread operator
console.log(`max of the array is: `+Math.max(...numbers))
console.log(`min of the array is: `+Math.min(...numbers))

// printing the letters

let names="Bro Code Malayalam"
let letters=[...names]
console.log(letters)
let joined=[...names].join(':')
console.log(joined)

// shallow copy (2 different array with identical value)

 let fruits=["Apple","Orange","Banana"]
 let newFruits=[...fruits]
 console.log(newFruits)

 //adding multiple 
 let compined=[...fruits,...numbers]
 console.log(compined)
 