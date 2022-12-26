import { Notify } from 'notiflix/build/notiflix-notify-aio';

export function notifySearchIsEmpty() {
  Notify.warning(
    'Search is empty. Please enter some name of pfotos.'
  );
}

export function notifySomethingIsWrong() {
  Notify.failure(
    'Sorry, something is wrong'
  );
}

export function notifyChangeSearchQuery() {
  Notify.warning(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

export function notifySuccessSearch(totalHits) {
  Notify.success(
    `Hooray! We found ${totalHits} images.`
  );
}
