$(function(){
    const top = $(".top").offset().top;
    let about = $(".about").offset().top;
    const production = $(".production").offset().top;

    $("#go-top").click(function(){
        $('body,html').animate({scrollTop:top}, 500, 'swing');
        return false;
    });
    $("#go-about").click(function(){
        about = about - 25;
        $('body,html').animate({scrollTop:about}, 500, 'swing');
        return false;
    });
    $("#go-production").click(function(){
        $('body,html').animate({scrollTop:production}, 500, 'swing');
        return false;
    });
});