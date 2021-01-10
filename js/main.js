// 1.Создать галерею ---done
// 2. Когда рендерим галерею, вставить мелкие картинки ---
// 3. сделать делегирование по галерее
// 4. Модальное окно

import imgs from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const modalImgRef = document.querySelector('.lightbox__image');
const closeBtnRef = modalRef.querySelector('[data-action="close-lightbox"]');

const items = imgs.map(item => {
  const li = document.createElement('li');
  li.classList.add('gallery__item');
  const a = document.createElement('a');
  a.classList.add('gallery__link');
  a.setAttribute('href', item.original);
  li.appendChild(a);
  const img = document.createElement('img');
  img.classList.add('gallery__image');
  img.setAttribute('src', item.preview);
  img.setAttribute('data-source', item.original);
  img.setAttribute('data-index', imgs.indexOf(item));
  img.setAttribute('alt', item.description);
  a.appendChild(img);
  return li;
});

galleryRef.append(...items);

// открытие
let i;
galleryRef.addEventListener('click', imgsClick);

function imgsClick(event) {
  event.preventDefault();
  i = Number(event.target.dataset.index);
  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt;
  attributes(imgSrc, imgAlt);
  if (event.target.tagName === 'IMG') {
    modalRef.classList.add('is-open');
    window.addEventListener('keydown', Esc);
  }
}

// закрытие
closeBtnRef.addEventListener('click', closeFn);
overlayRef.addEventListener('click', closeFn);

function closeFn(event) {
  modalRef.classList.remove('is-open');
  // attributes('', '');
  // window.removeEventListener('keydown', Esc);
}

function attributes(src, alt) {
  modalImgRef.src = src;
  modalImgRef.alt = alt;
}

// function Esc(event) {
//   if (event.code === 'Escape') {
//     closeModal();
//   }
// }
