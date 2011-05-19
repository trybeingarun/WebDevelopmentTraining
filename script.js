$(function() {
    //var fontsize = $('#celebs tbody tr:first').css('font-size');
    //alert(fontsize);
    $('#celebs tbody tr:even').addClass('zebra');
});

$(function () {
    $('#toggleButton').click( function() {
        $('#disclaimer').toggle();

        if($('#disclaimer').is(':visible')) {
            $(this).val('Hide');
        }
        else {
            $(this).val('Show');
        }
    })
});
