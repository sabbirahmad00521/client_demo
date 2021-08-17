AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 20, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });



jQuery(document).ready(function ($) {

    // Owl Carousel
    
    $('.testimonial-slider').owlCarousel({
       items: 1,
       loop: true,
       autoplay: true,
       autoplayTimeout: 5000,
       dots: true,
       animateIn: 'fadeIn',
       animateOut: 'fadeOut',
       mouseDrag: false,
       touchDrag: false,
    });
    

    // Other Scripts
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 5) {
            $("header").addClass("scrolled");
        } else {
            $("header").removeClass("scrolled");
        }
    });

// menu
    jQuery("a.responsive-menu").click(function() {
        jQuery("nav").fadeToggle();
        return false;
    });
    jQuery(window).resize(function() {
        var windowWidth = jQuery(window).width();
        if (windowWidth > 768) {
            jQuery("nav").css({
                "display": "block"
            });
        } else {
            jQuery("nav").css({
                "display": "none"
            });

        }
    });

});