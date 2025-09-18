'use strict';
/*

  // Data needed for first part of the section
  const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order:function(staterIndex,mainIndex){
      return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]]
    }
  };
  const arr=[1,2,3]
  const a=arr[0]
  const b=arr[1]
  const c=arr[2]
  // by using the property of destructuring we can declare all of them at once
  const[x,y,z]=arr
  console.log(x,y,z)
  const [first,,second]=restaurant.categories  // here we add an extra space so we can skip the 2nd element and then it logs the third element.
  console.log(first,second)


  let[main,secondary]=restaurant.categories
  console.log(main,secondary)


  // const temp=main
  // main=secondary
  // secondary=temp
  // console.log(main,secondary)

  // same the above swaping using destructuring
  [main, secondary] = [secondary,main]
  console.log(main,secondary)

  console.log(restaurant.order(2,0))
  //receive 2 return values from a function,
  const[stater,mainCourse]=restaurant.order(2,0)
  console.log(stater,mainCourse)

  const nested=[2,4,[5,6]]
  // const [i, ,j]=nested
  // console.log(i,j) // here we skip the element b/2 2 and[5,6]

  // nested destructure 
  //to get each element individually we need to use destructuring inside of destructuring.
  const [i, ,[j,k]]=nested //simply skiped 4
  console.log(i,j,k)

  //Default value
  const[p,q,r]=[8,9]
  console.log(p,q,r)  // r is undefined

*/
//------------------------------- Destructuring Objects----------------------------
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
   openingHours:{
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:14,
      close:24,
    },
    sat:{
      open:0,  //Open 24 hours
      close:24,
    }
   },
   order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
   },
   orderDelivery :function({starterIndex=1,mainIndex=1,time='22:30',address}){ // simply setting default values
    console.log(`order recieverd! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time} ` )
   },
   review:function({reviewval}){
    if(reviewval>=8){
      console.log("You rated 5 star")
    }
    else if(reviewval>=5 &&reviewval<8){
      console.log("you gave 3 star")
    }
    else{
      console.log("Its a 1 star")
    }
   },
   orderPasta:function(ing1,ing2,ing3){
    console.log(`here is you pasta with ${ing1},${ing2},${ing3}`)
   },
   orderPizza:function(maining,...othering){
    console.log(maining)
    console.log(othering)
   }
  };
restaurant.orderDelivery({
  time:'22:30',
  address:'Via del sole,21',
  mainIndex:2,
  starterIndex:2
}) // the names must match on the params of the function but order is not a matter
restaurant.orderDelivery({
  address:'Via del sole,21',
})
restaurant.review({
  reviewval:2
})

restaurant.orderPizza('mushroom',"onion","span")
/*
const ingredients=[prompt('Let\'s  make pasta! ingredient 1?'),prompt('ingredient 2?'),prompt('ingredient 3?')]
console.log(ingredients)
restaurant.orderPasta(...ingredients)
*/
  // for object destructure we use curly braces
  //we need to write exact property name(order of elemenents doesn't matters,and also we don't need to skip elements manually insted of that just use its name)
  const{name,openingHours,categories}=restaurant
  console.log(name,openingHours,categories)

  // changing names
  const{name:restaurantName,openingHours:hours,categories:tags}=restaurant
  console.log("newnames",restaurantName,hours,tags)// insted of using name,openinghours.... we can use new naames like resturant name,hours...

  //default values(here menu is not in restaurant so if we need a default value for menu or create a menu then we can assign it to a default value as [])
  const{menu=[],starterMenu:starters=[]}=restaurant
  console.log(menu,starters)

  // mutaiting variables while destructuring objects
let a=111
let b=999
console.log("before",a,b)
const obj={a:23,b:7,c:14};
// our goal is we need a to 23 and b to 7
//{a,b}=obj // we can't write like this because, starting with a curly brace is interpreted as a code block.so we need to wrapp the assignment in parantheses clarifies that it is an expression.
({a,b}=obj)
console.log("after",a,b)

//nested objects
const {fri}=openingHours
console.log(fri) // returns an array 

const{fri:{close,open}}=openingHours
console.log(open,close)//gets the value

// also we can change its value
const{fri:{open:o,close:c}}=openingHours
console.log(o,c)

//---------------------------------------Spread Operator---------------------------------

const arr=[7,8,9]
const arr1=[...arr,12,1,6,8,9]
console.log(arr1) // returns a single array
console.log(...arr1)// returns individual elements of an array             

const newmenu=[...restaurant.mainMenu,'Gnocci']
console.log(newmenu) // here we are creating a new array not at the same array

