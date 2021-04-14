//

$(window).scroll(function() {
    if ($(this).scrollTop() >= 500) {
        $("#navBar").addClass("noTransparrent");
    } else {
        $("#navBar").removeClass("noTransparrent")
    }
});

// التنثل بأسلوب سلس إلى الفقرة الهدف

$(document).ready(function() {
    $("a.scroll").on('click', function(event) {

        var hash = this.hash;

        $('html,body').animate({ scrollTop: $(hash).offset().top }, 800, function() {})

    });
    $('.timer').countTo();
});
$(document).ready(function() {
    $(function() {
        $("#commentForm").validate();
    });
});
('html, body').animate({ scrollTop: $(hash).offset().top - 100 }, 800)