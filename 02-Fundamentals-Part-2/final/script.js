'use strict';
/*
  let hasDriversLicence=false
  const passTest=true
  if(passTest)hasDriversLicence=true
  if(hasDriversLicence) console.log("i can drive ")

    const interface="Audio"
    const private=543

*/

/*
function logger(){
    console.log("My name is Jonas")
  }
  //calling/running/invoking
  logger()
  logger()

  function fruitProcessor(apple,oranges){
    console.log(apple,oranges)
    const juice=`juice with ${apple}apples and ${oranges} orange`
    
    return juice
  }
  const applejuice=fruitProcessor(1,4)
  console.log(applejuice)

  const appleOrangeJuice=fruitProcessor(12,4)
  console.log(appleOrangeJuice)
*/


/*
  //function declaration
  const age1=calcAge(2004)
  function calcAge(birthYear){
    return 2037-birthYear
    
  }



  //These type of function is called anonymous function they dont have name
  //function expression

  // const age2=Age1(2004) This will not work because we cant calle before declare
  const Age1=function(birthYear){
    return 2037-birthYear
  }
  // const age2=Age1(2004)
  console.log(age1,age2)

  //That is the function declaration works the exact same as function expression

  //functions are values like number,string or booleans,they are not seperate type but we can stored in variables

  //The   main difference is function declarations can be called before they are defined 
  // 

*/
 

/*
  // ArrowFunction

  const calcAge=function(birthYear){
    return 2037-birthYear
  }
  const age=calcAge(2004)
  const calcAge2=birthYear=>2025-birthYear

  const age1=calcAge2(2004)

  console.log(age,age1)


  const yearsUntilRetirement=(birthYear,firstName)=>{
    const age=2025-birthYear
    const retirement=65-age
    return `${firstName} retires in ${retirement}`
  }
  console.log(yearsUntilRetirement(2004,'Jonas'))
  console.log(yearsUntilRetirement(1980,'Bob'))


  // arrow function does not support "this" key word

*/

/*
  // function calling other function

  function cutFruitPieces(fruit){
    return fruit *4
  }

  function fruitProcessor(apple,oranges){
    const applePieces=cutFruitPieces(apple)
    const orangePieces=cutFruitPieces(oranges)
    const juice=`Juice with ${applePieces} pices of apples and ${orangePieces} pices of oranges`
    return juice
  }
  console.log(fruitProcessor(3,4))

*/


/*
  const calcAge=function(birthYear){
    return 2025-birthYear
  }
  const yearsUntilRetirement=function(birthYear,firstName){
    const age=calcAge(birthYear)
    const retirement=65-age
    if(retirement>1){
      return `${firstName} retires in ${retirement}`
    }
    else{
      return "Already retired"
    }
    
  }
  console.log(yearsUntilRetirement(1900,"Athulya"))

*/

/*
//summary of functions
  //function declaration
  *Function declaration-->Function that can be used before it's declared
  *Function expression -->Essentially a functtion value stored in a variable
  *Arrow function --->Great for a quick one-line functions.has no this keyword

*/

/*
  //test
    const calcAge=(a,b,c)=>(a+b+c)/3
  console.log(calcAge(1,2,3))

  let scoreDolphins=Math.round(calcAge(44,23,71))
  let scoreKoalas= Math.round(calcAge(65,54,49))

  console.log(scoreDolphins)
  console.log(scoreKoalas)



  function checkWinner(avgDolhins,avgKoalas){
      if(avgDolhins>=2*avgKoalas){
        console.log(`Dolphin wins ${avgDolhins} v/s ${avgKoalas} `)
      }
      else if(avgKoalas>=2*avgDolhins){
        console.log(`Kolas wins ${avgKoalas} v/s ${avgDolhins}`)
      }
      else{
        console.log(`No one wins`)
      }
  }
  checkWinner(scoreDolphins,scoreKoalas)
  checkWinner(576,111)
*/
///////////////Introduction to array//////////////////////////////////////////////
/*
  const friends=['Michal','Steven','Peter'] 
  console.log(friends) 

  const years= new Array(1991,2004,2025)
  console.log(friends[0])
  console.log(friends.length)
  
  // to add element

  friends[2]='Jay'
  console.log(friends)

  // collection of datatype
  const firstName='Jonas'
  const jonas=[firstName,'Schmedtmann',2037-1991,'teacher',friends]
  console.log(jonas)

// Excercise
  const calcAge = function(birthYear){
    return 2037-birthYear
  }
  const years1=[1980,2010,2018]
  const age1=calcAge(years1[2])
  console.log(age1)

  //Mv
  let ages=[]
  for(let i=0;i<years1.length;i++){
    let age=calcAge(years1[i])
    ages.push(age)
    console.log(ages)
  }
*/
/////////////////////////////////////////////////////////////////////////////////////


