
/*
   //by using window prompt

    let username=window.prompt("Whats your user name")
    console.log(username)
*/

// 2nd method is by using html
let username
document.getElementById('submitid').onclick=function(){
    username=document.getElementById('userid').value
    console.log(username)
}
