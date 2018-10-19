$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.navbar').css('background', 'black');
        }
        else {
            $('.navbar').css('background', 'transparent');

        }
    })
});