// whenever wee need the elements of an array individually,we can use the spread operator.This is useful when building arrays or passing multiple elements to function
//Spread operator is somewhat similar to destructuring because it helps us get element out of arrays.The big difference is that the spread operator takes all elements from the array and does not create new variables.we can only use it where separated by commas are expected.

// 2 use cases->shallow copy and megrge two arrays together.
//shallow copy
const copyArray=[...restaurant.mainMenu]
// merge two array together.
const menuList=[...restaurant.mainMenu,...restaurant.starterMenu]
console.log(menuList)

//the spread operator works on arrays,it actually works on all so-called iterables.iterables in js include arrays,strings,maps,and sets,but not objects


const str="Jonas"
const letters=[...str,'','S.']
console.log(letters)
//console.log(`${...letters}`) // this is not gonna work because this will not support multiple things seperated by comma
// created a function on the restaurant(ingredients)

// objects are not litterals still it works on spread opeator since 2018
const newRestuarat={...restaurant,founder:'Guiseppe',foundIn:1998}
console.log("new",newRestuarat)

const restaurantCopy={...restaurant}
restaurantCopy.name='Resturant Name'
console.log(restaurantCopy)
console.log(restaurant)

//----------------------------------Rest pattern and parameters--------------------------

// the syntax of rest paramter is also same as spread operator it also have 3 dots but it actually does the opposite of the spread operator.the rest patterrn uses the exact same syntax but to collect multiple elements and condense them into an array.so the spread operator unpacks aan array,while the rest pattern packs elements into an array.

//this is a spread operator because it uses on the right side of the assigment operator
const arry=[1,2,...[3,4]]
//this is rest parameter because it uses left side of the assigment operator
const [a1,b1,...others]=[1,2,3,4,5] // this  means a1,b1, are 1st 2 elements and rest of them are include in "others"
console.log("rest pattern",a1,b1,others)

const [Pizza, ,Risotto,...other]=[...restaurant.mainMenu,...restaurant.starterMenu]

console.log("p",Pizza,"R",Risotto,"O",other)

//objects 
const {sat,...weekdays}=restaurant.openingHours
console.log(weekdays)

// Functions
const add=function(...num){
  //console.log(num)  // when we use a console here the result will be 3 arrays because rest take values and return as a single array
let sum=0
for(let i=0;i<num.length;i++){
    sum+=num[i]
    
}
console.log(sum)
}
add(2,3)
add(3,4,5,6,8)
const x=[23,5,7]
add(...x)
const y=[12,45,67]
add(...y) // by doing this we can take an array as argument


// adding an ordering method in resturant( so by using rest params we can add any number of arguments of one, 1st argment statys in maining all other remaining stays on the rest array )


//-----------------------------------Short circuiting(&& and ||)---------------------------
console.log("SHORT CICUIT OPERATOR")
console.log(3||"Jonas")// the result is 3 that means or will not be always a boolean
//short cicuiting with thw OP operator means that if the first value is truthy,it will immediately return that first value,that is here 3 is a truthy value so it returned and the second operant is not evaluated.

console.log(""||"Jonas")//jonas
console.log(true||0)//true
console.log(undefined||null)//null here null is also a falsy value

console.log(undefined||0||""||"hello"||23||null) //hello



// restaurant.numGuest=23 // comment and uncoment this to identify the difference
const guest1=restaurant.numGuest?restaurant.numGuest:10
console.log(guest1)//10
  // we can write this in a simple way as 
  const guest2=restaurant.numGuest||10
  console.log(guest2) //10
// this happends because there is no numGest so that is a falsy value

// and operator

console.log("------AND----")

console.log(0 && "Jonas") // first falsy value return
console.log(7 && 'Jonas') // both are truthy so last truthy value is return

console.log("hello"&&22&&null&&"jonas")

//we normaly use a if condition like this way
if(restaurant.orderPizza){
  restaurant.orderPizza("mushroom","Spinach")
}
restaurant.orderPizza && restaurant.orderPizza("mushroom","spinach") // what it mean is if the method orderpizza is exsists then execute the second part.
// OR operator returns the first truthy value among all operands, or the last value if all are falsy.
//AND operator returns the first falsy value, or the last value if all are truthy

// THE "OR" OPERATOR IS USEFUL FOR SETTING DEFAULT VALUES,WHILE THE "AND" OPERATOR CAN BE USED TO EXECUTE CODE CONDITIONALLY BASEDD ON THE FIRST OPERAND

