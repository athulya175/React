/*hello(leave)            //---->Call back 

    function hello(callback){
        console.log("hello")
        callback()
    }
    function leave(){
        console.log("Leave")
    }
    function bye(){
        console.log('Good Bye')
    }
 */         //--->here we sets the call  back fn as the argument of the fn which we has to be called

 function sum(callback,x,y){
    let result=x+y
    callback(result)
 }
 function display(result){             //The function needs a parameter to receive that value.
    console.log(result)
 }
 sum(display,1,2)
 
