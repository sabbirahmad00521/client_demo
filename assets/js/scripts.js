jQuery(document).ready(function ($) {

   // Owl Carousel
   $('.testimonial-slider').owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      stagePadding: 120,
      autoWidth: true,
      autoplayTimeout: 2000,
      margin: 50,
      nav: false,
      navText: false,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1,
            nav: true
         },
         600: {
            items: 2,
            nav: false
         },
         1000: {
            items: 2,
         }
      }
   });

   // video Scripts
   $(".work-video").modalVideo({
      channel: 'youtube'
   });
});