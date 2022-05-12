const menuButton = document.querySelector('.header__menu-button');
const header = document.querySelector('.header');
const wrapper = document.querySelector('.header__wrapper');


const onMenuClickHandler = () => {
  if (header.classList.contains('header--menu-closed') || wrapper.classList.contains('header__wrapper--menu-closed')) {
    header.classList.remove('header--menu-closed');
    header.classList.add('header--menu-open');
    wrapper.classList.remove('header__wrapper--menu-closed');
    wrapper.classList.add('header__wrapper--mob');
  } else if (header.classList.contains('header--menu-open') || wrapper.classList.contains('header__wrapper--mob')) {
    header.classList.add('header--menu-closed');
    header.classList.remove('header--menu-open');
    wrapper.classList.add('header__wrapper--menu-closed');
    wrapper.classList.remove('header__wrapper--mob');
  }
};


const toggleMenu = () => {
  menuButton.addEventListener('click', onMenuClickHandler);
};


const list = document.querySelector('.footer__list');
const items = list.querySelectorAll('li');

const crutchMargin = () => {
  const id = (items.length) / 2;
  const breakpoint = window.matchMedia(`(max-width:767px)`);
  if (breakpoint.matches) {
    items[id - 1].style.marginBottom = '20px';
  } else {
    return;
  }
};

export {toggleMenu, crutchMargin};
