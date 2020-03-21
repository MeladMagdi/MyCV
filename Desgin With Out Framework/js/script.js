$(function(){
    'use strict';

    $('.info-list li').click(function (){
        $(this).addClass('selected').siblings().removeClass('selected');
        $('.info-content div').hide();
        $('.' + $(this).data('class')).fadeIn();
    });

});