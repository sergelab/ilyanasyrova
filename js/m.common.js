jQuery(function($) {
    $(document).ready(function() {
        if (!(device.ipod() || device.mobile() || device.iphone() || device.android() || device.fxosPhone() || device.blackberryTablet())) {
            window.location = 'http://www.ilyanasyrova.com';
        }
        $('#container').removeClass('hidden');
        if ($('body').hasClass('home')) {
            initFrontpage();
        }

        switchSlide(location.hash.slice(1));

        $('a.btn-menu').on('click', function(e) {
            $('ul.menu').toggleClass('menu-hidden');
        });
        $('a.map-link').on('click', function(e) {
            var currentAttrValue = $(this).attr('href');
            switchSlide(currentAttrValue.slice(1));
            // e.preventDefault();
            var m = $('ul.menu');
            if (!m.hasClass('menu-hidden')) {
                m.addClass('menu-hidden');
            }
        });
    });

    function switchSlide(slide) {
        $('#slides').find('.slide').each(function() {
            $(this).animate({opacity: 0}, 1000);
        });
        $('#slides .slide').each(function() {
            $(this).css('opacity', 0);
            $(this).hide();
        });
        if (slide == '') {
            var current = '';
        } else {
        	var current = $('#slides #' + slide);
        }
        if (current.length == 0) {
            $('#home').show();
            $('#home').addClass('show').animate({opacity: 1.0}, 1000);
        } else {
            $(current).show();
            $(current).animate({opacity: 1.0}, 1000);
        }
    }

    function initFrontpage() {
    }
});