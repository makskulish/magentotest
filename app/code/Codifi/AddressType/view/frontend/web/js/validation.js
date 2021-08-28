define(['jquery'], function($) {
    'use strict';

    return function() {
        $.validator.addMethod(
            'validate-company',
            function (value, element) {
                return value.val();
            },
            $.mage.__('Please, select company you are ordering for field.')
        )
    }
});
