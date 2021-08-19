$(function () {
  // $(".parallax").parallax({});
  // var wow = new WOW({
  //   mobile: false
  // }).init();
  function menuToggle() {
    $(".menu-open").fadeToggle(300);
    $(".menu-close").fadeToggle(300);
    $(".main .header-menu").slideToggle(300);
  }
  function menuClose() {
    $(".menu-open").fadeIn(300);
    $(".menu-close").fadeOut(300);
    $(".main .header-menu").slideUp(300);
  }
  $(".header-burger").on("click", function () {
    menuToggle();
  });
  $(".header-menu__item").on("click", function () {
    if ($(document).width() <= 1200) {
      menuToggle();
    }
  });

  $(".princip-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#princip").offset().top - 30
      },
      1000
    );
  });
  $(".products-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#products").offset().top - 30
      },
      1000
    );
  });
  $(".cifri-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#cifri").offset().top - 30
      },
      1000
    );
  });
  $(".vendors-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#vendors").offset().top - 80
      },
      1000
    );
  });
  $(".cases-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#cases").offset().top - 30
      },
      1000
    );
  });
  $(".replyers-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#replyers").offset().top - 80
      },
      1000
    );
  });
  $(".contact-link").on("click", function () {
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#contact").offset().top - 30
      },
      1000
    );
  });

  window.onscroll = function () {
    if (window.pageYOffset > 800) {
      $(".header").addClass("header-fixed");
      // $(".header-menuopen").addClass("header-menuwrap-fixed");
    } else {
      $(".header").removeClass("header-fixed");
      // $(".header-menuopen").removeClass("header-menuwrap-fixed");
    }
  };
  var products = $(".products-slider").owlCarousel({
    items: 1,
    dots: false,
    margin: 13,
    loop: false,
    responsive: {
      1100: {
        items: 4
      },
      750: {
        items: 3
      },
      530: {
        items: 2
      }
    }
  });
  var vendors = $(".vendors-slider").owlCarousel({
    items: 1,
    dots: false,
    margin: 13,
    loop: true,
    responsive: {
      980: {
        items: 4
      },
      750: {
        items: 3
      },
      460: {
        items: 2
      }
    }
  });

  $(".products-arrows__left").click(function () {
    products.trigger("prev.owl.carousel");
  });
  $(".products-arrows__right").click(function () {
    products.trigger("next.owl.carousel");
  });
  $(".vendors-arrows__left").click(function () {
    vendors.trigger("prev.owl.carousel");
  });
  $(".vendors-arrows__right").click(function () {
    vendors.trigger("next.owl.carousel");
  });

  var success = $(".success-slider").owlCarousel({
    items: 1,
    // animateOut: "fadeOut",
    // animateIn: "fadeIn",
    dots: false,
    loop: true,
    onInitialized: function () {
      $(".success-slider__big1").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".success-slider__small1"
      });
      $(".success-slider__small1").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".success-slider__big1",
        focusOnSelect: true,
        variableWidth: true
      });
      $(".success-slider__big2").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".success-slider__small2"
      });
      $(".success-slider__small2").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".success-slider__big2",
        focusOnSelect: true,
        arrows: false,
        variableWidth: true
      });
    }
  });

  $(".success-left").click(function () {
    success.trigger("prev.owl.carousel");
  });
  $(".success-right").click(function () {
    success.trigger("next.owl.carousel");
  });
  var replyes = $(".replyes-slider").owlCarousel({
    items: 1,
    dots: false,
    margin: 38,
    autoWidth: true,
    responsive: {
      1200: {
        items: 2
      }
    }
  });
  $(".replyes-arrows__left").click(function () {
    replyes.trigger("prev.owl.carousel");
  });
  $(".replyes-arrows__right").click(function () {
    replyes.trigger("next.owl.carousel");
  });
  $(document).on("click", function (e) {
    console.log($(document).width());
    if (
      !(
        $(e.target).parents(".modal-main").length ||
        $(e.target).parents("form").length ||
        $(e.target).hasClass("modal-main") ||
        $(e.target).hasClass("btn") ||
        $(e.target).hasClass("dotted") ||
        $(e.target).hasClass("butthx")
      )
    ) {
      $(".modal-bg").fadeOut(300);
    }
    if (
      !($(e.target).parents(".header-menu").length || $(e.target).hasClass("menu-open")) &&
      $(document).width() < 1200
    ) {
      menuClose();
    }
  });

  $(".map-nav__item").on("click", function () {
    $(".map-nav__item").removeClass("active");
    var mapId = $(this).attr("data-name");
    $(this).addClass("active");
    $(".map-adress").hide();
    $(`.map-adress[data-item=${mapId}]`).show();
    $(".map-info p").hide();
    $(`.map-info p[data-item=${mapId}]`).show();
  });

  $(".main-btn .btn").click(function () {
    $(".modal-first").fadeIn(300);
  });
  $(".equip .butthx").click(function () {
    $(".modal-first").fadeIn(300);
  });
  $(".header-callback").click(function () {
    $(".modal-first").fadeIn(300);
  });
  $(".footer-callback").click(function () {
    $(".modal-first").fadeIn(300);
  });
  $(".forward-btn .btn").click(function () {
    $(".modal-first").fadeIn(300);
  });
  $(".map-call").click(function () {
    $(".modal-first").fadeIn(300);
  });

  $(".modal-close").click(function () {
    $(".modal-bg").fadeOut(300);
  });

  $("input[name='phone_f']").mask("+7 ( 999 ) 999 9999");
});

function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response);
      console.log(json);

      if (json.result == "success") {
        $(".modal-bg").fadeOut(300);
        $(".modal-ok").fadeIn(300);
      } else {
        alert("Ошибка. Сообщение не отправлено");
      }
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}