//**************************Basic Array Operations(Methods)************************/
/*
    const friends=['Michal','Steven','Peter'] 
    // to get length we can store the method to a variable and then  console the variable
    const newLength=friends.push("Jay")
    console.log(friends)
    console.log(newLength)

      friends.unshift('John')
      console.log(friends)

      let popElement=friends.pop()
      console.log(friends)
      console.log(popElement)

      friends.shift()
      console.log(friends)

      console.log(friends.indexOf('Steven'))

      console.log(friends.includes("Steven"))

      friends.push(23)
      console.log(friends.includes(23))  // true
      console.log(friends.includes('23'))  //false
  */
  //********************************************************************************* */

/*
  //Chalanges
    function calcTip(billValue){
      let tipValue
      if(billValue<=50&&billValue>=100){
        tipValue=billValue*0.15
      }
      else{
        tipValue=billValue*0.20
      }
      return tipValue
    }
    console.log(calcTip(100))
  let bills=[124,555,44]
  let tips=[]
  tips.push(calcTip(124))
  tips.push(calcTip(555))
  tips.push(calcTip(44))
  console.log(tips)
  let totals=[]
  totals.push(tips[0]+bills[0])
  console.log(totals)
*/

// Intoduction to Objects
/*
  const Jonas={
    name:"Jonas",
    lastName:"Schmedtmann",
    age:2037-1991,
    job:"teacher",
    friends:['Michael','Peter','Steven']
  }
*/

// How to retrive data from object using dot and bracket notation
/*
  const Jonas={
    firstName:"Jonas",
    lastName:"schmedtman",
    age:2037-1991,
    job:"teacher",
    friends:["Michael","Peter","Steven"]
  }
  console.log(Jonas)
  console.log(Jonas.friends.length)
  // dot notation
  console.log(Jonas.lastName)
  // bracket notation
  console.log(Jonas['lastName'])

  // The major difference is we can put expression in bracket notation but dot can't here "Name" is common to both firstname and last name so wee add that expression inside the bracket.The same thing is not works in dot operator
  const nameKey="Name"    // Computed name
  console.log(Jonas['first'+nameKey])
  console.log(Jonas['last'+nameKey])
 
  const interestedIn= prompt("What  you want to know about Jonas? Choose between firstName,lastName,age,Job,and friends")
  if(Jonas[interestedIn]){
    console.log(Jonas[interestedIn])
  }
  else{
    console.log("Ented a valid data")
  }
  console.log(Jonas.interestedIn) // this shows undefined because in "Jonas" there is no property named intrestedIn,so in  such cases we use bracket notation
  console.log(Jonas[interestedIn])
  
//adding property 
 Jonas.location='Portugal'
 Jonas['twitter']='@jonasschedtman'
 console.log(Jonas)

 //challange  (jonas has 3 friends,and his best firend is called michal)
    console.log(`${Jonas.firstName} has ${Jonas.friends.length} friends and his best friend is ${Jonas.friends[0]}`)
*/


