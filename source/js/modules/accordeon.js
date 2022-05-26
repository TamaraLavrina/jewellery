const items = document.querySelectorAll('.acc-item');
const accordButtons = document.querySelectorAll('.acc-heading');
const content = document.querySelectorAll('.acc-content');


const accordeonToggle = (evt) => {
  evt.preventDefault();
  const currentIteme = evt.target.closest('div');

  currentIteme.classList.toggle('open');
  // currentIteme.classList.toggle('close');
  // const currentContent = title.nextElementSibling;
  // currentContent.classList.toggle('close');
};

const accordeonInit = () => {
  if (!content || !items) {
    return;
  } else {
    // items.forEach((it) => it.classList.add('close'));
    items.forEach((it) => it.classList.remove('open'));
    accordButtons.forEach((it) => it.setAttribute('tabindex', 1));
    items.forEach((it) => it.addEventListener('click', (evt) => accordeonToggle(evt)));

  }
};
export {accordeonInit};
