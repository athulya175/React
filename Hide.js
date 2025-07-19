const mybtn=document.getElementById("btn")
const img=document.getElementById("Bag_img")
mybtn.addEventListener("click",hideimg=>{
    if(img.style.visibility==="hidden"){
        img.style.visibility="visible"
        mybtn.textContent="hide"

    }else{
    mybtn.textContent="Show"
    img.style.visibility="hidden"
    }
})
// when clicking button if its hidden then it needs to show else it needs to hide