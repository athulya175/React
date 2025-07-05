/*
    let age=window.prompt(`what's your age`) 
    let res=age+1
    console.log(res)
*/
let age=document.getElementById('submitid').onclick=function(){
   age=Number(document.getElementById('userid').value)      // this is how we use type convertion
    console.log(age+1 ,typeof age)
}