/*
    console.log(x)
    console.log("Reached the end")
    // when we do like this it shows a refference error as  x is not defined
    // so we can use try catch block
*/


/*
    //------using try catch block
        try{
            console.log(x)
        }
        catch(error){
            console.error(error)
        }
        finally{
            console.log("This always executes")
        }
        console.log("Reached at the end") // now it shows this statement
*/
try{
    const dividend=Number(window.prompt("Enter a dividend:"))
    const divisor=Number(window.prompt("Enter a divisor"))
    if(divisor==0){
        throw new Error("You can't divide by Zero")
    }
    if(isNaN(dividend)||isNaN(divisor)){
        throw new Error("value must be a number")
    }
    const result=dividend/divisor
    console.log(result)
}
catch(error){
    console.error(error)
}
console.log("Reached End")
