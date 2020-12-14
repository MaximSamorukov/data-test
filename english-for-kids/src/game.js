// import categoryConstructor from '../categories/categories';
import btnBeginGame from '../pages/btnBeginGame';
import btnTrainPlay from '../pages/btnTrainPlay';
import btnGamburger from '../pages/btnGamburger';
import getPageNameFunc from '../pages/getPageNameFunc';
import showInGameAnswers from '../pages/showInGameAnswers';
import btnComplexRepeat from '../pages/btnComplexRepeat';
import btnResetStatistics from '../pages/btnResetStatistics';
import makeBtnRepeat from '../pages/makeBtnRepeat';
import main from '../pages/main';
import menu from '../pages/menu';
import winLoseScreen from '../pages/winLoseScreen';
import category from '../pages/category';
import statistics from '../pages/statistics';
import { render } from '../index';

// The class that includes the state flags.
// The state defines the logic of elements.
// the state flags can be changed from any function where it is as an argument
const Game = {
  pages: ['main', 'statistics'], // application pages
  categories: ['space', 'materials', 'it', 'music', 'tools', 'furniture', 'sport', 'science', 'dress'], // application categories
  isPlay: false, // application mode (true / false)
  inGame: false, // shows if we play or not in game mode (true / false)
  currentCategory: false, // shows the category that is shown. If the page is main or statistics then the value is false
  currentPage: 'main', // (main || statistics)
  showMenu: false, // if true - left side menu is shown, if false - left side menu is not shown
  showWinScreen: false, // if true - application shows win / lose screen
  gameResult: false, //
  currentPlayArray: [], // in play mode this array includes data with paths (words, translations, images, sound) on current play category
  currentPlayWord: '', // in play mode here is the word that is pronounced
  currentStat: [], // array with current game statistics. After the end of the game it will be passed to localstorage
  sort: '', // sort field - column title
  sortDirection: '', // sort direction (up | down | '')

  init() {  // function that initiate DOM reconstruction because of state change
    render(this);
  },
  // methods that return dom elements based to index.js
  // Button Reset in page statistics
  makeReset() {
    return btnResetStatistics(this);
  },
  // Button Repeat in page statistics
  makeComplexRepeat() {
    return btnComplexRepeat(this);
  },
  // Button Repeat in play mode to repeat the pronunciation
  makeRepeat() {
    return makeBtnRepeat(this);
  },
  // element that shows correct and incorrect answers while in game
  getStars() {
    return showInGameAnswers(this);
  },
  // element that returns the dom element with page name
  getPageName() {
    return getPageNameFunc(this);
  },
  // button Train / Play - to switch the mode
  btnTrainAndPlay() {
    return btnTrainPlay(this);
  },
  // button to start the game in game mode
  btnBeginTheGame() {
    return btnBeginGame(this);
  },
  // button to show left-side menu
  btnTheGamburger() {
    return btnGamburger(this);
  },
  // left-side menu
  showMenuFunc() {
    return menu(this);
  },
  // methods that constructs return container (current page because of current page)
  game() {
    if (this.showWinScreen === true) {
      const elWin = document.createElement('div');
      elWin.className = 'win-win-cont';
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
