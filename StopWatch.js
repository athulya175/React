/*
    const time=document.getElementById("time")
    let timer=null
    let startTime=0
    let elaspedTime=0
    let isworking=false
    function Start(){
    if(!isworking){
        startTime=Date.now()-elaspedTime
        timer=setInterval(display,10)
        isworking=true
    } 
    }
    function Stop(){
        if(isworking){
            clearInterval(timer)
            elaspedTime=Date.now()-startTime
            isworking=false
        }
    }
    function Reset(){
    clearInterval(timer) 
    let startTime=0
    let elaspedTime=0
    let isworking=false
    time.textContent="00:00:00:00"
    }
    function display(){
        const currenttime=Date.now()
        elaspedTime=currenttime-startTime       // we get the elapsed time as in milliseconds so wee need to convert it into hour,min,....
        let hours=Math.floor(elaspedTime/(1000*60*60))
        let minutes=Math.floor(elaspedTime/(1000*60)%60)
        let seconds=Math.floor(elaspedTime/1000%60)
        let milliseconds=Math.floor(elaspedTime%1000/10)
        hours=String(hours).padStart(2,"0")
        minutes=String(minutes).padStart(2,"0")
        seconds=String(seconds).padStart(2,"0")
        milliseconds=String(milliseconds).padStart(2,"0")
        time.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
    }
*/
const time=document.getElementById('time')
let timer=null
let startTime=0
let elaspedTime=0
let isworking=false

function Start(){
    if(!isworking){
        startTime=Date.now()-elaspedTime
        timer=setInterval(display,10)
        isworking=true
    }
}
function Stop(){
    if(isworking){
    clearInterval(timer)  
    elaspedTime=Date.now()-startTime
    isworking=false
    }

}
function Reset(){
    let timer=null
    let startTime=0
    let elaspedTime=0
    let isworking=false
    time.textContent="00:00:00"
}
function display(){
        currentTime=Date.now()
        elaspedTime=currentTime-startTime
        let hours=Math.floor(elaspedTime/(100*60*60))
        let minutes=Math.floor(elaspedTime/(1000*60)%60)
        let seconds=Math.floor(elaspedTime/1000%60)
        let milliseconds=Math.floor(elaspedTime%1000/10)
        hours=String(hours).padStart(2,"0")
        minutes=String(minutes).padStart(2,"0")
        seconds=String(seconds).padStart(2,"0")
        milliseconds=String(milliseconds).padStart(2,"0")
        time.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`

}




