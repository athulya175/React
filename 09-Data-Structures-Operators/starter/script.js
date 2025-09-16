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