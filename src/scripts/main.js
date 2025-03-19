'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('main-image img');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', (event) => {
    let target = event.target;

    if (target.tagName === 'IMG' && target.closest('a')) {
      event.preventDefault();
      target = target.closest('a');
    }

    if (target.tagName === 'A') {
      const newSrc = target.href;

      mainImage.src = newSrc;
    }
  });
});
