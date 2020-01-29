$(window).scroll(function () {
    var yScrollPos = $(this).scrollTop();
    var scrollPos = $(window).innerHeight() - 55;
    if (yScrollPos > scrollPos - 900) {
        $("#footer").addClass("footer-anim-white");
        if (yScrollPos > scrollPos + 1650) {
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