'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});


//How the Dom Really works

/*dom is a interface b/w js and Browser
  * The DOM is a tree-like structure that represents your webpage in JavaScript.
  * When a web page loads, the browser takes your HTML and turns it into objects that JavaScript can interact with.
  * Each HTML element (like <h1>, <p>, <div>) becomes a node (object) in this tree.
  * Using JavaScript, you can read, change, add, or remove elements from this DOM tree.
*/
// continue..........


const h1=document.querySelector('h1')
// h1.addEventListener("mouseenter",function(e){
//   alert("addEventListner: You  are reading the Heading")
// })

// another way(old way)
  //h1.onmouseenter=alert("addEventListner: You  are reading the Heading")

// add event listner allow to set multiple events at a time
// we can remove event handler if we dont need the event handler

const alertH11=function(e){
  alert("addEventListner: You  are reading the Heading")
  //to remove the event handler
  // h1.removeEventListener('mouseenter',alertH11) // and now only the first time the event handler works,because we prevent that
 }
 h1.addEventListener("mouseenter",alertH11)

 //removing the event after a perticular time
 setTimeout(()=>h1.removeEventListener('mouseenter',alertH11),3000)
 

 //------------------------bubbling-----------------------------------------
 /**
  Event propagation
  ----------------
    when you click an element inside the page(say button inside a div),the event doesn't stat there,it ravels through the Dom in two main phases:
    
    Capturing phase(trickle down)
    ----------------------------
    * The event starts from the root(document) and goes down through parent elements until reaches the target element

    Target phase
    -----------
    * The event reaches the actual element you clicked(the target)

    bubbling phase(bubble up)
    -------------------------
    After the target is reached,the event goes backup the DOM through it's ancestors, all the way to the root

    bubbling(default behaviour)
    --------------------------
    most events in js bubble by default
    that means if you click a<button> inside a <div>,the event first fires on the button,then bubbles up on the div then body andd then the document.
  
  Capturing phase: Event goes down (document → target).

  Target phase: Event is at the clicked element.

  Bubbling phase: Event goes up (target → document).
    */

  //-------------------------Event propagation in practice---------------------------

  // random colour is a rgb() and its value b/w 0 and 255
  //rgba(255, 255, 255, 0.94)
  const randomInt=()=>Math.floor(Math.random()*256)
  const randomColor=()=>`rgb(${randomInt()},${randomInt()},${randomInt()})`

  document.querySelector('.nav__link').addEventListener("click",function(e){
    this.style.backgroundColor=randomColor()
    // stop event
    // e.stopPropagation() // now only that element's color will change not the parent all the entire
  })
  document.querySelector('.nav__links').addEventListener("click",function(){
    this.style.backgroundColor=randomColor()
  })
  document.querySelector(".nav").addEventListener("click",function(){
   this.style.backgroundColor=randomColor()
  },true) // if we set true here it listen events in capturing phase rather than bubbling phase.(as by default we know its bubbling phase)
// KEEP IN MIND arrow fn doesn't support this key word and in an eventListner "this" always points to that thing which we attach the ventlistner

//------------------------------Page Navigation---------------------------------------------------

// first in the previous demo we clear the nav__links link for this section we need them back
//we need to get a smooth flow when we clicks on the nav links it goes to  those section smoothly

/*
  document.querySelectorAll(".nav__link").forEach(function(el){
    el.addEventListener('click',function(e){
      e.preventDefault() // its to  prevent the default behaviour as in the href we have give the id as links so to prevent it we can use like that way
      const id=this.getAttribute('href')// here we get the current events's href's attribute -->if we use this.href -->it gets the all of the href we only need the attribute so uses getAttribute 
        console.log(id) 
        document.querySelector(id).scrollIntoView({
          behavior:'smooth'
        })
    })
  })
*/
//######Delegation
// we can use event delegation  to make our code and performance improve
// it is inefficient because the same event handler function is attached individually to each link. If there were thousands of links, this would create thousands of copies of the same function, negatively impacting performance and code cleanliness.

// for event delegation there are 2 main steps: 
// 1) First,we add the event listener to a common parent element of all the elements that we're interested in.
// 2) Determine what element orginated the event.
document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault()
  // matching stratergy
  if(e.target.classList.contains('nav__link'))  // here we checks e.target contain classlist named "nav__link"
    console.log("link")
    const id=e.target.getAttribute('href') // the href attribute is now not on "this" so we need to change it to e.target
    document.querySelector(id).scrollIntoView({
      behavior:"smooth"
    })
})


// -----------------------Dom taversing-----------------------------
//This allows us to select an element based on another element

// const h1=document.querySelector('h1') have to declare b ut we have already declare at the top


//going downwars:child
  console.log(h1.querySelectorAll('.highlight'))
  console.log(h1.childNodes)
  console.log(h1.children)
  h1.firstElementChild.style.color="white"
  h1.lastElementChild.style.color="rgba(213, 253, 203, 1)"
  /**
   childNodes->all childnodes(includes text,comments)
  children--->only element children
  firstElementChild/lastElementChild--->first/last direct child element(here the baground with green one)
  *use these when you want to go inside an ellement
  */
//going upwards:parents
  console.log(h1.parentNode)
  console.log(h1.parentElement)
  h1.closest('.header').style.background='var(--gradient-secondary)' // its nothing just a custom property
  /**
      parentNode/parentElement-->direct parent
      closest(selector)--->nearest ansistor that matches the selector
  */
// going sideway:sibilings

  console.log(h1.previousElementSibling)
  console.log(h1.nextElementSibling)

  console.log(h1.previousSibling)
  console.log(h1.nextSibling)

  // if we need all elements not the previous and next one then we can use
  console.log(h1.parentElement.children);
  [...h1.parentElement.children].forEach(function(el){
    if(el !==h1) el.style.transdorm='scale(0.5)'
  })

  //-----------------------Building a tabbed component----------------------------

  // tabs -->instant transfer ,instant loans...
  const tabs=document.querySelectorAll('.operations__tab')
  const tabsContainer=document.querySelector(".operations__tab-container")
  const tabsContent=document.querySelectorAll('.operations__content')

  //tabs.forEach(t=>t.addEventListener('click',()=>console.log("TAB")))//// as from above the same if we have 1000+tabs then it create 1000+ copies of this exact callback function,so we use delegation
  
tabsContainer.addEventListener('click',function(e){
/*
  const clicked=e.target
  console.log(clicked) // when we click on span/ or button it logs but the thing is we need  to get the attributes of button not the span
*/

/*
  // to make that possible
  const clicked=e.target.parentElement;
  console.log(clicked) // now when click on the number the button class is loging because we use parenentElement,but now the problem is if we click on the button it goes to its parent div or its login the parent div because we give parentElement,so we can use "going upwards:parents"
*/
// to make that we use closest
  const clicked=e.target.closest(".operations__tab")
  console.log(clicked)
})

