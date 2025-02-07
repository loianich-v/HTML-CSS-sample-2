const modalMob = document.querySelector('.backdrop');
const modalMobBtnOpen = document.querySelector('.js-mob-btn-open');
const modalMobBtnClose = document.querySelector('.js-mob-btn-close');

const togglemodalMob = () => modalMob.classList.toggle('is-hidden');

modalMobBtnOpen.addEventListener('click', togglemodalMob);
modalMobBtnClose.addEventListener('click', togglemodalMob);
