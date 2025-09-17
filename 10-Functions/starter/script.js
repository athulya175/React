'use strict';
// the call and applay method
const lufthansa={
    airline:"lufthansa",
    iataCode:'LH',
    bookings:[],
    book(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
    this.bookings.push({flight:`${name} booked a set on ${this.airline} flight ${this.iataCode} ${flightNum}`,name})
    }
}
lufthansa.book(239,"Jonas")
lufthansa.book(231,"John")
console.log(lufthansa)


const euroWings={
   airline:"Eurowings",
    iataCode:'EW',
    bookings:[],
}
const book=lufthansa.book // insted of writing function once more we can simply do like this// this is a copy of function not metho any more
//book(23,'Miya') // but this throw error because "this" keyword is "undefined" in a regular function call(in strict mode) because book is a copy of function not a method
// so  to fix that error we use (here if we need to book on lufthansa flight the "this" should points at lufthansa and if we need to book on eruowings then "this" should points at eurowing .To do that there are 3 methods call,apply and bind)

// 1) call method
    book.call(euroWings,23,"Miya") // when we use call method the 1st argument will be exactly what we want the this keyword to point to. and then rest of the argument

    console.log(euroWings) // then we can see the booking array with name "Miya"


    book.call(lufthansa,287,"Mary Cooper")
    console.log(lufthansa)

    //creates a new airline
    const swiss={
        airline:"Swiss Air Lines",
        iataCode:"LX",
        bookings:[]
    }
    book.call(swiss,24,"Lintha")
    console.log(swiss)

// 2) Apply method  (it is similar to call, but insted of receiving a list of arguments,it takses an array of arguments.)
    const filightData=[583,'George cooper']
    book.apply(swiss,filightData)
    console.log(swiss)
// in modern js we don't write like this we use call method along with spread operator
    book.call(swiss,...filightData)
    console.log(swiss)

//3) Bind method(the bind method similar to the "call" method ,it allows us to manually set the  "this"keyword for any function call.the fiference is "bind method create a new function, where the this keyword is bound to whatever value we pass into "bind" )
const bookEW=book.bind(euroWings) // this will not call the function, insted of it create a new function we named it bookEw
bookEW(23,'steven') // then we use the newly created function as like a normal funcction

// created for remaining
// through this making it easier to book flights for different airlines without repeatedly specifying the this keyword.
const bookLX=book.bind(swiss)
const bookLH=book.bind(lufthansa)

bookLH(247,"mary joseph")
bookLX(190,"Issebella")


/// we can create a function for Eurowing flight 23,so passenger name needs to be provided.no need of flight number that is
const bookEW23=book.bind(euroWings,23)
bookEW23("Jonas williams")
bookEW23("William clark")// now we dont need to add the flight number just name is enough
// here partial application is applied Specifying parts of the arguments beforehand is called partial application. Partial application means that a part of the arguments of the original function are already applied, or set. The resulting function becomes simpler, requiring only the remaining arguments.(in here we set flight number already)


//WIth Event Listener

lufthansa.planes=300
lufthansa.buyPlane=function(){
    console.log(this)
    this.planes++
    console.log(this.planes)
}
console.log(lufthansa)
document.querySelector(".buy").addEventListener("click",lufthansa.buyPlane.bind(lufthansa))//Attaching the event handler directly would cause this to refer to the button element. To fix this, we use bind to set this to the Lufthansa object.

// partial application
//Partial application is another big use case for the bind method. Sometimes, we are not even interested in the this keyword, but we still use bind to preset parameters.
// partial application means preset parameters
const addTax=(rate,value)=>value+value*rate
console.log(addTax(0.1,200))     // 10% of 200--->20   so 200+20->220

const addVAT=addTax.bind(null,0.23)// as we know the first params should be "this" in here we are not looking for "this".
//Now, addVAT is a function that only needs the value as an argument, with the rate preset to 0.23.
console.log(addVAT(100))

//challege  do the samething by using grid function
const addTaxRate=function(rate){  // create a fn that take a rate as argument and return  a fn that take value as argument, and that function return the value+value*rate
    return function(value){
        return value+value*rate
    }
}
const addVAT2=addTaxRate(0.23)
console.log(addVAT2(100))

//------------------- Immediately invoked function Expression(IIFE)---------------
//Sometimes in JavaScript, it is necessary to have a function that is executed only once and then never again. This means a function that disappears right after it is called once. While this might not seem immediately useful, this technique is needed later, for example, with async/await.

const runOnce=function(){
    console.log('This will never run again')
}
runOnce();  // this is a  normal function and it can be called multiple times

//IIFE

(function(){        //You wrap the function in () so that JavaScript treats it as an expression (not a declaration).
    console.log("This will also run never")
})();//The trailing () executes it immediately.This function cannot be called again, because it has no name (anonymous).

// IIFE on arrow function

(()=>console.log("This is inside an arrow fn this will also never run again"))();  // wap in the params then call it
//One scope does not have access to variables from an inner scope. For example, in the global scope, variables defined inside a function scope are not accessible. This means data defined inside a scope is private and encapsulated.

{
    const Isprivate=23
    var notPrivate=46
}
//console.log(Isprivate)// throws error
console.log(notPrivate) // doesn't throw error because declared at var


//-------------------------------CLOUSURES--------------------------
// We do not create closures manually like we create a new array or a new function. A closure simply happens automatically in certain situations. We just need to recognize those situations
const secureBooking=function(){
    let passengerCount=0;
    return function(){
        passengerCount++
        console.log(`${passengerCount} passengers`)
    }
}
const booker=secureBooking()
booker()
booker()
booker()
/**
    when we call secureBooking-->a new execution context is create
    let passengerCount=0, insted of running immediatly it returns the inner function
    in the inner function/the returned function is the passengerCount from its orginal scope that is clousure
    the inner function retains access to its original variables, even after the outer function is gone.

    A closure is a function that retains access to the variables of its lexical scope, even after the outer function that created those variables has finished executing.
        tiket-->counter

        MV
        in JavaScript, every function has its own scope.
        If a function is returned from another function, the inner function still retains access to the variables of the outer function — even after the outer function has already finished executing.
        This ability to access and update the outer function’s variables is called a closure.
    
        Closures work because JavaScript remembers the environment in which a function was created. Even after the outer function finishes, the inner function still has access to the variables from that environment, so it can continue reading or updating them.”
        ref:theory.md
*/
 console.dir(booker) // inside the clousure


 //Example 1
 console.log("---------------------Example 1-------------------")
 let f;
 const g=function(){
    const a=23
    f=function(){
        console.log(a*2)
    }
 }
 g() // here g has already
 f()