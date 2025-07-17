/*
    console.time("test")
    for(let i=0;i<10000000;i++){
        
    }
    console.timeEnd("test")  //  this method returns how much time it takes for the execution
*/
function loadData(){
    console.time("time")
    for(let i=0;i<10000000;i++){}
    console.timeEnd("time")
}
function processData(){
    console.time("process")
   for(i=0;i<10000000;i++){
    }
    console.timeEnd("process") 
}


loadData()
processData()