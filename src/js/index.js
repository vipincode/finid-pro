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


// ============================================================
// NAVBAR CODE
// ============================================================

import $ from "jquery";
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
// OTHER CODE
// ============================================================