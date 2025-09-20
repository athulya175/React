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
  console.log(clicked)//now when we clicks the button the it logs the button and also when we click the span(text/number) we get the button, that in prev-> we says that closest is really help full in event deligation this is a case of that
  // and now when we click the container where it includes the text and buttons then the result will be error  because of no parent class so we basically ignore any click that happen on that area.(Guard clause)
  if(!clicked) return  //(return  null insted of error) normaly we write if(clicked)clicked.classList.add('operations__tab--active) its a traditional way
  tabs.forEach(t=>t.classList.remove('operations__tab--active'))// removes the active class from all
  clicked.classList.add('operations__tab--active')

  // content area
  console.log(clicked.dataset.tab)
  tabsContent.forEach(t=>t.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active') // know why dataset is used because "Every HTML element has a dataset property (a DOMStringMap object),automatically collects all attributes that start with data-.,The part after data- becomes a property of dataset. dataset.tab → special DOM API, gives you the value of the data-tab attribute ("1")."
})

//--------------------------------------------------passing Argument to Event handlers
//hover at nav 


  // now we are not simply adding event listner insted of we adds delegation for that first we need the parent class, here links parent class is "nav__links" but need the logo too so we neeed to be add the "nav" as class name.this is done because of bubblish
  const nav=document.querySelector('.nav')
/*
  nav.addEventListener('mouseover',function(e){//Previously, we used the mouseenter event, which is similar, but mouseenter does not bubble. Here, we need the event to bubble so it can reach the navigation element, so we use mouseover.
    if(e.target.classList.contains('nav__link')){
      // here as like buttons there is no child class that we accedently click so thats why we dont need to use "closest"
      const clickedLink=e.target
      // now we need to select all the siblings/ all the other links so we done it by accesing from its parent here parent is "nav__item" and it contains only the liks
      // inste of doing manually like one or two steps,we can simply search for a parent which matches a certain query
      const sibLinks=clickedLink.closest('.nav').querySelectorAll('.nav__link')
      const logo=clickedLink.closest('.nav').querySelector('img')
      sibLinks.forEach(sib=>{
      if(sib!==clickedLink)sib.style.opacity=0.5
    })
    logo.style.opacity=0.5
    }
  }) 
  nav.addEventListener('mouseout',function(e){  
    if(e.target.classList.contains('nav__link')){
      const clickedLink=e.target
      const sibLinks=clickedLink.closest('.nav').querySelectorAll('.nav__link')
      const logo=clickedLink.closest('.nav').querySelector('img')
      sibLinks.forEach(sib=>{
      if(sib!==clickedLink)sib.style.opacity=1
    })
    logo.style.opacity=1
    }
  }) 
*/



// now it works but the problem is code is not dry anymore we can give that inside a fn and simply call the function at both place

// const handleHover=function(e,opacity){
 const handleHover=function(e){ // no need to pass params one real params is enough
  if(e.target.classList.contains('nav__link')){
    const clickedLink=e.target
    const sibLinks=clickedLink.closest('.nav').querySelectorAll('.nav__link')
    const logo=clickedLink.closest('.nav').querySelector('img')
    sibLinks.forEach(sib=>{
    // if(sib!==clickedLink)sib.style.opacity=opacity
    if(sib!==clickedLink)sib.style.opacity=this// using binding
  })
  logo.style.opacity=1
  }
}

/*
  nav.addEventListener('mouseover',function(e){
    handleHover(e,0.5)
  })
  nav.addEventListener('mouseout',function(e){
    handleHover(e,1)
  })
*/
// here inside a function we are calllng another function we can make that to look more efficent by using binding
nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1))


//---------------------------------Building a slider component------------------------

