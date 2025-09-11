The strict mode activation gives us the error cirrectly
we can add 'use strict' infront of the code 

function call/run/i


// intoduction to array
        * we can create arrays in normal way like as by using square brackets
            # const friends=["Michel","Steeven"]
        
        * There is other method also which is used by "new" keyword
            # const friends= new Array("Michel","steeven")
        
        * element assessing is similar to using index inside the []
        
        * Array .length property
        
        * And the thing is array length is not  zero based so if we need last element we have to use length-1
        
        * As we know array is mutable  so we can change variable in array by simply assign the value
            #friends[2]="jay
        
        * ! Even we declare friends as const still can can change the value,but we cannot reassign the entire Array to a new arry
            # friends=["Bob","Ellis"]

        * Arrays with multiple Data Types
                # const firstname="Jonas"
                const Jonas=[firstName,"Schmedtman",2037-1991,"teacher",friends]
// Basic Array Operations(Methods)
    adding element

        * push is to add at the end of an array
        
        * unshift is to add at the beginning 
            push and unshift will return the length of new arrray if we store it in the variable

    removing element

        *pop removes the last element
            and pop doesnt return the length insted of length it returns the element which is removed or poped
        
        *shift is used to remove the first element and it also return the element which is removed.
    finding elements

        *indexOf  is as usual to get indexof the element
        
        *includes method is to check the element is included of is in the array or not it return a boolean values
        
            and the point if we adds 23 and its a number and if we check includes 23 as string then it returns false because it strictly checks the type also
        
// introduction to objects
        * As we know array can be called only its index not by name so by using object we can reffer by using name.

        * Each key is also called property

        * In arrays,elements are acceses by their order number,so arrays are suitable for orderd data.Objects are better for unstructured data that we want to name and retrive by those names.

 // dot v/s bracket notation
        * Where to use dot operator and where to use bracket
            if we need to use computed name(that is we created a expression for "Name") in that case we need to use bracket notation but in the caase of we need to use the saame name as the property name we can simply use the dot notation,its more easier and cleaner

    ok the one imporatant is if to check something is exists or not we can simply follow as if(something) {

    } else{
    
    } like this way

    adding a new property to the object is also done the same way as like dot and bracket
    Jonas.location="portugal"
    Jonas['location']="prortugal"

    opertor precedence in Property Acccess
    ------------------------------------
        Both bracket and dot has same priority,and both are left to right. for eg-->Jonas.friends.length is executed left to right.first js does is jonas.friendswhich gives the array and then on that arrray,the dor length is applied.

// for loop
    3 parts initization ,condition,counter update

    continue --> break the current iteration and continue the after
    break-->is to completly terminate from the loop
# insted of using math.round()  to round a number we can use Math.trunc

//While loop

    * in For loop we see that we need to specify the counter,the condition and increment all in one line,but for while loop it doesn't need that way  we can only sepcify condition. The loop will keep running while the condition is true,which is why it is called the while loop



css model box
-------------

content contains height width->padding->margin
the model box is the main factor that defines how elements are displayed on webpage and how they are sized.
* padding is a transpirent area around the content but inside the box. we mainly use padding to create white space inside a box.
* border which goes around the padding it is the white space outside of the box.it is mainly used to create space between 2 elemenets
* fill area area that gets fill with baground color or baground image

# when we use zero we doesn't need to add the unit

# bloch v/s inline
block elements such as heading and forms,create their own linw and occupy the full width available.inline elements like links and buttons,only occupy the space of their  content and do not create a new line

# with out box-sizing border box the total width of the form would be the sum of width,padding and border,which cause layout issues.with border-ox the total width remains specifies.

// ternary operator
we can add  third variable also,

    let hasDriversLicence=true
    let hasGoodVision=true
    let isTired=false
    console.log(hasDriversLicence && hasGoodVision)
    console.log(hasDriversLicence||hasGoodVision)
    console.log(!hasDriversLicence)

    let shoulddrive=hasDriversLicence && hasGoodVision && !isTired
    console.log("y",shoulddrive)
