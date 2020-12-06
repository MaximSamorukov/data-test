// import categoryConstructor from '../categories/categories';
import btnBeginGame from '../pages/btnBeginGame';
import btnTrainPlay from '../pages/btnTrainPlay';
import btnGamburger from '../pages/btnGamburger';
import getPageNameFunc from '../pages/getPageNameFunc';
import showInGameAnswers from '../pages/showInGameAnswers'
import main from '../pages/main';
import menu from '../pages/menu';
import winLoseScreen from '../pages/winLoseScreen';
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
  showWinScreen: false,
  gameResult: false,
  currentPlayArray: [],
  currentPlayWord: '',
  currentStat: [],
  sort: '',
  sortDirection: '',

  init() {
    render(this);
  },

  getStars() {
    return showInGameAnswers(this);
  },

  getPageName() {
    return getPageNameFunc(this);
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
    if (this.showWinScreen === true) {
      const elWin = document.createElement('div');
      // const btn = btnBeginGame(this);
      const element = winLoseScreen(this);
      elWin.appendChild(element);
      // el.appendChild(btn);
      return elWin;
    }
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
