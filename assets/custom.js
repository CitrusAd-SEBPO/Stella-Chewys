/*----------------------
---- RoW slider js -----
------------------------*/
let citrusStella_carousel = document.querySelector(".citrusStella_carousel");

let citrusStella_carouselInner = document.querySelector(
  ".citrusStella_carousel-inner"
);

let prev = document.querySelector(".citrusStella_carousel-controls .prev");

let next = document.querySelector(".citrusStella_carousel-controls .next");

let slides = document.querySelectorAll(
  ".citrusStella_carousel-inner .citrusStella_carousel-item"
);

let totalSlides = slides.length;

let step = 100 / totalSlides;

let activeSlide = 0;

let activeIndicator = 0;

let direction = -1;

let jump = 1;

let interval = 5000; /*5000*/

let time;

//Init citrusStella_carousel
citrusStella_carouselInner.style.minWidth = totalSlides * 100 + "%";
loadIndicators();
loop(true);

//citrusStella_carousel events

next.addEventListener("click", () => {
  slideToNext();
});

prev.addEventListener("click", () => {
  slideToPrev();
});

citrusStella_carouselInner.addEventListener("transitionend", () => {
  if (direction === -1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide++;
        citrusStella_carouselInner.append(
          citrusStella_carouselInner.firstElementChild
        );
      }
    } else {
      activeSlide++;
      citrusStella_carouselInner.append(
        citrusStella_carouselInner.firstElementChild
      );
    }
  } else if (direction === 1) {
    if (jump > 1) {
      for (let i = 0; i < jump; i++) {
        activeSlide--;
        citrusStella_carouselInner.prepend(
          citrusStella_carouselInner.lastElementChild
        );
      }
    } else {
      activeSlide--;
      citrusStella_carouselInner.prepend(
        citrusStella_carouselInner.lastElementChild
      );
    }
  }

  citrusStella_carouselInner.style.transition = "none";
  citrusStella_carouselInner.style.transform = "translateX(0%)";
  setTimeout(() => {
    jump = 1;
    citrusStella_carouselInner.style.transition = "all ease .5s";
  });
  updateIndicators();
});

document
  .querySelectorAll(".citrusStella_carousel-indicators span")
  .forEach((item) => {
    item.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.dataset.slideTo);
      let indicators = document.querySelectorAll(
        ".citrusStella_carousel-indicators span"
      );

      indicators.forEach((item, index) => {
        if (item.classList.contains("active")) {
          activeIndicator = index;
        }
      });
      if (slideTo - activeIndicator > 1) {
        jump = slideTo - activeIndicator;
        step = jump * step;
        slideToNext();
      } else if (slideTo - activeIndicator === 1) {
        slideToNext();
      } else if (slideTo - activeIndicator < 0) {
        if (Math.abs(slideTo - activeIndicator) > 1) {
          jump = Math.abs(slideTo - activeIndicator);
          step = jump * step;
          slideToPrev();
        }
        slideToPrev();
      }
      step = 100 / totalSlides;
    });
  });

citrusStella_carousel.addEventListener("mouseover", () => {
  loop(false);
});

citrusStella_carousel.addEventListener("mouseout", () => {
  loop(true);
});

//citrusStella_carousel functions

