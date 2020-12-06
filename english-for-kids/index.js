import { Game } from './src/game.js';

import './pages/style/index.css'

function render(context) {
  // const { currentPage } = context;
  console.log(context);
  // document.body.remove();
  const root = document.querySelector('.container');
  root.innerHTML = null;
  const rootContainer = document.createElement('div');
  const topContainer = document.createElement('div');
  const topContainerSecond = document.createElement('div');
  const theMostTopContainer = document.createElement('div');
  theMostTopContainer.className = 'top-top-container';
  topContainer.className = 'top-container';

  topContainerSecond.className = 'top-container-second';
  const stars = Game.getStars();
  topContainerSecond.appendChild(stars);

  theMostTopContainer.appendChild(topContainer);
  theMostTopContainer.appendChild(topContainerSecond);
  rootContainer.className = 'root-container';
  const view = Game.game();
  const menu = Game.showMenuFunc();
  const pageName = Game.getPageName();
  const btnTrainPlay = Game.btnTrainAndPlay();
  const btnGamburger = Game.btnTheGamburger();
  const btnBeginGame = Game.btnBeginTheGame();
  topContainer.appendChild(btnGamburger);
  topContainer.appendChild(pageName);
  topContainer.appendChild(btnBeginGame);
  topContainer.appendChild(btnTrainPlay);
  rootContainer.appendChild(view);
  root.appendChild(menu);
  root.appendChild(theMostTopContainer);
  root.appendChild(rootContainer);
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
  render();
})

export { render }