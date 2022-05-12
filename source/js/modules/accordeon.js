const items = document.querySelectorAll('.faq__item');
const accordButtons = document.querySelectorAll('.faq__heading');
const content = document.querySelectorAll('.faq__content');


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
    accordButtons.forEach((it) => it.addEventListener('click', (evt) => accordeonToggle(evt)));
  }
};
export {accordeonInit};
