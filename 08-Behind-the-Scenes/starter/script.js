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
    // if(!numProducts) deleteShoppingCart()
    //     var numProducts=10
    // function deleteShoppingCart(){
    //     console.log("All products deleted")
    // }
// even though numproduct is 10 still we get the the console as All product deleted,It is happen because of hoisting,that is the hoisting is done so insted of 10 the variable be a "undefined"


// var x=1
// let y=2
// const z=3
// console.log(x===window.x)
// console.log(y===window.y)
// console.log(z===window.z)
// if we declare var here we get the property of x in the window (type window in console)
// here only true value is only the first one because the 1st one is declared as var


//this keyword

// console.log(this)
// const calcAge=function(birthYear){
//     console.log(2037-birthYear)
//     console.log(this) // here this "this" is undefined because we are in the strict mode
// }
// calcAge(1991)

/*
    //same function as arrow fn
    const calcAge1=(birthYear)=>{
        console.log(2037-birthYear)
        console.log(this)  // here this doesn't works because it is inside an arrow fn
    }
    calcAge1(1991)
    //in arrow fn why "this" work its because arrow fn doesn't has its own this so it look forward for the parent class  here we have already a console in this(that is there will always a this )
*/

/*
    const Jonas={
        year:1991,
        calcAge:function(){
            console.log(this)
            console.log(2037-this.year)
    }
}
Jonas.calcAge()
*/
/*
    const mattilda={
        year:2017
    }
    mattilda.calcAge=Jonas.calcAge // this is called method borrowing that is metalda is borrowing jonas method.
    // in console just type "mattilda" and "Jonas" then we can see the same fns
    mattilda.calcAge()
*/
/*
    // here mattilda is not at in the Jonas's object still when we use the this keyword ,its point out the object that is calling the method,not neccessarily the object where the method was originally defined
    const f=Jonas.calcAge
    f() // if we call  like this then this keyword is undefined because no longer attached to any object.so its just a regular function call.thre for this.something is also an error
*/

// Regular function V/S arrow function
var firstName="Matila"
const Jonas={
    firstName:'Jonas',
    year:1991,
    calcAge:function(){
        console.log(this)
        console.log(2037-this.year)
    },
    greet:()=>{
        console.log(this)
        console.log(`Hey ${this.firstName}`)}
}
Jonas.greet()  //here it bacame undefined because arrow fn doesn't have itrs own this keyword it use lexical this 
console.log(this.firstName)// here we dont have a
// here object literals doesn't create a new scope, defining an object with {} doesn't create a new lexical scope for this.
// so arrow fn used the this keyword from the global scope,which is the window object in browesers, since there is nofirstName property on the window objwct,this.firstName is undefined

// so lets create firstName as globaly with declaration as var, as we know when we declare a variable as var it will create that in globaly.so then we donr get undefined insted gets the name as matila.
// what's actually happening here? -->just console "this"  in greet and then we can see first name as "Matila". because its declared in "var".
//  greet is in global scope even though the greet is  is called by jonas object, but that rule is not applied because its an arrow fn,so this.firstName transilate to window.firstName

// regular Function

const Jonas1={
    firstName:":Jonas1",
    year:1991,
    calcAge:function(){
        console.log(this)
        console.log(2037-this.year)
    },
    greet:function(){
        console.log(this)
        console.log(`hey${this.firstName}`)
    }
}
Jonas1.greet()
// now when we are not using arrow fn so the o/p will be like the expected one

/*

    const jonas3={
        firstName:"Jonas3",
        year:1981,
        calcAge:function(){
            console.log(this)
            console.log(2037-this.year)
            const isMillenial=function(){  
                console.log(this.year>=1981 && this.year<=1996)
            }
            isMillenial()
        },
        greet:()=>{
            console.log(this)
            console.log(`hey${this.firstName}`)
        }
    }
    jonas3.greet()
    jonas3.calcAge()
*/

// isMillenial is a regular function call even though it happends inside of a method. And rules says that inside a regular function call,this keyword must be undefined 

//There are 2 solutions to this problem.
//1) The first is to use an extra variable usually called "self/that" to preserve the value of this.as we know that outside the fn we can acces this

const JonasSolution1={
    firstName:"Jonas",
    year:1981,
    calcAge:function(){
        console.log(this)
        console.log(2037-this.year)
        const self=this
        const isMillenial=function(){
            console.log(self.year>=1981&&self.year<=1996)
        }
        isMillenial()
    },
    greet:()=>{
        console.log(this)
        console.log(`Hey ${this.firstName}`)
    }
}
JonasSolution1.calcAge()

// 2) use arrow function
// this ginna work because it doesn't have its own  this it uses parents this
const JonasSolution2={
    firstName:"Jonson",
    year:1981,
    calcAge:function(){
        console.log(self)
        const isMillenial=()=>{
            console.log(this.year>=1981&&this.year<=1996)
        }
        isMillenial()
    },
    greet:()=>{
        console.log(this)
        console.log(`Hey ${this.firstName}`)
    }
}
JonasSolution2.calcAge()

// Argument keyword
// like "this" keyword argument keyword is also be in regular expression