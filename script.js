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

$(function () {
    $('<p>A new paragraph</p>').addClass('new').insertAfter('#disclaimer');
    $('<strong>START</strong>').prependTo('#disclaimer');
    $('<strong>END</strong>').appendTo('#disclaimer');
   $('#no-script').remove();
});