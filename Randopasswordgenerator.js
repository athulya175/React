function passwordGenerator(len,lower,upper,num,symbol){  //  step 2 create the fn with parameter to corresponding parameter
    const lowercase="abcdefghijklmnopqrstuvwxyz"
    const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const numbers="1234567890"
    const symbols="!@#$%^&*()+_-="
    let allowedchars=""
    let password=""
    allowedchars+=lower?lowercase:""
     allowedchars+=upper?uppercase:""
     allowedchars+=num?numbers:""
     allowedchars+=symbol?symbols:""
    // console.log(allowedchars)
    if(len<=0){
        return `(Password length must be at least one)`
    }
    if(allowedchars.length===0){
        return`(At least one set of character needs to be selected)`
    }
    for(let i=0;i<len;i++){
        const randomindex=Math.floor(Math.random()*allowedchars.length)
        password+=allowedchars[randomindex]
    }
    return password
}
const passwordLength=10                 // step 1 creats all the arguments
const includeLowercase=true
const includeUppercase=true
const includeNumbers=true
const includeSymbols=true
const password= passwordGenerator(passwordLength,includeLowercase,includeUppercase,includeNumbers,includeSymbols)   // step3 calls the fn and assign in to a variable 
console.log(`Generated password is: ${password}`)       //step 4 console the o/p 


