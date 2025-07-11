/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu');
    });
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav__link');
navLink.forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
}));

/*=============== STICKY HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.second__btn'),
      modalCloses = document.querySelectorAll('.services__modal-close');

let openModal = (modalIndex) => {
    modalViews[modalIndex].classList.add('active-modal');
};

modalBtns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        openModal(i);
    });
});

modalCloses.forEach((close) => {
    close.addEventListener('click', () => {
        modalViews.forEach(view => view.classList.remove('active-modal'));
    });
});

/*=============== PORTFOLIO FILTER ===============*/
let mixer = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

const workItems = document.querySelectorAll('.work__item');

workItems.forEach(item => {
    item.addEventListener('click', () => {
        workItems.forEach(i => i.classList.remove('active-work'));
        item.classList.add('active-work');
    });
});

/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200
});

sr.reveal(` .section__subtitle, .section__title`, {origin: 'left'});
sr.reveal(` .about__img`, {origin: 'right'});
sr.reveal(`.about__data, .skills__container, .services__container, .work__container, .contact__container`, {origin: 'bottom'});

/*=============== SCROLL UP BUTTON ===============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(scrollUp){
        window.scrollY >= 560 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll', scrollUp);

