import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import getRefs from './get-refs';

const axios = require('axios').default;
const refs = getRefs();
const BASE_URL = `https://pixabay.com/api/`;
const pixabayKey = `32269625-571fed7951f84920c060dc68c`;
let queryName = ``;

refs.loadMoreBtnEl.classList.add(`is-hidden`);
refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);

function onSearchFormSubmit(e) {
  e.preventDefault();
  queryName = e.currentTarget.elements.searchQuery.value.trim();
  console.log(queryName);
  let markup = '';

  // get axios
  // pixabay
  fetchPhotoCards();
  console.log(`ok`);
}

function fetchPhotoCards() {
  const url = `${BASE_URL}/?key=${pixabayKey}&q=${queryName}&image_type=photo&orientation=horizontal&safesearch=true`; 
  
  return fetch(url)
  .then(res => res.json())
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

