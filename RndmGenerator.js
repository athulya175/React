/*
    // For generating numbers b/w  0 and 6 (6 exclusive)
        let randomNum=Math.floor(Math.random()*6)
        document.getElementById('textid').textContent=randomNum
*/

/*
    //this is for generating Random number b/w 1 and 100
        let randomNum=Math.floor(Math.random()*100)+1  
        console.log(randomNum)
*/

/*
    // range b/w min and min
        const min=50
        const max=100
        let randomNum=Math.floor(Math.random()*(max-min))+min
        console.log(randomNum)
*/

/*
    //the dice 
        document.getElementById('rl-btn').onclick=function(){
            let randomNum=Math.floor(Math.random()*6)+1
            document.getElementById('labelid').textContent=randomNum
        }
*/
const myBtn=document.getElementById('rl-btn')
const label1=document.getElementById('labelid1')
const labe2=document.getElementById('labelid2')
const label3=document.getElementById('labelid3')
let randomNum1
let randomNum2
let randomNum3
const min=1
const max=6
myBtn.onclick=function(){
    randomNum1=Math.floor(Math.random()*max)+min
    randomNum2=Math.floor(Math.random()*max)+min
    randomNum3=Math.floor(Math.random()*max)+min
    label1.textContent=randomNum1
    labe2.textContent=randomNum2
    label3.textContent=randomNum3
}