const slides=document.querySelectorAll('.slide')
const btnLeft=document.querySelector(".slider__btn--left")
const btnRight=document.querySelector(".slider__btn--right")
const slider=document.querySelector('.slider')
let currSlide=0
const maxSlide=slides.length
console.log(slides)
const dotContainer=document.querySelector('.dots')
// dry princle applying
const goToSlide=function(slide){
  slides.forEach((s, i)=>s.style.transform=`translateX(${100*(i-slide)}%)`)
}

/* applying dry principle for 1st slide
  slides.forEach((s, i)=>s.style.transform=`translateX(${100*i}%)`) // the 100*i means at index 0 it should be 0 at index  1 it should be 100.....
  // so the position of slides will be goes like 1st,2nd,3rd.. as--->0%,100%,200%,300%...
*/
//----------for first slide
goToSlide(0)


// highlight the dot when clicks
const activeDot=function(slide){
  document.querySelectorAll(".dots__dot").forEach(dot=>
    dot.classList.remove('dots__dot--active'))
    document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
  }


//we can create
  //next slide a function for nxtslides also we can apply that on both buttons
 
  //----------------next slide 
  const nextslide=function(){
    if(currSlide===maxSlide-1){
      currSlide=0
    }
    else{
       currSlide++
    }
      goToSlide(currSlide)
      activeDot(currSlide)
  }
/*  
  btnRight.addEventListener('click',function(){
      // the active one has 0% and prev-->-100 and nxt -100
      if(currSlide===maxSlide-1){
        currSlide=0
      }
      else{
        
          currSlide++
      }
         // applying dry
            // slides.forEach((s, i)=>s.style.transform=`translateX(${100*(i-currSlide)}%)`)
            // now we want the access as -100%,0%,200%
        
        goToSlide(currSlide)

    
  })
*/
//-----------prevslide
const prevSlide=function(){
  if(currSlide===0){
    currSlide=maxSlide-1  //currentslide is not zero based
  }else{
    currSlide--
  }
  
  goToSlide(currSlide)
  activeDot(currSlide)
}



// --------------------button of slider
 btnRight.addEventListener('click',nextslide)
 btnLeft.addEventListener('click',prevSlide)


 // ---------------attaching a keyborad event key left and key right 

 document.addEventListener('keydown',function(e){
  console.log(e)
  if(e.key=="ArrowLeft") prevSlide()
    if(e.key=="ArrowRight") nextslide()
 })


// ------------------when clicking dots the page has to be changed
// creating button
const createDot=function(){
  slides.forEach(function(_,i){// here we use under score because we only needd index no needd of slide
  dotContainer.insertAdjacentHTML('beforeend',
    `<button class="dots__dot" data-slide="${i}"></button>`
  )
}
  )}
createDot()


//here also we are using event delegation for dot clicking so we use the parent element insted of each dots
dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    currSlide=Number(e.target.dataset.slide)
    console.log(currSlide)
    goToSlide(currSlide)
    activeDot(currSlide)
  }
})

 activeDot(0) // by default 1st slide selected


 ///Lifecyle DOM Event

 //DOM content loaded Event

 document.addEventListener('DOMContentLoaded',function(e){
  console.log('HTML parsed and Dom tree build',e)
 })
 //This event is fired by the document as soon as the HTML is completely parsed. This means the HTML has been downloaded and converted to the DOM tree. All scripts must be downloaded and executed before the DOMContentLoaded event can occur.
 // but we dont need to pass our entire code into a eventhandler like "DOMContentLoaded".because we put our scipt tag last of the html so after html loads then only the scrip starts.


 window.addEventListener('load',function(e){
  console.log('page fully loaded',e)
 })
 //The load event is fired by the window as soon as not only the HTML is parsed, but also all images and external resources like CSS files are loaded. This event fires when the complete page has finished loading.

 window.addEventListener('beforeunload',function(e){
  // in some broweser preventDefault is required
  e.preventDefault()
  e.returnValue=''
 })
 //The beforeunload event is also fired on the window. This event is created immediately before a user is about to leave a page, for example, after clicking the close button in the browser tab. It can be used to ask users if they are sure they want to leave the page.











