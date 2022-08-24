/* ==============================================================================================================

INDEX 

line 23 : HERO IMAGE CAROUSSEL
line 87 : VEHICULE SELECTION
line 125 : STORE FINDER


========================================================================================================================================*/




/*============================

HERO IMAGE CARROUSEL 

img caroussel with array index increment and decrement buttons

=============================*/

//My data 
const myTrucks = [
    {
      img : "./assests/hero/desktop/Hero1.png"
    },
    {
        img : "./assests/hero/desktop/Hero2.png"
    },
    {
        img: "./assests/hero/desktop/Hero3.png"
    },

  ];

// select items & create atached variables
const carousselImg = document.getElementById('truck-hero-image')

const nextBtn = document.getElementById('next-btn');

const prevBtn = document.getElementById('prev-btn');

// array index set up 
let myImg = 0;

loadCarousselImg()

  function loadCarousselImg () {
    const item = myTrucks[myImg];
    carousselImg.src = item.img;
  };
  
/*==========

setting up image change based on next and prev buttons

============*/

nextBtn.addEventListener('click',cycleImgFor);

prevBtn.addEventListener('click',cycleImgBack);

//increment array index when next button is pressed if number excedes my array length than set array index to 0 

function cycleImgFor (){
    myImg++
    if(myImg > myTrucks.length - 1){
        myImg=0
    };
    changeImg(myImg);
}

//decrement array index, if it is inferior to 0 that set it to array length -1. This allows us to loop easily

function cycleImgBack(){
    myImg--
    if(myImg < 0){
        myImg = myTrucks.length - 1
    };
    changeImg(myImg)
}
// show image based on myImg which is passed as argument in previous dom event methods 

function changeImg(img) {
    const item = myTrucks[img]
    carousselImg.src = item.img
  };



/*========================================

    Vehicule selection

        The idea is to use our three buttons : 
        -small-btn
        -medium-btn
        -large-btn

    By default the small vehicules are selected and others are hidden

    If the user selects a size our associated elements get a class according to their size. When the user deselects the button the class changes and the img disappears.
    If all the buttons are clicked  all trucks appear. 
    If the user deselects every size,a p element will appear instead of the images promptiing an error message
     
=========================================*/

//Selecting from the DOM and creating my variables 

const smallBtn = document.getElementById('small-btn');

const medBtn = document.getElementById('medium-btn');

const lrgBtn = document.getElementById('large-btn');

/* ====== FIRST VERSION OF PROGRAMM NOT VERY EFFICIENT
smallBtn.addEventListener('click',()=>{

    if (smallBtn.getAttribute('class')=== 'off'){
        smallBtn.setAttribute('class','on');
    } else {smallBtn.setAttribute('class','off');
    }

===========================================*/

/* ====== SECOND VERSION WAS MORE EFFICIENT BUT COULD BE MADE MORE EFFCIENT BY USING evt.ta
smallBtn.addEventListener('click', ()=>{ toggleOn ()

// When btn is click check to see if class!== 'on' and change class to 'on' else change class to 'off'
function toggleOn (myBtn){
    if (myBtn.getAttribute('class') !== 'on'){
        myBtn.setAttribute('class','on');
    } else {myBtn.setAttribute('class','off');
    }

=============================================*/

/* ============================== 
THIRD VERSION OF PROGRAMM
=============================*/

//Event listeners for my toggleOn function

smallBtn.addEventListener('click', toggleOn );
medBtn.addEventListener('click', toggleOn );
lrgBtn.addEventListener('click', toggleOn );


// When btn is click check to see if class!== 'on' and change class to 'on' else change class to 'off'

function toggleOn (evt){
    if (evt.target.getAttribute('class') !== 'on'){
        evt.target.setAttribute('class','on')
    } else {evt.target.setAttribute('class','off')
    }
};




/*==============================

SHOW VEHICULES ACCRDING TO SELECTED BUTTON

How it will work : 
if small button has 'on' class than set same size vehicules to size class 

=============================*/

const smallVh1 = document.getElementById('truck-four');

const smallVh2 = document.getElementById('truck-five');

const medVh1 = document.getElementById('truck-two');

const lrgVh1 = document.getElementById('truck-one');

const lrgVh2 = document.getElementById('truck-three');

//We have three events that work in the following way : event listener for size button 'on' if true that set vehicule class to according size
//It can be refactored and rethought, why not use an array of objects containing all my vehicule info ? Could use a loop to get all my vehicules when passing them as param. And then append child according to button toggle ? 

smallBtn.addEventListener('click', e => toggleClass(e, smallVh1, smallVh2, 'small'));
medBtn.addEventListener('click', e => toggleClass(e, medVh1, medVh1, 'med'));

//doubled medVh1 to avoid error when using medBtn

lrgBtn.addEventListener('click', e => toggleClass(e, lrgVh1, lrgVh2, 'lrg'));

