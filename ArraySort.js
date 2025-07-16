let numbers=[1,5,3,8,2,9,0,10]
numbers.sort()
console.log(numbers)        // This is how  lexicographic works thats it not sortting as 1,2,3.... rather than is sorting as  lexicographic

// to make it in the correct order
let numbers1=[1,5,3,8,2,9,0,10]
numbers1.sort((a,b)=>a-b)    //to make it reverse numbers1.sort((a,b)=>b-a)
console.log(numbers1)

/*
    numbers1.sort((a,b)=>a-b) :explanation
    if result <0, a comes before b
    if result>0,b comes before a
    if 0, order stay unchange
*/

//-------Sorting object--------
const people=[{name:"Isha",age:21,gpa:4.6},
            {name:"Iva",age:28,gpa:4.9},
            {name:"Nila",age:24,gpa:3.6},
            {name:"Mizhi",age:30,gpa:3.5}]
people.sort((a,b)=>a.age-b.age)
console.log(people) // sort according to age   

people.sort((a,b)=>a.name.localeCompare(b.name))
console.log(people)  // if we dont use localecompare method then we cant get the name in alphabetic order it falls to lexicographic 