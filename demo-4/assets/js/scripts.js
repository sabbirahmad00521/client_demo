jQuery(document).ready(function ($) {

    /*-----------------------------------------
    // Slider (owl carousel)
    -----------------------------------------*/
    $('.letest-blog-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        margin: 15,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });



    $('.blog-post-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        margin: 15,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });



    /*-----------------------------------------
    // Menu Scripts
    -----------------------------------------*/

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
