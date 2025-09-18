'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type:"premium"
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type:"standard"
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type:"basic"
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type:"premium"
};

const accounts = [account1, account2, account3, account4];
const accounts2=[account1,account2,account3,account4]


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


//-----------------filter-------------------
const deposites=movements.filter(x=>x>0)
console.log(deposites)
console.log(movements)

const withdrawals=movements.filter(x=>x<0)
console.log(withdrawals)

//------------reduce----------
const balance=movements.reduce((acc,curr)=>acc+curr,0)//zero to satrt from zero
const max=movements.reduce((acc,curr)=>acc>curr?acc:curr)
console.log(balance)
console.log(max)


//count occurence
const fruits=['apple','orange','banana','apple']
const count=fruits.reduce((acc,fruit)=>{
  acc[fruit]?acc[fruit]++:acc[fruit]=1
  return acc
},{}) // initial{}
console.log(count)

// flatten array
const arr=[[1,2],[3,4],[5]]
const flat=arr.reduce((acc,curr)=>acc.concat(curr))
console.log(flat)

//Grouped by property
const people=[
  {name:'Alice',age:20},
  {name:'Bob',age:20},
  {name:'Charlie',age:30}
]
const grouped=people.reduce((acc,person)=>{
  (acc[person.age]=acc[person.age]||[]).push(person.name)
  return acc
},{})
console.log(grouped)
/**
 ✅ Step-by-step execution

Start: acc = {}

Iteration 1: person = { name: 'Alice', age: 20 }

acc[20] = [] (because it doesn’t exist yet)

Push 'Alice' → acc[20] = ['Alice']

acc = { 20: ['Alice'] }

Iteration 2: person = { name: 'Bob', age: 20 }

acc[20] already exists (['Alice'])

Push 'Bob' → ['Alice', 'Bob']

acc = { 20: ['Alice', 'Bob'] }

Iteration 3: person = { name: 'Charlie', age: 30 }

acc[30] = [] (new age group)

Push 'Charlie' → ['Charlie']

acc = { 20: ['Alice', 'Bob'], 30: ['Charlie'] }
 */


//--------------FInd method----------------
// we can use find method to retrieve one element of an array based on condition.
// its also similar to  filter method also needs a callback function that returns a boolean.but the difference is that  it does not return a new array but only the first elemenent that satisfies the condition.,or in other word the first element in the array for which this operation becomes true
// filter returns a new array but find returns only that element
console.log(movements.find(mov=>mov<0))// returns the first -ve value in the movment
console.log(movements)

//Array of objects
console.log(accounts)
// suupose we need a object with owner  name "Jessica Davis" in the entire array of object
const account=accounts.find(acc=>acc.owner==="Jessica Davis")
console.log(account)


//---------find Index method-------
// as like the name find index returns the index of the find number not the value or the number.

//syntax-->array.findIndex(callback(element,index,array))

const numbers=[10,20,30,40,50]
const index=numbers.findIndex(num=>num===30)
console.log(index)

//with object
const index1=accounts.findIndex(acc=>acc.owner="Jessica Davis")
console.log("index of jessica",index1)

// if its not found a value then return -1

// when we use findIndex
//when you need the position of an element,not the element itself.
//often used when you want to update or remove an item from an array.


// removing jessica davis's account
console.log(`before removing jessica`,accounts2)
const index2=accounts2.findIndex(acc=>acc.owner==="Jessica Davis")
console.log("indx",index2)
if(index2!=-1){
  accounts.splice(index2,1)// removes exactly one element at that position
}
console.log("after removing jessica",accounts)

// array of objects
const user=[
  {id:1,name:"Alice"},
  {id:2,name:"Bob"},
  {id:2,name:"charlie"}
]
const user2=user.findIndex(x=>x.id==2)
console.log(user2)

//update an object by index

const products=[
   { id: 101, name: "Laptop", stock: 10 },
  { id: 102, name: "Phone", stock: 5 },
  { id: 103, name: "Tablet", stock: 0 }
]

