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
  pages: ['main', 'statistics'],
  categories: ['space', 'materials', 'it', 'music', 'tools', 'furniture', 'sport', 'science', 'dress'],
  isPlay: false,
  inGame: false, // This is not correct!!!
  currentCategory: false,
  currentPage: 'main',
  showMenu: false,
  currentPlayArray: [],
  currentPlayWord: '',
  currentStat: [],

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
      const elCat = document.createElement('div');
      // const btn = btnBeginGame(this);
      const page = category(this);
      elCat.appendChild(page);
      // el.appendChild(btn);
      return elCat;
    }
    if (this.currentPage === 'statistics') {
      console.log('statistics');
      const elStat = document.createElement('div');
      // const btn = btnBeginGame(this);
      const collection = statistics(this);
      elStat.appendChild(collection);
      // el.appendChild(btn);
      return elStat;
    }
    else {

    }
  }
}
export { Game };
