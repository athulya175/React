//difference b/w function statement and function expression and function declaration

    //Function statement and function declaration both are same

        a()             //a is called
        // b()            //index.js:393 Uncaught TypeError: b is not a function
        function a(){
            console.log("a called")
        }
        //Function Expression
        var b=function(){
            console.log("b called")
        }
        b()     // so needd to call like this
    // Anonymous Function (fn with out name)

    //Named function expression(giving name to function expresion)
        var c=function xyz(){
            console.log("c is called")
            console.log(xyz)    // we can acces it from here bt not from out side
        }
        c()                 // c is called
        //xyz()            // index.js:409 Uncaught ReferenceError: xyz is not defined


    //Difference b/w parameters & Arguments
        var d=function(para1,para2){        // this parameter
            console.log(para1,para2)
        }
        d(1,2)      // this is argument

    //FIRST CLASS FUNCTION : functions can be treated like any other value(string,number,object) this ability make fn in js as FIRST CLASS CITIZENS
        var e=function(param){
            console.log(param)
        }
        e(function(){

        })
*/
//......................................................................................................................................................................................................
/*
    //call back function
        setTimeout(function(){
            console.log("timer")
        },3000)
        function x(y){
            console.log("x")
        y()
        }
        x(function y(){
            console.log("y")
        })
*/

// js is synchrounous but by using call back fn we can achive the property of async. as js sync so it run lines one by one but on case of call back fn js doesnot w8 for the 3 sec in set timeout it goes to next execution
// the program to print how many times a button is pressed and get o/p of the no of click using a closure
/*
    // with out closure(by using a global variable)
        let count=1
        document.getElementById("clickbtn").addEventListener("click",function(){
            console.log("Button-clicked",count++)
        })
*/

/*
    // with closure:
        function eventListner(){
            let count=0
            document.getElementById("clickbtn").addEventListener("click",function (){
                console.log("Button clicked",++count)
            })
        }
        eventListner()
*/

    //garbage collection and remove event listner:its bcoz eventlistner takes more m/y and we cant remove them bcoz a closure is there...