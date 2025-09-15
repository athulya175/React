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
    order:function(staterIndex,mainIndex){
      return [this.starterMenu[staterIndex],this.mainMenu[mainIndex]]
    }
  };