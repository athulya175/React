 let btn=document.querySelectorAll(".btn")
btn.forEach(element => {
    element.style.backgroundColor="green"
    element.textContent+=" 🐻‍❄️"
});

btn.forEach(x=>{
    x.addEventListener("click",change=>{
        x.style.backgroundColor="red"
    })
})

// Add  an Element to node list
const newbtn=document.createElement("button")
newbtn.textContent="button 5"
