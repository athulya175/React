/*
    function product(name,price){
        this.name=name
        this.price=price
        this.display=function(){
            console.log(`product:${this.name}`)
            console.log(`Price:$${this.price.toFixed(2)}`)
        } 
        this.total=function(salesTax){
            return this.price+(this.price*salesTax)
        }
    }
    const salesTax=0.05
    const produc1=new product("Shirt",19.99)
    const produc2=new product("Pants",22.50)
    const produc3=new product("Top",25.78)
    produc1.display()
*/

// By using class
class Product{                      //Inside the fn we dont need the function key word
    constructor(name,price){
        this.name=name
        this.price=price
    }
    display(){
        console.log(`Product name is:${this.name}`)
        console.log(`Price: $${this.price.toFixed(2)}`)
    }
    CalcTotal(salesTax){
        return this.price=this.price+(this.price*salesTax)
    }
}
const salesTax=0.05
const produc1=new Product(`shirt`,19.998)
const produc2=new Product(`Pant`,22.769)
produc1.display()
const total=produc1.CalcTotal(salesTax)
console.log(`Total Price(with tax):$${total.toFixed(2)}`)