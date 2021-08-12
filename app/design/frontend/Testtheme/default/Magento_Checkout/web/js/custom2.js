require([
    "jquery","jquery/ui"
], function($){
    $(document).ready(function() {


        $(document).on("click","#click-me2", function() {
            $('.comment-section').hide();
        });

    });
});
