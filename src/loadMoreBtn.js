export class LoadMoreBtn {
  constructor (className, onLoadMoreBtnClick) {
    const markup = `<button type="button" class="${className}">Load more</button>
    </div>`;
    document.body.insertAdjacentHTML(`beforeend`, markup);
    this.LoadMoreBtnEl = document.querySelector(`.${className}`);
    this.LoadMoreBtnEl.addEventListener(`click`, onLoadMoreBtnClick);
  };

  hide() {
    this.LoadMoreBtnEl.style.display = `none`;
  };

  show() {
    this.LoadMoreBtnEl.style.display = `block`;
  };

  loading() {
    this.LoadMoreBtnEl.textContent = `loading...`;
  };

  endLoading() {
    this.LoadMoreBtnEl.textContent = `Load more`;
  };
}