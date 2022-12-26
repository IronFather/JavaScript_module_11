import Notiflix from 'notiflix';
import 'notiflix/dist/notiflix-3.2.5.min.css';

export function notifySearchIsEmpty() {
  Notiflix.Notify.warning(
    'Search is empty. Please enter some name of pfotos.'
  );
}

export function notifySomethingIsWrong() {
  Notiflix.Notify.failure(
    'Sorry, something is wrong'
  );
}

export function notifyChangeSearchQuery() {
  Notiflix.Notify.info(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

