/*================================================
*
* Template name : Mone
* Version       : 1.0.1
* Author        : FlaTheme
* Author URL    : http://themeforest.net/user/flatheme
*
* Table of Contents :
* 1. Page Preloader
* 2. Cursor
* 3. Header Nav Menu
* 4. Scroll To Top
* 5. Sliders
* 6. Lightbox
* 7. Google Maps
* 8. Contact Form
*
================================================*/
"use strict";

var $body = $("body");

/*===============================================
  1. Page Preloader
===============================================*/
$(window).on("load", function () {
  $body.addClass("loaded");
});

if ($body.attr("data-preloader") === "true") {
  $body.append($("<div class='preloader'><div><span>L</span><span>O</span><span>A</span><span>D</span><span>I</span><span>N</span><span>G</span></div></div>"));
}

/*===============================================
  2. Cursor
===============================================*/
var customCursor = document.getElementById("cursor");

if (customCursor) {
  var cursor = document.getElementById("cursor");
  document.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
  });

  var mouseElms = document.querySelectorAll("a, button, input, textarea, .cursor-link");

  mouseElms.forEach(function(mouseElm) {
    mouseElm.addEventListener("mouseenter", function() {
      cursor.classList.add("scale-cursor");
    });
    mouseElm.addEventListener("mouseleave", function() {
      cursor.classList.remove("scale-cursor");
    });
  });
}


/*===============================================
  3. Header Nav Menu
===============================================*/
var headerNav = $(".nav-box");

if (headerNav.length) {
  var toggleBtn = $("#nav-toggle");
  //
  // Menu Toggle //
  //
  toggleBtn.on("click", function() {
    if (headerNav.hasClass("show")) {
      headerNav.removeClass("show");
      toggleBtn.removeClass("active");
    }
    else {
      headerNav.addClass("show");
      toggleBtn.addClass("active");
    }
  });
  //
  // Close Menu //
  //
  $(document).on("click", function(e) {
    if ( $(e.target).closest(".nav-box, #nav-toggle").length === 0 ) {
      if (headerNav.hasClass("show")) {
        headerNav.removeClass("show");
        toggleBtn.removeClass("active");
      }
    }
  });
}

/*===============================================
  4. Scroll To Top
===============================================*/
var scrollTopBtn = document.querySelector(".scrolltotop");

if (scrollTopBtn) {
  // Show, Hide //
  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 700) { // 700px from top
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });
}


/*===============================================
  5. Sliders
===============================================*/
//
// Portfolio Slider //
//
var swiper = new Swiper(".portfolio-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-portfolio-next",
    prevEl: ".swiper-portfolio-prev",
  },
});

//
// Blog Slider //
//
var swiper = new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-blog-next",
    prevEl: ".swiper-blog-prev",
  },
});

//
// Clients Slider //
//
var swiper = new Swiper(".clients-slider", {
  slidesPerView: 2,
  spaceBetween: 24,
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

//
// Testimonial Slider //
//
var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-testimonial-pagination",
    type: "progressbar",
  },
});


/*===============================================
  6. Lightbox
===============================================*/
//
// Lightbox - Image //
//
var $lightboxImage = $(".lightbox-image-box");

$lightboxImage.each(function () {
  var $this = $(this);
  $this.magnificPopup({
    type: 'image',
    fixedContentPos: false,
    removalDelay: 200,
    closeOnContentClick: true, 
    image: {
      titleSrc: 'data-image-title'
    }
  });
});

//
// Lightbox - Media //
//
var $lightboxMedia = $(".lightbox-media-box");

$lightboxMedia.each(function() {
  var $this = $(this);
  $this.magnificPopup({
    type: "iframe",
    fixedContentPos: false,
    removalDelay: 200,
    preloader: false,
    iframe: {
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1&rel=0'
        },
          vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1'
        }
      },
      srcAction: "iframe_src" 
    }
  });
});


/*===============================================
  8. Contact Form
===============================================*/
$("#contactform").on("submit", function(e) {
  e.preventDefault();
  
  var $form = $(this);
  var $submitBtn = $form.find('button[type="submit"]');
  var $success = $("#success");
  var $error = $("#error");

  // Reset states
  $(".error-color").removeClass("error-color");
  $success.removeClass("show-result");
  $error.removeClass("show-result");

  // Validation
  var isValid = true;
  $("#name, #email, #subject, #message").each(function() {
    if ($(this).val().trim() === "") {
      $(this).addClass("error-color");
      isValid = false;
    }
  });

  if (!isValid) return;

  $submitBtn.prop("disabled", true);

  // Submit via Formspree
  $.ajax({
    url: $form.attr("action"),
    method: "POST",
    data: $form.serialize(),
    dataType: "json",
    success: function() {
      $success.addClass("show-result");
      $form.trigger("reset");
    },
    error: function() {
      $error.addClass("show-result");
    },
    complete: function() {
      $submitBtn.prop("disabled", false);
    }
  });
});