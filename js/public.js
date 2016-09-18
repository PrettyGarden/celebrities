    var navbarH = $('#menu').find('.navbar').height();
    $(window).scroll(function() {
        /* 鼠标滚动，导航变化 */
        var menuT = $('#menu').offset().top;
        var menuBigW = $('#menu-big').width();

        if ($(window).scrollTop() >= menuT) {
            if ($('#menu-big')) {

                $('#menu-big').find('a').css('padding', '1em 0');
                var menuBigH = $('#menu-big').height();
                $('#menu').find('.navbar').width(menuBigW).addClass('navbar-fixed-top menu-fixed');
                $('nav:after').css({
                    'content': '',
                    'display': 'block',
                    'position': 'absolute',
                    'top': 0,
                    'height': menuBigH,
                    'background': '#31353d'
                });

                $('#menu-h').css({
                    'display': 'block',
                    'height':  navbarH
                });
            }
            if ($('#menu-mini')) {
                $('#menu').find('.navbar').addClass('navbar-fixed-top menu-fixed');
            }
        } else {
            if ($('#menu-big')) {
                $('#menu-big').find('a').css('padding', '2em 0');
                $('#menu').find('.navbar').removeClass('navbar-fixed-top menu-fixed');
                $('nav:after').css({
                    'content': '',
                    'display': '',
                    'position': '',
                    'top': '',
                    'height': '',
                    'background': ''
                });

                $('#menu-h').css({
                    'display': 'none',
                    'height':  0
                });
            }
            if ($('#menu-mini')) {
                $('#menu').find('.navbar').removeClass('navbar-fixed-top menu-fixed');
            }
        }
        /* 窗口大小改变，导航变化 */
        $(window).resize(function() {
            var w = $('#menu').width() - parseInt($('#menu').css('padding-left')) - parseInt($('#menu').css('padding-right')) -  parseInt($('#menu').find('.navbar').css('border-left-width'))*2 + 10;
            $('#menu').find('.navbar').width(w);
        })

    });