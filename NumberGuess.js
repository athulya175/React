const min=1
const max=100
const ans=Math.floor(Math.random()*(max-min+1))+min
let attempts=0
let guess
let running=true
while (running){
    guess=window.prompt(`Guess a number between ${min}-${max}`)
    guess=Number(guess)
    if(isNaN(guess)){
        window.alert("Please enter a vallid number")
    }
    else if(guess<min || guess>max){
         window.alert("Please enter a vallid number")
    }
    else{
        attempts++
        if(guess<ans){
             window.alert("Too Low! TRY AGAIN ")
        }
        else if(guess>ans){
               
             window.alert("Too High! TRY AGAIN ")
        }
        else{
            window.alert(`YEH! you got it it took you ${attempts} attempts`)
        }
    }
}