function loadIndicators() {
  slides.forEach((slide, index) => {
    if (index === 0) {
      document.querySelector(
        ".citrusStella_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}" class="active"></span>`;
    } else {
      document.querySelector(
        ".citrusStella_carousel-indicators"
      ).innerHTML += `<span data-slide-to="${index}"></span>`;
    }
  });
}

function updateIndicators() {
  if (activeSlide > totalSlides - 1) {
    activeSlide = 0;
  } else if (activeSlide < 0) {
    activeSlide = totalSlides - 1;
  }
  document
    .querySelector(".citrusStella_carousel-indicators span.active")
    .classList.remove("active");
  document
    .querySelectorAll(".citrusStella_carousel-indicators span")
    [activeSlide].classList.add("active");
}

function slideToNext() {
  if (direction === 1) {
    direction = -1;
    citrusStella_carouselInner.prepend(
      citrusStella_carouselInner.lastElementChild
    );
  }

  citrusStella_carousel.style.justifyContent = "flex-start";
  citrusStella_carouselInner.style.transform = `translateX(-${step}%)`;
}

function slideToPrev() {
  if (direction === -1) {
    direction = 1;
    citrusStella_carouselInner.append(
      citrusStella_carouselInner.firstElementChild
    );
  }
  citrusStella_carousel.style.justifyContent = "flex-end";
  citrusStella_carouselInner.style.transform = `translateX(${step}%)`;
  loop(false);
}

function loop(status) {
  if (status === true) {
    time = setInterval(() => {
      slideToNext();
    }, interval);
  } else {
    clearInterval(time);
  }
}
// pov loader add. before full load js pov none.
document.addEventListener("DOMContentLoaded", function () {
  citrusStella_carousel.style.display = "flex";
});

/*-----------------------
--- End Row js Slider ----
------------------------*/

/**----------------------
 * product scroller js ---
 --------------------------*/
// tab carousal js
var splides = document.querySelectorAll(".citrusStella__Products");
if (splides.length) {
  for (var i = 0; i < splides.length; i++) {
    var splideElement = splides[i];
    var splideDefaultOptions = {
      rewind: true,
      arrows: true,
      type: "slide",
      focus: "left",
      autoplay: false,
      pagination: false,
      rewindSpeed: 500,
      speed: 500,
      pauseOnHover: true,
      perPage: 6,
      perMove: 2,
      breakpoints: {
        375: {
          perPage: 1,
        },
        576: {
          perPage: 2,
        },
        991: {
          perPage: 3,
        },
        992: {
          perPage: 3,
        },
        1024: {
          perPage: 4,
        },
        1200: {
          perPage: 6,
        },
        1440: {
          perPage: 6,
        },
      },
    };

    new Splide(splideElement, splideDefaultOptions).mount();
  }
}
/* ************************************************************************************** */
//for tab sweater & loader added
document.addEventListener("DOMContentLoaded", function () {
  filterCatProduct("stella-cat-row-product");
  filterDogProduct("stella-dog-row-product");
});
// for dog filter function
function filterDogProduct(c) {
  var x, i;
  x = document.getElementsByClassName("citrusStella__dogProduct");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], " citrusTabShow");
  }
}
// for cat filter function
function filterCatProduct(c) {
  var x, i;
  x = document.getElementsByClassName("citrusStella__catProduct");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "citrusTabShow");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "citrusTabShow");
  }
}
function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function () {
  // for dog active class filter
  var dogBtnContainer = document.getElementById("citrusStellaTabId");
  var dogBtns = dogBtnContainer.getElementsByClassName(
    "citrusStella__tab_item"
  );
  // for cat active class
  var catBtnContainer = document.getElementById("citrusStellaTabIdCat");
  var catBtns = catBtnContainer.getElementsByClassName(
    "citrusStella__tab_item"
  );
  addActiveClass(dogBtns, "citrusStella__Dog-active_tab");
  addActiveClass(catBtns, "citrusStella__cat-active_tab");
});
function addActiveClass(element, activeClass) {
  for (var i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function () {
      var current = document.getElementsByClassName(activeClass);
      current[0].className = current[0].className.replace(
        " " + activeClass,
        ""
      );
      this.className += " " + activeClass;
    });
  }
}
// ----------------------------------------------- need to update and delete below
/* for (var i = 0; i < dogBestbtns.length; i++) {
  dogBestbtns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("citrusStella__active_tab");
    current[0].className = current[0].className.replace(
      " citrusStella__active_tab",
      ""
    );
    this.className += " citrusStella__active_tab";
  });
} */
// ----------------------------------------------------------------need to update and remove above
//for Dog best seller tab switcher
// --------------------for hiding arrow-------------------------
/* for hiding arrow set opacity 0 in style sheet
        .cirtus_meet_tabs_22 .splide__arrow:disabled,
        .citrusStella-section__tab-content .splide__arrow:disabled {
          opacity: 0;
        }
        */
arrowHide("splide01");
arrowHide("splide02");
arrowHide("splide03");
arrowHide("splide04");
arrowHide("splide05");
arrowHide("splide06");
arrowHide("splide07");
arrowHide("splide08");
arrowHide("splide09");
arrowHide("splide10");
arrowHide("splide11");
arrowHide("splide12");
function arrowHide(id) {
  var splide = new Splide("#" + id, {
    focus: "left",
  });
  splide.on("visible", function (slide) {
    //hides right arrow if last slide visible
    if (
      slide.index === splide.length - 1 &&
      splide.Components &&
      splide.Components.Arrows &&
      splide.Components.Arrows.arrows &&
      splide.Components.Arrows.arrows.next
    ) {
      if (!splide.Components.Arrows.arrows.next.disabled) {
        splide.Components.Arrows.arrows.next.disabled = true;
      }
    }
    //hides left arrow if first slide visible
    if (
      slide.index === 0 &&
      splide.Components &&
      splide.Components.Arrows &&
      splide.Components.Arrows.arrows &&
      splide.Components.Arrows.arrows.prev
    ) {
      if (!splide.Components.Arrows.arrows.prev.disabled) {
        splide.Components.Arrows.arrows.prev.disabled = true;
      }
    }
  });

  splide.mount();
}
