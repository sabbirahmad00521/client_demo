jQuery(document).ready(function ($) {

   jQuery("a.nav-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 992) {
         jQuery("ul.menu").css({
            "display": "flex"
         });
      } else if (windowWidth > 750) {
         jQuery("ul.menu").css({
            "display": "block"
         });
         $('.nav-menu').removeClass('change');
      } else {
         jQuery("ul.menu").css({
            "display": "none"
         });

      }
   });

   jQuery("a.serv-menu").click(function () {
      jQuery(".left-sidebar ").fadeToggle();
   });
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 750) {
         jQuery(".left-sidebar ").css({
            "display": "block"
         });
         $('.serv-menu').removeClass('change');
      } else {
         jQuery(".left-sidebar ").css({
            "display": "none"
         });

      }
   });


});