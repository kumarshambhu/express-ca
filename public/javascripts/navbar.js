//jQuery to collapse the navbar on scroll
/*$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});*/

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    var serviceSliderWr = $('#service-section');
    if (serviceSliderWr.length > 0) {
        var lastSlider = $('#lastSlider', serviceSliderWr).bxSlider({
            'controls': false,
            'pagerCustom': '#service-section #serviceCtrl',
            'easing': 'ease-in-out',
            'adaptiveHeight': false,
            'infiniteLoop': false
        });
    }
    $('#serviceCtrl .menuicon').hover(function () {
        $('#serviceCtrl').addClass('showmenu');
    });

    $('#serviceCtrl').mouseleave(function () {
        $('#serviceCtrl').removeClass('showmenu');
    });
});