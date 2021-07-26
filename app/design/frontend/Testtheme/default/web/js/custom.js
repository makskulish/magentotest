require([
    "jquery"
], function($){
    "use strict";
    $(window).load(function() {
        $("#test_button").click(function(){
            $(".test-block-content").toggle();
        });
    });
});
