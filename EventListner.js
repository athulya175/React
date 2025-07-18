const myBox=document.getElementById("box")
function changeclr(){
    myBox.style.backgroundColor="red"
    myBox.textContent="Clicked👌"
}
myBox.addEventListener("click",changeclr)       //we dont need to add the argument
 myBox.style.cursor="pointer"

 
/*
    const myBox=document.getElementById("box")
    myBox.addEventListener("click",event=>{
        event.target.style.backgroundColor="red"
        event.target.textContent="Clicked👌"
    })
*/