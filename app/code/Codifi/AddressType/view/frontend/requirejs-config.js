var config = {
    config: {
        mixins: {
            'Magento_Checkout/js/action/set-shipping-information': {
                'Codifi_AddressType/js/shipping-save-processor': true
            },
            'mage/validation': {
                'Codifi_AddressType/js/validation': true
            }
        }
    }
};
