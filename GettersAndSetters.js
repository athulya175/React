/*
        class Rectangle{
            constructor(width,height){
                this.width=width
                this.height=height
            }
        }
        const rectangle=new Rectangle(-1000,`pizza`)
        console.log(rectangle.width)
        console.log(rectangle.height)

    // When we do like this it will print width as -10000 and height as pizza so we can use setters and getters
*/


/*
    class Rectangle{
                constructor(width,height){
                    this.width=width
                    this.height=height
                }
                set width(newwidt){
                    if(newwidt>0){
                        this._width=newwidt         // here underscore with is not same as width(it indicates private or internal property)
                    }
                    else{
                        console.error("width must  be a positive number")
                    }
                }
                set height(newHeight){
                    if(newHeight>0){
                        this._height=newHeight
                    }
                    else{
                        console.error("Height must be a positive nummber")
                    }
                    
                }
            }
            const rectangle=new Rectangle(1000,4)
            console.log(rectangle.width)
            console.log(rectangle.height)
    // when we use this setter property the value is just to read if we use only set, when we use console the o/p be like undefined to get o/p we need to use getters
*/

 class Rectangle{
                constructor(width,height){
                    this.width=width
                    this.height=height
                }
                set width(newwidt){
                    if(newwidt>0){
                        this._width=newwidt         // here underscore with is not same as width(it indicates private or internal property)
                    }
                    else{
                        console.error("width must  be a positive number")
                    }
                }
                set height(newHeight){
                    if(newHeight>0){
                        this._height=newHeight
                    }
                    else{
                        console.error("Height must be a positive nummber")
                    }
                    
                }
                get width(){
                    return this._width
                }
                get height(){
                    return this._height
                }
                get area(){
                    return this._width*this._height
                }
            }
            const rectangle=new Rectangle(1000,4)
             rectangle.width=2          // we can reassign the value latter
            rectangle.height=6
            console.log(rectangle.width)
            console.log(rectangle.height)
            console.log(rectangle.area)         // here  area is not a property of rectangle width and height is the only property, but still we can use the area using (rectangle.) because of using "get"
           
