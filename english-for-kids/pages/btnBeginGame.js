import './style/btnBeginGame.css';

export default function btnBeginGame(context) {
  const { isPlay } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = isPlay ? 'btn-begin-game-container btn-begin-game-on' : 'btn-begin-game-container btn-begin-game-off';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-begin-game';
  btn.innerText = isPlay ? "Game" : "Train";
  btn.addEventListener('click', (e) => {
    context.isPlay = !context.isPlay;
    context.init();
  });
  return btnContainer;
}