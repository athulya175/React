let count=0
document.getElementById('btn-1').onclick=function(){
    count++
    document.getElementById('labelid').textContent=count
}
document.getElementById('btn-3').onclick=function(){
    count --
    document.getElementById('labelid').textContent=count
}
document.getElementById('btn-2').onclick=function(){
    count=0
    document.getElementById('labelid').textContent=count
}
