jQuery(document).ready(function($) {
   // Owl Carousel
   /*
   $('.owl-carousel-class-name').owlCarousel({
      items: 4,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      dots: true,
      margin: 15,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 3,
            nav: false
         },
         1000: {
            items: 5,
            nav: true,
            loop: false
         }
      }
   });
   */
   // video animation Scripts
   var scrolled = false;
   $(window).scroll(function() {
      if ($(this).scrollTop() > 1 && !scrolled) {
         $('.video-file').css({
            'width': '100%',
            'height': '530px'
         })
         $('.video').css({
            'width': '50%',
         })
         $('.video img').css({
            'display': ' none'
         })
         $(' .video .volume').css({
            'left': ' 20px'
         })
         $('header .container').css({
            'max-width': ' 1580px'
         })
         $('.heroarea').css({
            'display': ' flex',
            'margin': ' auto',
            'margin-top': '80px',
            'max-width': ' 1620px',
         })
         $("html, body").animate({
            scrollTop: 0
         }, "slow");
         scrolled = true;
      }
   });
   // menu
   jQuery("a.responsive-menu").click(function() {
      jQuery("nav").fadeToggle();
      return false;
   });
});
// video bg
var video = document.querySelector(".video-file");
var btn = document.querySelector(".volume");

function volumeControl() {
   if (video.muted) {
      video.muted = false;
      btn.innerHTML = "<i class='fas fa-volume-up'></i>";
      console.log('aaa');
   } else {
      video.muted = true;
      btn.innerHTML = "<i class='fas fa-volume-mute'></i>";
      console.log('bbb');
   }
}