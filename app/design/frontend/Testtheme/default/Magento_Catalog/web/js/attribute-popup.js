require(
    [
        'jquery'
    ],
    function(
        $
    ) {
        $(document).ready(function() {

            $(document).on("click","#click-info", function() {
                alert('test');
            });

        });
    }
);
