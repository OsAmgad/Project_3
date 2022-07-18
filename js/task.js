$(document).ready(function() {
    $('.carousel').carousel({
        interval: 5000
    })


    $('.edit-color').click(function() {
        $('.change').fadeToggle()
    })

    $('.edit-color').hover(function() {
        $('.color-change span').fadeToggle()
    })

    let temp_color = $('.color-change ul li')
    temp_color.eq(0).css("backgroundColor", "rgb(187, 6, 6)").end()
        .eq(1).css("backgroundColor", "#07d44b").end()
        .eq(2).css("backgroundColor", "rgb(49, 9, 228)").end()
        .eq(3).css("backgroundColor", "rgb(228, 9, 181)");

    temp_color.click(function() {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"))
    })


    var scroll_button = $("#scroll-button");
    $(window).scroll(function() {
        if ($(this).scrollTop() > 750) {
            scroll_button.show();
        } else { scroll_button.hide(); }
    })

    scroll_button.click(function() {
        $("html,body").animate({ scrollTop: 0 }, 500)
    })

    $(function() {
        $("body").niceScroll();
    });


});