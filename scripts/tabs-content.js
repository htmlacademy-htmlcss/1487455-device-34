const tabMenuButtons  = document.querySelectorAll('.js-tabs-button');

tabMenuButtons.forEach(function(button,index) {
  button.addEventListener('click', function(e) {
    e.preventDefault();
    const parent = button.closest(".js-tabs");
    parent.querySelector('.js-tabs-button.current').classList.remove('current');
    parent.querySelector('.js-tabs-content.current').classList.remove('current');
    parent.querySelectorAll('.js-tabs-content')[index].classList.add('current');
    button.classList.add('current');
  });
});