const pdtIndex=products.findIndex(x=>x.id===102)
if(pdtIndex!=-1){
  products[pdtIndex].stock=30
}
console.log(products)

// remove an item
products.splice(pdtIndex,1)
console.log(products)


//with condition more complex
const temps=[18,22,27,35,41,15]
const hotDay=temps.findIndex(x=>x>30)
console.log(hotDay)  //3

//----------The New findlast and findlastindex methods---------------
// here like find its not reading from the starting it reads from the ends
console.log(movements)
const lastWithdrawal=movements.findLast(mov=>mov<0)
console.log(lastWithdrawal)
const lastWithdrawalIndex=movements.findLastIndex(mov=>mov<0)
console.log(lastWithdrawalIndex)

const latest=movements.findLastIndex(mov=>mov>2000)
console.log(`Your latest large movement was ${latest} movements ago`)

//-----------------------------Some and Every------------------

console.log(movements)
console.log(movements.includes(-130)) //true
// includes method only tests for equality. It returns true if any value in the array is exactly equal to the specified value. But what if we want to test for a condition instead? This is where the some method becomes useful.
/// suppose we need to know any poitive deposites here

const anyDeposites =movements.some(mov=>mov>0)
console.log(anyDeposites)  //retruns true

// we need to check any deposites thats greater than 5000
console.log(movements.some(mov=>mov>5000)) // false

//every
// syntax->array.every((element,index,array)=>condition)
// it check if all elements in the array satisfy a condition,returns true only if every element matches.
//Stops as soon as one fails

const everyNumbers=[2,4,5,8]
console.log("every")
console.log(numbers.every(num=>num%2===0))// true
console.log(numbers.every(num=>num>0))//true
console.log(numbers.every(num=>num<5))//true


// checck if any product is out of stock
const pdts=[
  {name:"Laptops",stock:10},
  {name:"phone",stock:0},
  {name:"Tablet",stock:5}
]
const anyOutofStock=pdts.some(item=>item.stock==0)
console.log(anyOutofStock)
const allInStock=pdts.some(item=>item.stock>0)
console.log(allInStock)


//password validation(checking it has at least one number)
let pass="Andfj87y439"
const hasNumber=[...pass].some(x=>!isNaN(x))
console.log("pass",hasNumber)


/**
    difference
     some  : Does at least one match?
     every : Do all match?
     find  : Give the first match
     filter: Five all matches
 */

//------------------Flat and Flatmap--------------------------

const arry=[[1,2,3],[4,5,6],7,8]
console.log(arr.flat())  //removed the nested array

const arrDeep=[[[1,2],3],[4,[5,6]],7,8]
console.log(arrDeep.flat())// here flat will not works because its deeply nested array flat only works at the first level of nesting
// to fix it wee can the depth if it set 1 it goest first level if its 2 it goes to 2nd depth ....
console.log(arrDeep.flat(2))

// suppose bank needs to calculate overall movements of all accounts then,

// the all the movments are inside the "accounts" in "movement"

const accountMovements=accounts.map(acc=>acc.movements)
console.log(accountMovements)

const allMovements=accountMovements.flat()
console.log(allMovements)
console.log(allMovements.reduce((acc,curr)=>acc+curr,0))

// chained all of them together(the above step)
const overallBalance=accounts.map(acc=>acc.movements).flat().reduce((acc,curr)=>acc+curr)
console.log(overallBalance)

// we can do this chain  together by using map function 
// the difference is if we use flatmap insted of map then there is no need of using flat() again
const overallBalanceFlatMap=accounts.flatMap(acc=>acc.movements).reduce((acc,curr)=>acc+curr)
console.log(overallBalance)

//The result is the same as before. Note that flatMap only flattens one level deep and this cannot be changed. For deeper flattening, use the flat method with a depth argument.