/*
//Object methods
  const Jonas={
    firstName:"Jonas",
    lastName:"Schmedtmann",
    birthYear:1991,
    job:"Teacher",
    friends:["Michael","Peter","Steven"],
    hasDriversLicence:false,
    // calcAge:function(birthYear){      // first->instedd of like this we can use this so we dont need to repeat birth year again
    //     return 2025-birthYear
    // }



    // calcAge:function(){     //Second
    //   console.log("this:",this)
    //   return 2025-this.birthYear
    // }

    calcAge:function(){
      this.age=2025-this.birthYear   //creating a new property called "age"
      return this.age
    },
    getChalange:function(){
      return  `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicence?"a":"not a"} drivinglicence`  // notable is we can call this.age but the problem is when the agecalculation is not done before our chalange function will not log any thing so better is calling it at that time
    }
    
  } 
 
  //first
  console.log(Jonas.calcAge(1991)) 
  console.log(Jonas['calcAge'](1991))

  // the argument we pass here is already declare in the object so we can acces it from there in that case we can use "this"(this is used inside the function) so  we dont give birthyear as argument
  //second
  console.log("updated",Jonas.calcAge())
  console.log("updated",Jonas.calcAge())
  console.log("updated",Jonas.calcAge())
  console.log("updated",Jonas.calcAge())// as here age is calculating all the time insted of that we can use 3rd method

  //third  (simply calling the new property here we are not calulating age multiple time)
  console.log("third",Jonas.age)
  console.log("updated",Jonas.age)
  console.log("updated",Jonas.age)


  console.log(Jonas.getChalange())

    //Challange(Jonas is a 46-yeard old teacher.and he has a /no driver's licence)
      //  console.log(`${Jonas.firstName} is a ${Jonas.age}-year old ${Jonas.job} and he has ${Jonas.hasDriversLicence?"a":"not"} drivinglicence`)
*/

/*
  //Challange 3

    let markDetails={
      fullName:"Mark Miller",
      mass:65,
      height:3.8,
      calcBMI:function(){
          this.bmi=Math.round(this.mass/(this.height*this.height))
          return this.bmi
      }
    }
    let johnDetails={
      fullName:"John Smith",
      mass:55,
      height:2.5,
      calcBMI:function(){
        this.bmi=Math.round(this.mass/(this.height*this.height))
        return this.bmi
      }
    }
  markDetails.calcBMI()
  johnDetails.calcBMI()
    console.log(markDetails.bmi)
    console.log(johnDetails.bmi)
    if(markDetails.bmi>johnDetails.bmi){
      console.log(`${markDetails.fullName}'s BMI(${markDetails.bmi}) is higher than ${johnDetails.fullName}'s (${johnDetails.bmi})!`)
    }
    else{
      console.log(`${johnDetails.fullName}'s BMI(${johnDetails.bmi}) is higher than ${markDetails.fullName}'s (${markDetails.bmi})`)
    }
*/


/*
//The for Loops

for(let rep=1;rep<=10;rep++)
   console.log(`Lifting weights repetion ${rep} `) 
*/

/*
// break & continue
    const jonasArray=[
      'Jonas',
      'Schmedtmann',
      2025-1991,
      'teacher',
      ['Michael','Peter','Steven'],
      true
    ]
    let types=[]
    for(let i=0;i<jonasArray.length;i++){
      console.log(jonasArray[i])
      types[i]=typeof jonasArray[i]
      
    }
    console.log(types)
    const years=[1991,2007,2004,2002,2020]
    let age=[]
    for(let i=0;i<years.length;i++){
      age[i]=2025-years[i]
      
    }
    console.log(age)

    // Continue & break


    console.log("-----Only string----")
      for(let i=0;i<jonasArray.length;i++){
        if(typeof jonasArray[i]!=="string")continue
        console.log(jonasArray[i],typeof jonasArray[i])
      }

      console.log("--------Only number--------")
      for(let i=0;i<jonasArray.length;i++){
        if(typeof jonasArray[i]=="number")break
          console.log(jonasArray[i] ,typeof jonasArray[i]) 
      }
*/

/*
  //Looping BackWards And Loops In Loops
    const Jonas=[
      'Jonas',
      "Schmedtmann",
      2037-1991,
      'teacher',
      ['Michael','Peter','Steven']
    ]

  for(let i=Jonas.length-1;i>=0;i--){
    console.log(i,Jonas[i])
  }


  for(let exercise=1;exercise<4;exercise++){
    console.log(`--------Starting exercise ${exercise}`)
      for(let rep=1;rep<6;rep++){
        console.log('Lifting weight repetion'+rep)
      }
  }
*/


