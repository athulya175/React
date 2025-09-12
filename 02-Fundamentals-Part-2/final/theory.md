The strict mode activation gives us the error cirrectly
we can add 'use strict' infront of the code 

function call/run/i


// intoduction to array
        * we can create arrays in normal way like as by using square brackets
            # const friends=["Michel","Steeven"]
        
        * There is other method also which is used by "new" keyword
            # const friends= new Array("Michel","steeven")
        
        * element assessing is similar to using index inside the []
        
        * Array .length property
        
        * And the thing is array length is not  zero based so if we need last element we have to use length-1
        
        * As we know array is mutable  so we can change variable in array by simply assign the value
            #friends[2]="jay
        
        * ! Even we declare friends as const still can can change the value,but we cannot reassign the entire Array to a new arry
            # friends=["Bob","Ellis"]

        * Arrays with multiple Data Types
                # const firstname="Jonas"
                const Jonas=[firstName,"Schmedtman",2037-1991,"teacher",friends]
// Basic Array Operations(Methods)
    adding element

        * push is to add at the end of an array
        
        * unshift is to add at the beginning 
            push and unshift will return the length of new arrray if we store it in the variable

    removing element

        *pop removes the last element
            and pop doesnt return the length insted of length it returns the element which is removed or poped
        
        *shift is used to remove the first element and it also return the element which is removed.
    finding elements

        *indexOf  is as usual to get indexof the element
        
        *includes method is to check the element is included of is in the array or not it return a boolean values
        
            and the point if we adds 23 and its a number and if we check includes 23 as string then it returns false because it strictly checks the type also
        
// introduction to objects
        * As we know array can be called only its index not by name so by using object we can reffer by using name.

        * Each key is also called property

        * In arrays,elements are acceses by their order number,so arrays are suitable for orderd data.Objects are better for unstructured data that we want to name and retrive by those names.

 // dot v/s bracket notation
        * Where to use dot operator and where to use bracket
            if we need to use computed name(that is we created a expression for "Name") in that case we need to use bracket notation but in the caase of we need to use the saame name as the property name we can simply use the dot notation,its more easier and cleaner

    ok the one imporatant is if to check something is exists or not we can simply follow as if(something) {

    } else{
    
    } like this way

    adding a new property to the object is also done the same way as like dot and bracket
    Jonas.location="portugal"
    Jonas['location']="prortugal"

    opertor precedence in Property Acccess
    ------------------------------------
        Both bracket and dot has same priority,and both are left to right. for eg-->Jonas.friends.length is executed left to right.first js does is jonas.friendswhich gives the array and then on that arrray,the dor length is applied.

// for loop
    3 parts initization ,condition,counter update

    continue --> break the current iteration and continue the after
    break-->is to completly terminate from the loop
# insted of using math.round()  to round a number we can use Math.trunc

//While loop

    * in For loop we see that we need to specify the counter,the condition and increment all in one line,but for while loop it doesn't need that way  we can only sepcify condition. The loop will keep running while the condition is true,which is why it is called the while loop



css model box
-------------

content contains height width->padding->margin
the model box is the main factor that defines how elements are displayed on webpage and how they are sized.
* padding is a transpirent area around the content but inside the box. we mainly use padding to create white space inside a box.
* border which goes around the padding it is the white space outside of the box.it is mainly used to create space between 2 elemenets
* fill area area that gets fill with baground color or baground image

# when we use zero we doesn't need to add the unit

# bloch v/s inline
block elements such as heading and forms,create their own linw and occupy the full width available.inline elements like links and buttons,only occupy the space of their  content and do not create a new line

# with out box-sizing border box the total width of the form would be the sum of width,padding and border,which cause layout issues.with border-ox the total width remains specifies.

// ternary operator
we can add  third variable also,

    let hasDriversLicence=true
    let hasGoodVision=true
    let isTired=false
    console.log(hasDriversLicence && hasGoodVision)
    console.log(hasDriversLicence||hasGoodVision)
    console.log(!hasDriversLicence)

    let shoulddrive=hasDriversLicence && hasGoodVision && !isTired
    console.log("y",shoulddrive)

//Dom Manupulation
    * Structured Representaion of HTML Documents.Allows Javascript to acces html elements and style to manipulate them
    * The DOM is automatically created by the browser as soon as the html page loads.it stores in the tree structure
    * In this tree,each html element is represent  as one object
    * DOM is a complete reperesnentation of html document

    * DOM is not part of the js language,then it works as ,the DOM and DOM methods are actually part of something called Web APIs.
    web APIs are libraries that browesers implement and that we can access from our js code

# refactoring code means to avoid duplicate code and use DRY(dont repeat your self)

# we use. only on selector time only like document.queryselecttor,all....

# when we define a function and call it inside the eventlistner we dont need to use " ()" simple give the name only
        const closeModal=function(){
            modal.classList.add('hidden')
            overlay.classList.add('hidden')
        }
    closebBtn.addEventListener("click",closeModal)

