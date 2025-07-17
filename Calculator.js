function btn_submit(){
    const totalAmount=document.getElementById('value')
    const principalAmount=document.getElementById('prAmount')
    const interestAmount=document.getElementById('inAmount')
    const yearsAmount=document.getElementById('years')

    let principal=Number(principalAmount.value)
    let interest=Number(interestAmount.value/100)
    let years=Number(yearsAmount.value)
    if(principal<0){
        principal=0
    }
    if(interest<0){
        interest=0
    }
    if(years<0){
        years=0
    }
    const result=principal*Math.pow((1+interest/1),1*years)
    totalAmount.textContent=result.toLocaleString(undefined,{style:"currency",currency:"USD"})
}