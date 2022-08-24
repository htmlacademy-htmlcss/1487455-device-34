const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.slider__item');
const pagination = slider.querySelector('.slider__pagination');
const paginationButtons = slider.querySelectorAll('.slider__pagination-item');
const tooglePrev = slider.querySelector('.slider__toogle-prev');
const toogleNext = slider.querySelector('.slider__toogle-next');
let index = 0;

function changePaginationPosition() {
  let slideCurrent = slider.querySelector('.slider__item.current');
  let linkMore = slideCurrent.querySelector('.slider__link');

  pagination.style.top = `${(linkMore.clientHeight - pagination.clientHeight) / 2 + linkMore.offsetTop}px`;
};

changePaginationPosition();

paginationButtons.forEach(function(button, buttonIndex) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    slider.querySelector('.slider__item.current').classList.remove('current');
    slider.querySelector('.slider__pagination-item.current').classList.remove('current');
    slides[buttonIndex].classList.add('current');
    button.classList.add('current');
    index = buttonIndex;
    changePaginationPosition();
  });
});

tooglePrev.addEventListener('click', function(e) {
  e.preventDefault();
  paginationButtons[index].classList.remove("current");
  slides[index].classList.remove("current");
  index = (!index) ? slides.length-1 : index-1;
  paginationButtons[index].classList.add("current");
  slides[index].classList.add("current");
  changePaginationPosition();
});

toogleNext.addEventListener('click', function(e) {
  e.preventDefault();
  paginationButtons[index].classList.remove("current");
  slides[index].classList.remove("current");
  index = (index === slides.length - 1) ? 0 : index+1;
  paginationButtons[index].classList.add("current");
  slides[index].classList.add("current");
  changePaginationPosition();
});

setInterval(changePaginationPosition, 500);
