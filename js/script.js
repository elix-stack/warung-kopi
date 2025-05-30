document.addEventListener('DOMContentLoaded', () => {
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

  // toggle class active shopping-cart
  const shoppingCart = document.querySelector('.shopping-cart');

  document.querySelector('#shopping-cart-button').onclick = (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
  };

  //klik diluar element
  const hamburger = document.querySelector('#hamburger-menu');
  const searchButton = document.querySelector('#search-button');
  const shoppingCartButton = document.querySelector('#shopping-cart-button');

  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove('active');
    }
    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove('active');
    }
  });

  // modal box
  const itemDetailModal = document.querySelector('.modal');
  const itemDetailButtons = document.querySelectorAll('.item-detail-button');

  itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    };
  });

  // klik tombol close modal box
  document.querySelector('.modal .modal-container .close-icon').onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
  };

  // klik diluar area modal-box
  // const modal = document.querySelector('#item-detail-modal'); deklarasi ini tidak perlu karena sudah ada deklarasi target yang sama sebelumnya

  window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  };
});
