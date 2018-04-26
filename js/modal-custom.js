$(function(){
    $('.c-select').SumoSelect({placeholder: 'Ваше гражданство' });

    $('.js-phone').mask('+7(000)000-00-00', {placeholder: "00.00.0000"});
        $('.js-date').mask('00.00.0000');

    /*соглашение на обработку персональных данных*/
    function disabledFormButton(form, check, btn_form){
        $("form input[type='checkbox']").on('change', function(){
            if($(check).prop('checked')){
                $(btn_form).removeAttr('disabled');
                console.log('сняли блокировку');
            }else {
                $(btn_form).attr('disabled', 'disabled');
                console.log('поставили блокировку');
            }
        });
    }

    disabledFormButton(
        '#popup-wrap-vacancy__form',
        '#processing-data-vacancy',
        '.popup-wrap-vacancy__btn'
    );

    disabledFormButton(
        '#popup-wrap-vacancy-search__form',
        '#processing-data-vacancy-search',
        '.popup-wrap-vacancy__btn'
    );


    $('.vacancy-card__header').on('click', function(e){
        e.preventDefault();
        $(this).find('.vacancy-card-more').toggleClass('is-show');
        $(this)
            .siblings('.vacancy-card__body').slideToggle(100);
    });

    $('.popbutton').on('click', function(){
        $('.popwindow')
            .find('.popup-wrap-custom__line:first-child')
            .find('input').focus();
    });

    $('.vacancy-list .vacancy-popbutton').on('click', function(){
        var title = $(this).parents('.vacancy-item').find('.vacancy-card__name').html();
        $('.js-vacancy-input').val(title);
    });
});