/*
    //While loop

      for(let rep=1;rep<=10;rep++){
        console.log(` from for loop: Lifting weights repetition ${rep}`)
      }

      let rep=1
      while(rep<=10){
          console.log(`from while loop: Lifting weights repetition ${rep}`)
          rep++
      }
      
      // in while loop it doesn't compalsury needs a counter variable ,a condition is enough(let create a function to role a die when die hits 6 we can stop the loop )
    let dice=Math.trunc((Math.random()*6)+1)
    console.log(dice)

    while(dice!==6){
      console.log(`you rolled a ${dice}`)
      dice=Math.trunc(Math.random()*6)+1
      if(dice===6){
        console.log('Loop is about to end....')
      }
    }
    //that is here loop gets stop when the its rolls to 6 ,as we see like for loop we dont give any counter variable/ any increment variable that is it has zero iterations.That is while loop never depends a counter variable
 */


    let bills=[22,295,276,440,37,205,20,1100,86,52]
    let tips=[]
    let totals=[]
    const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
   
}

for( let i=0;i<bills.length;i++){
  tips[i]=calcTip(bills[i])
  totals[i]=tips[i]+bills[i]
}
console.log(tips)
console.log(totals)

let arr=[1,2,3,4,5,6,7,8]
let sum=0
let avg
for(let i=0;i<arr.length;i++){
  sum=sum+arr[i]
  avg=sum/arr.length
}
console.log(avg)
/*________________________________________________________________________________________________________________________________________
______________________________________________________________________________________________________________________________________________
///////////////////////////////////////
// Activating Strict Mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;


///////////////////////////////////////
// Functions
function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');


///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration
function calcAge1(birthYeah) {
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYeah) {
  return 2037 - birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);


///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); console.log(yearsUntilRetirement(1980, 'Bob'));


///////////////////////////////////////
// Functions Calling Other Functions
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}

const yearsUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));

// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);


///////////////////////////////////////
// Introduction to Arrays
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

// Exercise
const calcAge = function (birthYeah) {
  return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


///////////////////////////////////////
// Basic Array Operations (Methods)
const friends = ['Michael', 'Steven', 'Peter'];

// Add elements
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('John');
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);


///////////////////////////////////////
// Introduction to Objects
const jonasArray = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};


///////////////////////////////////////
// Dot vs. Bracket Notation
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

// console.log(jonas.'last' + nameKey)

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);


///////////////////////////////////////
// Object Methods

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //   return 2037 - birthYeah;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYeah;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
console.log(jonas.getSummary());
*/

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
}


///////////////////////////////////////
// Iteration: The for Loop

// console.log('Lifting weights repetition 1 🏋️‍♀️');
// console.log('Lifting weights repetition 2 🏋️‍♀️');
// console.log('Lifting weights repetition 3 🏋️‍♀️');
// console.log('Lifting weights repetition 4 🏋️‍♀️');
// console.log('Lifting weights repetition 5 🏋️‍♀️');
// console.log('Lifting weights repetition 6 🏋️‍♀️');
// console.log('Lifting weights repetition 7 🏋️‍♀️');
// console.log('Lifting weights repetition 8 🏋️‍♀️');
// console.log('Lifting weights repetition 9 🏋️‍♀️');
// console.log('Lifting weights repetition 10 🏋️‍♀️');

// for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 30; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}


///////////////////////////////////////
// Looping Arrays, Breaking and Continuing
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];
const types = [];

// console.log(jonas[0])
// console.log(jonas[1])
// ...
// console.log(jonas[4])
// jonas[5] does NOT exist

for (let i = 0; i < jonas.length; i++) {
  // Reading from jonas array
  console.log(jonas[i], typeof jonas[i]);

  // Filling types array
  // types[i] = typeof jonas[i];
  types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break;

  console.log(jonas[i], typeof jonas[i]);
}


///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven'],
  true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log('Loop is about to end...');
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

/*
let hasDriversLicence=true
let hasGoodVision=true
let isTired=false
console.log(hasDriversLicence && hasGoodVision)
console.log(hasDriversLicence||hasGoodVision)
console.log(!hasDriversLicence)

let shoulddrive=hasDriversLicence && hasGoodVision && !isTired
console.log("y",shoulddrive)
*/


