$(function () {
  "use strict";

  //===== Sticky

  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo.svg");
    } else {
      $(".navbar-area").addClass("sticky");
      $(".navbar-area img").attr("src", "assets/images/logo-2.svg");
    }
  });

  //===== Section Menu Active

  var scrollLink = $(".page-scroll");
  // Active link switching
  $(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function () {
      var sectionOffset = $(this.hash).offset().top - 73;

      if (sectionOffset <= scrollbarLocation) {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
      }
    });
  });

  //===== close navbar-collapse when a  clicked

  $(".navbar-nav a").on("click", function () {
    $(".navbar-collapse").removeClass("show");
  });

  $(".navbar-toggler").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".navbar-nav a").on("click", function () {
    $(".navbar-toggler").removeClass("active");
  });

  //===== Sidebar

  $('[href="#side-menu-left"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").addClass("open");
  });

  $('[href="#close"], .overlay-left').on("click", function (event) {
    $(".sidebar-left, .overlay-left").removeClass("open");
  });

  //===== Slick

  $(".slider-items-active").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    arrows: true,
    prevArrow: '<span class="prev"><i class="lni lni-arrow-left"></i></span>',
    nextArrow: '<span class="next"><i class="lni lni-arrow-right"></i></span>',
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });



  //===== Back to top

  // Show or hide the sticky footer button
  $(window).on("scroll", function (event) {
    if ($(this).scrollTop() > 600) {
      $(".back-to-top").fadeIn(200);
    } else {
      $(".back-to-top").fadeOut(200);
    }
  });

  //Animate the scroll to yop
  $(".back-to-top").on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  //=====

  $(".show-more").click(function () {
    if ($("#text").hasClass("show-more-height")) {
      $(this).text("PRIKAŽI MANJE");
    } else {
      $(this).text("PRIKAŽI VIŠE");
    }

    $("#text").toggleClass("show-more-height");
  });
});

// Active page

var url = window.location.pathname;
var fileName = url.substring(url.lastIndexOf('/')+1);

$('a[href="' + fileName + '"]').parent().addClass('active');

/*SWIPER FOOTER*/

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 15,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },

    640: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8.5,
      spaceBetween: 10,
    },
  },
});

var swiper = new Swiper(".mySwiper1", {
  slidesPerView: 15,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4.5,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 6.5,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 12.5,
      spaceBetween: 10,
    },
  },
});


// Učitaj GSAP
gsap.timeline()
  .from(".meridian", {
    duration: 1.5,
    opacity: 0,
    scale: 0.8,
    y: 50,
    ease: "back.out(1.7)" 
  })
  .to(".meridian", {
    duration: 0.5,
    scale: 1.05,
    ease: "power1.inOut",
    repeat: 1,
    yoyo: true 
  })
  .from(".calendar-title", {
    duration: 1.2,
    opacity: 0,
    x: -50,
    skewX: 15, 
    ease: "power4.out"
  }, "-=0.8") 
  .from(".calendar-title-2", {
    duration: 1.2,
    opacity: 0,
    x: 50,
    skewX: -15,
    ease: "power4.out"
  }, "-=1"); 
