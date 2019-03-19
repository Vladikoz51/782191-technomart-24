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

// Фильтр цены
var priceRangeField = document.getElementById("price-range-field");
var minPriceField = document.getElementById("min-price-field");
var priceRange = function () {
  minPriceField.value = priceRangeField.value;
};
var priceMin = function () { 
  priceRangeField.value = minPriceField.value;
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
var popupCartСontinue = document.querySelector(".catalog-main__card-popup--continue-button");
  popupCartСontinue.addEventListener("click", function () {
    popupCart.classList.add("visually-hidden");
  });
var popupCartСlose = document.querySelector(".catalog-main__card-popup-close-button");
  popupCartСlose.addEventListener("click", function () {
    popupCart.classList.add("visually-hidden");
  });

