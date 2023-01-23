/*=============== CHANGE BACKGROUND HEADER ===============*//*
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)*/

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtn = document.querySelectorAll('.second__btn'),
      modalClose = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtn.forEach((mb,i) =>{
    mb.addEventListener('click',() =>{
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click',() =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== FILTER ===============*/
filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("work__card");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("work__id");
var btns = btnContainer.getElementsByClassName("work__item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-work");
    current[0].className = current[0].className.replace(" active-work", "");
    this.className += " active-work";
  });
}

let mixerPort = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

/*=============== FILTER ===============
const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:2300,
  delay:400,
  //reset: true
})

sr.reveal(`.home__data`)
sr.reveal(`.skills__container`,{delay:100})

*/

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHOW HEADER ===============*/
window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);

})