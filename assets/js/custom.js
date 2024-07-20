jQuery(document).ready(function ($) {
  
 // sticky
 $(window).scroll(function (e) {
    if ($(window).scrollTop() > 60) {
      $('.header').addClass('is_hidden');
    } else  {
      $('.header').removeClass('is_hidden');
    }

    if ($(window).scrollTop() > 150) {
      $('.header').addClass('sticky');
      $('.interessiert').addClass('sticky');
    } else {
      $('.header').removeClass('sticky');
      $('.interessiert').removeClass('sticky');
    }

  });

// slide menu
$(document).on('click', '.header_bottom .navigation li:has(ul) a , .side_menu_pannel li:has(ul) a', function (event) {
  event.preventDefault()
  $(this).parent('li').find(".sub-menu").toggleClass('show');

});



// hero slider controls
var $status = $('.total_number');
var $slickElement = $('.hero_slider');
$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    $status.text('0' +slick.slideCount);
});

$('.slide_go_to_first').click(function() {
  $('.hero_slider').slick('slickGoTo', 1);
});

  // hero slider
  $('.hero_slider').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    arrows: false,
    rows:0,
    appendDots: '.control'
  
  });


 // partner slider
 $('.partner_slider').slick({
  infinite: false,
  autoplay: false,
  autoplaySpeed: 4000,
  speed: 1500,
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  fade: false,
  arrows: false,
  rows:0,
  cssEase: 'linear',
  responsive: [ 
    {
      breakpoint:601,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    } 
  ]
  
});

//  mobile menu
$('.menu_bar').click(function () {
  $(this).toggleClass('active');
  $('.header .side_menu_pannel').toggleClass('open');
  $('body').toggleClass('stop_scroll'); 
  $('.main-content').toggleClass('blur_body'); 
  $('.footer').toggleClass('blur_body'); 
  $('.header .logo').toggleClass('blur_body'); 
});

// loader
$(window).on('load', function() { 
  $('.preloader-wrap').delay(2500).fadeOut(); 
  $('.preloader').delay(2300).fadeOut('slow'); 
  $('body').delay(2300).add({'overflow':'visible'});
  $('.preloader-wrap img').delay(2300).css({
    'filter':'blur(0px)',
    'opacity':'1'
  }); 
  $('.preloader-progress span').delay(2500).css({
    'width':'100%',
  });

})

// aos
setTimeout(function() {
// aos
AOS.init({
  duration: 900,
  // once: true,
})
}, 2500);


// interessiert fixed
$('.interessiert .show_btn').click(function () {
  $('.interessiert').addClass('active');

});

$('.interessiert .close_btn').click(function () {
  $('.interessiert').removeClass('active');

});



});



