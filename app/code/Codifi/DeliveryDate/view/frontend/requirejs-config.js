var config = {
    map: {
        '*': {
            selectdate: 'Codifi_DeliveryDate/js/selectdate'
        }
    },
    mixins: {
        'Magento_Checkout/js/view/shipping': {
            'Codifi_DeliveryDate/js/view/shipping': true
        }
    }
};
