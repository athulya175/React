// ---------------1).firstElementChild--------------

/*
    const element=document.getElementById("Vegetables")
    const firstchild=element.firstElementChild
    firstchild.style.backgroundColor="yellow"
*/


/*
    // to highlight all of the first children

        const allFstchld=document.querySelectorAll("ul")
        allFstchld.forEach(allFstchld=>{
            const firstchild=allFstchld.firstElementChild
            firstchild.style.backgroundColor="red"
        })
*/


//-------------------2).lastElementChild----------
/*

    const element=document.getElementById("desserts")
    const lastchild=element.lastElementChild
    lastchild.style.backgroundColor="red"

    //highlighting all last element

    const allelement=document.querySelectorAll("ul")
    allelement.forEach(x=>{
        const alllastelement=x.lastElementChild
        alllastelement.style.backgroundColor="red"
    })
*/

//------------------------3).nextElementSibling--------
/*
    const element=document.getElementById("fruits")
    const nxtsib=element.nextElementSibling
    nxtsib.style.backgroundColor="pink"

    //highlight all siblings
    const element=document.querySelectorAll("ul")
    element.forEach(x=>{
        const allsiblings=x.nextElementSibling
        allsiblings.style.backgroundColor="red"
    })
*/

//----------------------- 4).previousElementSibiling-----
/*
    const element=document.getElementById("desserts")
    const prevsibls=element.previousElementSibling
    prevsibls.style.backgroundColor="red"
*/

//--------------------------  5).parentElement---------
/*
    const parent=document.getElementById("milk")
    const parentis=parent.parentElement
    parentis.style.backgroundColor="yellow"
*/

//--------------------- 6).Children-------------------

const element=document.getElementById("desserts")
const children=element.children
children[1].style.backgroundColor="green"
// console.log(children)
// Array.from(children).forEach(child=>{
//     child.style.backgroundColor="yellow"
// })