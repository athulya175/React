
    let fruits=["Apple","Orange","Banana"]
/*
    fruits.push('Kivi')                  // adds a element and the end
    fruits.pop()                        //remove the last element(kivi)
    fruits.unshift("mango")            // adds a elemt at the starting of the array
    fruits.shift()                    //remove the first element
    console.log(fruits) 
    console.log(fruits[1])
    console.log(`Number of elements in the array: `+fruits.length)
    console.log(`index of apple is : `+fruits.indexOf("Apple"))
    console.log(`index of kivi is:`+fruits.indexOf("kivi") )        //here kivi is not in the array  so it returns -1 as index
*/
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}

// printing reverse
for(let i=fruits.length-1;i>=0;i--){  //length-1 is given because index is starts from zero but length is starts from 1 so,if we dont give the length -1 then we get a undefined value
    console.log(fruits[i])
}

//Alternative ans simple way to print elements on the array

for(let x of fruits){
    console.log(x)
}

console.log("Array sorting...."+fruits.sort())              //sorting
console.log("Array sorting reverse...."+fruits.sort().reverse())  //sorting reversly



