$(function(){
    //The Height Of Slider
    var winh  = $(window).height(),
        upper = $(".upper").innerHeight(),
        nav   = $(".navbar").innerHeight();
        $(".slider, .carousel-item").height(winh - (upper + nav));
        
    //Featred Work Shurflle

    $(".featurd-work ul li").on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('val') == 'all'){
            $('.shfulle-images .col-sm').css('opacity', 1);

        }else{
            
            $('.shfulle-images .col-sm').css('opacity', '.08');
            $($(this).data('val')).parent().css('opacity', 1);
        }
    });

    var scroll = $('#to-top');
    
    $(window).scroll(function (){
        
        if($(this).scrollTop() >= 800){
            scroll.fadeIn(1000);
        }else{
            scroll.fadeOut(1000);
        }
        
    });
    
    scroll.click(function(){
        $('html,body').animate({scrollTop:0},600);
    });
    
    $('.navbar .collapse li a').click(function(e){
       
        e.preventDefault();
        
        $('html,body').animate({
            
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 100
            
        },1000);
        
    });
    

});


