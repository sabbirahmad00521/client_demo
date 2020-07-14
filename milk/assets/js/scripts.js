jQuery(document).ready(function ($) {
   // ========================
   // Owl Carousel
   // ========================

   $('.slider-bg').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: true,
      animateOut: 'fadeOut',
      navText: ['<img src="assets/img/arrow-point-to-right.svg">', '<img src="assets/img/arrow-point-to-right.svg">'],
      mouseDrag: false,
   });

   // ========================
   // choose us slider
   // ========================

   $('.why-choose-us-slider').owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      nav: false,
      animateOut: 'fadeOut',
      dots: true,
      mouseDrag: false,
   });

   // ========================
   // text change Scripts
   // ========================
   var text = ["butter", "beef", "pork", "poultry", "milk"];
   var counter = 0;
   var elem = $(".text-change");
   setInterval(change, 1500);

   function change() {
      elem.fadeOut(function () {
         elem.html(text[counter]);
         counter++;
         if (counter >= text.length) {
            counter = 0;
         }
         elem.fadeIn();
      });
   }

   // ========================
   // search 
   // ========================
   $('.search').click(function () {
      $('.search-area').fadeIn()
      return false
   })
   $('.searchbox button.cancel,.search-area .overlay').click(function () {
      $('.search-area').fadeOut()
   })

   // notice close
   $('.notice-close').click(function () {
      $('.red-notice').hide()
   })

   // ========================
   // Menu Scripts
   // ========================

   jQuery("a.responsive-menu").click(function () {
      jQuery("ul.menu").fadeToggle();
      return false;
   });
   jQuery(window).resize(function () {
      var windowWidth = jQuery(window).width();
      if (windowWidth > 750) {
         jQuery("ul.menu").css({
            "display": "block"
         });
         $('.responsive-menu').removeClass('change');
      } else {
         jQuery("ul.menu").css({
            "display": "none"
         });

      }
   });

   // ========================
   // header margin
   // ========================
   $(window).load(function () {
      setTimeout(function () {

         var menuHeight = $('.top-section').outerHeight(true)
         $('body').css('padding-top', menuHeight + 'px')

         $(window).resize(function () {
            var menuHeight = $('.top-section').outerHeight(true)
            $('body').css('padding-top', menuHeight + 'px')
         })

      }, 1);
   });

   // ========================
   // login register hide show
   // ========================


   $('.forgot-password a').click(function () {
      $('.sign-in-form').show()
      $('.forgot-password').hide()
      return false
   })

   $('.sign-in-form a').click(function () {
      $('.forgot-password').show()
      $('.sign-in-form').hide()
      return false
   })

   // ======================
   // product detaisl slider
   // ======================
   var fancyGallery = $(".gallery-thumbnail").find("a");

   // button click to active slider
   $('.image-slider-btn').on('click', function () {
      fancyGallery.attr("rel", "gallery").fancybox({
         type: "image"
      });

      fancyGallery.eq($('li.active-border').index()).click();
   });

   $('.gallery-thumbnail li:nth-child(1)').addClass('active-border')
   $('.gallery-img img').attr('src', $('.gallery-thumbnail li:nth-child(1) a img').attr('src'));


   // when clicked to thumbnails
   $('.gallery-thumbnail img').click(function () {

      // add border to selected image
      $('.gallery-thumbnail li').removeClass('active-border')
      $(this).parent().parent().addClass('active-border')

      // open clicked thumbnails to screen
      var src = $(this).attr('src')
      $('.gallery-img img').attr('src', src);

      // hide fancybox when clicked on thumbnails
      $('.fancybox-wrap').hide()
      return false
   });


   // =================================
   // Custom number increase/decrease
   // =================================

   // Increase product quantity on cart page
   $(".increaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      var maxValue = parseInt($parentElm.find(".qtyValue").attr('max'))

      $(this).addClass("clicked");
      setTimeout(function () {
         $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();


      if (value < maxValue) {
         value++;
      }
      $parentElm.find(".qtyValue").val(value);
   });
   // Decrease product quantity on cart page
   $(".decreaseQty").on('click', function () {
      var $parentElm = $(this).parents(".qtySelector");
      $(this).addClass("clicked");
      setTimeout(function () {
         $(".clicked").removeClass("clicked");
      }, 100);
      var value = $parentElm.find(".qtyValue").val();
      if (value > 1) {
         value--;
      }
      $parentElm.find(".qtyValue").val(value);
   });




   // end jquery
});




// ========================
// ========================
//        js code
// ========================
// ========================

// ========================
// scroll animation
// ========================
AOS.init({
   // Global settings:
   disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
   startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
   initClassName: 'aos-init', // class applied after initialization
   animatedClassName: 'aos-animate', // class applied on animation
   useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
   disableMutationObserver: false, // disables automatic mutations' detections (advanced)
   debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
   throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


   // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
   offset: 0, // offset (in px) from the original trigger point
   delay: 0, // values from 0 to 3000, with step 50ms
   duration: 1000, // values from 0 to 3000, with step 50ms
   easing: 'ease', // default easing for AOS animations
   once: true, // whether animation should happen only once - while scrolling down
   mirror: false, // whether elements should animate out while scrolling past them
   anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});


// ========================
// quantity
// ========================
var quantitySelectAll = document.querySelectorAll('.quantity select');

for (j in quantitySelectAll) {
   var quantitySelectAllInSingle = quantitySelectAll[j]
   for (let index = 1; index < 101; index++) {
      var quantityOption = document.createElement('option');
      quantityOption.innerHTML = [index]
      quantitySelectAllInSingle.appendChild(quantityOption)
   }
}