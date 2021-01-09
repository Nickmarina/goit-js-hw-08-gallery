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
