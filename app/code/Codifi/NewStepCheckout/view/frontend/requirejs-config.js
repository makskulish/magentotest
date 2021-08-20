
var config = {
    'config': {
        'mixins': {
            'Magento_Checkout/js/view/shipping': {
                'Codifi_NewStepCheckout/js/view/shipping-payment-mixin': true
            },
            'Magento_Checkout/js/view/payment': {
                'Codifi_NewStepCheckout/js/view/shipping-payment-mixin': true
            }
        }
    }
}
