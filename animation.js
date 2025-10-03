
$(document).ready(function(){
    $('.carousel').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true, // Enable arrows
         prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
         nextArrow: '<button type="button" class="slick-next">&#10095;</button>'
    });
    let lastScrollTop = 0;
    $(window).on("scroll", function() {
        let st = $(this).scrollTop();
        if (st > lastScrollTop) {
            $("#header").css("top", "-100px"); // Hide header when scrolling down
        } else {
            $("#header").css("top", "0"); // Show header when scrolling up
        }
        lastScrollTop = st;
    });
    $(window).on("scroll", function() {
    $(".projectbg").each(function() {
        let elementTop = $(this).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();
        if (elementTop < windowBottom) {
            $(this).addClass("visible");
        } else {
            $(this).removeClass("visible");
        }
    });
});
});
setTimeout(() => {
    document.querySelector('.loading-screen').style.display = 'none';
}, 4000);