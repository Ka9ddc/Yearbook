$(document).ready(function () {
    //*************************************************************
    //	Navigation related
    //*************************************************************
    if (window.location.href.indexOf("index") > -1) {
        SetActiveNavMenu('a[href^=index]');
    }

    if (window.location.href.indexOf("yearbook") > -1) {
        SetActiveNavMenu('a[href^=yearbook]');
    }

    if (window.location.href.indexOf("about") > -1) {
        SetActiveNavMenu('a[href^=about]');
    }

    //*************************************************************
    //	Sets Active Navigation Menu
    //*************************************************************
    function SetActiveNavMenu(navSelector) {
        $('.navbar-nav li').removeClass('active');
        $('.navbar-nav li a').remove('span.sr-only');
        $(navSelector).addClass('active').append('<span class="sr-only">(current)</span>');
    }

    //*************************************************************
    //	Return to top feature
    // @see: https://codepen.io/rdallaire/pen/apoyx
    //*************************************************************
    // ===== Scroll to Top ==== 
    $(window).scroll(function (e) {
        e.preventDefault();
        if ($(this).scrollTop() >= 25) { // If page is scrolled more than 50px
            $('#return-to-top').fadeIn(200); // Fade in the arrow
        } else {
            $('#return-to-top').fadeOut(200); // Else fade out the arrow
        }
    });

    $('#return-to-top').on('click', function () { // When arrow is clicked
        $('body,html').animate({
            scrollTop: 0 // Scroll to top of body
        }, 500);
    });
});
//master