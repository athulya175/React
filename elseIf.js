let ageip=document.getElementById('userid')
let labelid=document.getElementById('result')
let submitid=document.getElementById('submitid')
submitid.onclick=function(){
    let age=Number(ageip.value)
    if(age>=18){
        labelid.textContent="you are eligeble"
    }
    else if(age<=0){
          labelid.textContent="Age cannot be less than zero"
    }
    else{
        labelid.textContent="you must have age 18+"
    }
}


