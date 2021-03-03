(function ($) {
    $(function () {
        $("div.tabs__caption").on("click", "div:not(.active)", function () {
            $(this)
                .addClass("active")
                .siblings()
                .removeClass("active")
                .closest("div.tabs")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".menu").addClass("scroll");
        } else {
            $(".menu").removeClass("scroll");
        }
    });

    $(document).ready(function () {
        $(".burger").click(function () {
            $(".burger-spisok").toggleClass("__active");
        });
    });

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            items: 1,
            margin: 10,
            autoHeight: true,
            nav: true,
            dots: false,
        });
    });
})(jQuery);

$(document).ready(function () {
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate(
            {
                scrollTop: destination,
            },
            800
        );
        return false;
    });
});
