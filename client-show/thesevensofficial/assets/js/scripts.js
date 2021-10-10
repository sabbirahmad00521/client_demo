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

    // Other Scripts


});

var app = document.getElementById('typewritter');

var typewriter = new Typewriter(app, {
   loop: true,
   delay: 75
});

typewriter
    .typeString('a counter-culture.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('avatars.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Keys.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('NFT Collectibles.')
    .pauseFor(2500)
    .deleteAll()
   .start();
    delay