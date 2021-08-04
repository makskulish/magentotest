require([
    "jquery","select2"
], function($){
    "use strict";
    $(window).load(function() {
        $("#test_button").click(function(){
            $(".test-block-content").toggle();
        });
    });

    $(document).ready(function() {
        $('#cars').select2({
            selectOnClose: true
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
