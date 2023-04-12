jQuery(document).ready(function ($) {

   // responsive menu
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 750) {
         jQuery("nav").css({
            "display": "block"
         });
         $('.responsive-menu').removeClass('change');
      } else {
         jQuery("nav").css({
            "display": "none"
         });
         $('.responsive-menu').removeClass('change');
      }
   });

   jQuery("a.responsive-menu").click(function () {
      jQuery("nav").fadeToggle();
      return false;
   });

   // scroll to resize menu
   $(window).scroll(function () {
      if ($(window).scrollTop() > 10) {
         $('header').addClass("scrolled");
      } else {
         $('header').removeClass("scrolled");
      }
   });

});

function myFunction(x) {
   x.classList.toggle("change");
}