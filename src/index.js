import './css/styles.css';
import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import getRefs from './get-refs';
import getPicturesApi from './fetchPhotoCards';

// export { renderPhotoCards };

const axios = require('axios').default;
const refs = getRefs();

refs.loadMoreBtnEl.classList.add(`is-hidden`);
refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);
const PicturesApi = new getPicturesApi(); 

async function onSearchFormSubmit(e) {
  e.preventDefault();

  PicturesApi.query =  e.currentTarget.elements.searchQuery.value.trim();
  // console.log(PicturesApi.query);
  if (PicturesApi.query === ``) {
    notifySearchIsEmpty();
    return;
  }

  PicturesApi.pageReset();

  try {
    const { hits, totalHits } = await PicturesApi.fetchPhotoCards();
    console.log(hits);
    console.log(totalHits);

    renderPhotoCards(hits)
  } catch (error) {
    notifySomethingIsWrong(); 
  }
}

function renderPhotoCards(hits) {
  const images = hits.map(
    ({ webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads
    }) => {
    return `
    <div class="photo-card">
      <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      <div class="info">
        <p class="info-item">
          <b>Likes</b><br/>${likes}
        </p>
        <p class="info-item">
          <b>Views</b><br/>${views}
        </p>
        <p class="info-item">
          <b>Comments</b><br/>${comments}
        </p>
        <p class="info-item">
          <b>Downloads</b><br/>${downloads}
        </p>
      </div>
    </div>`
  })
  .join('');

  refs.galleryEl.insertAdjacentElement(`beforeend`, images); 
};

function notifySearchIsEmpty() {
  Notiflix.Notify.warning(
    'Search is empty. Please enter some name of pfotos.'
  );
}

function notifySomethingIsWrong() {
  Notiflix.Notify.failure(
    'Sorry, something is wrong'
  );
}

function notifyChangeSearchQuery() {
  Notiflix.Notify.info(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}


// refs.loadMoreBtnEl.classList.remove(`is-hidden`);

