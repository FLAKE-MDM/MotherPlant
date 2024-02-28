// all
$(".toggler").click(function (e) {
  e.preventDefault();
  $(this).toggleClass("active");
});

// pane
$(".pane-open").click(function (e) {
  e.preventDefault();
  $("body").addClass("overflow-none");
  $(".pane").removeClass("show");
  $($(this).attr("href")).addClass("show");
  $(".pane-close__link").addClass("show");
});
$(".pane-close").click(function (e) {
  e.preventDefault();
  $("body").removeClass("overflow-none");
  $(".pane").removeClass("show");
  $(".pane-close__link").removeClass("show");
});

// dropdown
$(".dropdown-toggle").click(function (e) {
  e.preventDefault();
  let dropdownContainer = $(this).parent();

  dropdownContainer.toggleClass("open");
  $(this).toggleClass("active");

  dropdownContainer.find(".dropdown-menu__close").click(function (e) {
    e.preventDefault();
    dropdownContainer.removeClass("open");
    $(dropdownContainer).find(".dropdown-toggle").removeClass("active");
    dropdownContainer.find(".dropdown-menu__close").off("click");
  });

  $(document).mouseup(function (e) {
    if (dropdownContainer.has(e.target).length === 0) {
      dropdownContainer.removeClass("open");
      $(dropdownContainer).find(".dropdown-toggle").removeClass("active");
      dropdownContainer.find(".dropdown-menu__close").off("click");
    }
  });
});

$(".dropdown-close").click(function (e) {
  e.preventDefault();
  $(".nav-list__item").removeClass("open");
  $(".sidebar").removeClass("open");
  $(".dropdown-toggle").removeClass("active");
});

// nav
$(document).ready(function () {
  const closeLinks = document.querySelectorAll(".dropdown-close");

  Array.from(closeLinks).map((item) => {
    let text = $(item).parents(".nav-list__item").find(".dropdown-toggle").text();
    $(item).text(text);
  });
});

// fake-select
$(".fake-select__item").click(function () {
  $(this).parents(".fake-select").find(".fake-select__item").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".fake-select").find(".fake-select__value").html(this.innerHTML);
  $(this).parents(".fake-select").removeClass("open");
});

// collapse
$(".collapse-link").click(function (e) {
  e.preventDefault();

  if ($(this).hasClass("active")) {
    $(this.getAttribute("href")).slideUp(300);
  } else {
    $(this.getAttribute("href")).slideDown(300);
  }

  $(this).toggleClass("active");
});

// search
function closeSearch() {
  $(".search")
    .animate(
      {
        width: "toggle",
      },
      500
    )
    .removeClass("show");
}

$(document).click(function (e) {
  if ($(e.target).hasClass("search-open")) {
    $(".search")
      .animate(
        {
          width: "toggle",
        },
        500
      )
      .addClass("show");
  } else {
    if (!$(e.target).closest(".search__wrap").length && $(".search").hasClass("show")) {
      closeSearch();
    }
  }
});

// tabs
$(".tab-link").click(function (e) {
  e.preventDefault();
  $(this).parents(".tab-nav").find(".tab-link").removeClass("active");
  $(this).addClass("active");
  $(this).closest(".tab-section").find(".tab-pane").removeClass("active");
  $(this.getAttribute("href")).addClass("active");
});

// up-link
let $page = $("html, body");
$(".up-link").click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    400
  );
  return false;
});

// modal
$(".modal-open").click(function (e) {
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $("body").removeClass("modal-open");
  $("body").addClass("modal-open");
});
$(".modal").mousedown(function (e) {
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for (let elem of closeLinks) {
    if (e.target == elem) {
      $(this).removeClass("show");
      $("body").removeClass("modal-open");
      $(".login__mobile-link").removeClass("active");
    }
  }
  for (let elem of modalsGroup) {
    if (e.target == elem) {
      $(this).removeClass("show");
      $("body").removeClass("modal-open");
      $(".login__mobile-link").removeClass("active");
    }
  }
});

// checkResolution
function checkResolution() {
  if (window.innerWidth < 768) {
  }
}

window.addEventListener("load", checkResolution);
window.addEventListener("resize", checkResolution);

// home
new Swiper(".preview-slider", {
  slidesPerView: 1,
  loop: true,
  speed: 1500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".review-slider", {
  slidesPerView: 1,
  spaceBetween: 26,
  loop: true,
  speed: 300,
  breakpoints: {
    992: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
  },
});

new Swiper(".blog-slider", {
  slidesPerView: 1,
  spaceBetween: 31,
  speed: 300,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

$("#subscription-form").on("submit", function (e) {
  e.preventDefault();
  $(this).parents(".subscription-section").addClass("success");
  $(this).parents(".subscription-section").find(".subscription-section__content").addClass("collapse");
  $(this).parents(".subscription-section").find(".subscription-section__success").removeClass("collapse");
});

// catalogue
let priceRange = document.getElementById("price-range");

if (priceRange) {
  noUiSlider.create(priceRange, {
    connect: true,
    start: [1280, 9790],
    range: {
      min: 0,
      max: 10000,
    },
  });

  let nodes = [document.getElementById("lower-value"), document.getElementById("upper-value")];

  priceRange.noUiSlider.on("update", function (values, handle) {
    if (handle) {
      nodes[handle].value = "до " + Math.ceil(values[handle]) + " ₽";
    } else {
      nodes[handle].value = "от " + Math.ceil(values[handle]) + " ₽";
    }
  });
}

// product
$(".radio-label").click(function () {
  $(this).parents(".radio-list").find(".radio-label").removeClass("active");
  $(this).addClass("active");
});

// brand
new Swiper(".gallery-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  speed: 300,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    992: {
      spaceBetween: 53,
    },
  },
});

