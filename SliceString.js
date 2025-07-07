//slice(start,end)
const fullname="Bro Code"
console.log(fullname.slice(0,3))
console.log(fullname.slice(-1))//last index



// we can slice it by  using the combine of indexof with white space..
const fullName='Brocode malayalam'
console.log(fullName.slice(0,fullName.indexOf(" "))) //which is here 0->starting and tthen index of the first white space is the ending
console.log(fullName.slice(fullName.indexOf(" ")))     //here we dont add ending index because we takiung all the letters after the space  
console.log(fullName.slice(fullName.indexOf(" ")+1))     //here adds one to avoid the space before malyalam 



const email="athulyaa175@gmail.com"
let username=email.slice(0,email.indexOf("@"))
let extension=email.slice(email.indexOf("@")+1)
console.log(username)
console.log(extension)