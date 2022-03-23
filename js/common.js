// class handler of search in header
const searchEl = document.querySelector("header .sub-menu .search");
const searchInputEl = searchEl.querySelector("input");
const searchIconEl = searchEl.querySelector(".material-icons");

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});
searchInputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused");
  searchInputEl.setAttribute("placeholder", "?넻?빀寃??깋");
});
searchInputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused");
  searchInputEl.setAttribute("placeholder", "");
});
//this year to copyright.
const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear();
