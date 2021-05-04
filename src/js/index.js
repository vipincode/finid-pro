// ============================================================
// SWIPER CAROUSEL
// ============================================================

import Swiper from 'swiper/bundle';

const swiper1 = new Swiper('.swiper1', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
});

const testimonials = document.querySelector('.swiper1');
if(testimonials) {
    testimonials.addEventListener('mouseenter', () => {
    swiper1.autoplay.stop();
  });
  testimonials.addEventListener('mouseleave', () => {
    swiper1.autoplay.start();
  });
}

var swiper2 = new Swiper('.swiper2', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
});

// ============================================================
// BACK TO TOP CODE & STICKY NAV
// ============================================================

import $ from "jquery";
import 'jquery-sticky/jquery.sticky';

$(".navbar").sticky({
    topSpacing:0,
    zIndex: 999,
});

let $backToTop = $("#back-to-top");
$(window).on('scroll', function() {
    if($(this).scrollTop() > 100) {
        $backToTop.fadeIn();
    } else {
        $backToTop.fadeOut();
    }
});

$backToTop.on('click', function() {
    $('html, body').animate({
        scrollTop: 0,
    }, 600);
    return false;
});

// ============================================================
// BANNER
// ============================================================

// import 'vide/dist/jquery.vide';

// ============================================================
// MOBILE MENU
// ============================================================

const mobButton = $('.hamburger');

mobButton.on('click', function() {
    $(this).toggleClass('is-active');
    $('.sider').toggleClass('js__toggle');
});


// ============================================================
// COUNTER JS
// ============================================================
import 'waypoints/lib/noframework.waypoints';
import { CountUp } from 'countup.js/dist/countUp';

let count1 = new CountUp('count1', 277);
let count2 = new CountUp('count2', 821);
let count3 = new CountUp('count3', 566);
let count4 = new CountUp('count4', 311);
const way1 = document.getElementById('way1');
const way2 = document.getElementById('way2');
const way3 = document.getElementById('way3');
const way4 = document.getElementById('way4');

if(way1) {
    var wayy1 = new Waypoint({
        element: way1,
        handler: function(direction) {
            if(direction === "up") {
            count1.reset();
            } else {
            count1.start();
            }
        },
        offset: '75%'
    });
}

if(way2) {
    var wayy2 = new Waypoint({
        element: way2,
        handler: function(direction) {
            if(direction === "up") {
            count2.reset();
            } else {
            count2.start();
            }
        },
        offset: '75%'
    });
}


if(way3) {
    var wayy3 = new Waypoint({
        element: way3,
        handler: function(direction) {
            if(direction === "up") {
            count3.reset();
            } else {
            count3.start();
            }
        },
        offset: '75%'
    });
}

if(way4) {
    var wayy4 = new Waypoint({
        element: way4,
        handler: function(direction) {
            if(direction === "up") {
            count4.reset();
            } else {
            count4.start();
            }
        },
        offset: '75%'
    });
}

// ============================================================
// READ MORE
// ============================================================

import 'readmore-js/readmore';

$('.article').readmore({ 
    speed: 100, 
    collapsedHeight: 50,
    heightMargin: 16,
    blockCSS: 'display: block; width: 100%;',
    embedCSS: false,
    startOpen: false,
    moreLink: '<a href="#">Read more</a>',
    lessLink: '<a href="#">Close</a>'
});

// ============================================================
// SERVICES [ALL CARD ANIMATION]
// ============================================================
const srvAnimate1 = document.getElementById('anime1');
const srvAnimate2 = document.getElementById('anime2');
const srvAnimate3 = document.getElementById('anime3');
const srvAnimate4 = document.getElementById('anime4');
const animateClass1 = ['animate__animated', 'animate__flipInX'];
const animateClass2 = ['animate__animated', 'animate__flipInX'];
const animateClass3 = ['animate__animated', 'animate__flipInX'];
const animateClass4 = ['animate__animated', 'animate__flipInX'];

if(srvAnimate1) {
    const waypoint1 = new Waypoint({
        element: srvAnimate1,
        handler: function(direction) {
            if(direction === 'up') {
                srvAnimate1.classList.remove(...animateClass1);
            } else {
                srvAnimate1.classList.add(...animateClass1);
            }
        },
        offset: '50%' 
    });
}

if(srvAnimate2) {
    const waypoint2 = new Waypoint({
        element: srvAnimate2,
        handler: function(direction) {
            if(direction === 'up') {
                srvAnimate2.classList.remove(...animateClass2);
            } else {
                srvAnimate2.classList.add(...animateClass2);
            }
        },
        offset: '50%' 
    });
}

if(srvAnimate3) {
    const waypoint3 = new Waypoint({
        element: srvAnimate3,
        handler: function(direction) {
            if(direction === 'up') {
                srvAnimate3.classList.remove(...animateClass3);
            } else {
                srvAnimate3.classList.add(...animateClass3);
            }
        },
        offset: '50%' 
    });
}

if(srvAnimate4) {
    const waypoint4 = new Waypoint({
        element: srvAnimate4,
        handler: function(direction) {
            if(direction === 'up') {
                srvAnimate4.classList.remove(...animateClass4);
            } else {
                srvAnimate4.classList.add(...animateClass4);
            }
        },
        offset: '50%' 
    });
}

// ===============================================================================
// HOME PAGE ALL VARIABLES 
// ================================================================================
const abtImage = document.querySelector('.abt--image');
const atmCards = document.querySelector('.atm-cards');

// ===============================================================================
// ANIMATION FUNCTIONS 
// ================================================================================

const animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }
    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

animateCSS('.navbar-logo', 'bounce');

// ABOUT IMAGE
if(abtImage) {
    const abtImages = new Waypoint({
        element: abtImage,
        handler: function(direction) {
            if(direction === 'up') {
                abtImage.classList.remove('animate__animated', 'animate__fadeIn');
            } else {
                abtImage.classList.add('animate__animated', 'animate__fadeIn');
            }
        },
        offset: '50%' 
    });
}

// SIMPLIFIED BANKING
if(atmCards) {
    const atmCard = new Waypoint({
        element: atmCards,
        handler: function(direction) {
            if(direction === 'up') {
                atmCards.classList.remove('animate__animated', 'animate__fadeInUp');
            } else {
                atmCards.classList.add('animate__animated', 'animate__fadeInUp');
            }
        },
        offset: 600
    });
}

// ============================================================
// OTHER CODE
// ============================================================
