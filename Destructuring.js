//Examples for Desturing

// Example 1 : Swap the value of 2 ariables
    let a=10
    let b=20;
    [a,b]=[b,a]
    console.log(a)
    console.log(b)


// Example 2 :swap 2 elements in an array
    const arr=[1,2,3,4];
    [arr[0],arr[3]]=[arr[3],arr[0]]
    console.log(arr)


// Example 3: Assign Array elements to variable
    const colors=["red","green","blue","white","black"]
    const [clr1,clr2,clr3,...balance_clr]=colors
    console.log(clr1)
    console.log(clr2)
    console.log(clr3)
    console.log(balance_clr)


// Extract values from object
    const person1={
        firstName:"Spongebob",
        lastName:"SquarePants",
        age:30,
        job:"Fry cook"
    }
    const person2={
        firstName:"Patricks",
        lastName:"Star",
        age:34,
    
    }
    const{firstName,lastName,age,job="Unemployed"}=person2
    console.log(firstName)
    console.log(lastName)
    console.log(age)
    console.log(job)


//Destructure in function parameters

function displayperson({firstNme,lastNme,ageis,jobis}){
    console.log(`name: ${firstNme} ${lastNme}`)
    console.log(`age: ${ageis}`)
    console.log(`job: ${jobis}`)
}
const persn1={
    firstNme:"spogebob",
    lstnme:"SquarePants",
    ageis:20,
    jobis:"fry cook"
}
const persn2={
    firstNme:"PAtrick",
    lstnme:"Star",
    ageis:24,
}
displayperson(persn1)