jQuery(document).ready(function($) {
    $('.manga-name h5').text($('.manga-info> h5').text())
    $('.manga-name h6').text($('.manga-info> h6').text())
    $('.manga-details-mobile > p').text($('.manga-info> p').text())


    $(function(){
      var sharebutton = $('.share-manga a').clone();
      $('.social-mobile').html(sharebutton);
    });
   
   
    $('.manga-details-mobile a.manga-name').click(function() {
       $('.manga-details-mobile > p').slideToggle();
       $('.manga-details-mobile a.manga-name i').toggleClass('fa-angle-up', 'fa-angle-down');
 
        return false;
    })
   
    $('.manga-details-mobile a.btn-share').click(function() {
       $('.social-mobile-wrapper').slideToggle();
        return false;
    })


    //    $(window).resize(function() {
    //       if (window.matchMedia('(max-width: 575px)').matches) {
    //           // functionality for screens smaller than 1200px
    //       }
    //   });
});