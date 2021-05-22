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

let t = document.querySelector(".design"),
  e = document.querySelector(".products"),
  n = {
    controls: {
      scope: "local"
    }
  };
mixitup(t, n), mixitup(e, n)

});