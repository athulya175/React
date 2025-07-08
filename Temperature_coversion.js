const textbox=document.getElementById('text')
const toFahren=document.getElementById('radioid1')
const toCelis=document.getElementById('radioid2')
const result=document.getElementById('result')
document.getElementById('submit-btn').onclick=function(){
     event.preventDefault();
     temp=Number(textbox.value)
    if(toFahren.checked){
       
       temp=temp*9/5+32
        result.textContent=temp.toFixed(1)+"°F"  //to make it one decimal place
    }
    else if(toCelis.checked){
       temp=(temp-32)*(5/9)
        result.textContent=temp.toFixed(1)+"°C" 
    }
    else{
        result.textContent='Select a unit'
    }
    
}