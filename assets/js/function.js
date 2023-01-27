jQuery( document ).ready(function() {

    $(window).scroll(function(){
    $('.topnav').toggleClass('scrollednav py-0', $(this).scrollTop() > 50);
    });
    
});

$('.spanborder .tabswitcher').click(function(){
    $(this).parent().find('.tabswitcher').removeClass('active')
    $(this).addClass('active')
    
    $(this).parent().parent().find('.tab').removeClass('active')
    $('#'+$(this).attr('aim')).addClass('active')
})

