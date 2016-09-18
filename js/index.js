var partAnimate = function() {

    $(window).scroll(function() {
        var part2Top = $('#part-2').offset().top,
            part3Top = $('#part-3').offset().top,
            part4Top = $('#part-4').offset().top;

        if ($(window).scrollTop() > (part2Top - 500)) {

            $('#part-2').find('.service').eq(0).animate({
                opacity: 1,
                left: 0
            });
            $('#part-2').find('.service').eq(1).delay(100).animate({
                opacity: 1,
                left: 0
            });
            $('#part-2').find('.service').eq(2).delay(200).animate({
                opacity: 1,
                left: 0
            });
            $('#part-2').find('.service').eq(3).delay(300).animate({
                opacity: 1,
                left: 0
            });
        }

        if ($(window).scrollTop() > (part3Top - 400)) {

            $('#part-3').find('.awards').eq(2).animate({
                opacity: 1,
                left: 0
            })
            $('#part-3').find('.awards').eq(1).delay(100).animate({
                opacity: 1,
                left: 0
            })
            $('#part-3').find('.awards').eq(0).delay(200).animate({
                opacity: 1,
                left: 0
            })
        }

        if ($(window).scrollTop() > (part4Top - 400)) {

            $('#part-4').find('.section-2').eq(0).animate({
                opacity: 1,
                left: 0
            });
            $('#part-4').find('.section-2').eq(1).delay(400).animate({
                opacity: 1,
                left: 0
            });

            $('#part-4').find('.news').delay(800).animate({
                opacity: 1,
                top: 0
            });
            $('#part-4').find('.section-3').eq(0).delay(900).animate({
                opacity: 1,
                top: 0
            });
            $('#part-4').find('.section-3').eq(1).delay(1000).animate({
                opacity: 1,
                top: 0
            });
            $('#part-4').find('.section-3').eq(2).delay(1100).animate({
                opacity: 1,
                top: 0
            });
            $('#part-4').find('.section-3').eq(3).delay(1200).animate({
                opacity: 1,
                top: 0
            });

        }
    })
};

var init = function() {
    partAnimate();
};
init();