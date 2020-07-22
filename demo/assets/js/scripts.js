jQuery(document).ready(function ($) {

   // Owl Carousel

   $('.homepage-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 8000,
      dots: false,
      nav: false,
      smartSpeed: 1500
   });


   // search Scripts
   $('.search').click(function () {
      $('.search-box').fadeIn()
   });
   $('.search-box i').click(function () {
      $('.search-box').fadeOut()
   });

   // menu
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });
   $('.homepage-menu-right .language').click(function () {
      $(this).find('ul').toggle()
      console.log(this);
   })
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 750) {
         jQuery("ul.menu").css({
            "display": "block"
         });
         $('.responsive-menu').removeClass('change');

         jQuery("ul.menu").removeClass('mobile-menu')
         // jQuery("ul.submenu").hide()
      } else {
         jQuery("ul.menu").css({
            "display": "none"
         });
         jQuery("ul.menu").addClass('mobile-menu')
         $('ul.mobile-menu > li').click(function () {
            $(this).find('ul').toggle()
         })
      }
   });

   // submenu
   // jQuery(window).resize(function () {
   var windowWidth = jQuery(window).width();
   if (windowWidth < 767) {
      jQuery("ul.menu").addClass('mobile-menu')

   } else {
      jQuery("ul.menu").removeClass('mobile-menu')
   }
   $('ul.mobile-menu > li').click(function () {
      $(this).find('ul').toggle()
   })
   // });

   // datepicker
   $("#startdate").datepicker();
   $("#enddate").datepicker();
});