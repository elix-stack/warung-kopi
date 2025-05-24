//toggle class active
const navbarNav = document.querySelector('.navbar-nav');
//ketika hamburger diklik kemudian muncul sidebar, klik lagi hilang
document.querySelector('#hamburger-menu').onclick = () => {
  e.preventDefault();
  navbarNav.classList.toggle('active');
};

//klik diluar hamburger = sidebar hilang
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
