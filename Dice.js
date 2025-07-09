/*function rollDice(){    
    const dicenum=document.getElementById('text').value    //note to put .value
    const result=document.getElementById('result')
    const diceimg=document.getElementById('dice-image')
    const rsltary=[]
    const imgary=[]
        for(let i=0;i<dicenum;i++)  {               // this i<dicenumber (it need to iterate that times)
            const value=Math.floor(Math.random()*6)+1     // random number generate according to the dicenumber 
            rsltary.push(value)                                 // the generated random number is pushed to the array,because we need to display it as a array
            imgary.push(`<img src="images/${value}.png"/>`)         // here the image's name and the value we randomnly generated both must be same

        } 
        result.textContent=`Dice: ${rsltary.join(",")} `
        diceimg.innerHTML=imgary.join(" ")
    }
*/

function rollDice(){
    const dicenum=document.getElementById('text').value
    const result=document.getElementById('result')
    const images=document.getElementById('dice-image')
    let rsltary=[]
    let imgary=[]
    for(let i=0;i<dicenum;i++){
        const value=Math.floor(Math.random()*6)+1
       rsltary.push(value)
       imgary.push(`<img src='images/${value}.png'>`)
    }
    result.textContent=rsltary
    images.innerHTML=imgary
}


