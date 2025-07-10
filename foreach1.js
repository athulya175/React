let fruits=["apple","orange","banana","coconut"]
function display(element){
    console.log(element)
}
function Upper(element,index,array){
    array[index]=element.toUpperCase()
}
function lower(element,index,array){
    array[index]=element.toLowerCase()
}
fruits.forEach(Upper)
fruits.forEach(display)
fruits.forEach(lower)
fruits.forEach(display)

function capFst(element,index,array){
    array[index]=element[0].toUpperCase()+element.slice(1)
}
fruits.forEach(capFst)
fruits.forEach(display)
