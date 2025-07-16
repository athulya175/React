const date =new Date()
console.log(date)

// to create custom time
const date1=new Date('2024-01-02T12:00:00z')
console.log(date1)

const date3=new Date()
const year=date3.getFullYear()
const month=date.getMonth()
const dayofWeek=date.getDay()
const hour=date.getHours()
const minute=date.getMinutes()
const seconds=date.getSeconds()
const day=date.getDate()
console.log(`Year: ${year}, Month: ${month}, DayofWeek: ${day},Hours: ${hour}, Minute: ${minute},seconds: ${seconds}, Day:${day}`)  //here month also counts starts from zero that is jan is zero and dec is 11  and day as suday,monday.......
