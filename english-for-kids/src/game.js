// import categoryConstructor from '../categories/categories';
import btnBeginGame from '../pages/btnBeginGame';
import main from '../pages/main';
import category from '../pages/category';
import statistics from '../pages/statistics';
import { render } from '../index';

const Game = {
  categories: ['space', 'materials', 'it', 'music', 'tools', 'furniture', 'sport', 'science', 'dress'],
  isPlay: false,
  currentCategory: false,
  currentPage: 'main',

  init() {
    render();
  },

  game() {
    if (this.currentPage === 'main') {
      const el = document.createElement('div');
      // const btn = btnBeginGame(this);
      const collection = main(this);
      el.appendChild(collection);
      // el.appendChild(btn);
      return el;
    }
    if (this.currentPage === 'category') {
      console.log('category');
      const elCat = document.createElement('div');
      // const btn = btnBeginGame(this);
      const page = category(this);
      elCat.appendChild(page);
      // el.appendChild(btn);
      return elCat;
    }
    if (this.currentPage === 'statistics') {
      console.log('statistics');
    }
    else {

    }
  }
}
export { Game };
