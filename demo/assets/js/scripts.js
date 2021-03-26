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

// unlimited search
var filtercountrycodeInput = document.getElementById('filtercode');
// Add event listener
filtercountrycodeInput.addEventListener('keyup', filtercodes);

function filtercodes() {

    if (filtercountrycodeInput.value !== '') {
        $('.rates-country-letter-header').hide()
    } else {
        $('.rates-country-letter-header').show()
    }
    // Get value of input
    var filterValue = document.getElementById('filtercode').value.toUpperCase();

    // Get names ul
    var ul = document.getElementById('unlimited-country-list');
    // Get lis from ul
    var li = ul.querySelectorAll('li.rates-country-row');

    // Loop through collection-item lis
    // var allSizes = [];
    for (var i = 0; i < li.length; i++) {
        var a = li[i].getElementsByTagName('span')[1];
        // If matched
        
        if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
            // allSizes.push(li[i])
            // console.log(allSizes.length);
            console.log(li[i]);
            // console.log(allSizes);
            // console.log(allSizes[0]);
            // if (allSizes.length === -1 || allSizes == undefined) {
            //     // document.querySelector('.no-rates').style.display = 'block !important'
            //     console.log('empty');
            // } else {
            //     // document.querySelector('.no-rates').style.display = 'none'
            // }
        } else {
            li[i].style.display = 'none';
        };
    };
};