// weight
let weightSlider = document.getElementById("weight-range");

if (weightSlider) {
  noUiSlider.create(weightSlider, {
    start: "67",
    connect: true,
    range: {
      min: 0,
      max: 200,
    },
  });

  var formatValues = [document.getElementById("weight-value")];

  weightSlider.noUiSlider.on("update", function (values, handle, unencoded) {
    formatValues[handle].value = Math.ceil(values[handle]) + " кг";
  });

  formatValues.forEach((input, handle) => {
    input.addEventListener("change", function () {
      weightSlider.noUiSlider.setHandle(handle, this.value);
    });
  });
}

// about
function checkResolution() {
  if (window.innerWidth > 991) {
    $(function () {
      let floating = $(".floating");

      if (floating.length > 0) {
        var topPos = floating.offset().top;
        $(window).scroll(function () {
          var top = $(document).scrollTop(),
            pip = $(".stoper").offset().top,
            height = $(".floating").outerHeight();
          if (top > topPos && top < pip - height) {
            $(".floating").addClass("fixed").removeAttr("style");
          } else if (top > pip - height) {
            $(".floating").removeClass("fixed").css({ position: "absolute", bottom: "0" });
          } else {
            $(".floating").removeClass("fixed");
          }
        });
      }
    });
  }
}

window.addEventListener("load", checkResolution);
window.addEventListener("resize", checkResolution);

window.addEventListener("load", function () {
  if (window.innerWidth > 991) {
    let sidebarNav = document.querySelectorAll(".sidebar-nav__link");

    sidebarNav.forEach((item) => {
      let activeElement = item.querySelector(".sidebar-nav__link_active");

      activeElement.textContent = item.textContent;
    });
  }
});

// documents
$("[data-category]").click(function () {
  let categoryArr = document.querySelectorAll("div[data-category]");
  let categoryArrNav = document.querySelectorAll(".fake-select__item[data-category]");
  let curentCategory = "";

  categoryArrNav.forEach((itemCategory) => {
    if (itemCategory.classList.contains("active")) {
      curentCategory = itemCategory.dataset.category;
    }
  });

  if (curentCategory) {
    categoryArr.forEach((item) => {
      if (item.dataset.category == curentCategory) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  }
});

// contatcs
google.maps.event.addDomListener(window, "load", init);

function init() {
  // Basic options for a simple Google Map
  // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
  var mapOptions = {
    // How zoomed in you want the map to start at (always required)
    zoom: 11,

    center: new google.maps.LatLng(55.762315958749454, 37.58558162154966),
  };

  var mapElement = document.getElementById("map");
  var map = new google.maps.Map(mapElement, mapOptions);

  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.751926759398245, 37.53823495349505),
    map: map,
    title: "The CBD",
    icon: "img/icons/i-map.svg",
  });

  var contentString =
    '<div id="content" class="dropdown-city">' +
    '<div class="title_size-sm">The CBD</div>' +
    "<p>Интернет магазин</p>" +
    "<p>Москва, <br>Метро 1905 года, Большой<br>Тишинский переулок 43/20,<br>стр. 2, 3 этаж</p>" +
    '<a href="#" class="text_secondary text_bold">Перейти на сайт</a>' +
    "</div>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
}

// shops
google.maps.event.addDomListener(window, "load", initShops);

function initShops() {
  var mapOptions = {
    zoom: 11,
    center: new google.maps.LatLng(55.762315958749454, 37.58558162154966),
  };

  var mapElement = document.getElementById("shops");

  // Create the Google Map using our element and options defined above
  var map = new google.maps.Map(mapElement, mapOptions);

  // Let's also add a marker while we're at it
  var marker = new google.maps.Marker({
    position: new google.maps.LatLng(55.769588065451984, 37.567307233642815),
    map: map,
    title: "The CBD",
    icon: "img/icons/i-map.svg",
  });

  var marker2 = new google.maps.Marker({
    position: new google.maps.LatLng(55.78392850443094, 37.71648273881307),
    map: map,
    title: "The CBD",
    icon: "img/icons/i-map.svg",
  });

  var marker3 = new google.maps.Marker({
    position: new google.maps.LatLng(55.751926759398245, 37.57823495349505),
    map: map,
    title: "The CBD",
    icon: "img/icons/i-map.svg",
  });

  var contentString =
    '<div id="content" class="dropdown-city">' +
    '<div class="title_size-sm">The CBD</div>' +
    "<p>Интернет магазин</p>" +
    "<p>Москва, <br>Метро 1905 года, Большой<br>Тишинский переулок 43/20,<br>стр. 2, 3 этаж</p>" +
    '<a href="#" class="text_secondary text_bold">Перейти на сайт</a>' +
    "</div>";
  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });

  var contentString2 =
    '<div id="content" class="dropdown-city">' +
    '<div class="title_size-sm">The CBD</div>' +
    "<p>Интернет магазин</p>" +
    "<p>Москва, <br>Измайловская ул. 26с5, 2 этаж</p>" +
    '<a href="#" class="text_secondary text_bold">Перейти на сайт</a>' +
    "</div>";
  var infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    maxWidth: 400,
  });
  marker2.addListener("click", function () {
    infowindow2.open(map, marker2);
  });

  var contentString3 =
    '<div id="content" class="dropdown-city">' +
    '<div class="title_size-sm">The CBD</div>' +
    "<p>Интернет магазин</p>" +
    "<p>Москва, <br>Метро 1905 года, Большой<br>Тишинский переулок 43/20,<br>стр. 2, 3 этаж</p>" +
    '<a href="#" class="text_secondary text_bold">Перейти на сайт</a>' +
    "</div>";
  var infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    maxWidth: 400,
  });
  marker3.addListener("click", function () {
    infowindow3.open(map, marker3);
  });
}