//---------------------------------- The  Nullish coalescing Operator(??)
//It returns the right-hand side value if the left-hand side is either null or undefined.Otherwise, it returns the left-hand side value.
//-----------------------------------------


restaurant.numGuest=0
const guests=restaurant.numGuest||10
console.log(guests) //10
/*here we already sets numGest=0 so zero is a falsy value so in this case it return 10 insted of 0 for that */ 

const guestsCorrect=restaurant.numGuest??10
console.log(guestsCorrect)//0
// here we get 0 insted of 10 that we already declared numGuest as 0 this happens because the Nullish coalescing Operator works in nullish value instedd of truthy/falsy value,nullish value are null and undefined(not includes zero or empty string)


/**Logical Assigment operators
 -------------------------------*/
console.log("-----------Logical Assigment operators------------")
 const rest1={
    name:"Capri",
    numGuest:0
 }
 const rest2={
  name:"La piazza",
  owner:'Giovanni Rossi'
 }

//  rest1.numGuest=rest1.numGuest||10
//  rest2.numGuest=rest2.numGuest||10
// console.log(rest1)
// console.log(rest2)

// by using logical assigment operator  we can make this much better

// rest1.numGuest||=10
// rest2.numGuest||=10
// console.log("logic assign",rest1)
// console.log(rest2)

// The  Nullish coalescing Operator(??)
//logical assigment operator is also works with truthy and falsy value so ,solution use "Nullish coalescing Operator"
rest1.numGuest??=10
rest2.numGuest??=10
console.log("nullishAssign",rest1)
console.log("nullish assign",rest2)

/*
  // as in rest2 suppose we need to replace the string owner how to do it?
  rest2.owner=rest2.owner&&'<ANONYMOUS>'
  rest1.owner=rest1.owner&&'anystring' // this is not gonna work because on rest1 there is nothing called owner so it return "undefined'
*/
//by using  short circuit
rest2.owner&&='<Anonimous>'
rest1.owner&&='anything' // here there not come anything with "undefined"
console.log(rest1)
console.log(rest2)
// here we change the  value by using && that is if the first value is truth it looks for nxt falsy value if there is no falsy value then it return the lasst truthy value

//if we need to assign a value to a variable that is already defined,so that has a value that is currently truthy then we can use nullish assignemnt operator(&&=)


//---------------------------------------------------------------------------------------------------------------

//--------------------Looping arrays:THE FOR_OF_LOOP----------------
console.log("--------------------Looping arrays:THE FOR_OF_LOOP----------------")
const mainMenu=[...restaurant.starterMenu,...restaurant.mainMenu]
for(const item of mainMenu) console.log(item)
     
for(const item of mainMenu.entries()){ // what if when we need the current Index also, we can use .entries
  console.log(item)
}
// console.log(...mainMenu.entries())

for(const item of mainMenu.entries()){
  console.log(`${item[0]+1}:${item[1]}`)
}
// the same above code can write much better way using array destructure
for(const[i,el] of mainMenu.entries()){
  console.log(`${i+1}:${el}`)
}


//-------------------Enchanced Object Literls---------------------


//Es6 introduced  three ways to make it easier to write object literal

// 1) ----Property Shorthand
// 2)-----Method shorthand
// 3)-----Computer property Name(the third enhancement is the ability to compute property names insted of writing theme out mannually.compute means to calculat)
const weekdays1=['mon','tue','wed','thus','fri','sat','sun'] 

//for 3rd way
const openingHours1={
    [weekdays[3]]:{
      open:12,
      close:22,
    },
    [weekdays[4]]:{
      open:11,
      close:24,
    },
    [`days-${2+4}`]:{             //we  can give like this also
      open:0,  //Open 24 hours
      close:24,
    }
   };
/*
  //for 1st way
  const openingHours1={
    thu:{
      open:12,
      close:22,
    },
    fri:{
      open:11,
      close:24,
    },
    sat:{
      open:0,  //Open 24 hours
      close:24,
    }
   };
*/
const restaurantShort = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  //Es6 enchanced object literals
    openingHours1,
   // order:function(starterIndex,mainIndex){
   // return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]

   order(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
   },
   orderDelivery :function({starterIndex=1,mainIndex=1,time='22:30',address}){ // simply setting default values
    console.log(`order recieverd! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliverd to ${address} at ${time} ` )
   },
   review:function({reviewval}){
    if(reviewval>=8){
      console.log("You rated 5 star")
    }
    else if(reviewval>=5 &&reviewval<8){
      console.log("you gave 3 star")
    }
    else{
      console.log("Its a 1 star")
    }
   },
   orderPasta:function(ing1,ing2,ing3){
    console.log(`here is you pasta with ${ing1},${ing2},${ing3}`)
   },
   orderPizza:function(maining,...othering){
    console.log(maining)
    console.log(othering)
   }
  };
  // for 1st taking the openingHours outside 
  // for 2nd changing the "order" function
  // for  3rd created a array named weekdays


  //----------------------------------- chaining(?.)-------------------------------------------------------------

  console.log("<----------------------------Optional chaining(?.)------------------------------->")
   
  
  //It lets you safely access nested properties of an object without throwing an error if something is null or undefined.
 // console.log(restaurant.openingHours.mon.open) // (SITUATION-1)this will cause error as can't read undefined property

 // to avoid the above error we can do it like this
  if(restaurant.openingHours&&restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)
