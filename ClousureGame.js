/*
    let score=0
    function increaseScore(points){
        score+=points
        console.log(`+${points} pts`)
    }
    function decreaseScore(points){
        score-=points
        console.log(`-${points}pts`)
    }
    function getScore(){
        return score
    }
        score=100000               // here  we can see that we can modify the score but if we wrap this like a clousure then no body can change
    increaseScore(5)
    increaseScore(6)
    decreaseScore(3)
    console.log(`The final Score is ${getScore()}`)
*/

function clousureGame(){
    let score=0
    function increaseScore(points){
        score+=points
        console.log(`+${points}pts`)
    }
    function decreaseScore(points){
        score-=points
        console.log(`-${points}pts`)
    }
    function getScore(){
        return score
    }
    return{
        increaseScore,decreaseScore,getScore   // this are the refers to the inner function
    }
}
const point=clousureGame()
point.increaseScore(5)
point.decreaseScore(2)
console.log(`The final point is ${point.getScore()}`)