//------------------Sorting Array--------------------------------
const owners=["Jonas","Zach","Adam","Martha"]
console.log(owners.sort())
console.log(owners) // here the orginal array also changed 


//  with numbers
console.log(movements)
console.log(movements.sort());// here the o/p is not sorted in order to increaing / decreasing in number  because sorting perfoms based on strings (in o/p also if its string its correct first -ve then starting numer as in order 1,2,3,4,7)
// fix it as number insted of string
console.log(movements.sort((a,b)=>a-b))  // assending order-->this means a-b is negative acomes before b
console.log(movements.sort((a,b)=>b-a))// desending order

//-------------Array group-----------------------------

// allows us to group values in an array based on the condition.

console.log(movements)

const groupedMovemenets=Object.groupBy(movements,mov=>mov>0?'deposite':'withdrawls')// this group by takes 2 params firstone is the array and second is a callback fn
console.log(groupedMovemenets)


// we can classify the movments number which wach person in the account

const movementclassified=Object.groupBy(accounts,acc=>{
  const movemntcount=acc.movements.length;
  return(
  (movemntcount>=8&&"very active") ||
  (movemntcount>=4&&"Active")||
  (movemntcount>=1&&"Moderate")||
  "inactive"
)
})
console.log(movementclassified)

//based of type grouping(diretly)
const groupAccounts=Object.groupBy(accounts,x=>x.type)
console.log(groupAccounts)


//---------------more ways to creating and filling arrays

const arr1=[1,2,3,4,5,6,7]
//creating the same array as using new Array method
const arr2=new Array(1,2,3,4,5,6,7)  // pass the elements as argument 
console.log(arr1)
console.log(arr2)

const x=new Array(7)
console.log(x)//When using the `Array` constructor with a single argument, such as `new Array(7)`, it creates a new array with seven empty elements, not an array with the number seven as its only element. This behavior can lead to unexpected results if not understood.

console.log(x.map(()=>5))//Attempting to use methods like `map()` on this empty array will not work as expected, since the array contains empty slots and not actual elements.

console.log(x.fill(3))//The `fill()` method can also accept start and end indices, similar to the `slice()` method. The filling starts at the `begin` index and ends before the `end` index. it can applied on empty array

console.log(x.fill(1,3,5))//.fill(value, start, end) fills the array from start index up to but not including end index with the given value.value=1,start=3 and stop before 5 that is 4

const arr6=[1,2,3,4,5,6]
arr6.fill(55,1,3)
console.log(arr6)

// creating array with Array.from()
const y=Array.from({length:7},()=>1)//To programmatically create arrays with specific content, `Array.from()` can be used. This method is called on the `Array` constructor and takes two arguments: an object with a `length` property and a mapping function.
console.log(y)// 7 length array with variable 1-> [1, 1, 1, 1, 1, 1, 1]



//The mapping function can use the current index to generate values. For example, to create an array from 1 to 7:
const z= Array.from({length:7},(_,i)=>i+1)
console.log(z)//(7 lenngth) [1, 2, 3, 4, 5, 6, 7]
/**
  {length:7}--->create an array-like object of length 7.
  Array.from--->converts it into actual array.
  (_,i)=>i+1--->mapping fn
  _underscore--> the value at that index(undefined here so ignore)
  i --->the index(0,6)
  i+1--->making the array start from 1 insted of zero(it generate the value we needs in result)
 */

//## Practical Use Case: Creating Arrays from Array-like Structures
//## Practical Use Case: Creating Arrays from Array-like Structures

//`Array.from()` was introduced to create arrays from array-like structures, such as NodeLists returned by `querySelectorAll()`. These structures are not real arrays and do not have array methods like `map()`.
const movmentsUi=Array.from(document.querySelectorAll('movements__value'))
console.log(movmentsUi)



//---------------Non-Destructive Alternatives:Toreversed,Tosorted,tospliced--------------------------------------------------------------

