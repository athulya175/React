/*
    setTimeout(() => {
        window.alert("hello")
    },3000);
*/

/*
    // to clear the set time out fn,
        const setTimeoutId=setTimeout(()=>window.alert("hello"),3000)
        clearTimeout(setTimeoutId)
*/

let timeoutid
function timerstart(){
    timeoutid=setTimeout(()=>window.alert("hello"),3000)
}
function timerstop(){
    clearTimeout(timeoutid)
}