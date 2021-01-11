// 1.Создать галерею
// 2. Когда рендерим галерею, вставить мелкие картинки
// 3. сделать делегирование по галерее
// 4. Модальное окно

import imgs from './gallery-items.js';

const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const modalImgRef = document.querySelector('.lightbox__image');
const closeBtnRef = modalRef.querySelector('[data-action="close-lightbox"]');

// разметка

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

galleryRef.addEventListener('click', imgsClick);
closeBtnRef.addEventListener('click', closeFn);
overlayRef.addEventListener('click', closeFn);

// открытие
function imgsClick(event) {
  event.preventDefault();
  const imgSrc = event.target.dataset.source;
  const imgAlt = event.target.alt;
  attributes(imgSrc, imgAlt);
  if (event.target.tagName === 'IMG') {
    modalRef.classList.add('is-open');
  }
}

function attributes(src, alt) {
  modalImgRef.src = src;
  modalImgRef.alt = alt;
}

// закрытие
function closeFn(event) {
  modalRef.classList.remove('is-open');
  attributes('', '');
}

// ДОДЕЛАТЬ:
// 1) Esc fn (не называть esc!!!!)
// 2)Пролистывание изображений галереи в открытом модальном окне клавишами "влево" и "вправо".
