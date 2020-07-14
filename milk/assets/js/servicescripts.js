$(document).ready(function () {


    // control-block sticky
    $(window).load(function () {
        setTimeout(function () {
            topbarHeight = $('.top-section').outerHeight(true);
            $('#control-block').css('top', topbarHeight + 'px')

        }, 100);
    });

    headerHeight = $('.top-section').outerHeight();
    howItWorksSteps = $('#control-block .control-item').length;

    var scrollElement = $(document);
    if ($(window).width() < 768) {
        scrollElement = $(window);
    }

    scrollElement.on('scroll', function () {
        var headerHeight2 = $('.top-section').outerHeight() + $('#control-block').outerHeight() + 250;
        var scrollTop = $(document).scrollTop();
        if ($('#control-block').length) {
            for (var i = 1; i <= howItWorksSteps; i++) {
                var pos_on_screen = $('#control-block-' + i).offset().top - $(window).scrollTop();
                var block_height = $('#control-block-' + i).outerHeight();
                if (pos_on_screen <= headerHeight2 && pos_on_screen + block_height >= headerHeight2) {
                    setActiveControlItem(i);
                    return;
                } else if (pos_on_screen + block_height < headerHeight2 && i == howItWorksSteps) {
                    setActiveControlItem(howItWorksSteps);
                    return;
                } else if (pos_on_screen > headerHeight2 && i == 1) {
                    setActiveControlItem(1);
                    return;
                }
            }
        }
    });

    $(".number a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            console.log(hash);
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 300
            }, 800, function () {});
        }
    });

});

function setActiveControlItem(number) {
    for (var i = howItWorksSteps; i > number; i--) {
        $('.control-item').eq(i - 1).find('.number').removeClass('active').removeClass('visited');
    }
    $('.control-item').eq(number - 1).find('.number').addClass('active');

    $('.how-it-works-block  h2 span').removeClass('active');
    $('.how-it-works' + number + '  h2 span').addClass('active');

    for (var i = number - 1; i > 0; i--) {
        $('.control-item').eq(i - 1).find('.number').removeClass('active').addClass('visited');
    }
}