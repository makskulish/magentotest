require([
    "jquery","jquery/ui"
], function($){
    $(document).ready(function() {
        $(document).on("click","#help-shipping", function() {
            $('#onepage-checkout-shipping-method-additional-load').show();
            $('#onepage-checkout-shipping-method-additional-load').addClass('popup-bg');
            $('<div class="body-color-active"></div>').appendTo('.checkout-index-index');
        });

        $(document).mouseup(function (e){
            var div = $("#onepage-checkout-shipping-method-additional-load");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.hide();
                $('.body-color-active').hide();
            }
        });
    });
});
