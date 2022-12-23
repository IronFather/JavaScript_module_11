import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import getRefs from './get-refs';

const axios = require('axios').default;
const refs = getRefs();
const BASE_URL = `https://pixabay.com/api/`;
// let fields = [`name,capital,population,flags,languages`];

// key - твой уникальный ключ доступа к API.
// q - термин для поиска. То, что будет вводить пользователь.
// image_type - тип изображения. Мы хотим только фотографии, поэтому задай значение photo.
// orientation - ориентация фотографии. Задай значение horizontal.
// safesearch - фильтр по возрасту. Задай значение true.

// console.log(refs.searchFormEl);
// console.log(refs.inputEl);
// console.log(refs.galleryEl);
// console.log(refs.loadMoreBtnEl);

refs.loadMoreBtnEl.classList.add(`is-hidden`);

refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);

function onSearchFormSubmit() {
  // get axios
  // pixabay

}

function fetchPhotoCards() {
  // const url = `${BASE_URL}/?${fields}`; 
  
  return fetch(url)

}
// function makeMarkupOnePhotoCard() {
//   return `
//   <div class="photo-card">
//   <img src="" alt="" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes</b>
//     </p>
//     <p class="info-item">
//       <b>Views</b>
//     </p>
//     <p class="info-item">
//       <b>Comments</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads</b>
//     </p>
//   </div>
// </div>`
// }

// renderPhotoCards() {
// };

// function renderPhotoCards(markup = '') {
//   return (refs.galleryEl.innerHTML = markup);
// }

// refs.loadMoreBtnEl.classList.remove(`is-hidden`);

