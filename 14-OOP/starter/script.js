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

// setters and getters are actually verry usefull in validation(for that validating if its a full name or not for that check if it contains white space or not)
class PersonCl2{
    constructor(fullName,birthYear){
        this.fullName=fullName
        this.birthYear=birthYear
    }
    
    get calcAge(){                     
        return 2037-this.birthYear 
    }       
    set greet(grt){
        console.log(`${grt} ${this.firstName}!`)
    }
    //set a property thar already exist
    set fullName(name){
        if(name.includes(' ')){
            this._fullName=name ///we adds an under score for convention, because if we are trying to set a value for an existing variable then we need to add an underscore else it goes  to a infinite error
        }else{
            alert(`${name} is not a full name !`)
        }
    }
    get fullName(){
            return this._fullName
        }
}
const jessica2=new PersonCl1("jessica Davis",1987)
const jonas1=new PersonCl2("jonas da",1993)
console.log(jessica2)
jessica2.greet="hello"
console.log(jessica2.calcAge)

//----------------------------Static method----------------------------

//In JavaScript, a static method is a method that belongs to the class itself, not to instances of the class. This means you can call it directly on the class, without creating an object of that class.
class  MyClass{
  static myStaticMethod(){
    console.log("I am a static method!")
  }
  instanceMethod(){
    console.log("Iam an instance Method!")
  }
}

MyClass.myStaticMethod()  // works
//MyClass.instanceMethod()// wont work
const obj=new MyClass()
obj.instanceMethod() //works
//obj.myStaticMethod() // won't work


//-----------------------------Object.Create-----------------------
/**
    Object.create is a third way to implement prototypal inheritance in JavaScript, besides constructor functions and ES6 classes.

     Unlike constructors or classes, it does not use the new keyword.

      It manually sets the prototype of a new object to any existing object.

    This makes the prototype chain explicit and flexible.
 */

    const PersonProto={ //create a brand-new empty object,Links that object’s internal __proto__ to PersonProto.
        calcAge(){
            console.log(2037-this.birthYear)
        }
    }
const steev=Object.create(PersonProto)
//steven is now linked to PersonProto.At this point, steven is empty but can access prototype methods:
steev.name="steeven" //These are own properties of steev.
steev.birthYear=1990
steev.calcAge()

console.log(steev.__proto__==PersonProto)


/**
 * JS first looks for calcAge directly on steev → not found.

   Then it goes up the prototype chain → finds calcAge in PersonProto.

   Executes calcAge with this = steev.

   Output: 2037 - 1990 = 47.
 */


// Coding challenge #2


// --------------------------------Inheritance b/w "classes":Constructor functions--------------------
//indroduction to inheritance b/w classes.

// in previous the inheritance is dine by prototypal inheritance from now on the real in heritance(inheritance b/w class)


/// suppose we have a parent class named "Person" and the child class is "student". we can implement inheritance b/w classes using 3 methods
// 1) Constructor functions
// 2) Es6 Classes
// 3) object.create()


