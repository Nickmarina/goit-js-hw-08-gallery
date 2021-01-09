// 1.Создать галерею
// 2. Когда рендерим галерею, вставить мелкие картинки
// 3. сделать делегирование по галерее
// 4. Модальное окно

import galleryItems from './gallery-items';

const galleryRef = document.querySelector('.js - gallery');
const modalRef = document.querySelector('.js-lightbox');
const overlayRef = document.querySelector('.lightbox__overlay');
const modalImgRef = document.querySelector('.lightbox__image');
const closeBtnRef = modalRef.querySelector('[data-action="close-lightbox"]');

const items = galleryItems.map(item => {
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
  img.setAttribute('data-index', galleryItems.indexOf(item));
  img.setAttribute('alt', item.description);
  a.appendChild(img);
  return li;
});

gallery.append(...items);
