
 var navOffset=$(".head").height();
            $(window).scroll(function(){
                var scrollPos=$(window).scrollTop();
                if(scrollPos >=1){
                    $(".head").addClass("headerfixed");
                    $(".head-c").addClass("headfixed");
                }else{
                    $(".head").removeClass("headerfixed");
                    $(".head-c").removeClass("headfixed");
                }
            });
$(function(){
    var header_height = $(".header_wap").offset().top;

    $(window).scroll(function(){
        var this_scrollTop = $(this).scrollTop();
        if(this_scrollTop>header_height ){
            $(".header_wap").css('position','fixed');
            $(".header_wap").css('box-shadow','0 0 10px #eee');
        }
		else{
			$(".header_wap").css('position','inherit');
            $(".header_wap").css('box-shadow','0 0 0px #eee');
			}
    });
});