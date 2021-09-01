require([
    "jquery","mage/calendar"
], function($) {
    "use strict";

    $(document).ready(function() {
        $(function() {
            $("#datepicker").datepicker({
                dateFormat: 'mm/dd/yy',
                changeMonth: true,
                changeYear: true,
                minDate: 0,
                maxDate: "+1M +5D"
            });
        });
    });
});
