// finding the circumference of circle
const pi=3.14159
let circumference
document.getElementById('submitid').onclick=function(){
let radius=Number(document.getElementById('userid').value)
circumference=2*pi*radius
document.getElementById('result').textContent='circumference : '+circumference+'cm'
}
// if we declare a variable as const we cant  change its value but if we uses let

