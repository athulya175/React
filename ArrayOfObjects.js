const fruits=[{name:"apple",color:"red",calories:95},
                {name:"plum",color:"red",calories:66},
                {name:"lichi",color:"white",calories:78},
                {name:"orange",color:"orange",calories:87},]



fruits.push({name:'pineapple',color:'Yellow',calories:82})   //push


fruits.forEach(element => {                     //using foreach
    console.log(element.name)
});


const fruitname=fruits.map(x=>x.color)     // using map 
console.log(fruitname)

const colorred=fruits.filter(x=> x.color=="red")        //filter
console.log(colorred)

const lowcalories=fruits.filter(x=>x.calories<80)
console.log(lowcalories)


const maxFruit=fruits.reduce((max,next)=>next.calories>max.calories?next:max)
console.log(`max`,maxFruit)


console.log(fruits[4].name)             //index                   
console.log(fruits)


fruits.pop()                        //pop
console.log(fruits)


fruits.splice(1,2)              //splice
console.log(fruits)


