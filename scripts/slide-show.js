// JavaScript Document

// Slide Show script
// -> Utilizes Slick jQuery plugin...
$(document).ready(function(){
    $('.slide-show').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        appendDots: $('.banner')
    });
  });