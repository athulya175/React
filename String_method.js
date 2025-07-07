// to get the first character 

let userName="  Brocode"
console.log(userName)
console.log(userName.charAt(0))

// index of a letter

console.log(userName.indexOf("o"))

//length
console.log(userName.length)

//to trim white space
userName=userName.trim()
console.log(userName)

//uppercase
console.log(userName.toUpperCase())

//Lowercase
console.log(userName.toLowerCase())

//Repeat
console.log(userName.repeat(3))

// startswith (to check its start with the perticular word)
console.log(userName.startsWith("B"))

//include (does the string contains the perticular thing)
console.log(userName.includes("c"))

//replace all()
let phoneNumber="123-456-7891"
phoneNumber=phoneNumber.replaceAll("-","")
console.log(phoneNumber)

//pad start(it takes 2 parameters one is the number of group and the second is that contant will fill the group)
console.log(phoneNumber.padStart(15,"0"))   //000001234567891(- not here because we replace it before)

//pad end(opposite of pad srart)
console.log(phoneNumber.padEnd(15,"0"))         //123456789100000