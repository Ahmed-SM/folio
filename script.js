$(window).scroll(function() {
    var yScrollPos = $(this).scrollTop();
    var scrollPos= $(window).innerHeight() - 55;
    if(yScrollPos > scrollPos) {
    var $nav = $("#nav");
    $nav.addClass("scrolled");
    }else if (
        yScrollPos  < $(window).innerHeight() - 55 &&
        $("#nav").hasClass("scrolled")
    ) {
    $("#nav").removeClass("scrolled");
    }
});