// Добавление в закладки
var addToBookmarks = document.querySelectorAll(".product-card-btn__add-to-bookmarks");
var bookmarks = 0;
var bookmarksField = document.querySelector(".site-header__bookmarks");
document.querySelector(".site-header__bookmarks-value").textContent = "Закладки: " + bookmarks;
for (var i = 0; i < addToBookmarks.length; i++) {
  addToBookmarks[i].addEventListener("click", function () {
    bookmarks++;
  document.querySelector(".site-header__bookmarks-value").textContent = "Закладки: " + bookmarks;
  bookmarksField.classList.add("site-header__bookmarks--product-added");
  return bookmarks;
  });
};

// Попап о добавлении в корзину catalog.html
var addToCart = document.querySelectorAll(".product-card-btn__order");
var cart = 0;
var cartField = document.querySelector(".site-header__basket");
document.querySelector(".site-header__cart-value").textContent = "Корзина: " + cart;
var popupCart = document.querySelector(".catalog-main__card-popup");
for (var i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", function () {
    cart++;
    document.querySelector(".site-header__cart-value").textContent = "Корзина: " + cart;
    cartField.classList.add("site-header__basket--product-added");
    popupCart.classList.remove("visually-hidden");
    return cart;
  });
}

// Слайдер промо-блока. 
var slides = ["img/slide-1.png", "img/slide-2.png"];
var currentSlide = document.querySelector(".index-main__slider-current-slide");
var nextSlideButton = document.querySelector(".index-main__slider-switch--next-slide");
var previousSlideButton = document.querySelector(".index-main__slider-switch--previous-slide");
var sliderIndicator1 = document.querySelector(".index-main__slider-switch-indicator--slider-1");
var sliderIndicator2 = document.querySelector(".index-main__slider-switch-indicator--slider-2");

nextSlideButton.addEventListener('click', function () {
  currentSlide.src = slides[1];
  sliderIndicator1.classList.remove("index-main__slider-switch-indicator--active");
  sliderIndicator2.classList.add("index-main__slider-switch-indicator--active");
});
previousSlideButton.addEventListener('click', function () {
  currentSlide.src = slides[0];
  sliderIndicator1.classList.add("index-main__slider-switch-indicator--active");
  sliderIndicator2.classList.remove("index-main__slider-switch-indicator--active");
});

// Слайдер раздела "Сервисы".

var sliderButtons = document.querySelectorAll(".index-main__service-button");
var servicesAnnotations = document.querySelectorAll(".index-main__services-annotation");

var buttonToAnnotation = function(button, annotation, annotations) {
  button.addEventListener("click", function () {
    for (var i = 0; i < annotations.length; i++) {
      annotations[i].classList.add("index-main__services-annotation--inactive");
    }
    annotation.classList.remove("index-main__services-annotation--inactive");
  });
};

for (var i = 0; i < sliderButtons.length; i++) {
  buttonToAnnotation(sliderButtons[i], servicesAnnotations[i], servicesAnnotations);
  };

  // Попап с картой index.html

  var map = document.querySelector(".index-main__contacts-adress-on-map");
  var popupMap = document.querySelector(".index-main__map-popup");
  map.addEventListener("click", function () { 
    popupMap.classList.remove("visually-hidden");
  });
  var popupMapBtnClose = document.querySelector(".index-main__map-popup__close-button"); 
  popupMapBtnClose.addEventListener("click", function () { 
    popupMap.classList.add("visually-hidden");
  });

  // Попап с письмом index.html

  var writeUs = document.querySelector(".index-main__btn--contacts");
  var popupWriteUs = document.querySelector(".index-main__write-us-popup");
  writeUs.addEventListener("click", function () {
    popupWriteUs.classList.remove("visually-hidden");
  });
  var popupWriteUsBtnClose = document.querySelector(".index-main__write-us-form__close-button");
  popupWriteUsBtnClose.addEventListener("click", function () {
    popupWriteUs.classList.add("visually-hidden");
  })
  





