const openMenu = () => {
   document.getElementById("burger-menu").classList.toggle("active");
   document.getElementById("header").classList.toggle("active");
}

const closeMenu = () => {
   if(document.getElementById("header").classList.contains('active')){
      document.getElementById("burger-menu").classList.toggle("active");
      document.getElementById("header").classList.toggle("active");
   }
}

$('.single-item').slick({
   arrows: true,
   prevArrow:"<button type='button' class='slick-prev'><<</button>",
   nextArrow:"<button type='button' class='slick-next'>>></button>",
   dots: false,
   slidesToShow: 1,
   slidesToScroll: 1,
});