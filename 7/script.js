document.addEventListener('DOMContentLoaded', () => {
  const searchToggle = document.querySelector('.search-toggle');
  const searchBar = document.querySelector('.search-bar');
  searchToggle.addEventListener('click', () => {
    searchBar.classList.toggle('active');
  });

  const main = document.querySelector('.main');
  const nav = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');
  navToggle.addEventListener('click', () => {
    main.classList.toggle('nav-active');
    nav.classList.toggle('nav-active');
  });
});
