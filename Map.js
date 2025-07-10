const numbers=[1,2,3,4,5]
function square(element){
    return Math.pow(element,2)
}
const squares=numbers.map(square)
console.log(squares)


function cube(element){
    return Math.pow(element,3)
}
console.log(numbers.map(cube))

const students=["Tiya","Riya","Iva","Isha"]
function upper(element){
    return element.toUpperCase()
}
console.log(students.map(upper))

function lower(element){
    return element.toLowerCase()
}
console.log(students.map(lower))

// Date formating...

const dates=["2024-1-10","2004-5-30","2004-08-21","2003-3-21"]
function formateDates(element){
    const tempDate=element.split("-")   // here we split the date
    return `${tempDate[2]}/${tempDate[1]}/${tempDate[0]}`
}
console.log(dates.map(formateDates))





