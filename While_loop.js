/*
    //------while loop
        let userName=''
        while(userName===""||userName===null){   //if wew add ||userName===null then we cant cancel it we need to type something that's compulsury
            userName=window.prompt(`Enter your name`)
        }
        console.log(`Hello ${userName}`)
*/


/*
    // do while loop

        let userName=''
        do{
            userName=window.prompt(`Enter your name`)
        }
        while(userName===""||userName===null)
        console.log(`Hello ${userName}`)
*/

let loggedIn =false         //login is set to false because at the start no user is enterd
let userName
let password 
while(!loggedIn){           // this means it keep looping while login is false
    userName=window.prompt("Enter your username")
    password=window.prompt("Enter your password")
    if(userName==="myUsername"&& password==='myPassword'){
        loggedIn=true
        console.log("you are logged in")
    }
    else{
        console.log("invalid credentials! please try again")
    }
}

//This program reffers to  ask a user to enter the username and password, it follows a loop until it found the correct user name and password 


