import './style/btnResetStatistics.css';
import { theGame } from './service';

// Function constructs and returns button "Reset" that is used in Statistics page to reset the results. Argument is "this" from "./src/game.js"
export default function btnResetStatistics(context) {
  const { inGame, isPlay, currentPage } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-reset-container';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-reset-repeat';
  btn.innerText = "Reset";
  btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    const storage = window.localStorage;
    storage.setItem('englishForKidsStat', JSON.stringify([]));
  });
  return btnContainer;
}