#  key Events
   * keydown: fired as soon as we press down a key.(for all buttons)
    * keypress :fired continuously we keep our finger on a key(doesn't fire like shift,Esc,arroe...)
    * Keyup:fired when we lift our finger off the key(not at pressing time fires at releasing time)

# If we needd to get which key is pressed just pass a argument inside that fn usually we pass "e" but its not compalusry
    document.addEventListener('keydown',function(e){
         console.log(e)
    })

        in the params "e" we get a key and that key is the button which we pressed so we can accces the key to identify hich key was pressed

# working of pig game:
=> user rolls dice->Generate a random dice roll->Display dice roll->if its 1->switch to nxt player-> if its not 1->Add dice rool to current score-> Display new Score

=>User hols score->Add current score to toal score->if score>=100->currentplayer wins->else switch player

=>User resets game->Set all scores to 0->set player 1 as starting player

# How Js works Behind the scenes
    * Topics
        1)High leve;
        2)garbage-collected (removes unused element)
        3)intepreted or just-in-time compiled
        4)Multi-paradigm(oop,pop,functional program(FP)) js-oop
        5)Prototype-based object-oriented
        6)First-class functions (functions are treated as variables)
        7)Dynamic (no ned to declare type of variables)
        8)Single-threaded
        9)Non-blocking event loop
  concurrency model:how the Js engine handles multiple tasks happening at the same time.--->
  # (why do we need that) 
  --->Js runs in one single thread,so it can only do one thing at a time.--->
  # (so what about a long-running task?)
  --->Sounds like it would block the single thread.However,we want non-blocking behaviour!--->
  # (How do we achieve that?)
  --->By using an event loop:takes long running tasks,executes them in the "Background",and push them back in the main thread once they are finished.

  # Js Engine Program that Executes Javascript code.Ex->v8
        Js engine contains 2 parts Call Stack and Heap
        * call stack is where our code is executed by using an Exexution context.
        * heap where objects are stored

# Compilation V/S Interpretation 
as we know the every program needs to be converted into machine  code for that converstion can happen using compilation or interpretation

    # Compilation:Entire code is converted into machine code at once,and written to a binary file that can be executed by computer.


    Source code =>(step1->compilation)=>Portable file:machinecode=>(step 2:Execution)->Program running

            the machine code is written into a portable file that can be executed by any computer.
    # Interpretation:Interpreter runs through the source code and executes it line by line

    Source Code=>(step1:Execution line by line)

    # Just in time(JIT)compilation:ENtire code is converted into machine code at once,then executed immediately
    
    Source code=>(step1:compilation)->Machine code(step2:Execution)->Program running

            here there is no portable file like compilation
java script is not really an interpretted language  insted of simple intereption js engine now mix b/w compilation and interpretation thats called JIT.

# How JavaScript Engine Works
    when a js code enter to js engine the first step is parsing(reading the code) on parsing the code passed to to a DS called abstract syntax tree,it split each line of code to meaning full parts and combine them it check all the syntax error.the result tree is used to generate machine code.  the tree has nothing to do with DOM,the tree is just a representation of our entire code inside the engine.The  next step is compilation,which takes generated Ast and compiles into machine code,the machine code gets execution right away  because morder js use JIT.Execution happens in JS engines call stack,

# RunTime in the browser
    js container is nothing but let consider it as a box and it includeevrything needed to use JS,its the heart of js engine.
    To work properly we also need web Api  they provided to engine but are not part of js language its self.js acces these api through "window" object.It still makes sense that web APIs are part of the runtime because the runtime is the container that holds all JavaScript-related components. and aslo a js runtime include callback queue.
# how js code execute
    After compilation the nxt phase is execution here a global execution context is created.The topevel code refers to codethat is not inside any function.that is only this code outside of the functions will be executed.because fn should only executedd when they called

# what is an execution Context?
    # Globaal execution contex
        An execution context is an abstract concept that can be defined as an environment in which a piece of js code is executed.It is like a box that stores all necessary information for some code to run,such as local variables or arguments passed into a function.
            Js code always runs inside an execution context

# The Global Execution Context
    there is only one global execution context.it always exists as the default context and where top-level code executes

# Hoisting in js
        Execution context
        * Variable environment
        * Scope chain
        * this keyword
    Makes some type of variables accessiblle/usable in the code before they are actually declare."variables lifted to top of their scope

    actually code is scanned for variable declaration and for each variable, anew property is created in the variable environment object.

    function declarations -->Hoisted  -->get actual function -->blockScoped
    var variables tion expression--> hoisted-->get undefined-->function scope
    let and const variable-->not hoisted--> <uninitialiized>(Temporal Dead Zone(TDZ))-->block scoped
    function expression and arrow--> Defends if using var or let/const
   # Why TDZ 
        makes it easier to avoid and catch errors:accessing variables before declaration is a bad practice and should be avoided. 
----------------------------------------------------------------------   
# chat gpt
   # variables and data types
     * let const var
     * let = can change
     * const = constant
     * var  = old way
     => for about var, var is function scoped not block scoped that is if it declare inside a function we can't take it out side the function, but if we declare inside a block then that variable is not scoped only that block it can acces out side the block also. and also hoisted that is we use var variable before declaration it don't show error instedd simply says undefined
   # Operators
    * Arithmetic + - * / % **
    * Assignment = += -=
    * Comparision == === != !== > < <= => 
    * Logical && || !
    * Ternary condition? value1 : value2

   # control Flow


   

