// import Notiflix from 'notiflix';
// import 'notiflix/dist/notiflix-3.2.5.min.css';
// import getRefs from './get-refs';
// import {  renderPhotoCards } from './index';
const axios = require('axios').default;

axios.defaults.baseURL = `https://pixabay.com/api/`;
const PIXABAY_KEY = `32269625-571fed7951f84920c060dc68c`;

export default class PicturesApi {
  constructor() {
    this.searchQuery = ``;
    this.page = 1;
  }

  async fetchPhotoCards() {
    const options = new URLSearchParams ({
      key: PIXABAY_KEY,
      q: this.searchQuery, 
      page: this.page, 
      image_type: `photo`,
      orientation: `horizontal`,
      safesearch: true,
      per_page: 40,
    });
    this.pageIncrement();
  
    try {
      const {data} = await axios.get(`?${options}`);
      // console.log(data);
      return data;
  
    } catch (error) {
      console.log(error);
    }
  }

  pageIncrement() {
    this.page += 1;
  }

  pageReset() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newSearchQuery) {
    this.searchQuery = newSearchQuery;
  }
}





