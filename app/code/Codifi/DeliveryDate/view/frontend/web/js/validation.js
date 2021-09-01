define([
    'jquery',
    'underscore',
    'moment',
    'mage/translate'
], function ($, _) {
    'use strict';

    return function (validator) {
        var validators = {
            'chooseDate' : [
                function(value) {
                    return value.length >= 10;
                },
                $.mage.__('Please enter 10 characters or greater than 10!')
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
