import { Game } from './src/game.js';

import './pages/style/index.css'
// Function that constructs the dom with methods from game.js and based on the state
// and appends it to the body.

function render(context) {
  const root = document.querySelector('.container');
  root.innerHTML = null;
  const rootContainer = document.createElement('div');
  const topContainer = document.createElement('div');
  topContainer.className = 'top-container';
  rootContainer.className = 'root-container';
  const view = Game.game();
  const menu = Game.showMenuFunc();
  const pageName = Game.getPageName();
  const btnTrainPlay = Game.btnTrainAndPlay();
  const btnGamburger = Game.btnTheGamburger();
  const btnBeginGame = Game.btnBeginTheGame();
  const btnReset = Game.makeReset();
  const btnRepeatComplexWords = Game.makeComplexRepeat();
  topContainer.appendChild(btnGamburger);
  topContainer.appendChild(pageName);
  if (context && context.currentPage === 'statistics') {
    topContainer.appendChild(btnReset);
    topContainer.appendChild(btnRepeatComplexWords);
  }
  if (context && !context.inGame) {
    topContainer.appendChild(btnBeginGame);
  }
  topContainer.appendChild(btnTrainPlay);
  rootContainer.appendChild(view);
  root.appendChild(menu);
  root.appendChild(topContainer);
  root.appendChild(rootContainer);
  if (context && Object.keys(context).includes('currentPage') && context.currentPage === 'category') {
    const topContainerSecond = document.createElement('div');
    topContainerSecond.className = 'top-container-second';
    const stars = Game.getStars();
    topContainerSecond.appendChild(stars);
    topContainerSecond.appendChild(Game.makeRepeat());
    topContainer.addEventListener('click', (e) => {
      return;
    })
    root.appendChild(topContainerSecond);
  };
  document.body.appendChild(root);

  const storage = window.localStorage;
  const stat = storage.getItem('englishForKidsStat');
  if (!stat) {
    storage.setItem('englishForKidsStat', JSON.stringify([{
      verdict: false,
      currentCategory: '',
      word: '',
      mode: '',
    }]));
  }

}

window.addEventListener('DOMContentLoaded', () => {
  Game.init();
})

export { render }