let check=document.getElementById('checkid')
let radio1=document.getElementById('radioid1')
let radio2=document.getElementById('radioid2')
let radio3=document.getElementById('radioid3')
let submitid=document.getElementById('submit')
let res=document.getElementById("result")
submitid.onclick=function(){
    if(check.checked){
        res.textContent='You are subscribed'
    }
    else{
         res.textContent='You not are subscribed'
    }
    if(radio1.checked){
         res.textContent='You are paying with visa'
    }
    else if(radio2.checked){
         res.textContent='You are payig with masterCard'
    }
    else if(radio3.checked){
         res.textContent='You are paying with paypal'
    }
}


