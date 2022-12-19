

export default function getRefs() {
  return {
    searchFormEl: document.querySelector(`#search-form`),
    inputEl: document.querySelector(`input[name=searchQuery]`),
    galleryEl: document.querySelector(`.gallery`),
    loadMoreBtnEl: document.querySelector(`.load-more`)
  }  
};