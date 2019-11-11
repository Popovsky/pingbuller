$(document).ready(function(){
    $('.header .slider').bxSlider({
        auto: false,
        speed: 1000
    });
    $('.slider').bxSlider({
        auto: true,
        speed: 1000
    });
    $('.carousel').bxSlider({
        slideWidth: 200,
        moveSlides: 1,
        minSlides: 2,
        maxSlides: 6,
        auto: true,
        speed: 1000
    });
});
