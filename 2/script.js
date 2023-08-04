const hamburger = document.querySelector('.hamburger');
const bars = document.querySelectorAll('.bar');

hamburger.addEventListener('click', () => {
  bars.forEach((bar) => bar.classList.remove('no-animation'));
  hamburger.classList.toggle('active');
  hamburger.classList.toggle('inactive');
});
