
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