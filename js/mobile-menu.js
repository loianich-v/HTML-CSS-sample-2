const mobile = document.querySelector('.mobile-menu');
const mobileBtnOpen = document.querySelector('.js-menu-btn-open');
const mobileBtnClose = document.querySelector('.js-menu-btn-close');

const togglemobile = () => mobile.classList.toggle('is-open');

mobileBtnOpen.addEventListener('click', togglemobile);
mobileBtnClose.addEventListener('click', togglemobile);
