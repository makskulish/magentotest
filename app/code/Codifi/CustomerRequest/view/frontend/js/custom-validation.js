define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'validate-min-ten',
            function(value, element) {
                return value.split(' ').length >= 10;
            },
            $.mage.__('Please enter 10 character or greater than 10')
        )
    }
});
