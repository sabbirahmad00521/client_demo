jQuery(document).ready(function ($) {
  /* Preloader */
  $(window).on('load', function () {
    var preloaderFadeOutTime = 500;
    function hidePreloader() {
      var preloader = $('.spinner-wrapper');
      setTimeout(function () {
        preloader.fadeOut(preloaderFadeOutTime);
      }, 500);
    }
    hidePreloader();
  });




  jQuery("a.responsive-menu").click(function () {
    jQuery("ul.menu").fadeToggle();
    return false;
  });
  jQuery(window).resize(function () {
    var windowWidth = jQuery(window).width();
    if (windowWidth > 767) {
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

  // Other Scripts
  $(window).bind('scroll', function () {
    var currentTop = $(window).scrollTop();
    var elems = $('.scrollspy');
    elems.each(function (index) {
      var elemTop = $(this).offset().top - 90;
      var elemBottom = elemTop + $(this).height();
      if (currentTop >= elemTop && currentTop <= elemBottom) {
        var id = $(this).attr('id');
        var navElem = $('a[href="#' + id + '"]');
        navElem.parent().addClass('active').siblings().removeClass('active');
      }
    })
    if (currentTop > 10) {
      $('header').addClass('scrolled')
      $('a.logo img').attr('src', 'assets/img/logo-black.png')
    } else {
      $('header').removeClass('scrolled')
      $('a.logo img').attr('src', 'assets/img/logo-white.png')
    }
  });

  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      console.log(hash);
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 80
      }, 800);
    } // End if
  });

    //===== Back to top

  // Show or hide the sticky footer button
  $(window).on('scroll', function (event) {
    if ($(this).scrollTop() > 600) {
      $('.back-to-top').fadeIn(200)
    } else {
      $('.back-to-top').fadeOut(200)
    }
  });

  $('.back-to-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

  // form validation and ajax call

  $("#contactForm").submit(function (evt) {
    var form = $(this);
    evt.preventDefault();
    $("#result").hide();
    const name = $("#NAME").val();
    const email = $("#EMAIL").val();
    const msg = $("#MESSAGE").val();
    if (name.length == "") {
      $(".nameError").text("Name is required");
      $(".name").addClass("is-invalid");
    } else {
      $(".name").removeClass("is-invalid");
    }

    $(".name").focusin(function () {
      $(".name").removeClass("is-invalid");
    });
    $(".name").focusout(function () {
      if ($(this).val() === "") {
        $(".nameError").text(" Name is required");
        $(".name").addClass("is-invalid");
      } else {
        $(".name").removeClass("is-invalid");
      }
    });


    if (email.length == "") {
      $(".emailError").text("Email is required");
      $(".email").addClass("is-invalid");
    } else {
      $(".email").removeClass("is-invalid");
    }


    $(".email").focusin(function () {
      $(".email").removeClass("is-invalid");
    });
    $(".email").focusout(function () {
      if ($(this).val() === "") {
        $(".emailError").text("Email is required");
        $(".email").addClass("is-invalid");
      } else {
        $(".email").removeClass("is-invalid");
      }
    });


    if (msg.length == "") {
      $(".msgError").text("Message is required");
      $(".msg").addClass("is-invalid");
    } else {
      $(".msg").removeClass("is-invalid");
    }

    $(".msg").focusin(function () {
      $(".msg").removeClass("is-invalid");
    });
    $(".msg").focusout(function () {
      if ($(this).val() === "") {
        $(".msgError").text("Message is required");
        $(".msg").addClass("is-invalid");
      } else {
        $(".msg").removeClass("is-invalid");
      }
    });





    // check and isert data into db
    if (
      name.length != "" &&
      email.length != "" &&
      msg.length != ""

    ) {

      $.ajax({
        type: "POST",
        url: "send_mail.php",
        data: { name: name, email: email, msg: msg },
        dataType: "JSON",

        beforeSend: function () {
          // Before we send the request, remove the .hidden class from the spinner and default to inline-block.
          $("#loader").removeClass("hidden");
        },

        success: function (feedback) {

          if (feedback.status === "success") {
            $("#resultS").html(feedback.message);
            $('#S_Modal').modal('show');
            form.trigger('reset');

          } else if (feedback.status === "error") {
            $("#result").html(feedback.message);
            $("#result").show();
            form.trigger('reset');

          }

        },

        complete: function () {
          // Set our complete callback, adding the .hidden class and hiding the spinner.
          $("#loader").addClass("hidden");
        },


      }); /// ajax call add-user
    }
  }); // submit form


});

// $('body').scrollspy({ target: '#navbar' })
