jQuery(document).ready(function($) {

    // Owl Carousel

    $('.hero-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
    });

    $('.team-slider').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        margin: 40,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2,
                margin: 40
            },
            992: {
                items: 2,
                margin: 250
            },
            1200: {
                items: 3
            }
        }
    });


    // smoothscroll
    $(document).ready(function() {
        $("a").on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                }, 800, function() {
                    window.location.hash = hash - 70;
                });
            }
        });
    });

    // player Scripts
    $(document).ready(function() {
        $('.music-playlist').mediaPlayer();
    });

    //    slider to music play
    $(".single-top-portfolio-music").click(function() {
        $(".single-top-portfolio-music").removeClass('active')
        $(this).addClass('active')
    })

});