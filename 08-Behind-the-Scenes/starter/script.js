'use strict';
/*
    function calcAge(birthyear){
        const age=2025-birthyear
    function printAge(){
        const output=`${firstName},You are ${age},born in ${birthyear}.`
        console.log(output)
        if(birthyear>=1981 && birthyear<=1996){
            const str=`Oh and you're a millenial,${firstName}`
            var millenial=true
            const firstName='Steeven'//here a variable first name is alreadey declared but that is not a problem we can do that because their scope is only inside that function
            console.log(str)
        }
    // console.log(str)   // herewe cant console str outside because its a block scoped because its used variable const that is let and var are block scoped
    console.log(millenial)  //here that logs because var is  not a block scoped
    function add(a,b){
        return a+b
    }
    }
    printAge()
        return age
        //add(2,3) //here also we can't call like this because that function is declared inside the block(if-block) so its scope is only inside that block, its happend because its we use strict mode if we off that we can get those result
    }
    const firstName='Jonas' // so here firstName is a global variable
    calcAge(1985)

    // here age and birthyear is at the parent class but it can access from inside its child function also that is the scope of calcAge but it cant be acces from out side.
    // that is only inner scope can acessible of the outer scope.
*/


// Hoisting

    // variables
        // console.log(me)
        // console.log(job)
        // console.log(year)
        // var me='Johnas'
        // let job="teacher"
        // const year=1991

    //functions
        // console.log("declaration",addDecl(2,3))
        // console.log("Expression",addExpr(2,3))
        // console.log("Arrow",addArrow(2,3))
        //     function addDecl(a,b){
        //         return a+b
        //     }
        //     const addExpr=function(a,b){
        //         return a+b
        //     }
        //     var addArrow=(a,b)=>a+b
        // here we get reference error but if we declare by using var (like in arrow)then there will be no error insted of that it is just "undefined".

// a simple example why we dont use var to declare a variable
if(!numProducts) deleteShoppingCart()
    var numProducts=10
function deleteShoppingCart(){
    console.log("All products deleted")
}
// even though numproduct is 10 still we get the the console as All product deleted,It is happen because of hoisting,that is the hoisting is done so insted of 10 the variable be a "undefined"


var x=1
let y=2
const z=3
console.log(x===window.x)
console.log(y===window.y)
console.log(z===window.z)
// if we declare var here we get the property of x in the window (type window in console)
// here only true value is only the first one because the 1st one is declared as var