// Begin

// NOTE: If you use a ' add a slash before it like this \'


document.write('<div class="footerdiv footerheight printhide">');

document.write('&copy;Copyright 2020 <a href="index.html" class="footlink">Yourcompany.com</a> ');

document.write(' / Site Design <a href="http://allwebcodesign.com" target="_blank" class="footlink">Allwebco Design</a><br>');

document.write('<div class="footersplit"></div>');


// TOP OF PAGE ARROW
document.write('<a href="#pagewrapper"><img src="picts/arrow-up.png" height="26" width="26" class="footer-top" alt="Top Of Page"></a>');



document.write('</div>');




// autoscroll
// =========
$('.auto-scroll').click(function () {

    if ($(this).hasClass('active')) {
        function stop_scroll_down() {
            clearInterval(scroll);
        }
        stop_scroll_down()

        $(this).removeClass('active')
        console.log('active class removed');

    } else {

        function start_scroll_down() {
            scroll = setInterval(function () {
                window.scrollBy(0, 1);
            }, 50);
        }
        start_scroll_down()

        $(this).addClass('active')
        console.log('active class added');
    }
})