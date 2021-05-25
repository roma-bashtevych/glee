$(function(){
  $('.slider__list').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
 
$(".sponsors__items").slick({
  arrows: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
 });

const mixitup1 = document.querySelector(".design"),
  mixitup2 = document.querySelector(".products"),
  control = {
    controls: {
      scope: "local"
    }
  };
mixitup(mixitup1, control), mixitup(mixitup2, control)

});