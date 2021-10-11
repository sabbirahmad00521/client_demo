jQuery(document).ready(function($) {

    // Owl Carousel
    /*
    $('.owl-carousel-class-name').owlCarousel({
       items: 4,
       loop: true,
       autoplay: true,
       autoplayTimeout: 2000,
       dots: true,
       margin: 15,
       nav: true,
       navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
       smartSpeed: 1,
       dragEndSpeed: 1,
       fluidSpeed: 1,
       autoplaySpeed: 10,
       responsiveClass: true,
       responsive: {
          0: {
             items: 1,
             nav: true
          },
          600: {
             items: 3,
             nav: false
          },
          1000: {
             items: 5,
             nav: true,
             loop: false
          }
       }
    });
    */

    // Other Scripts


});


jQuery(document).ready(function() {
    var sync1 = jQuery("#sync1");
    var sync2 = jQuery("#sync2");
    var slidesPerPage = 7; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1
        .owlCarousel({
            items: 1,
            slideSpeed: 3000,
            nav: true,

            //   animateOut: 'fadeOut',
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                    item: 1,
                    autoplay: false
                },
                600: {
                    items: 1,
                    autoplay: true
                }
            },
            responsiveRefreshRate: 200,
            navText: [
                '<i class="fa fa-caret-left"></i>',
                '<i class="fa fa-caret-right"></i>'
            ]
        })
        .on("changed.owl.carousel", syncPosition);

    sync2
        .on("initialized.owl.carousel", function() {
            sync2
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            //   nav: true,
            smartSpeed: 1000,
           slideSpeed: 1000,
           autoplayTimeout: 3000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2
            .find(".owl-item.active")
            .first()
            .index();
        var end = sync2
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data("owl.carousel").to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = jQuery(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
    });
});



var app = document.getElementById('typewritter');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 75
});

typewriter
    .typeString('a counter-culture.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('avatars.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Keys.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('NFT Collectibles.')
    .pauseFor(2500)
    .deleteAll()
    .start();
delay