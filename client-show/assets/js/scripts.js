jQuery(document).ready(function($) {

    // Owl Carousel (small slider)

    $('.campaign-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });


    // Owl Carousel (campaign page slider)
    $('.other-campaign-slider').owlCarousel({
        items: 5,
        loop: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: true,
        margin: 30,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            650: {
                items: 2,
            },
            850: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    });

});


// hero slider codes
$('.slider-content').carousel({
    num: 5,
    maxWidth: 400,
    maxHeight: 350,
    distance: 200,
    scale: 0.8,
    animationTime: 500,
    showTime: 8000
});


// responsive hero slider
$(window).resize(function() {
    if (window.matchMedia('(max-width: 1500px)').matches) {
        $('.slider-content').carousel({
            num: 3,
            maxWidth: 400,
            maxHeight: 350,
            distance: 200,
            scale: 0.8,
            animationTime: 500,
            showTime: 8000
        });
    }

    if (window.matchMedia('(max-width: 1100px)').matches) {
        $('.slider-content').carousel({
            num: 3,
            maxWidth: 300,
            maxHeight: 250,
            distance: 150,
            scale: 0.8,
            animationTime: 500,
            showTime: 8000
        });
    }

    if (window.matchMedia('(max-width: 768px)').matches) {
        $('.slider-content').carousel({
            num: 3,
            maxWidth: 300,
            maxHeight: 250,
            distance: 120,
            scale: 0.8,
            animationTime: 500,
            showTime: 8000
        });

        $('.hero-slider')


    }

    if (window.matchMedia('(max-width: 575px)').matches) {
        $('.slider-content').carousel({
            num: 1,
            maxWidth: 260,
            maxHeight: 220,
            distance: 120,
            scale: 0.8,
            animationTime: 500,
            showTime: 8000
        });
    }

});

if (window.matchMedia('(max-width: 1500px)').matches) {
    $('.slider-content').carousel({
        num: 3,
        maxWidth: 400,
        maxHeight: 350,
        distance: 200,
        scale: 0.8,
        animationTime: 500,
        showTime: 8000
    });
}

if (window.matchMedia('(max-width: 1100px)').matches) {
    $('.slider-content').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 250,
        distance: 150,
        scale: 0.8,
        animationTime: 500,
        showTime: 8000
    });
}

if (window.matchMedia('(max-width: 768px)').matches) {
    $('.slider-content').carousel({
        num: 3,
        maxWidth: 300,
        maxHeight: 250,
        distance: 120,
        scale: 0.8,
        animationTime: 500,
        showTime: 8000
    });
}

if (window.matchMedia('(max-width: 575px)').matches) {
    $('.slider-content').carousel({
        num: 1,
        maxWidth: 260,
        maxHeight: 220,
        distance: 120,
        scale: 0.8,
        animationTime: 500,
        showTime: 8000
    });
}



//  menu codes
jQuery(document).ready(function($) {
    jQuery("a.responsive-menu").click(function() {
        jQuery("ul.menu").fadeToggle();
        jQuery("form").fadeToggle();
        jQuery("nav").fadeToggle();
        return false;
    });
    jQuery(window).resize(function() {
        var windowWidth = jQuery(window).width();
        if (windowWidth > 767) {
            jQuery("ul.menu").css({
                "display": "block"
            });
            jQuery("nav").css({
                "display": "block"
            });
            jQuery("form").css({
                "display": "block"
            });
        } else {
            jQuery("ul.menu").css({
                "display": "none"
            });
            jQuery("nav").css({
                "display": "none"
            });
            jQuery("form").css({
                "display": "none"
            });

        }
    });
});