//the methods reverse, sort, and splice, because all of these actually mutate the original underlying array.
//we do not want to mutate the original array. That is why now, in modern JavaScript, we have some alternatives. 

// reverse array

    console.log(movements)
        // const reversedMov=movements.reverse()we do not want to mutate the original array. That is why now, in modern JavaScript, we have some alternatives. 

    // so for destructive method just add a slice method so it will not affect the original array
        //const reversedMov=movements.slice().reverse()

    // so it now we not need to add slice method there is another method called toreverse()
        const reversedMov=movements.toReversed()
    console.log(reversedMov)
    console.log(movements)// here after reversed this orginal array has also changed
    // so we can say its a distructive method.because that distroy the original array


  // toSorted(sort),toSpliced(splice)--->this also works the same as reversed works

  //changing the value without changing the original array

  //const newMovment= movements[1]=2000 // by doing this the orginal array has been mutated 
  const newMovment=movements.with(1,200) // here what is means is a new array named "newmoment" and its 1 st index's value is 200
  console.log(newMovment)
  console.log(movements)



  //-------------------------------which array method to use-------------------------
  /*
      The best way to decide which method to use is to ask yourself: What do I actually want from this method?

      Do I want to mutate the original array, or create a new array based on the original?
      Do I want an array index, or do I want to retrieve an entire array element?
      Do I want to check if an array includes a certain element?
      Do I want to transform the array into a new value or simply loop over it?

      methods that Mutate the Original Array
      --------------------------------------
      push or unshift-->to add elements
      pop,shift,splice--->to remove


      create a new array based  on the original array
      ----------------------------------------------
      * To create a new array based on the original, the most straightforward method is map. This method loops over the original array and creates a new one with the same length.
      * if we need a new array with a filterd one then use filter()
      * if we needs a new array from a pice or slice of the original array then use slice
      * if we need a new arrray with one item is only changed from the original array then use "with()"
      * if we need a flatten array use flat or flatMap
      
      Non-mutating Alternatives to mutating Methods
      --------------------------------------------
      * Three important mutating objects are  reverse,sort and splice
      * if we dont want to change the original array then we can use toReversed,toSorted and toSpliced
      * to contact array use concatmethod
      
      Retrieving Array Index or Element
      --------------------------------
      * To need index of element,for this use indexOf,findIndex or findLastIndex
      * indexof-->find index of a specific value ,only works for exact matches
      * findindex,findLastIndex--> can search based on the test condition provided in a callback function.
      * find,findLast--->insted of returning index if we need value then we can use  find and findlast.
      * If you already know the position of the element, use the at method, which works like square brackets to retrieve an element.
      
      checking for inclusion
      -----------------------
      * includes: tests if the array contains a single value.
      * some: returns true if at least one element satisfies a condition.
      * every: returns true only if all elements satisfy the condition.
      
      Transforming Array into Strings or single Values.
      ------------------------------------------------
      * To transform an array into a string, use the join method.
      * To reduce an array to a single value use reduce
      
      Looping Over Array without producing newValues
      -------------------------------------------------
      * If you want to loop over an array without producing a new value, use the forEach method. This method does not create a new array or any new value; it simply performs some work for each element.

      Additional Array Tools and Techniques
      -------------------------------------
      *Object.groupBy: Groups arrays by different categories. This is not technically an array method but is useful for array operations.
      
      *Creating new arrays from scratch:

        *Use Array.from with a desired length and a mapping callback. This is the preferred way.
        Alternatively, use the array constructor with new Array(length) and fill it using the fill method.
        
        *Joining arrays:

        Use the concat method or the spread operator to join two or more arrays into a new one.
        Getting unique values:

        *Convert the array to a Set to remove duplicates, then spread it back into a new array.
       
       * Finding common elements between two arrays:

        Convert both arrays to sets, use the intersection method on the sets, and spread the result into a new array.

   */
  const fruit=["apple","pista","orange"]
  const fruits1=fruit.join()
  console.log(typeof(fruits1))