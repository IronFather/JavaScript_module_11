import './css/styles.css';

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import getRefs from './get-refs';

import getPicturesApi from './fetchPhotoCards';

import { 
  notifySearchIsEmpty, 
  notifySomethingIsWrong, 
  notifyChangeSearchQuery, 
  notifySuccessSearch,
  notifyEndTotalHits
 } from './css/notifications';

import { LoadMoreBtn } from './loadMoreBtn';

const refs = getRefs();

refs.searchFormEl.addEventListener(`submit`, onSearchFormSubmit);
const PicturesApi = new getPicturesApi();
const loadMoreBtn = new LoadMoreBtn(`load-more`, onLoadMoreBtn);
let lightbox = new SimpleLightbox('.gallery a', {
  animationSpeed: 250,
});

async function onSearchFormSubmit(e) {
  e.preventDefault();

  PicturesApi.query =  e.currentTarget.elements.searchQuery.value.trim();
  // console.log(PicturesApi.query);

  if (PicturesApi.query === ``) {
    notifySearchIsEmpty();
    return;
  };

  PicturesApi.pageReset();

  try {
    const { hits, totalHits } = await PicturesApi.fetchPhotoCards();
    // console.log(hits);
    // console.log(totalHits);

    if(totalHits === 0) {
      notifyChangeSearchQuery();
      refs.galleryEl.innerHTML = ``;
      loadMoreBtn.hide();
      return;
    }

    notifySuccessSearch(totalHits);
    renderPhotoCards(hits);
    lightbox.refresh();
    loadMoreBtn.show();

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
      <a href="${largeImageURL}">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
      </a>
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
  loadMoreBtn.loading();

  try {
    const { hits, totalHits } = await PicturesApi.fetchPhotoCards();
    // console.log(hits);
    // console.log(totalHits);

    if (hits.length < 40) {
      loadMoreBtn.hide();
      notifyEndTotalHits();
    }

    renderPhotoCards(hits);
    lightbox.refresh();
    loadMoreBtn.endLoading();

  } catch (error) {
    notifySomethingIsWrong();
  }
}


