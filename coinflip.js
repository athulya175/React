const btn_click =document.getElementById('btn-id')
const titl=document.getElementById('text')
const img=document.getElementById('coin-img')
let random
function flip(){
   const random=Math.floor((Math.random())*2)+1
   console.log(random)
   if(random==1){
    titl.textContent="Head"
    img.innerHTML=`<img src="imgcoin/${random}.png" alt="coin" style="width:100px;"/>`
   }
   else{
    titl.textContent="Tail"
    img.innerHTML=`<img src="imgcoin/${random}.png" alt="coin" style="width:100px;"/>`
   }
}


