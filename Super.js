/*
    class Animal{
        constructor(){

        }
    }
    class Mouse extends Animal{
        constructor(name,age,runspeed){
            super()                        // we need to add super(),other wise occure reference error:  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
            this.Name=name
            this.Age=age
            this.Runspeed=runspeed
        }
    }
    class Rabit extends Animal {
        constructor(name,age,runspeed){
            super()
            this.Name=name
            this.Age=age
            this.Runspeed=runspeed
        }
    }
    class Fish extends Animal{
        constructor(name,age,swimspeed){
            super()
            this.Name=name
            this.Age=age
            this.Swimspeed=swimspeed
        }    
    }
    const mouse=new Mouse('Mouse',1,25)
    const rabbit=new Rabit('Rabbit',2,12)
    const zebra=new Fish('Fish',3,32)
    console.log(Animal.mouse)
*/
// here we can see that the name,age property are common to all so we can declare those in parent component and call by using Super()
 class Animal{
        constructor(name,age){
            this.name=name
            this.age=age
        }
    }
    class Mouse extends Animal{
        constructor(name,age,runspeed){
            super(name,age)                        
            this.Runspeed=runspeed
        }
    }
    class Rabit extends Animal {
        constructor(name,age,runspeed){
            super(name,age)
            
            this.Runspeed=runspeed
        }
    }
    class Fish extends Animal{
        constructor(name,age,swimspeed){
            super(name,age)
        
            this.Swimspeed=swimspeed
        }    
    }
    const mouse=new Mouse('Mouse',1,25)
    const rabbit=new Rabit('Rabbit',2,12)
    const zebra=new Fish('Fish',3,32)
   
    console.log(rabbit)
    