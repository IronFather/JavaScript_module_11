import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import getRefs from './get-refs';

const axios = require('axios').default;
const refs = getRefs();


console.log(refs.searchFormEl);
console.log(refs.inputEl);
console.log(refs.galleryEl);
console.log(refs.loadMoreBtnEl);

refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);

function onSearchFormSubmit() {
  // get axios
  // pixabay

}






