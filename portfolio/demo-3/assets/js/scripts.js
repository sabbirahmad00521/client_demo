jQuery(document).ready(function ($) {


    $('.company-slider').owlCarousel({
        items: 5,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2600,
        dots: false,
        margin: 40,
        nav: false,
        navText: '',
        autoplaySpeed: 2500,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                margin: 20,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        }
    });


    jQuery("a.responsive-menu").click(function () {
        jQuery("ul.menu").fadeToggle();
        return false;
    });
    jQuery(window).resize(function () {
        var windowWidth = jQuery(window).width();
        if (windowWidth > 991) {
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

function myFunction(x) {
    x.classList.toggle("change");
}