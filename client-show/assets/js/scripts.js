jQuery(document).ready(function($) {

    // Owl Carousel

    $('.feature-slider').owlCarousel({
        items: 6,
        loop: false,
        mouseDrag: false,
        navRewind: false,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 30,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        slideBy: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                slideBy: 1,
            },
            575: {
                items: 2,
                slideBy: 1,
            },
            768: {
                items: 2,
                slideBy: 1,
                stagePadding: 95,
            },
            992: {
                items: 3,
                slideBy: 2,
            },
            1200: {
                items: 4,
                slideBy: 3,
            },
            1300: {
                items: 5,
                slideBy: 4,
            },
            1550: {
                items: 6,
                slideBy: 5,
            }
        }
    });


    $('.video-slider-wrapper').owlCarousel({
        items: 7,
        loop: false,
        navRewind: false,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 18,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        slideBy: 6,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                slideBy: 1,
            },
            575: {
                items: 2,
                slideBy: 1,
            },
            768: {
                items: 3,
                slideBy: 2,
            },
            992: {
                items: 4,
                slideBy: 6,
                mouseDrag: false,
            },
            1200: {
                items: 5,
                slideBy: 4,
            },
            1300: {
                items: 6,
                slideBy: 5,
            },
            1550: {
                items: 7,
                slideBy: 6,
            }
        }

    });


    // call slider
    $('.call-slider').owlCarousel({
        items: 3,
        loop: false,
        navRewind: false,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 15,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        slideBy: 3,
        stagePadding: 100,
        responsiveClass: true,
        responsive: {
            0: {
                stagePadding: 0,
                items: 1,
                slideBy: 1,
            },
            575: {
                items: 1,
                slideBy: 1,
            },
            992: {
                mouseDrag: false,
            },
            1200: {
                items: 2,
                slideBy: 1,
            },
            1550: {
                items: 3,
                slideBy: 2,
            }
        }
    });

    // call slider
    $('.star-video-slider').owlCarousel({
        items: 1,
        margin: 15,
        loop: false,
        navRewind: false,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        // slideBy: 3,
        responsiveClass: true,
        responsive: {
            0: {
                stagePadding: 0,
                items: 2,
                margin: 15,
            },
            575: {

                items: 3,
                margin: 15,
            },
            768: {
                items: 4,
            },
            992: {

                mouseDrag: false,
                margin: 35,
                stagePadding: 65,
            },
            1100: {
                margin: 15,
                stagePadding: 65,
            }
        }
    });
    // category slider
    $('.home-categories-slider').owlCarousel({
        items: 7,
        loop: false,
        navRewind: false,
        autoplay: true,
        autoplayTimeout: 10000,
        margin: 18,
        nav: true,
        navText: ['<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>', '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>'],
        slideBy: 6,
        stagePadding: 50,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                slideBy: 1,
                stagePadding: 0,
            },
            575: {
                items: 2,
                slideBy: 1,
            },
            768: {
                items: 3,
                slideBy: 2,
                margin: 60
            },
            992: {
                items: 4,
                slideBy: 3,
                mouseDrag: false,
            },
            1200: {
                items: 5,
                slideBy: 4,
            },
            1400: {
                items: 6,
                slideBy: 5,
            },
            1550: {
                items: 7,
                slideBy: 6,
            }
        }
    });

    // slider stagepadding fix
    $('.call-slider .owl-nav .owl-next').click(function() {
        if ($('.call-slider .owl-next').hasClass("disabled")) {
            $('.call-slider .owl-stage').each(function() {
                this.style.setProperty('left', '100px', 'important');
            });
        }
    })
    $('.call-slider .owl-nav .owl-prev').click(function() {
        if ($('.call-slider .owl-prev').hasClass("disabled")) {
            $('.call-slider .owl-stage').each(function() {
                this.style.setProperty('left', '-100px', 'important');
            });
        }
    })

    $('.home-categories-slider .owl-nav .owl-next').click(function() {
        if ($('.home-categories-slider .owl-next').hasClass("disabled")) {
            $('.home-categories-slider .owl-stage').each(function() {
                this.style.setProperty('left', '50px', 'important');
            });
        }
    })
    $('.home-categories-slider .owl-nav .owl-prev').click(function() {
        if ($('.home-categories-slider .owl-prev').hasClass("disabled")) {
            $('.home-categories-slider .owl-stage').each(function() {
                this.style.setProperty('left', '-50px', 'important');
            });
        }
    })

    $('.feature-slider .owl-nav .owl-next').click(function() {
        if ($('.feature-slider .owl-next').hasClass("disabled")) {
            $('.feature-slider .owl-stage').each(function() {
                this.style.setProperty('left', '95px', 'important');
            });
        }
    })
    $('.feature-slider .owl-nav .owl-prev').click(function() {
        if ($('.feature-slider .owl-prev').hasClass("disabled")) {
            $('.feature-slider .owl-stage').each(function() {
                this.style.setProperty('left', '-95px', 'important');
            });
        }
    })

    $('.star-video-slider .owl-nav .owl-next').click(function() {
        if ($('.star-video-slider .owl-next').hasClass("disabled")) {
            $('.star-video-slider .owl-stage').each(function() {
                this.style.setProperty('left', '65px', 'important');
            });
        }
    })
    $('.star-video-slider .owl-nav .owl-prev').click(function() {
        if ($('.star-video-slider .owl-prev').hasClass("disabled")) {
            $('.star-video-slider .owl-stage').each(function() {
                this.style.setProperty('left', '-65px', 'important');
            });
        }
    })

    // Search box Script
    $('.search-input, .search button').click(function() {
        $('.search-results').fadeIn()
    })


    $(document).click(function(e) {
        if ($(e.target).parents(".search").length === 0) {
            $(".search-results").hide();
        }
    });

    var width = $(window).width();
    // $(window).resize(function() {

    if (width < 1200) {
        $('.search-input, .search button').click(function() {
            $('.search,.search-results').addClass('active-search')
        })
        $('.search .cancel').click(function() {
            $('.search,.search-results').removeClass('active-search')
            $(".search-results").hide();
        })
    }


    // video-slider functionality
    var videostatus = "play";
    $('.video-slider .play-pause img').click(function() {

        if (videostatus == 'play') {
            $('.video-slider video')[0].pause();
            videostatus = 'pause';
        } else {
            $('.video-slider video')[0].play();
            videostatus = 'play';
        }

        var isPause = this.src.indexOf('assets/img/pause.svg') != -1;
        this.src = isPause ? this.src.replace('assets/img/pause.svg', 'assets/img/play.svg') : this.src.replace('assets/img/play.svg', 'assets/img/pause.svg');

    })

    $('.video-slider .volume img').click(function() {
        if ($(".video-slider video").prop('muted')) {
            $(".video-slider video").prop('muted', false);
        } else {
            $(".video-slider video").prop('muted', true);
        }

        var isPause = this.src.indexOf('assets/img/volume-x.svg') != -1;
        this.src = isPause ? this.src.replace('assets/img/volume-x.svg', 'assets/img/volume-2.svg') : this.src.replace('assets/img/volume-2.svg', 'assets/img/volume-x.svg');

    })

    // option choose
    $('.choose-option .single-price').click(function() {
        $('.choose-option .single-price').removeClass('selected')
        $(this).addClass('selected')
        $('.choose-option .book-btn span').html($(this).children('h6').text())
    })

    // read more toggle
    var showChar = 215;
    var ellipsestext = "...";
    var moretext = "more";
    var lesstext = "less";

    $('.review-text').each(function() {
        var content = $(this).html();

        if (content.length > showChar) {

            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);

            var html = c + '<span class="moreellipses">' + ellipsestext + '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';

            $(this).html(html);
        }

    });

    $(".morelink").click(function() {
        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });

    // show-category

    $('.releted-category .see-all').click(function() {
        $('.category-wrapper').toggleClass(' show-category');
        return false
    })


    // hide-filter
    $('.hide-filter').click(function() {
        $('.sort-sidebar').toggle();
        $('.sort-result a').toggleClass('fill-page');
        $('.sort-result').toggleClass('full-width');
        var text = $(this).text()
        $(this).text(text == "Hide Filters" ? "Show Filters" : "Hide Filters");
        $(this).text() == "Hide Filters" ? $('.sort-sidebar').addClass('sidebar-show') : $('.sort-sidebar').removeClass('sidebar-show');
        return false
    })

    // form section
    $('.who-btns a').click(function(e) {
        $('.whatfor .form-section').removeClass('show-section')
        $('.who-btns a').removeClass('active')
        var id = $(this).attr('href');
        $(id).addClass('show-section')
        $(this).addClass('active')
        e.preventDefault();
    })

    $('.identity-1 label').click(function() {
        $('.identity-1 label').removeClass('selected')
        $(this).addClass('selected')
    })

    $('.identity-2 label').click(function() {
        $('.identity-2 label').removeClass('selected')
        $(this).addClass('selected')
    })
    $('.single-cameo-for-section').click(function() {
        $('.single-cameo-for-section').removeClass('selected')
        $(this).addClass('selected')
    })



    $('.what-btns-else a').click(function(e) {
        $('#someoneelsesection .third-form .form-section').removeClass('show-section')
        $('.what-btns-else a').removeClass('active')
        var id = $(this).attr('href');
        $(id).addClass('show-section')
        $(this).addClass('active')
        e.preventDefault();
    })

    $('.what-btns-myself a').click(function(e) {
        $('#myselfsection .third-form .form-section').removeClass('show-section')
        $('.what-btns-myself a').removeClass('active')
        var id = $(this).attr('href');
        $(id).addClass('show-section')
        $(this).addClass('active')
        e.preventDefault();
    })



    $('.someone-else-btn').click(function() {
        $('.sub-form').removeClass('show-section')
        $('#someoneelsesection').addClass('show-section')
    })
    $('.my-self-btn').click(function() {
        $('.sub-form').removeClass('show-section')
        $('#myselfsection').addClass('show-section')
    })
    $('.business-btn').click(function() {
        $('.sub-form').removeClass('show-section')
        $('#businesssection').addClass('show-section')
    })


    // form validation

    $(".bookcameoform input[type='text']").blur(function() {
        if (!$(this).val() && !$(this).hasClass('optional')) {
            $(this).addClass('required')
            $(this).after("<span class='required-text'>Required</span>");
        } else if ($(this).val()) {
            $(this).removeClass('required')
            $(this).next('span.required-text').remove();
        }
    });


});

// range
(function() {

    var parent = document.querySelector(".range-slider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function(el) {
        el.oninput = function() {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function(el) {
        el.oninput = function() {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();