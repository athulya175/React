/*
    const Animal={
        fullname:"sloth  Pilosa",
        age:20,
        isAnimal:true,
        hobbies:["hanging","eating","sleeping"],
        spec:{
            order:"pilosa",
            Family:"Two-toed sloth",
            diet:"Herbivore"
        }
    }
    console.log(Animal.hobbies[0])
    console.log(Animal.spec.Family)
    for(let i in Animal.spec){
        console.log(Animal.spec[i])
    }
*/
class Person{
    constructor(name,age,...address){
        this.Name=name
        this.Age=age
        this.Address=new Address(...address)
    }
}
class Address{
    constructor (street,city,country){
        this.Street=street
        this.City=city
        this.Country=country
    }
}
const Person1= new Person("spongebob","21","Sm Street","kozhikode","India")
console.log(Person1.Address.City)