jQuery(document).ready(function ($) {

   // Owl Carousel
   
   $('.slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
     autoplayTimeout: 2000,
      margin: 15,
      nav: true,
      navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
      smartSpeed: 1,
      dragEndSpeed: 1,
      fluidSpeed: 1,
      autoplaySpeed: 10,
   });
   
   
   // Other Scripts


});
jQuery(document).ready(function () {

    var sections = $('section'),
        nav = $('nav'),
        nav_height = nav.outerHeight();

    $(window).on('scroll', function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight();

            if (cur_pos >= top && cur_pos <= bottom) {
                nav.find('a').removeClass('active');
                sections.removeClass('active');
                
                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }
        });
    });


    nav.find('a').on('click', function () {
        var $el = $(this),
            id = $el.attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top
        }, 500);

        return false;
    });

});

jQuery(document).ready(function () {
  $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
});
});
