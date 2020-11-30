// import categoryConstructor from '../categories/categories';
import btnBeginGame from '../pages/btnBeginGame';
import btnTrainPlay from '../pages/btnTrainPlay';
import btnGamburger from '../pages/btnGamburger';
import main from '../pages/main';
import menu from '../pages/menu';
import category from '../pages/category';
import statistics from '../pages/statistics';
import { render } from '../index';

const Game = {
  categories: ['space', 'materials', 'it', 'music', 'tools', 'furniture', 'sport', 'science', 'dress'],
  isPlay: false,
  inGame: false, // This is not correct!!!
  currentCategory: false,
  currentPage: 'main',
  showMenu: false,

  init() {
    render();
  },

  btnTrainAndPlay() {
    return btnTrainPlay(this);
  },

  btnBeginTheGame() {
    return btnBeginGame(this);
  },

  btnTheGamburger() {
    return btnGamburger(this);
  },

  showMenuFunc() {
    return menu(this);
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
