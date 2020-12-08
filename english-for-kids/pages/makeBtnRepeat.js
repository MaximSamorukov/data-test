import './style/btnRepeat.css';
import { theGame } from './service';

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