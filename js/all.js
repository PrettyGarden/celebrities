    var imgData = [
        {
            id: 0,
            urlSmall: '../img/all/all_1-600x380.jpg',
            urlBig: '../img/all/all_1_original.jpg',
            title: 'IMAGE FORMAT',
            text: 'This format perfectly fits in case you need only a single image for your post display. Use Featured image option...'
        },
        {
            id: 1,
            urlSmall: '../img/all/all_2-600x380.jpg',
            urlBig: '../img/all/all_2_original.jpg',
            title: 'SLIDESHOW FORMAT',
            text: 'This format can be used to display images as a gallery. To attach images to the post please use Upload...'
        },
        {
            id: 2,
            urlSmall: '../img/all/all_3-600x380.jpg',
            urlBig: '../img/all/all_3_original.jpg',
            title: 'GALLERY FORMAT',
            text: 'This format can be used to display images as a gallery. To attach images to the post please use Upload...'
        },
        {
            id: 3,
            urlSmall: '../img/all/all_4-600x380.jpg',
            urlBig: '../img/all/all_4_original.jpg',
            title: 'VIDEO FORMAT',
            text: 'If your post contains video, please use this format. Select Video format in the appeared metabox and add the embed...'
        },
        {
            id: 4,
            urlSmall: '../img/all/all_5-600x380.jpg',
            urlBig: '../img/all/all_5_original.jpg',
            title: 'SED BLANDIT MASSA VEL',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 5,
            urlSmall: '../img/all/all_6-600x380.jpg',
            urlBig: '../img/all/all_6_original.jpg',
            title: 'SODALES ORCI ET',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 6,
            urlSmall: '../img/all/all_7-600x380.jpg',
            urlBig: '../img/all/all_7_original.jpg',
            title: 'IN FAUCIBUS RISUS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 7,
            urlSmall: '../img/all/all_8-600x380.jpg',
            urlBig: '../img/all/all_8_original.jpg',
            title: 'IN FAUCIBUS',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 8,
            urlSmall: '../img/all/all_9-600x380.jpg',
            urlBig: '../img/all/all_9_original.jpg',
            title: 'MALESUADA FAMES AC',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 9,
            urlSmall: '../img/all/all_10-600x380.jpg',
            urlBig: '../img/all/all_10_original.jpg',
            title: 'FEUGIAT VITAE LEO',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 10,
            urlSmall: '../img/all/all_11-600x380.jpg',
            urlBig: '../img/all/all_11_original.jpg',
            title: 'SUSPENDISSE ARCU NISL',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        },
        {
            id: 11,
            urlSmall: '../img/all/all_12-600x380.jpg',
            urlBig: '../img/all/all_12_original.jpg',
            title: 'DONEC TELLUS LEO',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit massa vel mauris sollicitudin dignissim. Phasellus ultrices tellus eget ipsum...'
        }
    ];
    var num = 1;
    var showImg = function() {
        var divBox = $('#box');
        divBox.html('');
        $(window).scrollTop(0);
        if (num == 1) {
            var start = 0, end = imgData.length/2;
        } else if (num ==2) {
            var start = imgData.length/2, end = imgData.length;
        }
        for (var i = start; i < end; i++) {
            var img = imgData[i].urlSmall;
            var title = imgData[i].title;
            var text = imgData[i].text;

            var divSec = '<div class="section-2 col-xs-12 col-sm-6 col-md-6 col-lg-4"><figure><div class="img"><img class="img-responsive" src="'+img+'"urlBig="'+imgData[i].urlBig+'" alt=""/><span></span></div><div class="content"><figcaption class="title-3">'+title+'</figcaption><p class="text">'+text+'</p><div class="more"><a href="#">read more</a><span class="slide-2"></span></div></div></figure></div>';
            divBox.append(divSec);
        }
    };

    var pagerHandler = function() {
        $('#pager').find('a').bind('click', function() {
            num = parseInt($(this).html());
            showImg();
            imgBigHandler();
        });
    };

    var imgBigHandler = function() {
        $('#box .img').find('span').bind('click', function() {
            var imgBig = $(this).prev().attr('urlBig');
            var fullImg = '<div class="full-img"><div><span><i class="fa fa-close fa-2x"></i></span></div><div class="img"><img class="img-responsive" src="'+imgBig+'" alt=""/></div></div>';

            $('body').prepend(fullImg);

            $('.full-img').find('span').click(function() {
                $('.full-img').remove();
            });
        })
    };

    var init = function() {
        showImg();
        pagerHandler();
        imgBigHandler();

    };
    init();