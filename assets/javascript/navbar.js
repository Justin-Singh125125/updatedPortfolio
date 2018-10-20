$(document).ready(function () {

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('.navbar').css('background', 'black');
            $('.navbar').css('height', '80px');
        }
        else {
            $('.navbar').css('background', 'transparent');

        }
    })
});



