//toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger diklik kemudian muncul sidebar, klik lagi hilang
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

//toggle class active search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
//ketika hamburger diklik kemudian muncul sidebar, klik lagi hilang
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

//klik diluar element
const hamburger = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
});