// here if opening hour or the nxt value thats when open if any of them is not exist instedd of throwing error it won't show anything

// for like this situation(SITUATION-1) Es6 introduced optional chaining that is if certiain property doesnot exist,then undefined is returned immediately

// with optional chaining
console.log(restaurant.openingHours.mon?.open)
// this is how it works if the left side of question exist  then it will read the right side "open" if the left side doesn't exist it immediatly return undefined
// if its zero it will print zero

//example 

const days=['mon','tue','wed','thu','fri','sat','sun'] 
for(const day of days){
  // console.log(day)
  // const opens=restaurant.openingHours[day]?.open// here we using a variable(day) as property so it must be with in "[]"
  // seting default value for when its not opened
  const opens=restaurant.openingHours[day]?.open??"closed"// adds a nullish operator because we need it to open at "0" thats saturday on 24 hours
  console.log(`On ${day},we open at ${opens}`) // here which are not opened must be undefined so we sets a default value

}

//optional chaining for methods
console.log(restaurant.order?.(0,1)??"Method does not exist")
console.log(restaurant.fakeMethod??"Method doesn't exist")

// optional chaining on arrrays
const users=[{name:"Jonas",email:"hello@gmail.com"}]
console.log(users[0]?.name??"user array empty")


//-------------------LOOPING OBJECTS:Object keys,values,and entries--------------

//consoling the name from the opening hours(names from an objector keys of object)

const properties=Object.keys(openingHours)
console.log(properties)

let str1=`we opens for ${properties.length} days`
console.log(str1)
for(const day of Object.keys(openingHours)){
  console.log(day)
}
for(const day of properties){
  str1+=`${day},`
}
console.log(str1)

//property values
const values=Object.values(openingHours)
console.log(values)

//**that is if we give object.key then the o/p be the name of object and if Object.value -->it returns the value of the object */

//Entire object
const entries=Object.entries(openingHours)
console.log(entries)

for(const [key,{open,close}] of entries){
  console.log(`on ${key} we open at ${open} and close at ${close}` )
}



//-------------------------SETS-----------------------
// set is a collection of unique values.

const ordersSet=new Set(["pasta","pizza","pasta","resotto","pasta"])
console.log(ordersSet)
console.log(new Set('jonass '))  // returns the letters without duplications

console.log(ordersSet.size) // return the length
console.log(ordersSet.has('pizza'))// return true if it exists in the set
console.log(ordersSet.has("bread"))

ordersSet.add("garlic Bread")// to add a value to the set
ordersSet.add("garlic Bread")// if we add the same value it will not duplicate
console.log(ordersSet)

ordersSet.delete("pizza") // to delete a value in the set
console.log(ordersSet)

// ordersSet.clear()// to remove the entire array
// console.log(ordersSet)
// retrive data from  a data is not in set all we have to know is is a value is in the set or not

//since set are itreble so wee can loop them
for( const x of ordersSet){
  console.log(x)
}

//use case
  //example

  const staff=['waiter','chef','waiter','manager','waiter','chef']
  const staffUnique=new Set(staff)
  console.log(staffUnique)
  // what if we need this staffUnique as an array
  const unique=[...staffUnique]
  console.log(unique)

  //--------------- new opearations to make sets  usefull

  const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// 1) intersection method

const commonFood=italianFoods.intersection(mexicanFoods)
//const commonFood=[...italianFoods.intersection(mexicanFoods)] // if we need a array instedd of set
console.log("intersection",commonFood)

// 2) Uninon method

const unionFood=italianFoods.union(mexicanFoods)
console.log("union",unionFood)

// nothing but a normal way to combine without using union
const combine=new Set([...italianFoods,...mexicanFoods])
console.log(combine)

