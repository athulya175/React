const display=document.getElementById('display')
function keysDisplay(inp){
    display.value+=inp
}
function calculate(){
    try{
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
}
function cleartxt(){
    display.value=""
}
function deletetxt(){
    display.value=display.value.slice(0,-1)
}
