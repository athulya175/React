/*
    class Circle{
        static PI=3.14159
        static getDiameter(radius){
            return radius*2
        }
        static Circumference(radius){
            return 2*this.PI*radius
        }
        static Area(radius){
            return this.PI*radius*radius
        }
    }
    console.log(Circle.getDiameter(10))
    console.log(Circle.Circumference(10))
    console.log(Circle.Area(10))
*/




// Mix of static and regular
class User{
    static UserCount=0
    constructor(name){
        this.UserName=name
        User.UserCount++
    }
    
}
const use1=new User("spongebob")
const use2=new User("Patricks")
console.log(use1.UserName)
console.log(use2.UserName)
console.log(`Count`,User.UserCount)
