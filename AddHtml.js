//----------example 1 <h1>------------------ate the 

//Step-1 Create the element

    const newHead=document.createElement("h1") 

//Step-2 Add attributes/ css properties
    newHead.textContent="Hello Everyone..."
    newHead.id="myH1"
    newHead.style.color="red"
    newHead.style.textAlign="center"

//Step-3 Append element to Dom
     // document.body.append(newHead) //apends at the end
    // document.body.prepend(newHead)  // appends at the begining
    document.getElementById("box1").append(newHead) //appends on the box1
  //document.getElementById("box1").prepend(newHead)     // appends as the first child on the box1

  /*
 //To make it like a  sandwich b/w box1 and box2
 const box2 =document.getElementById("box2")
 document.body.insertBefore(newHead,box2)
*/


 // if the element has no id then we can use queryselector
 //const boxes=document.querySelectorAll(".box")
 //document.body.insertBefore(newHead,boxes[2])



 //-----To Remove HTML ELEMENT
    document.getElementById("box1").removeChild(newHead)


//-------------------------------<!--Example for ordered list-->--------------------
const listitem=document.createElement("li")    //step1
listitem.textContent="coconut"      //step2
document.body.append(listitem)      //step3
listitem.id="coconut"
listitem.style.fontFamily="Arial"
listitem.style.fontSize="30px"
listitem.style.backgroundColor="grey"
document.getElementById("fruits").append(listitem)
const newlst=document.getElementById("orange")
document.getElementById("fruits").insertBefore(listitem,orange)