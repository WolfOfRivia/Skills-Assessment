$(document).ready(function() {
  var images = [
    "../assets/HERO-1.jpg",
    "../assets/HERO-2.jpg",
    "../assets/HERO-3.jpg"
  ];

  var bgImage = images[Math.floor(Math.random() * images.length)];
  $(".hero").css("background", "url(" + bgImage + ")");

  $(window).scroll(function() {
    var scrollY = window.scrollY;

    if (scrollY > 250) {
      $(".img-1").addClass("fadeInDown");
      $(".img-2").addClass("fadeInRight");
      $(".img-3").addClass("fadeInUp");
      $(".img-4").addClass("fadeInUp");
      $(".img-5").addClass("fadeInLeft");
      $(".title").addClass("fadeInDown");
      $("hr").addClass("fadeInRight");
      $(".description").addClass("fadeInUp");
    }
  });

  console.log(bgImage);
});
