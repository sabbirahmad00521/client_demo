jQuery(document).ready(function ($) {

   // Owl Carousel
   $('.road-map').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 10000,
      dots: true
   });
   $('.team').owlCarousel({
      items: 3,
      loop: true,
      margin: 15,
      autoplay: true,
      autoplayTimeout: 10000,
      dots: true, 
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
         },
         475: {
            items: 2,
         },
         768: {
            items: 3,
         }
      }
   });

   // Other Scripts


});

function countdown() {
   var date = new Date();
   var eventDate = new Date(2018, 4, 21);

   var runningTime = date.getTime();
   var eventTime = eventDate.getTime();

   var countdownTime = eventDate - date;


   var s = Math.floor(countdownTime / 1000);
   var m = Math.floor(s / 60)
   var h = Math.floor(m / 60)
   var d = Math.floor(h / 24)

   s = s % 60;
   m = m % 60;
   h = h % 24;

   s = (s < 10) ? "0" + s : s;
   m = (m < 10) ? "0" + m : m;
   h = (h < 10) ? "0" + h : h;

   document.getElementById('days').textContent = d;
   document.getElementById('hours').textContent = h;
   document.getElementById('minutes').textContent = m;
   document.getElementById('seconds').textContent = s;

   setTimeout(countdown, 1000)
}

countdown()
