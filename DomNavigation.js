// ---------------1).firstElementChild--------------

/*
    const element=document.getElementById("Vegetables")
    const firstchild=element.firstElementChild
    firstchild.style.backgroundColor="yellow"
*/

// to highlight all of the first children
const allFstchld=document.querySelectorAll("ul")
allFstchld.forEach(allFstchld=>{
    const firstchild=allFstchld.firstElementChild
    firstchild.style.backgroundColor="red"
})

