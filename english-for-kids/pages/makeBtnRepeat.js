import './style/btnRepeat.css';
import { theGame } from './service';
// Function constructs and returns button 'Repeat' that is used in play mode in the case player wants
// to repeat the pronunciation of the word.
// The argument is 'this' from './src/game.js'.
// The button works only in the case of game mode (this.inGame === true).

export default function makeBtnRepeat(context) {
  const { inGame, isPlay, currentPage } = context;
  const storage = window.localStorage;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-repeat';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-repeat-sound';
  btn.innerText = "Repeat";
  btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    if (!inGame) {
      return;
    }
    const adress = JSON.parse(storage.getItem('sound'));
    const b = new Audio(adress);
    b.play();
  });
  return btnContainer;
}