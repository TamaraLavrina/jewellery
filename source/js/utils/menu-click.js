const menuButton = document.querySelector('.header__menu-button');
const header = document.querySelector('.header');
const wrapper = document.querySelector('.header__wrapper');
const element = document.querySelector('.products__buttons');
const neededWidth = document.querySelector('.catalog__list ');
const filterButton = document.querySelector('.filters-handler');
const filter = document.querySelector('.filters');
const closeFilterButton = document.querySelector('.filters__close');


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

const initMenu = () => {
  header.classList.remove('header--menu-open');
  header.classList.add('header--menu-closed');
  wrapper.classList.remove('header__wrapper--mob');
  wrapper.classList.add('header__wrapper--menu-closed');
};

const toggleMenu = () => {
  header.classList.remove('header--menu-open');
  menuButton.addEventListener('click', onMenuClickHandler);
};


const list = document.querySelector('.footer__list');
const items = list.querySelectorAll('li');

const crutchMargin = () => {
  const id = (items.length) / 2;
  const breakpoint = window.matchMedia('(max-width:767px)');
  if (breakpoint.matches) {
    items[id - 1].style.marginBottom = '20px';
  } else {
    return;
  }
};

const getWidth = () => {
  if (!neededWidth || !element) {
    return;
  } else {
    element.style.width = `${neededWidth.offsetWidth}px`;
  }
};

const filterHandler = () => {
  if (filter.classList.contains('filters--opened') & closeFilterButton) {
    filter.classList.remove('filters--opened');
    closeFilterButton.removeEventListener('click', closeFilterButtonHandler);
  } else {
    filter.classList.add('filters--opened');
  }
};

const onFilterButtonClick = () => {
  if (!filterButton) {
    return;
  } else {
    filterButton.addEventListener('click', filterHandler);
  }
};


const closeFilterButtonHandler = () => {
  filter.classList.remove('filters--opened');
};

const closeFilterModal = () => {
  if (closeFilterButton) {
    closeFilterButton.addEventListener('click', closeFilterButtonHandler);
  }
};


export {toggleMenu, crutchMargin, getWidth, initMenu, onFilterButtonClick, closeFilterModal};
