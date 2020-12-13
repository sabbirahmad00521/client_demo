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


    // $('.manga-reader').scroll(function() {
    //     var scrollTop = $(this).scrollTop();
    //     console.log(scrollTop);

    //     if (scrollTop > 1) {
    //       var mangaa = document.querySelector('.manga-reader ')
    //         mangaa.requestFullScreen()
    //         console.log('hu');
    //     }
    // })

    // $(window).resize(function() {
    //     if (window.matchMedia('(max-width: 575px)').matches) {

    //     }
    // });


});

let last_known_scroll_position = 0;

document.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;

    if (last_known_scroll_position > 1) {
        var mangaa = document.querySelector('.manga-reader ')
        manga.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        // mangaa.requestFullScreen()
        console.log('hu');
    }

});