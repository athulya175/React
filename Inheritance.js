class Animal{
    isAlive=true
    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name}is sleeping`)
    }
}
class Rabbit extends Animal{
    name="rabbit"
    swim(){
        console.log(`This ${this.name} can run`)            // tgis is how we can add extra fn in child class
    }
}
class Mouse extends Animal{
    name="mouse"
}
class Fish extends Animal{
    name="fish"
}
const rabbit=new Rabbit()
const mouse=new Mouse()
const fish=new Fish()
console.log(rabbit.isAlive)
rabbit.eat()
rabbit.swim()
console.log(mouse.isAlive)
mouse.eat()
