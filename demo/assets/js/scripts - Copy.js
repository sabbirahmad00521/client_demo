jQuery(document).ready(function($) {
    // rates paygo cost show function
    $('.paygo-content .rates-country-row').click(function() {
        $('.rate-details img').attr('src', $(this).find('img').attr('src'))
        $('.rate-details h4').text($(this).find('.rates-country-name').text())
        $('.rate-details h5').text($(this).find('.rates-country-dial-code').text())
        $('.rate-details .sr-cost').text($(this).data("standard-rate"))
        $('.rate-details .cr-cost').text($(this).data("cellular"))
        $('.rates-content').fadeOut()
        $('.rate-details').fadeIn()
    })

    $('.rate-details button').click(function() {
        $('.rates-content').fadeIn()
        $('.rate-details').fadeOut()
    })

    $('.rates-tab .paygo').click(function() {
        if (!$(this).hasClass('active-tab')) {
            $(this).addClass('active-tab')
            $('.rates-tab .unlimited').removeClass('active-tab')
            $('.paygo-content').fadeIn()
            $('.unlimited-content').fadeOut()

        }
    })
    $('.rates-tab .unlimited').click(function() {
        if (!$(this).hasClass('active-tab')) {
            $(this).addClass('active-tab')
            $('.rates-tab .paygo').removeClass('active-tab')
            $('.paygo-content').fadeOut()
            $('.unlimited-content').fadeIn()
        }
    })


    // login form validation
    $('#login-input').keyup(function() {

        if ($(this).val() == '') {
            $(this).addClass('error')
            $(this).removeClass('success')
            $('.login-form .errorMessage').show()

        } else if ($(this).val().length > 0) {
            $(this).removeClass('error')
            $(this).addClass('success')
            $('.login-form .errorMessage').hide()
        }
    });


    // reg form validation
    $('#sign-up').keyup(function() {

        if ($(this).val() == '') {
            $(this).addClass('error')
            $(this).removeClass('success')
            $('.reg-form .errorMessage').show()

        } else if ($(this).val().length > 0) {
            $(this).removeClass('error')
            $(this).addClass('success')
            $('.reg-form .errorMessage').hide()
        }
    });

    // scroll to top
    $("a.toTop").click(function() {
        $(".content-area ").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

    // responsive menu

    $('.mobile-menu-bar').click(function() {
        $(' .body-area .col-lg-3,header, .body-area .col-lg-9').toggleClass('active')
        $('.mobile-menu-bar').toggleClass('fa-times')

    })

});


// pay go search
var filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {

    if (filterInput.value !== '') {
        $('.paygo-content .rates-country-letter-header').hide()
    } else {
        $('.paygo-content .rates-country-letter-header').show()
    }
    // Get value of input
    var filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names ul
    var ul = document.getElementById('rates-country-list');
    // Get lis from ul
    var li = ul.querySelectorAll('li.rates-country-row');

    // Loop through collection-item lis
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('span')[0];
        var b = li[i].getElementsByTagName('span')[1];
        // If matched
        if ((a.innerHTML.toUpperCase().indexOf(filterValue) > -1) || b.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        };
    };
};



// Unlimited search
var $numInput = $('#filtercode');

$numInput.on('keyup', function(evt) {
    evt.preventDefault();
    var $fullList = $('#unlimited-country-list'),
        $all = $fullList.find('li'),
        value = $(this).val().replace(/\D/, ''),
        matches = 0;
    // Strip non-numerics from input, then show all and return if blank
    $(this).val(value);
    if (value === '') {
        $all.show();
        return;
    }

    $all.each(function() {
        var dialCode = $(this).data('dial-code'),
            subValue;
        // Skip items without a dial code, OR if dial code == 0 (DB match not found)
        if (dialCode === undefined || dialCode === 0) {
            $(this).hide();
            return true;
        }
        // Convert dial codes to strings, then chop the entered value to only match the dial code length
        dialCode = dialCode.toString();
        subValue = value.substr(0, dialCode.length);
        if (dialCode.indexOf(subValue) == 0) {
            $(this).show();
            matches++;
        } else {
            $(this).hide();
        }
    });
    if (matches === 0) {
        $all.hide();
        $('#no-matching-rates-row').show();
    }
});

