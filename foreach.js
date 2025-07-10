let numbers=[1,2,3,4,5]
function display(element){
    console.log(element)
}
function double(element){
    console.log(2*element)
}
numbers.forEach(display)
// numbers.forEach(double)     // this method will not change the oraginal array


function double2(element,index,array){
    array[index]=element*2;
}
numbers.forEach(double2)        // if we do this method then it changes the orginal array it only print the array once we calls the display fn again
numbers.forEach(display)


function square(element){
    console.log(Math.pow(element,2))
}
numbers.forEach(square)