function toggleClass (evt, vh1, vh2, size){
    if (evt.target.getAttribute('class') ==='on' ){
        vh1.setAttribute('class', size);
        vh2.setAttribute('class', size);
    } else if (evt.target.getAttribute('class') !=='on' ){
        vh1.setAttribute('class', 'hide');
        vh2.setAttribute('class', 'hide');
        }
        errorMsg();
}

/*=======================

ERROR MESSAGE

=========================*/

//Error message variable set up 

const vhErrorMsg = document.getElementById('vh-Error-Msg')

//this is my error message function that appear if no buttons are selected, it is call in each button click event 

function errorMsg (){
if (smallBtn.getAttribute('class') !=='on' && medBtn.getAttribute('class') !=='on' && lrgBtn.getAttribute('class') !=='on'){
 vhErrorMsg.setAttribute('class','message')
} else {
    vhErrorMsg.setAttribute('class','message-hidden')
}};




/* ========================

GOOGLE MAPS STORE FINDER

So the idea is to fake a google maps API for the purpose of this mission. 
When the user clicks and address the according google maps iframe will appear 

=========================*/

//Get g-maps div that holds my iframes
const gMapsContainer = document.getElementById('g-maps');

//DOM variable setup

const addressOne = document.getElementById('address-one');
const addressTwo = document.getElementById('address-two');
const addressThree = document.getElementById('address-three');

//Iframe variable address

const addressOneIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0600104070127!2d28.27779575061248!3d-26.194726069868484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e9517cba6dd8fbf%3A0x510fb0f8056d38c3!2s99%20Skew%20Rd%2C%20Anderbolt%2C%20Boksburg%2C%201459%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661175492057!5m2!1sfr!2sfr" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
const addressTwoIframe = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.5641055698466!2d31.02410181514091!3d-29.761326025126255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7068417f648e3%3A0x5c1029735ddadd6a!2sRedhill%20Industrial%20Park!5e0!3m2!1sfr!2sfr!4v1661069851799!5m2!1sfr!2sfr" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
const addressThreeIframe ='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4317216640143!2d18.698141115258316!3d-33.878533526995504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc516f59f60035%3A0x27935b3a64514879!2s111%20Kruis%20Rd%2C%20Brackenfell%2C%20Cape%20Town%2C%207925%2C%20Afrique%20du%20Sud!5e0!3m2!1sfr!2sfr!4v1661069825194!5m2!1sfr!2sfr" width="100%" height="400px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';

//Function addIframe : when a address is clicked it creates and iframe according to clicked address within in a div 

addressOne.addEventListener('click', ()=> addIframe (addressOneIframe));

addressTwo.addEventListener('click', ()=> addIframe (addressTwoIframe));

addressThree.addEventListener('click', ()=> addIframe (addressThreeIframe));

function addIframe (myAddress){
    gMapsContainer.innerHTML = myAddress
};

//map 1 will always load on page load to avoid empty white space 
window.addEventListener("DOMContentLoaded", () => addIframe (addressOneIframe));



/*============================

BURGER MENU 

=============================*/

const burgerMenu = document.getElementById('burger-menu')
const nav = document.getElementById('nav-link')
const burgerTop = document.getElementById('burger-top');
const burgerMid = document.getElementById('burger-mid');
const burgerBot = document.getElementById('burger-bot');

const navLink1 = document.getElementById('vehicules-nav-link');
const navLink2 = document.getElementById('about-nav-link');
const navLink3 = document.getElementById('expertise-nav-link');
const navLink4 = document.getElementById('service-nav-link');
const navLink5 = document.getElementById('location-nav-link');

burgerMenu.addEventListener('click', ()=> {

burgerMenu.classList.toggle('active')
nav.classList.toggle('active')
burgerTop.classList.toggle('toggled')
burgerMid.classList.toggle('toggled')
burgerBot.classList.toggle('toggled')
console.log('you clicked the burger menu')
});

navLink1.addEventListener('click', ()=> {
    burgerTop.classList.remove('toggled')
    burgerMid.classList.remove('toggled')
    burgerBot.classList.remove('toggled')
    nav.classList.remove('active')
    console.log('you clicked nav link one')
    });

navLink2.addEventListener('click', ()=> {
    burgerTop.classList.remove('toggled')
    burgerMid.classList.remove('toggled')
    burgerBot.classList.remove('toggled')
    nav.classList.remove('active')
    console.log('you clicked nav link one')
    });

navLink3.addEventListener('click', ()=> {
    burgerTop.classList.remove('toggled')
    burgerMid.classList.remove('toggled')
    burgerBot.classList.remove('toggled')
    nav.classList.remove('active')
    console.log('you clicked nav link one')
    });

navLink4.addEventListener('click', ()=> {
    burgerTop.classList.remove('toggled')
    burgerMid.classList.remove('toggled')
    burgerBot.classList.remove('toggled')
    nav.classList.remove('active')
    console.log('you clicked nav link one')
    });

navLink5.addEventListener('click', ()=> {
    burgerTop.classList.remove('toggled')
    burgerMid.classList.remove('toggled')
    burgerBot.classList.remove('toggled')
    nav.classList.remove('active')
    console.log('you clicked nav link one')
    });

