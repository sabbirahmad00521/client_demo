var manga = document.querySelector('.manga-reader')

function fullscreens() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen)) {
        if (manga.requestFullScreen) {
            manga.requestFullScreen();
        } else if (manga.mozRequestFullScreen) {
            manga.mozRequestFullScreen();
        } else if (manga.webkitRequestFullScreen) {
            manga.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}


jQuery(document).ready(function($) {
    $('.manga-name h5').text($('.manga-info> h5').text())
    $('.manga-name h6').text($('.manga-info> h6').text())
    $('.manga-details-mobile > p').text($('.manga-info> p').text())


    $(function() {
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


    // menu
    jQuery("a.responsive-menu").click(function() {
        jQuery("ul.menu").fadeToggle();
        return false;
    });
    jQuery(window).resize(function() {
        var windowWidth = jQuery(window).width();
        if (windowWidth > 991) {
            jQuery("ul.menu").css({
                "display": "flex"
            });
            $('.responsive-menu').removeClass('change');
        } else {
            jQuery("ul.menu").css({
                "display": "none"
            });

        }
    });


    // mobile reader
    if (window.matchMedia('(max-width: 575px)').matches) {
        $(".chapter-browse-wrapper").appendTo(".mobile-browse");
        var fullscreenmode = false
        $('.manga-reader').scroll(function() {
            var scrollTop = $(this).scrollTop();
            var mobileReaderscroll = $(this)[0].scrollHeight - $(window).innerHeight();
            if (scrollTop < 100) {
                $('.manga-reader').removeClass('mobile')
                $('.manga-details-mobile').removeClass('mobile')
                $('.mobile-browse').removeClass("hide");
                $('.manga-details-mobile').removeClass("hide");
                $('.mobile-browse').css({
                    "position": "relative"
                });
                $('header').removeClass("hide");
                $('header').css({
                    "display": "block"
                });
                fullscreenmode = false
            } else if (scrollTop > 100 && scrollTop < (mobileReaderscroll - 100)) {
                console.log('hey bro');
                $('.manga-reader').addClass('mobile')
                $('.manga-details-mobile').addClass('mobile')
                $('.manga-details-mobile').addClass("hide");
                $('.mobile-browse').addClass("hide");
                $('.mobile-browse').css({
                    "position": "fixed"
                });
                $('header').addClass("hide");
                $('header').css({
                    "display": "none"
                });
                fullscreenmode = true
            } else if (scrollTop >= (mobileReaderscroll - 100)) {
                $('.manga-reader').removeClass('mobile')
                $('.manga-details-mobile').removeClass('mobile')
                $('.mobile-browse').removeClass("hide");
                $('.manga-details-mobile').removeClass("hide");
                $('.mobile-browse').css({
                    "position": "relative"
                });
                $('header').removeClass("hide");
                $('header').css({
                    "display": "block"
                });
                fullscreenmode = false
            }

        })

        $('.manga-reader img').click(function() {
            console.log(fullscreenmode);
            if ($('.mobile-browse').hasClass("hide") && fullscreenmode === true) {
                $('.five').text("click to show working")
                $('.mobile-browse').removeClass("hide");
            } else if (fullscreenmode === true) {
                $('.mobile-browse').addClass("hide");
                $('.five').text("click to hide working")
            }
            if ($('.manga-details-mobile').hasClass("hide") && fullscreenmode === true) {
                $('.manga-details-mobile').removeClass("hide");
            } else if (fullscreenmode === true) {
                $('.manga-details-mobile').addClass("hide");
            }

        })
    } else {
        $(".chapter-browse-wrapper").appendTo(".chapter-browse");
    }

});