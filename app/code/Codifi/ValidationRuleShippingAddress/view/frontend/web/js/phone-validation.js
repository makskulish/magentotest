define([
    'jquery',
    'underscore',
    'moment',
    'mage/translate'
], function ($, _) {
    'use strict';

    return function (validator) {
        var validators = {
            'phoneMask': [
                function(value) {
                    return value.length == 10 && value.match(/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g) && value.match(/^[-+]?[0-9]+$/);
                },
                $.mage.__('Please specify a valid mobile number with country code example (XXX) XXX-XXXX')
            ]
        };

        validators = _.mapObject(validators, function (data) {
            return {
                handler: data[0],
                message: data[1]
            };
        });

        return $.extend(validator, validators);
    };
});
