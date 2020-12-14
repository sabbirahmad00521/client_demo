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







    // if (window.matchMedia('(max-width: 575px)').matches) {
    //     $(".chapter-browse-wrapper").appendTo(".mobile-browse");

    //     $('.manga-reader').scroll(function() {
    //         var scrollTop = $(this).scrollTop();
    //         console.log(scrollTop);
    //         if (($(this).scrollTop() + $(this).innerHeight() )>= ($(this)[0].scrollHeight - 200)) { 
    //             console.log('end reached');
    //         }
    //         console.log($(this).innerHeight());
    //         if (scrollTop > 100) {
    //             var mangareader = document.querySelector('.manga-reader ')
    //             $('.manga-reader').addClass('mobile')
    //             $('.manga-details-mobile').addClass('mobile')
    //         } else {
    //             $('.manga-reader').removeClass('mobile')
    //             $('.manga-details-mobile').removeClass('mobile')
    //         }
    //     })
    // } else {
    //     $(".chapter-browse-wrapper").appendTo(".chapter-browse");
    // }






    if (window.matchMedia('(max-width: 575px)').matches) {
        $(".chapter-browse-wrapper").appendTo(".mobile-browse");
        var fullscreenmode = false
        $('.manga-reader').scroll(function() {

            var scrollTop = $(this).scrollTop();
            console.log('scrolltop ' + scrollTop);
            // console.log('innerHeight ' + $(this).innerHeight());
            // console.log('scrolltop + innerHeight ' + ($(this).scrollTop() + $(window).innerHeight()));
            // console.log('scrollHeight ' + $(this)[0].scrollHeight);
            // console.log('scrollHeight ' + ($(this)[0].scrollHeight -  $(window).innerHeight()) );
            var mobileReaderscroll = $(this)[0].scrollHeight - $(window).innerHeight();
            console.log('totalscrollsize ' + mobileReaderscroll);
            var extrascroll = $(window).innerHeight() - $(this).innerHeight();
            console.log('extra scroll ' + extrascroll);
            console.log(('total and extra ' + (mobileReaderscroll + extrascroll)));
            if (scrollTop < 100) { // যদি ১০০ এর কম স্ক্রল করা হয় তবে 
                $('.manga-reader').removeClass('mobile')
                $('.manga-details-mobile').removeClass('mobile')
                $('.mobile-browse').removeClass("hide");
                $('.manga-details-mobile').removeClass("hide");
                fullscreenmode = false
            } else if (scrollTop > 100 && scrollTop < mobileReaderscroll) { // যদি ১০০ এর বেশি 3743 এর কম স্ক্রল হয়
                console.log('hey bro');
                $('.manga-reader').addClass('mobile')
                $('.manga-details-mobile').addClass('mobile')
                $('.mobile-browse').addClass("hide");
                $('.manga-details-mobile').addClass("hide");
                fullscreenmode = true
            } else if (scrollTop >= mobileReaderscroll) { // যদি 3743 এর বেশি স্ক্রল করা হয় তবে 
                $('.manga-reader').removeClass('mobile')
                $('.manga-details-mobile').removeClass('mobile')
                $('.mobile-browse').removeClass("hide");
                $('.manga-details-mobile').removeClass("hide");
                fullscreenmode = false
            }
            

        })
        
        $('.manga-reader img').click(function () {
            console.log(fullscreenmode);
            if ($('.mobile-browse').hasClass("hide") && fullscreenmode === true) {
                console.log('nice bro');
                $('.mobile-browse').removeClass("hide");
            } else if(fullscreenmode === true){
                $('.mobile-browse').addClass("hide");
            }
            if ($('.manga-details-mobile').hasClass("hide")  && fullscreenmode === true) {
                $('.manga-details-mobile').removeClass("hide");
            } else if(fullscreenmode === true){
                $('.manga-details-mobile').addClass("hide");
            }

        })
    } else {
        $(".chapter-browse-wrapper").appendTo(".chapter-browse");
    }



});




// if (scrollTop < 100) { // যদি ১০০ এর কম স্ক্রল করা হয় তবে 
//     $('.manga-reader').removeClass('mobile')
//     $('.manga-details-mobile').removeClass('mobile')
//     $('.mobile-browse').fadeIn();
// } else if (scrollTop > 100 && scrollTop < mobileReaderscroll) { // যদি ১০০ এর বেশি স্ক্রল করা হয় তবে 
//     $('.manga-reader').addClass('mobile')
//     $('.manga-details-mobile').addClass('mobile')
//     $('.mobile-browse').fadeOut();
//     $('.manga-reader').click(function() {
//         if ($('.mobile-browse').css('display') == 'none') {
//             $('.mobile-browse').fadeIn();
//         }
//         if ($('.mobile-browse').css('display') == 'block') {
//             $('.mobile-browse').fadeOut();
//         }
//     })
// } else if (scrollTop >= mobileReaderscroll) { // যদি ৩০০০ এর বেশি স্ক্রল করা হয় তবে 
//     $('.manga-reader').removeClass('mobile')
//     $('.manga-details-mobile').removeClass('mobile')
//     $('.mobile-browse').fadeIn();
// }