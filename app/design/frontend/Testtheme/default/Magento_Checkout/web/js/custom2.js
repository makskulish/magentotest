require([
    "jquery","jquery/ui"
], function($){
    $(document).ready(function() {

        $(document).on("click","#checkoutnext", function() {
            alert("Test!");
        });

    });
});
