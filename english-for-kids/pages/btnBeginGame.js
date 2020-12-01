import './style/btnBeginGame.css';
import { theGame } from './service';

export default function btnBeginGame(context) {
  const { inGame, isPlay, currentPage } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = (isPlay && inGame && currentPage === 'category') ? 'btn-begin-game-container btn-begin-game-on' : 'btn-begin-game-container btn-begin-game-off';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-begin-game';
  btn.innerText = (isPlay && inGame && currentPage === 'category') ? "Game" : "Out of Game";
  btn.addEventListener('click', (e) => {
    context.inGame = (isPlay && currentPage === 'category') ? !context.inGame : false;
    context.init();
    if (context.inGame === true) {
      theGame(context);
    }
  });
  return btnContainer;
}