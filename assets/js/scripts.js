jQuery(document).ready(function ($) {

   $('nav li').hover(function () {
      $('nav li a').attr("style", "opacity: 0.4;")
      $(this).toggleClass("active")

      $('nav li ul').removeClass("submenuactive")
      $('nav li.active ul').addClass("submenuactive")

   })
   $('nav').mouseleave(function () {
      $('nav li a').attr("style", "opacity: 1;")
   })

   $('.social-icons li').hover(function () {
      $('.social-icons li a').attr("style", "opacity: 0.4;")
      $(this).toggleClass("active")
   })
   $('.social-icons li').mouseleave(function () {
      $('.social-icons li a').attr("style", "opacity: 1;")
   })


   // responsive menu
   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });

   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 748) {
         jQuery("ul.menu").css({
            "display": "block"
         });
         $('.responsive-menu').removeClass('change');
      } else {
         jQuery("ul.menu").css({
            "display": "none"
         });

      }
   });
});