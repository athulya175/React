//changing styles without using css

/*
    1)document.getElementById()
        const head=document.getElementById('heading')
        head.style.backgroundColor="grey"
        head.style.textAlign="center"
        head.style.fontFamily="Arial"
*/


/*
    //2)document.getElementsClassName()
            const fruits=document.getElementsByClassName('fruits')
            fruits[0].style.backgroundColor="red"
    //---using for loop
            for(let fruit of fruits){
                fruit.style.backgroundColor="yellow"
            }
*/


/*
    //3)document.getElementByTagName()
        const h4Elements=document.getElementsByTagName("h4")
        console.log(h4Elements)
        h4Elements[0].style.backgroundColor="red"
        

        const liElements=document.getElementsByTagName("li")
        for(let lielmts of liElements){
            lielmts.style.backgroundColor="pink"
        }
*/


/*
    //4)document.querySelector()
        const element=document.querySelector("h4")     // in querySelector it returns the first matched one here there is 2 h4 tags but it returns the first h4tag
        element.style.backgroundColor="red"
*/

    //5)document.querySelectorAll()

    const fruits=document.querySelectorAll(".fruits")
    fruits[0].style.backgroundColor="yellow"

