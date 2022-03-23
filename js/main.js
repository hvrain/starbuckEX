// animation handler of badges in header
// & scroll to top
const badgeEl = document.querySelector("header .badges");
const toTopEl = document.querySelector(".to-top");
window.addEventListener(
  "scroll",
  _.throttle(function () {
    if (window.scrollY > 500) {
      //badge visible
      gsap.to(badgeEl, { opacity: 0, display: "none", duration: 0.5 });
      //toTopEl invisible
      gsap.to(toTopEl, 0.2, { x: 0 });
    } else {
      //badge invisible
      gsap.to(badgeEl, { opacity: 1, display: "block", duration: 0.5 });
      //toTopEl visible
      gsap.to(toTopEl, 0.2, { x: 100 });
    }
  }, 500)
);
// click to to-top function
toTopEl.addEventListener("click", function () {
  gsap.to(window, 0.7, { scrollTo: 0 });
});
// animation handler of image in visual section
const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, { delay: (index + 1) * 0.7, opacity: 1, duration: 1 });
});

// slider of swiper-container in notice-line
new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});
// slider of swiper-container in promotion
new Swiper(".promotion .swiper-container", {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centeredSlides: true, // 슬라이드 요소 중간에 배치
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".promotion .swiper-button-next",
    prevEl: ".promotion .swiper-button-prev",
    hideOnClick: true,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
});
//awards
new Swiper(".awards .swiper-container", {
  slidesPerView: 5, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".awards .swiper-button-next",
    prevEl: ".awards .swiper-button-prev",
    hideOnClick: true,
  },
});

const promotionEl = document.querySelector(".notice .promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");
let isHidePromotion = false;

promotionToggleBtn.addEventListener("click", function () {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김 처리!
    promotionEl.classList.add("hide");
  } else {
    // 보임 처리!
    promotionEl.classList.remove("hide");
  }
});

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

// floating animation
function floatingObject(selector, delay, move) {
  gsap.to(selector, random(1.5, 2.5), {
    y: move,
    repeat: -1,
    ease: Power1.easeInOut,
    yoyo: true,
    delay: delay,
  });
}
floatingObject(".floating1", 0.5, 15);
floatingObject(".floating2", 0.5, 10);
floatingObject(".floating3", 0.5, 20);

// scroll magic
const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function (spyEl) {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
