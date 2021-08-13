define ([
    'jquery',
    'Magento_Customer/js/customer-data',
    'Magento_Ui/js/view/messages',
    'mage/translate'
], function ($, customerData) {
    'use strict';

    $('#customForm').on('submit', function(e){
        e.preventDefault();
        var msg = $.mage.__($(this).serialize());

        customerData.set('messages', {
            messages: [{
                type: 'success',
                text: msg
            }]
        });

    });

});