//1 -------Constructor functions


    const PersonCon=function(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }
    PersonCon.prototype.calcAge=function(){
        console.log(2025-this.birthYear)
    }
    const Student=function(firstName,birthYear,course){
        //PersonCon(firstName,birthYear) // here if call here with out using call fn then it's a regular function call so if we need to call a function and same time set the "this" keyword inside that function-->in that case we use call method
        PersonCon.call(this,firstName,birthYear)    // as if we call a method using "call" then pass the argument with "this", here "this" points to newly created empty array
        this.course=course          
    }
    //----Linking Prototype for Inheritance.
    Student.prototype=Object.create(PersonCon.prototype) //###-->here is the position where we neeed to link cause at this point "student.prototype" is empty and then we can add methods to it "student.prototype.introduce"

    Student.prototype.introduce=function(){
        console.log( `Hey! im ${this.firstName} and I studying ${this.course}`)
    }
    const mike=new Student("mike",2020,"computer Science")
    console.log(mike)
    mike.introduce()
    // mike.calcAge()  // we can't call like this directly because we cretaed the object with parent's child class so wee needd ro link the prototype for in heritance(child)
           //--------Linking Prototype for Inheritance.
        //#####To allow Student instances to access methods from Person's prototype, we need to link the prototypes. We want Person.prototype to be the prototype of Student.prototype. This is done using Object.create.

  //-------after linking
    mike.calcAge()
    console.log(mike.__proto__)
    console.log(mike.__proto__.__proto__)

    console.log(mike instanceof Student)  // true
    console.log(mike instanceof PersonCon) // true 
    console.log(mike instanceof Object)  // true
    // here in both condition are true  in the first condiition its correct but in 2nd condition in became true because we link the prototype manually ###

      
    // Challenge # 3

    const ElectricCar=function(make,currentSpeed){
        this.make=make
        this.currentSpeed=currentSpeed
    }
    ElectricCar.prototype.accelerate=function(){
        this.currentSpeed+=10
        console.log(`${this.make} going at ${this.speed} km/hr`)
    }
    ElectricCar.prototype.break=function(){
        this.currentSpeed-=5
        console.log(`${this.make} going at ${this.currentSpeed} km/hr`)
    }
    const Ev=function(make,currentSpeed,charge){
        ElectricCar.call(this,make,currentSpeed)
        this.charge=charge
    }

    Ev.prototype=Object.create(ElectricCar.prototype)

    Ev.prototype.chargeBattery=function(chargeTo){
        this.charge=chargeTo
        
    }
    Ev.prototype.accelerate=function(){
        this.currentSpeed+=20
        this.charge--
        console.log(`${this.make} going at ${this.currentSpeed} km/hr and charge is : ${this.charge}` )
    }
    const tesla=new Ev("Tesla",122,23)
    tesla.chargeBattery(90)
    tesla.accelerate()  // here the child class overwrite the parent class that is insted of parent class acceslration it runs the child class's accelaration // this is an example of polymorphism 
    tesla.break()

// 2)------------ Es6 Classes

  class PersonCls{
    constructor(fullName,birthYear){
        this.fullName=fullName
        this.birthYear=birthYear
    }
    
    get calcAge(){                     
        console.log (2037-this.birthYear )
    }       
     greet(){
        console.log(`Hey! ${this.fullName}!`)
    }
    get age(){
        return 2037-this.birthYear
    }
    set fullName(name){
        if(name.includes(" "))  
            this._fullName=name
        else{
            console.log(`${name} is not a full name!`)
        }
    }
    get fullName(){
        return this._fullName
    }
    static hey(){
        console.log("hey there :)")
    }
  }
    //The extends keyword links the prototypes automatically
    class StudentCls extends PersonCls{
        //need a constructor, which will receive the same arguments as the parent class, plus any additional ones such as course.
        constructor(fullName,birthYear,course){
            super(fullName,birthYear) // as in constructor function we call the parent class by using "call" method, here just call the super()
            this.course=course // after calling the super then only specify the childs property
        }

        introduce(){
            console.log(`My name is ${this.fullName} and I study ${this.course}`)
        }

    
    }
    const martha=new StudentCls("Martha Jones",2012,"Computer Science")
    martha.introduce()
    martha.calcAge
    /*suppose we dont have a new method in the child class the params are same as the parent then we don't need to specify the constructor just only  /*suppose we dont have a new method in the child class the params are same as the parent then we don't need to specify the constructor just only  "class StudentCls extends PersonCls{}"*/

//3)---------object.create()

const PersonObj={
    calcAge(){
        console.log(3037-this.birthYear)
    },
    init(firstName,birthYear){
        this.firstName=firstName
        this.birthYear=birthYear
    }
}
const steven=Object.create(PersonObj)
 
