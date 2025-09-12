'use strict';



// Selecting elememts
/*
const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")
const score0El=document.querySelector("#score--0")
const score1El=document.getElementById("score--1")
const current0El=document.getElementById('current--0')
const current1El=document.getElementById('current--1')

const diceEl=document.querySelector(".dice")
const btnNew=document.querySelector(".btn--new")
const btnRoll=document.querySelector(".btn--roll")
const btnHold=document.querySelector(".btn--hold")
score0El.textContent=0
score1El.textContent=0
diceEl.classList.add("hidden")

const scores=[0,0]
let currentScore=0
let  activeplayer=0

//Rollinf functionality
    btnRoll.addEventListener('click',function(){
        // 1)Generating a random dice roll
        const dice=Math.trunc(Math.random()*6)+1
        //2) Display dice
        diceEl.classList.remove('hidden')
        diceEl.src=`dice-${dice}.png`
        console.log(dice)
        // 3) check for rolled 1:if true, switch to next player(beause if its 1 then we need to swich player)
        if(dice!==1){
            // Add dice to current score
            currentScore+=dice
            document.getElementById(`current--${activeplayer}`).textContent=currentScore

        }
        //switch to nxt player if its one
        else{
            document.getElementById(`current--${activeplayer}`).textContent=0
            activeplayer=activeplayer===0?1:0  //justing between active players if dices hits one.
            player0El.classList.toggle('player--active')
            player0El.classList.toogle('player--active')
        }
    })

*/


const score0El=document.getElementById("score--0")
const score1El=document.getElementById("score--1")
const diceEl=document.querySelector(".dice")
const rollBtn=document.querySelector(".btn--roll")
const newBtn=document.querySelector(".btn--new")
const holdBtn=document.querySelector(".btn--hold")
const player0El=document.querySelector(".player--0")
const player1El=document.querySelector(".player--1")

score0El.textContent=0
score1El.textContent=0
let activeplayer=0
let currentScore=0
const scores=[0,0]
diceEl.classList.add('hidden')

rollBtn.addEventListener("click",()=>{
    const dice=Math.trunc(Math.random()*6)+1
    console.log(dice)
    diceEl.classList.remove('hidden')
    diceEl.src=`dice-${dice}.png`
    console.log(diceEl.src)
    if(dice!==1){
        currentScore+=dice
        document.getElementById(`current--${activeplayer}`).textContent=currentScore
    }
    else{
        currentScore=0  // then only next player will switch to zero
        document.getElementById(`current--${activeplayer}`).textContent=0   // before switching the player the current active we need to change the text content of cuurent active as zero. 
        activeplayer=activeplayer===0?1:0
        player0El.classList.toggle('player--active')
        player1El.classList.toggle('player--active')
    }
})
holdBtn.addEventListener("click",()=>{
    //1.Add current score to active player's score
    scores[activeplayer]+=currentScore
    document.getElementById(`current--${activeplayer}`).textContent=scores[activeplayer]
    //2.Check if player's score is>=100 
            //finish the game
            //Switch to next player
})
/*
*first setting the both score as zero
*and we need to display the dice only when click on the roll dice button
*Just adding all buttons btn--hold
* steps of roll btn
        * Generate random dice roll
        * display dice
        * checking its one(if its not one,update the current score,else switch player)
        * adds a score array and assign to  zero[they are the big score]
*/