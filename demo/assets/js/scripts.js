jQuery(document).ready(function ($) {

   $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
         $('a.scroll-top').fadeIn()
      } else {
         $('a.scroll-top').fadeOut()
      }
   });
   
   // $("a.scroll-top").click(function() {
   //    $("html, body").animate({ scrollTop: 0 }, "slow");
   //    return false;
   // });

});
