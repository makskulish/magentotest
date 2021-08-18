require([
    "jquery","select2","slider"
], function($) {
    "use strict";
    $(window).load(function() {
        $("#test_button").click(function(){
            $(".test-block-content").toggle();
        });

    });

    $(document).ready(function() {

        $('select').select2({
            selectOnClose: true
        });

        $('.products-related .product-items').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
        });

    });


    $(window).scroll(function() {
        var height = $(window).scrollTop();
        if(height > 100){
            $('header').addClass('header-fixed');
        } else{
            $('header').removeClass('header-fixed');
        }
    });
});
