define(['jquery', 'uiComponent', 'ko'], function($, Component, ko) {
    return Component.extend({
        initialize: function () {
            this._super();
        },
        getText: function () {
            return "call the function here..";
        },
        getDateCust: function () {
            $("#datepicker2").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                minDate: 0,
                maxDate: "+1M +5D"
            });
        }
    });
});
