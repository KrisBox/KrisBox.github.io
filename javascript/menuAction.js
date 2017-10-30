jQuery(document).ready(function(){
    if( (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
        var counter = 0;
        $('#mobileButton').click(function () {
            if (counter == 0) {
                $('.mobileNav').slideDown(600);
                $('#otherWrapper').animate({'margin-top': '70%'}, 600);
                /*setTimeout(function(){
                 $('footer').css({display: 'block'});
                 }, 500);*/

                counter += 1;
            } else if (counter == 1) {
                $('.mobileNav').slideUp(600);
                $('#otherWrapper').animate({'margin-top': '0%'}, 600);
                /*$('footer').css({display: 'none'});*/
                counter = 0;
            }
        });

        $('.mobHomeText').click(function () {

            if ($('.mobAboutText').hasClass('active')) {
                $('.mobAboutText').removeClass('active');
                $('#aboutPage').css({display: 'none'});
            } else if ($('.mobWorkText').hasClass('active')) {
                $('.mobWorkText').removeClass('active');
                $('#workPage').css({display: 'none'});
            } else if ($('.mobContactText').hasClass('active')) {
                $('.mobContactText').removeClass('active');
                $('#contactPage').css({display: 'none'});
            }

            $('.mobileNav').slideUp(600);
            counter = 0;
            $('#otherWrapper').animate({'margin-top': '0%'}, 600);
            $('.mobHomeText').addClass('active');
            setTimeout(function () {
                $('#homePage').fadeIn(600);
            }, 600);
        });

        $('.mobAboutText').click(function () {

            if ($('.mobHomeText').hasClass('active')) {
                $('.mobHomeText').removeClass('active');
                $('#homePage').css({display: 'none'});
            } else if ($('.mobWorkText').hasClass('active')) {
                $('.mobWorkText').removeClass('active');
                $('#workPage').css({display: 'none'});
            } else if ($('.mobContactText').hasClass('active')) {
                $('.mobContactText').removeClass('active');
                $('#contactPage').css({display: 'none'});
            }

            $('.mobileNav').slideUp(600);
            counter = 0;
            $('#otherWrapper').animate({'margin-top': '0%'}, 600);
            $('.mobAboutText').addClass('active');
            setTimeout(function () {
                $('#aboutPage').fadeIn(600);
            }, 600);
        });

        $('.mobWorkText').click(function () {

            if ($('.mobAboutText').hasClass('active')) {
                $('.mobAboutText').removeClass('active');
                $('#aboutPage').css({display: 'none'});
            } else if ($('.mobHomeText').hasClass('active')) {
                $('.mobHomeText').removeClass('active');
                $('#homePage').css({display: 'none'});
            } else if ($('.mobContactText').hasClass('active')) {
                $('.mobContactText').removeClass('active');
                $('#contactPage').css({display: 'none'});
            }

            $('.mobileNav').slideUp(600);
            counter = 0;
            $('#otherWrapper').animate({'margin-top': '0%'}, 600);
            $('.mobWorkText').addClass('active');
            setTimeout(function () {
                $('#workPage').fadeIn(600);
            }, 600);
        });

        $('.mobContactText').click(function () {

            if ($('.mobAboutText').hasClass('active')) {
                $('.mobAboutText').removeClass('active');
                $('#aboutPage').css({display: 'none'});
            } else if ($('.mobWorkText').hasClass('active')) {
                $('.mobWorkText').removeClass('active');
                $('#workPage').css({display: 'none'});
            } else if ($('.mobHomeText').hasClass('active')) {
                $('.mobHomeText').removeClass('active');
                $('#homePage').css({display: 'none'});
            }

            $('.mobileNav').slideUp(600);
            counter = 0;
            $('#otherWrapper').animate({'margin-top': '0%'}, 600);
            $('.mobContactText').addClass('active');
            setTimeout(function () {
                $('#contactPage').fadeIn(600);
            }, 600);
        });
    }
});