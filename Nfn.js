
    function square(arg){
        const sqr=arg*arg 
        return sqr
    }
    console.log(square(10))

    function a(){
            c()
            function c(){
            console.log(b)
            }
        }
        var b=10
        a()

        
    function a(){
        var b=10
        c()
        function c(){
        }
    }

    a()
    console.log(b) 
    
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