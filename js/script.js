// ------------------------------------------------ scroll
$(function() {
    $('.item_link').on('click', function(e) {
        if (!($("#burger_menu").attr("checked"))) {
            // console.log('hello');
            $("#burger_menu").prop("checked", false);
        }
        $('html,body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
        e.preventDefault();
    });
});
//------------------------------------------------- show/hide button to top
$('#toTop').hide();
$(window).scroll(function() {

    if ($(this).scrollTop() > 1400) {
        $('#toTop').fadeIn();
    } else {
        $('#toTop').fadeOut();

    }
});

//------------------------------------------------- form handler
function sendAjaxForm(result_form, ajax_form, url) {
    var result_form = $('#' + result_form);
    var ajax_form = $('#' + ajax_form);

    ajax_form.submit(function() {
        $.ajax({
            url: url,
            type: "POST",
            dataType: "html",
            data: ajax_form.serialize(),
            success: function(response) {
                result = $.parseJSON(response);

                ajax_form.parent().hide();
                $('#anketa').addClass('styles_after_send');
                result_form.show().animate({
                    opacity: 1
                }, 500);
            },
            error: function(response) {
                result_form.html(response);
            }
        });
        return false;
    })
}