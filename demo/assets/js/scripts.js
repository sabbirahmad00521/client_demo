jQuery(document).ready(function ($) {

   // Owl Carousel
   
   $('.owl-2').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
   });

   // owl count 

   $('.owl-1').on('initialized.owl.carousel changed.owl.carousel', function(e) {
      if (!e.namespace)  {
        return;
      }
      var carousel = e.relatedTarget;
      $('.slider-counter-1').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
    }).owlCarousel({
      items: 1,
      loop: true,
      autoplay: false,
      autoplayTimeout: 8000,
      dots: false,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });
   
   
   // lightslider
      $('#lightSlider').lightSlider({
         gallery: true,
         item: 1,
         loop: true,
         slideMargin: 0,
         thumbItem: 9
      });

});


document.querySelector('video').play();