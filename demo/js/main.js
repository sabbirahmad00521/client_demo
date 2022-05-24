// Enabling smooth scroll
// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Change class for nav button

function myFunction(x) {
    x.classList.toggle("change");
}

var nav = document.getElementById('toggle'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className ? '' : 'with_nav_btn';
    e.preventDefault();
});

// Collapse menu upon clicking the links

function hideFunction() {
    var nav = document.getElementsByClassName('navigate'),
        body = document.body;
    body.className = '';

    var btn = document.getElementById('toggle');
    btn.classList.toggle("change");

}

// Click to Show More

function expandFunction(data) {
    var exp = document.getElementsByClassName('experience');
    var number = "exp" + data;
    data = data - 1;

    if (exp[data].id = exp[data].id) {
        for (var i = 0; i < exp.length; i++) {
            exp[i].id = "";
        }
    } else {
        for (var i = 0; i < exp.length; i++) {
            if (exp[i] != exp[data]) {

                exp[i].id = 'exp';
            } else {
                exp[i].id = number;
            }

        }
    }

}


// Contact Form

window.addEventListener("DOMContentLoaded", function() {
    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted

    function success() {
        form.reset();
        status.classList.add("success");
        status.innerHTML = "Thanks!";
    }

    function error() {
        status.classList.add("error");
        status.innerHTML = "Oops! There was a problem.";
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}