import './css/styles.css';
import getRefs from './get-refs';
import getPicturesApi from './fetchPhotoCards';
import { notifySearchIsEmpty, notifySomethingIsWrong } from './css/notifications';
import { LoadMoreBtn } from './loadMoreBtn';

const axios = require('axios').default;
const refs = getRefs();

refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);
const PicturesApi = new getPicturesApi();
const loadMoreBtn = new LoadMoreBtn(`load-more`, onLoadMoreBtn);

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
    // console.log(hits);
    // console.log(totalHits);

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

  refs.galleryEl.insertAdjacentHTML(`beforeend`, images); 
};

async function onLoadMoreBtn() {
  try {
    const { hits, totalHits } = await PicturesApi.fetchPhotoCards();
    console.log(hits);
    console.log(totalHits);

    renderPhotoCards(hits)
  } catch (error) {
    notifySomethingIsWrong();
  }
}