// personObj Object was the prototype of all new person objects,Now, we want to insert another prototype in the chain between PersonObj and the base object. Our goal is to make StudentProto inherit directly from PersonObj
// adding an init method so we dont need to manually specified the properties.

const StudentProto=Object.create(PersonObj)
StudentProto.init=function(firstName,birthYear,course){
    PersonObj.init.call(this,firstName,birthYear)
    this.course=course
}
StudentProto.introduce=function(){
    console.log(`Hey! I'm ${this.firstName} and i study ${this.course}`)
}
const jayis=Object.create(StudentProto) // now studentProto is the prototype of "jay" and studentProto inherits from "PersonObj",PersonObj is the parent of jayis
//through this jay can access methods and propertries from both StudentProto and PersonProto.

jayis.init("jay",2010,"cs") // on console do jayis
jayis.introduce()

/**This approach using Object.create avoids dealing with constructors, prototype properties, or the new operator. It simply links objects to other objects, where some objects serve as prototypes of others. */

//-------------------------Another class Example------------------------------
/*
    class Account{
        constructor(owner,currency,pin){ // like previous we are not adding the all methods here movements is an empty array  if an account is empty, so for that we dont need to pass movements as arguments
            this.owner=owner
            this.currency=currency
            this.pin=pin
            this.movments=[]
            this.locale=navigator.language
            console.log(`thanks for opening an account,${owner}`)
        }
        // public interface
        deposit(val){
            this.movments.push(val)
        }
        withdraw(val){
            this.deposit(-val)
        }
        approveLoad(val){
            return  true
        }
        requestLoan(val){
            if( this.approveLoad(val)){
                this.deposit(val)
                console.log(`loan approved`)
            }
        }
    }
    const acc1=new Account('Jonas','EUR',111,[])
    console.log(acc1)
*/

/*
    // for movments
    acc1.movments.push(250)
    acc1.movments.push(-140)
    console.log(acc1)
    // its not a good way so we creates methods for withdrawal and deposit
*/

/*
    acc1.deposit(250)
    acc1.withdraw(140)
    acc1.requestLoan(100)
    acc1.approveLoad(1000) // ^^^^this approved loan can be accessed from out side, but that never gonna happens
    console.log(acc1)

    console.log(acc1.pin) //^^^^ here we can access pin out side thats never gonna happens

    //^^^ in these case we needs data encapsulation and data privacy
*/

//-------Data encapsulation and data privacy

// class field -->In JavaScript, a class field is basically a property that belongs to each instance of a class.
//Types of class Fields-->Public fields,Private fields,Public methods,Private methods

class Account{
    locale=navigator.language; // this is how we make locale variable public(; is importand and also no need of  "this",or declaration),just need is the name of the variable and the value
    bank="Banklist"
    #movments=[]  // now we protect it from out side at the bottom we get error now because now movements is protected.
    constructor(owner,currency,pin){ // like previous we are not adding the all methods here movements is an empty array  if an account is empty, so for that we dont need to pass movements as arguments
        this.owner=owner
        this.currency=currency
        this.pin=pin
        // this.movments=[]
        // this.locale=navigator.language
        console.log(`thanks for opening an account,${owner}`)
    }
    // public interface
    deposit(val){
        this.#movments.push(val)
    }
    withdraw(val){
        this.deposit(-val)
    }
    approveLoad(val){
        return  true
    }
    requestLoan(val){
        if( this.approveLoad(val)){
            this.deposit(val)
            console.log(`loan approved`)
        }
    }
}
const acc1=new Account('Jonas','EUR',111,[])
    console.log(acc1)
    acc1.deposit(300)
    acc1.withdraw(100)
    acc1.movments=[] // here some one adds 300 and then withdraw 100 and after that set movments to an empty array,thats never happens..(so that we neeeds to be set movments into an empty array)
// after setting # for movment the when we use acc1.movments=[] there create a new movment array


