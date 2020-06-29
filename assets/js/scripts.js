jQuery(document).ready(function ($) {

   // Default 
   // =======

   // keylist of chords
   var sub_ul = $('.chord_list li').children()[0]

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