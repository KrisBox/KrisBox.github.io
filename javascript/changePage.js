jQuery(document).ready(function() {
    if( !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        $('#homeLink').click(function () {

            if ($('#aboutText').hasClass('active')) {
                $('#aboutText').removeClass('active');
                $('#aboutPage').fadeOut(500);
            } else if ($('#workText').hasClass('active')) {
                $('#workText').removeClass('active');
                $('#workPage').fadeOut(500);
            } else if ($('#contactText').hasClass('active')) {
                $('#contactText').removeClass('active');
                $('#contactPage').fadeOut(500);
            }

            $('#homeText').addClass('active');

            setTimeout(function () {
                $('#homePage').fadeIn(500);
            }, 600);
        });

        $('#aboutLink').click(function () {

            if ($('#homeText').hasClass('active')) {
                $('#homeText').removeClass('active');
                $('#homePage').fadeOut(500);
            } else if ($('#workText').hasClass('active')) {
                $('#workText').removeClass('active');
                $('#workPage').fadeOut(500);
            } else if ($('#contactText').hasClass('active')) {
                $('#contactText').removeClass('active');
                $('#contactPage').fadeOut(500);
            }

            $('#aboutText').addClass('active');

            //Add text
            setTimeout(function () {
                $('#aboutPage').fadeIn(500);
            }, 600);
        });

        $('#workLink').click(function () {

            if ($('#homeText').hasClass('active')) {
                $('#homeText').removeClass('active');
                $('#homePage').fadeOut(500);
            } else if ($('#aboutText').hasClass('active')) {
                $('#aboutText').removeClass('active');
                $('#aboutPage').fadeOut(500);
            } else if ($('#contactText').hasClass('active')) {
                $('#contactText').removeClass('active');
                $('#contactPage').fadeOut(500);
            }

            $('#workText').addClass('active');

            setTimeout(function () {
                $('#workPage').fadeIn(500);
            }, 600);
        });

        $('#contactLink').click(function () {

            if ($('#homeText').hasClass('active')) {
                $('#homeText').removeClass('active');
                $('#homePage').fadeOut(500);
            } else if ($('#workText').hasClass('active')) {
                $('#workText').removeClass('active');
                $('#workPage').fadeOut(500);
            } else if ($('#aboutText').hasClass('active')) {
                $('#aboutText').removeClass('active');
                $('#aboutPage').fadeOut(500);
            }

            $('#contactText').addClass('active');

            setTimeout(function () {
                $('#contactPage').fadeIn(500);
            }, 600);
        });

    }
});