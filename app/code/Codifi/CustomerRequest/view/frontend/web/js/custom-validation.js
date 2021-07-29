define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'onlyimages',
            function (value, element) {
                if (this.optional(element) || !element.files || !element.files[0]) {
                    return true;
                } else {
                    var fileType = element.files[0].type;
                    var isImage = /^(image)\//i.test(fileType);
                    return isImage;
                }
            },
            $.mage.__('Sorry, we can only accept image files.')
        )
    }
});
