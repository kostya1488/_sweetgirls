// ------------------------------------------------ scroll
$(function() {
    $('a').on('click', function(e) {
        $('html,body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        e.preventDefault();
    });
});

//------------------------------------------------- form handler

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        data: $("#" + ajax_form).serialize(),
        success: function(response) {
            $('#' + ajax_form).hide();
            result = $.parseJSON(response);
            $('#' + result_form).show("slow").html(result);
        },
        error: function(response) {
            $('#' + result_form).html(response);
        }
    });
}