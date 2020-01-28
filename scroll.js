var $svg = $("svg");
    if (
        $(document).height() -
          $(window).innerHeight() -
          125 * ($(document).height() / $(window).innerHeight()) <
          $(document).scrollTop() &&
        $svg.hasClass("zero-percent")
      ) {
        $(".count").each(function() {
          $(this)
            .prop("Counter", 0)
            .animate(
              {
                Counter: $(this)
                  .text()
                  .match(/[0-9]*/g)[1]
              },
              {
                duration: 2000,
                easing: "swing",
                step: function(now) {
                  $(this).removeClass("hidden");
                  $(this).text(Math.ceil(now) + "%");
                }
              }
            );
        });
        $("svg").removeClass("zero-percent");
        $("#svg01").addClass("ninety-nine-percent");
        $("#svg02").addClass("ninety-percent");
        $("#svg03").addClass("ninety-percent");
        $("#svg04").addClass("eighty-percent");
        $("#svg05").addClass("eighty-percent");
        $("#svg06").addClass("eighty-percent");
        $("#svg07").addClass("eighty-percent");
        $("#svg08").addClass("ninety-nine-percent");
        $("#svg09").addClass("eighty-percent");
        $("#svg10").addClass("fifty-percent");
      }
   