// 3)Difference method(which is present in 1st and not in 2nd)
const uniqueItalianFoods=italianFoods.difference(mexicanFoods)
console.log(uniqueItalianFoods)


const uniqueMexicanFoods=mexicanFoods.difference(italianFoods)
console.log(uniqueMexicanFoods)

// 4) Symmetric difference (returns the both unique one that is which are unique inmexican food and unique in italian food,that means  eliminating the values whicch are common)
 
const SymmetricFood=italianFoods.symmetricDifference(mexicanFoods)
console.log(SymmetricFood)

//the other 3 methods are to check relationShip:isSubsetOf,isSupersetOf,isDisjointFrom, and these method returns  a boolean
//5) isDisjointFrom (check wheather two sets are completly diffrent or not)

console.log(italianFoods.isDisjointFrom(mexicanFoods))


//--------------Maps:fundamental

// in map datastructure we can use to map values to key,just like object data is stored in key-value pairs in maps.the main difference is in map,the key can have any type(objects,array or other maps),and this can be huge,in objects they are basically "string"

// 1)set method()
const rest=new Map()
rest.set('name','Classico Italiano') // here the set is similar to add method in set both are used to adds values
rest.set(1,'Firenze,Italy')// just think rest has 2 location 1 is firenze at italy and ither is at down
console.log(rest.set(2,'Lisbon,portugal'))

// as we know set method has 2 property key and value that key can have any data type
//calling set method not only update the map but also returns the map.this allows us to chain the set method
rest.set('categories',['italian','Pizzeria','Vegetarian','Organic'])
.set('open',11)
.set('close',23)
.set(true,'we are open')
.set(false,'we are closed')

// reading data from map
// to read data from map we use the get method
// pass the key as argument(inside quotes execpt boolean)

// 2) get method()
console.log(rest.get('name'))
console.log(rest.get(true))


// const time=`${new Date().getHours()}:${new Date().getMinutes()}`
// console.log(time)  // we use new here because it hold methods other wise we can't get method we need get minutes...methods.


const time=8
console.log(time>rest.get('open')&&time<rest.get('close'))// that is we are asking our time is b/w the opening and closing time

// 3) check method
console.log(rest.has('categories'))
rest.delete(2)
// rest.clear()
console.log(rest)//2,'Lisbon,portugal') was deleted

console.log(rest.size)

// we can also use arrays or object as map keys
// rest.set([1,2],'Test')
// console.log(rest)

// retreiving data from the newly created array[1,2]."Test"
//console.log(rest.get([1,2])) // it return undefined so 1st we assign the key to a variable and then use that

const arr2=[1,2]
rest.set(arr2,"Test")
console.log(rest)

console.log(rest.get(arr2))

// using DOM element as a key
rest.set(document.querySelector('h1'),"heading")
console.log(rest)

// ----------------------map iteration------------------------

// in above we 1st created a empty map and then addes the elements using the set method.so without using the "set" repeatly.
//we created a map with a question and options and the correct one and 2 messages for right and wrong
const question=new Map([
  ['question','What is the best programming language in the world?'],
  [1,'C'],
  [2,'Java'],
  [3,'JavaScript'],
  ['correct',3],
  [true,'Correct'],
  [false,'Try again']
])

console.log(question)
console.log(Object.entries(openingHours)) // when we call like this we get similar o/p like the console question(map).so that means converting objects to map is very simpler
// converting object to map
const hoursMap=new Map(Object.entries(openingHours))
console.log(hoursMap)  //n before that opening hourse is like object now it is a map

//Quiz App
  console.log(question.get('question'))
  // iterating through maps
  for(const [key,value]of question){ // destructure key and values
    if(typeof key==='number')
      console.log(`Answers ${key}:${value}`)
  }
  // reading values from user
  const userval=prompt("type your option")
  console.log(userval)
  
 let  ans=question.get('correct')
console.log(userval==ans?question.get(true):question.get(false))

//converting map to array
console.log("Array",[...question])

// ------------------------------Which data structure to use?------------------
/**
    source of data 
    1)From program itself
    2)From ui
    3)From external source(Api)

    choosing b/w DS
    for simple list use --->arrays or set
    for key value pairs -->objects

    use array,
     when needs  to store value in order
    value may contain duplicates
    array provide many useful methods


    use sets,
    require unique value only
    high performance is important as operations like searching or deteling items can 10X faster than array
    a common use case is removing duplicate values from an array.
    
    objects and maps are used for key-value pair:maps offer better performance and flexibility with key types
    Objects are prefferd when using functions as value(methods) and when working  with JSON

 */
// nxt challenge #3 127





