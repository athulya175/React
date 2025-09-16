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
      open:11,
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

// The  Nullish coalescing Operator(??)
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
console.log("---------------------------CHALLENGE-----------------------------")

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const players1=game.players[0]
// const players2=game.players[1]
// hv
const [players1,players2]=game.players
console.log(players1)
console.log(players2)

// const [gk,...fieldplayer]=game.players[0]
//hv
const[gk,...fieldplayer]=players1
console.log("goalkeeper:",gk,"otherplayers",fieldplayer)

const allPlayers=[players1,...players2]
console.log(allPlayers)

const players1Final=['Thiago,"Countinho','Perisic',...players1]
console.log(players1Final)

const{odds:{team1,x:draw,team2}}=game


const printGoals=function(...players){
  console.log(`${players.length} goals were scored`) // nothing but number of players
}
printGoals('Davis','Muller','Lewandowski','Kimmich')
printGoals('Davies','Muller')
printGoals(game.scored) // the o/p will be one even the score are 4 because they are at in a single array which means params are a single one so we use spread operator  to spread them
printGoals(...game.scored)

team1<team2 &&console.log("Team 1 is more likely to win")
team1>team2&&console.log("Team 2 is more likely to win")


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

const restaurantShort = {
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
      open:11,
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
  //  taking the openingHours outside 