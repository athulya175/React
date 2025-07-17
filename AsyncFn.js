setTimeout(()=>console.log("Task 1"),3000)
console.log("Task 2")
console.log("Task 3")
console.log("Task 4")
/*
    Task 2     // here setTimeout is a Async function thats why the other taks dosn't w* to execute task 1
    Task 3
    Task 4
    Task 1
*/

// Call back is also a Asyncfn
function func1(callback){
    setTimeout(()=>{console.log("Task 1")
        callback()},3000)
}
function func2(){
    console.log("task 2")
    console.log("task 3")
    console.log("task 4")
}
func1(func2)
// we make all the other tasks executes after the "task 1" get executed