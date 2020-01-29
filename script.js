$(window).scroll(function () {
    var yScrollPos = $(this).scrollTop();
    var scrollPos = $(window).innerHeight();
    if (yScrollPos > 55 ) {
        $("#footer").addClass("footer-anim-white");
        if (yScrollPos > 2586) {
            $("#footer").removeClass("footer-anim-white");
            $("#footer").addClass("footer-anim");
        } else {
            $("#footer").removeClass("footer-anim");
        }
    } else {
        $("#footer").removeClass("footer-anim-white");
    }

    if (yScrollPos > scrollPos) {
        var $nav = $("#nav");
        $nav.addClass("scrolled");
    } else if (
        yScrollPos < $(window).innerHeight() - 55 &&
        $("#nav").hasClass("scrolled")
    ) {
        $("#nav").removeClass("scrolled");
    }
});