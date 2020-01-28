$(document).scroll(() => {
    var $nav = $("nav");
    if (
        $nav.offset().top > $(window).innerHeight() - 55 &&
        !$nav.hasClass("scrolled")
    ) {
        $nav.addClass("scrolled");
    } else if (
        $nav.offset().top < $(window).innerHeight() - 55 &&
        $nav.hasClass("scrolled")
    ) {
        $nav.removeClass("scrolled");
    }
});