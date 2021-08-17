jQuery(document).ready(function($) {

    // wide slider
    $('.wide-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    });

    // crypto slider
    $('.crypto').owlCarousel({
        items: 4,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        margin: 40,
        nav: true,
        dots: false,
        navText: ["<img src='assets/img/10.png'>", "<img src='assets/img/10.png'>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });

    // user submenu click to open
    $('.user-nav li').click(function() {
        $(this).children('ul').fadeToggle()
    })

    // menu responsive
    var windowWidth = jQuery(window).width();

    jQuery("a.responsive-menu").click(function() {
        jQuery(".responsive-sidebar").addClass('active');
        return false;
    });

    jQuery(".responsive-sidebar > a").click(function() {
        jQuery(".responsive-sidebar").removeClass('active');
        return false;
    });

    $('.responsive-sidebar li').click(function() {
        $(this).children('ul').slideToggle()
    })

  

    jQuery(window).resize(function() {
        if (windowWidth < 1200) {
            $('.user-nav').children('li').prependTo('.sidebar-user');
        } else {
            $('.sidebar-user').children('li').prependTo('.user-nav');
        }
    });


    if (windowWidth < 1200) {
        $('.user-nav').children('li').prependTo('.sidebar-user');
    } else {
        $('.sidebar-user').children('li').prependTo('.user-nav');
    }

    
    // jQuery("a.responsive-menu").click(function() {
    //     jQuery(".user-nav").fadeToggle();
    //     return false;
    // });
    // jQuery(window).resize(function() {
    //     var windowWidth = jQuery(window).width();
    //     if (windowWidth > 768) {
    //         jQuery("nav").css({
    //             "display": "block"
    //         });
    //         $('.responsive-menu').removeClass('change');
    //     } else {
    //         jQuery("nav").css({
    //             "display": "none"
    //         });

    //     }
    // });

});