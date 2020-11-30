import { Game } from './src/game.js';

import './pages/style/index.css'

function render() {
  // document.body.remove();
  const root = document.querySelector('.container');
  root.innerHTML = null;
  const rootContainer = document.createElement('div');
  const topContainer = document.createElement('div');
  topContainer.className = 'top-container';
  rootContainer.className = 'root-container';
  const view = Game.game();
  const menu = Game.showMenuFunc();
  const btnTrainPlay = Game.btnTrainAndPlay();
  const btnGamburger = Game.btnTheGamburger();
  const btnBeginGame = Game.btnBeginTheGame();
  topContainer.appendChild(btnGamburger);
  topContainer.appendChild(btnBeginGame);
  topContainer.appendChild(btnTrainPlay);
  rootContainer.appendChild(view);
  root.appendChild(menu);
  root.appendChild(topContainer);
  root.appendChild(rootContainer);
  document.body.appendChild(root);
}

window.addEventListener('DOMContentLoaded', () => {
  render();
})

export { render }