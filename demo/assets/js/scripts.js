jQuery(document).ready(function ($) {
   // Nav script
   $('.nav-tabs > li > a').click(function (event) {
      event.preventDefault(); //stop browser to take action for clicked anchor

      //get displaying tab content jQuery selector
      var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

      //find actived navigation and remove 'active' css
      var actived_nav = $('.nav-tabs > li.active');
      actived_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $(this).parents('li').addClass('active');

      //hide displaying tab content
      $(active_tab_selector).removeClass('active');
      $(active_tab_selector).addClass('hide');

      //show target tab content
      var target_tab_selector = $(this).attr('href');
      $(target_tab_selector).removeClass('hide');
      $(target_tab_selector).addClass('active');
   });


   $('a.get-started').click(function (event) {
      event.preventDefault(); //stop browser to take action for clicked anchor

      //get displaying tab content jQuery selector
      var active_tab_selector = $('.nav-tabs > li.active > a').attr('href');

      //find actived navigation and remove 'active' css
      var actived_nav = $('.nav-tabs > li.active');
      actived_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $('#info-tab').parents('li').addClass('active');

      //hide displaying tab content
      $(active_tab_selector).removeClass('active');
      $(active_tab_selector).addClass('hide');

      //show target tab content
      var target_tab_selector = $('#info-tab').attr('href');
      $(target_tab_selector).removeClass('hide');
      $(target_tab_selector).addClass('active');
   });

   // info script
   $('.info-tabs > li > a').click(function (event) {
      event.preventDefault(); //stop browser to take action for clicked anchor

      //get displaying tab content jQuery selector
      var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');

      //find actived navigation and remove 'active' css
      var actived_info_nav = $('.info-tabs > li.active');
      actived_info_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $(this).parents('li').addClass('active');

      //hide displaying tab content
      $(active_info_tab_selector).removeClass('active');
      $(active_info_tab_selector).addClass('hide');

      //show target tab content
      var target_info_tab_selector = $(this).attr('href');
      $(target_info_tab_selector).removeClass('hide');
      $(target_info_tab_selector).addClass('active');
   });




   // responsive info contetn
   var windowWidth = jQuery(window).width();
   if (windowWidth < 991) {
      $('.info-content h2').append('<i id="close-info" class="fa fa-times"></i>');


      // var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');
      // $(active_info_tab_selector).removeClass('active');
      // $(active_info_tab_selector).addClass('hide');

      // $('.info-content').removeClass('active');
      // $('.info-content').addClass('hide');

      // //find actived navigation and remove 'active' css
      // var actived_info_nav = $('.info-tabs > li.active');
      // actived_info_nav.removeClass('active');


   }

   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth < 991) {
         $('.info-content.active').addClass('hide');
         $('.info-content.active').removeClass('active');
         $('.info-tabs li.active').addClass('hide');
         $('.info-tabs li.active').removeClass('active');

         $('.info-content h2').append('<i id="close-info" class="fa fa-times"></i>');

         // var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');
         // $(active_info_tab_selector).removeClass('active');
         // $(active_info_tab_selector).addClass('hide');

         // $('.info-content').removeClass('active');
         // $('.info-content').addClass('hide');

         // //find actived navigation and remove 'active' css
         // var actived_info_nav = $('.info-tabs > li.active');
         // actived_info_nav.removeClass('active');

         // info script
         $('.info-content h2 i').click(function (event) {

            //get displaying tab content jQuery selector
            var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');
            console.log(active_info_tab_selector);

            //find actived navigation and remove 'active' css
            var actived_info_nav = $('.info-tabs > li.active');
            actived_info_nav.removeClass('active');

            //add 'active' css into clicked navigation
            $(this).parents('li').addClass('active');

            //hide displaying tab content
            $(active_info_tab_selector).removeClass('active');
            $(active_info_tab_selector).addClass('hide');

            //show target tab content
            var target_info_tab_selector = $(this).attr('href');
            $(target_info_tab_selector).removeClass('hide');
            $(target_info_tab_selector).addClass('active');
         });
      }
   });

   // info script
   $('.info-content h2 i').click(function (event) {

      //get displaying tab content jQuery selector
      var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');
      console.log(active_info_tab_selector);

      //find actived navigation and remove 'active' css
      var actived_info_nav = $('.info-tabs > li.active');
      actived_info_nav.removeClass('active');

      //add 'active' css into clicked navigation
      $(this).parents('li').addClass('active');

      //hide displaying tab content
      $(active_info_tab_selector).removeClass('active');
      $(active_info_tab_selector).addClass('hide');

      //show target tab content
      var target_info_tab_selector = $(this).attr('href');
      $(target_info_tab_selector).removeClass('hide');
      $(target_info_tab_selector).addClass('active');
   });


   // // info script
   // $('.info-tabs > li > a').click(function (event) {
   //    event.preventDefault(); //stop browser to take action for clicked anchor

   //    //get displaying tab content jQuery selector
   //    var active_info_tab_selector = $('.info-tabs > li.active > a').attr('href');

   //    //find actived navigation and remove 'active' css
   //    var actived_info_nav = $('.info-tabs > li.active');
   //    actived_info_nav.removeClass('active');

   //    //add 'active' css into clicked navigation
   //    $(this).parents('li').addClass('active');

   //    //hide displaying tab content
   //    $(active_info_tab_selector).removeClass('active');
   //    $(active_info_tab_selector).addClass('hide');

   //    //show target tab content
   //    var target_info_tab_selector = $(this).attr('href');
   //    $(target_info_tab_selector).removeClass('hide');
   //    $(target_info_tab_selector).addClass('active');
   // });

});