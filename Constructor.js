function Car(a,b,c,d){
    this.make=a,
    this.model=b,
    this.year=c,
    this.color=d
    this.drive=function(){console.log(`you drive the ${this.model}`)}
}
const car1=new Car("Ford","Mustang",2024,"red")
const car2=new Car("Chevrolet","Camaro",2025,"blue")
const car3=new Car("Dodge","Charger",2026,"black")

console.log(car1.make)
console.log(car1.model)
console.log(car1.year)
console.log(car1.color)
car1.drive()

console.log(car2.make)
console.log(car2.model)
console.log(car2.year)
console.log(car2.color)

console.log(car3.make)
console.log(car3.model)
console.log(car3.year)
console.log(car3.color)