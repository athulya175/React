'use strict';
let check=document.querySelector(".check")
let guess=document.querySelector(".guess")
let number=document.querySelector(".number")
let secretNumber=Math.trunc(Math.random()*20)+1
number.textContent=secretNumber
let displayMessege=function(message){
    document.querySelector(".message").textContent=message
}
check.addEventListener("click",()=>{
    if(!guess){
        displayMessege("⛔️ No number!")
    }
})
