//-----No Method Chaining-----
let userName=window.prompt("enter your username")
// userName=userName.trim()  //triming white space
// let letter=userName.charAt(0)
// letter=letter.toUpperCase()
// let balanceletter=userName.slice(1)
// balanceletter=balanceletter.toLowerCase()
// userName=letter+balanceletter
// console.log(userName)

//-------- Method chaining-------------
userName=userName.trim().charAt(0).toLocaleUpperCase()+userName.trim().slice(1).toLowerCase()
console.log(userName)