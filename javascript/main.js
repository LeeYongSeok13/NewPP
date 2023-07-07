$(function(){
    $(document).on('scroll', function(){
        if($(window).scrollTop() > 78){
            $("#header").removeClass("on");
            $("#header").addClass("on");
        } else {
            $("#header").addClass("on");
            $("#header").removeClass("on");
        }
    });

});

