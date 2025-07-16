class Person{
    constructor(firstname,lastname,age){
        this.firstName=firstname
        this.lastName=lastname
        this.age=age
    }
    set firstName(newFirstname){
        if(typeof newFirstname==="string"&& newFirstname.length>0){
            this._firstName=newFirstname
        }
        else{
            console.error("first name must be a non empty string")
        }
    }
    set lastName(newLastname){
        if(typeof newLastname==="string" && newLastname.length>0){
            this._lastName=newLastname
        }
        else{
            console.error("Last name must be a non empty string ")
        }
    }
    set age(newAge){
        if(typeof newAge==="number"&& newAge>0){
            this._age=newAge
        }
        else{
            console.error("Age must be greater than zero")
        }
    }
    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    get age(){
        return this._age
    }
    get fullname(){
        return this._firstName+" "+this._lastName
    }
    
}

const person =new Person("Alice","Liz",25)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.fullname)