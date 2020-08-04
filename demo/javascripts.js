// Begin OPTIONS

// ONLY USE lowercase FOR ALL OPTIONS


var clickaway = "yes" // USE CLICK OFF MENU SCRIPT | yes | no |
var viewer = "same" // PRODUCT VIEWER OPTIONS: | new | same | New browser or same



// COPYRIGHT 2020 � Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law
// YOU DO NOT NEED TO EDIT BELOW THIS LINE




// JQUERY CLICK MENU SCRIPT TOGGLE

function toggleDiv(divId) {
  $("#" + divId).toggle("fast");
}




// CLOSE MENU IF CLICKED AWAY FROM

if (clickaway == "yes") {

  $(document).click(function (event) {
    if (!$(event.target).closest('#menu-sub').length) {
      if (!$(event.target).closest('#menu-top').length) {
        if ($('#menu-sub').is(":visible")) {
          $('#menu-sub').hide();
        }
      }
    }
  });
}




// PRODUCTS IMAGE VIEW CODE

function ViewImage(data) {
  if (viewer == "new") {
    windowHandle = window.open('product-viewer.htm' + '?' + data, 'windowName');
  } else if (viewer == "same") {
    window.location = ('product-viewer.htm' + '?' + data);
  }
}






//  Lyrics Script
jQuery(document).ready(function ($) {

  // Default 
  // =======

  // keylist of chords
  var sub_ul = $('.chord_list li.avtive_chord').children()[0]

  // key of chords
  var sub_ul_li_1 = $(sub_ul).children()[0]
  var sub_ul_li_2 = $(sub_ul).children()[1]
  var sub_ul_li_3 = $(sub_ul).children()[2]
  var sub_ul_li_4 = $(sub_ul).children()[3]
  var sub_ul_li_5 = $(sub_ul).children()[4]
  var sub_ul_li_6 = $(sub_ul).children()[5]
  var sub_ul_li_7 = $(sub_ul).children()[6]

  // key text in lyrics
  $('.I').text($(sub_ul_li_1).text())
  $('.II').text($(sub_ul_li_2).text())
  $('.III').text($(sub_ul_li_3).text())
  $('.IV').text($(sub_ul_li_4).text())
  $('.V').text($(sub_ul_li_5).text())
  $('.VI').text($(sub_ul_li_6).text())
  $('.VII').text($(sub_ul_li_7).text())


  // CLicked 
  // =======
  $('.chord_list li').click(function () {

    // active chords
    $('.chord_list > li').removeClass('avtive_chord')
    $(this).addClass('avtive_chord')

    // keylist of chords
    var sub_ul = $(this).children()[0]

    // key of chords
    var sub_ul_li_1 = $(sub_ul).children()[0]
    var sub_ul_li_2 = $(sub_ul).children()[1]
    var sub_ul_li_3 = $(sub_ul).children()[2]
    var sub_ul_li_4 = $(sub_ul).children()[3]
    var sub_ul_li_5 = $(sub_ul).children()[4]
    var sub_ul_li_6 = $(sub_ul).children()[5]
    var sub_ul_li_7 = $(sub_ul).children()[6]

    // key text in lyrics
    $('.I').text($(sub_ul_li_1).text())
    $('.II').text($(sub_ul_li_2).text())
    $('.III').text($(sub_ul_li_3).text())
    $('.IV').text($(sub_ul_li_4).text())
    $('.V').text($(sub_ul_li_5).text())
    $('.VI').text($(sub_ul_li_6).text())
    $('.VII').text($(sub_ul_li_7).text())

  })

});




// lyrics filter
// ============

// Get input element
var filterInput = document.getElementById('filterInput');
// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  // Get value of input
  var filterValue = document.getElementById('filterInput').value.toUpperCase();

  // Get names ul
  var ul = document.getElementById('names');
  // Get lis from ul
  var li = ul.querySelectorAll('li.collection-item');

  // Loop through collection-item lis
  for (var i = 0; i < li.length; i++) {
    var a = li[i].getElementsByTagName('a')[0];
    // If matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    };
  };
};





