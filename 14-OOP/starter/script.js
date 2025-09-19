'use strict';
//oop and function oriented in js

//-----------Constructor Function and new Operator
//A constructor function is a completely normal function. The only difference between a regular function and a constructor function is that we call a constructor function with the new operator. In object-oriented programming, there is a convention that constructor functions always start with a capital letter
const Person=function(firstName,birthYear){
    //instance properties because all instance can have these properties
    this.firstName=firstName
    this.birthYear=birthYear
}
const jonas=new Person("Jonas",1991)
console.log(jonas)
// when we call it as by using "new" operator. the following steps are done
//1. new empty obj is created
//2. "this" keyword will points to this new obj which is created
//3.  newly created obj is linked to prototype($ Links the new object to Person.prototype via __proto__.)
//4.  The object that was created in the beginning is automatically returned from the constructor function.(thats why we are not using return here)
//$ inside it uses this to set properties on the new object

const matila=new Person('matila',2017)
const jack=new Person("jack",1975)
// here through constructor function we can create new objects
console.log(matila)
console.log(jack)
// as in modern js we don't have classes and we know object created from class is called instance.here jonas is created from Person so we can say as jonas is instance of person
const jay="jay"
console.log(jonas instanceof Person) //true
console.log(jay instanceof Person)// false


// prototypes -->method
Person.prototype.calcAge=function(){
    console.log(2025-this.birthYear)
}
console.log(Person.prototype)
jonas.calcAge()// call the functacc=acc+10ion
// ok if we give the method inside  as instance variable all the instance get thecopy of the method ,and if we console jonas we can see only firstName and birthYear is has as a property of jonas but still we can acces the method
console.log(jonas)

// this is how it work any object always has acces to the methods and properties from its prototype here the objects(jonas,matila) is person.prototype
console.log(jonas.__proto__)  // this is the prototype of jonas
console.log(jonas.__proto__===Person.prototype)// true

console.log(Person.prototype.isPrototypeOf(jonas))// true
console.log(Person.prototype.isPrototypeOf(Person))//false
// that is person.prototype is  prototypeOf jonas/instance
// but its not the proptotype of its own

// not only in method, we can also adds properties to prototype
Person.prototype.species='Homo Sapiense'
console.log(jonas) // as here that is not a direct property but still get access,

console.log(jonas.hasOwnProperty('firstName'))// true-->direcct property
console.log(jonas.hasOwnProperty('species'))// false-->indirect property


//----delegation/prototypal inheritance

// jonas doesn't have calcAge directly.but since jonas._propto_ points to person.prototype,js looks there and finds calcAge. this is called delegation-->if a property/ method isn't found in the object, js looks for the "up the chain"
// jonas->person.prototype->Object.prototype->null ths is the ladded.if JS can't find something it climbs up step by step
console.log(jonas.hasOwnProperty("firstName"))
// in the above js doesn't find hasOwnProperty on jonas-->it looks into person.prototype(still not there)->then it goes to object.prototype and finds there and runs "jonas"

// objects in js are linked in a prototype chain ,at the top of the chain is Object.prototype,above that is null(end of the chain)The prototype chain works like the scope chain: if something isn’t found locally, JS looks “up.”

/*
    Constructor functions create objects with new.

    Those objects get linked to the constructor’s prototype.

    Methods live on the prototype, not inside each object.

    The prototype chain allows property/method lookup all the way up to Object.prototype.
*/


console.log(jonas.__proto__)
console.log(jonas.__proto__.__proto__.__proto__) // it returns "null" because already reaches at the top oof the chain

console.dir(Person.prototype.constructor) // this points  itsown(person)// constructor property points at person

/*
    console.log → Prints the value in its "friendly" form.

    console.dir → Prints the full object structure with properties/methods.

*/

const arr=[3,4,5,6,7,4,5,67,876,553,7]
console.log(arr.__proto__) // here the o/p is the array method

// here we are creating or adding to a new method to a Array to return the unique value of the array and now when ever we using  an array we can use this method if we wanted
Array.prototype.unique=function(){
    return[...new Set(this)]
}
console.log(arr.unique())
// this is not good may other developer make this fn already with diff name and the same name can be use js to create a predefined method so it those case it works like thet not like this

// all the dom elements are object in the behind scene
const h1=document.querySelector('h1')
console.dir(h1)// we can see .__proto__ and if we scroll again then can see .__proto___then scroll then again see so thats a huge chain example


// Code chalange

const Car=function(make,speed){
    this.make=make
    this.speed=speed
   
}

Car.prototype.accelerate=function(){
    this.speed+=10
     console.log(`${this.make} going at ${this.speed} km/hr`)
}
Car.prototype.break=function(){
    this.speed-=5
     console.log(`${this.make} going at ${this.speed} km/hr`)
}
let BMW=new Car("BMW",100)
console.log(BMW)
BMW.accelerate()
BMW.break()


//------------------------------------------ES6--------------------------------------------

// we can use classes in js

/*
    // we can use any one of them
    // class expresion
    const PersonCl=class{}

    //class declaration
    class PersonCl{

    }
*/

class PersonCl{
    constructor(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }
    // method
    calcAge(){                     // here we write the method inside the class but still in object they are not direct propert they  as like constructor function's method
        return 2037-this.birthYear // important this is methodd is written inside the class and outside the constructor
    }       // there is no need of comma for multple methods
    greet(){
        console.log(`Hey ${this.firstName}!`)
    }
}
const jessica=new PersonCl('Jesica',1988)
console.log(jessica)
jessica.calcAge()
console.log(jessica.__proto__===PersonCl.prototype) // true
//Inside the class, the first thing we need to add is a constructor method. This constructor works similarly to a constructor function as studied previously, but this one is a method of the class. It needs to be called "constructor". Just like in constructor functions, we pass in arguments for the properties we want the object to have, such as "firstName" and "birthYear".


// we can adds method inside the class and also as the outside as manually both are gonna work
PersonCl.prototype.details=function(){
    console.log(`${this.firstName} is ${this.calcAge()}`)
}
jessica.details()
jessica.greet()

// -------------------------------------Setters and Getters-----------------

// we call these special properties assessor properties,while the more normal properties are called data properties it  is actually common to all objects in JavaScript. 
const account={
    owner:"Jonas",
    movments:[200,530,120,300],
    get latest(){
        return this.movments.slice(-1).pop()
    },
    set latest(mov){                //A setter method must have exactly one parameter, which represents the value to be set.
        this.movments.push(mov)
    }
}
console.log(account.latest) // here we called latest as a property insted of method
account.latest=50
console.log(account.movments)


// class has also setters and getters.

class PersonCl1{
    constructor(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }
    
    get calcAge(){                     
        return 2037-this.birthYear 
    }       
    set greet(grt){
        console.log(`${grt} ${this.firstName}!`)
    }
}
const jessica1=new PersonCl1("jessica",1987)
jessica1.greet="hello"
console.log(jessica1.calcAge)

// setters and getters are actually verry usefull