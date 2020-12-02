import './style/btnTrainPlay.css';

export default function btnTrainPlay(context) {
  const { isPlay, inGame } = context;
  const btnContainer = document.createElement('div');
  btnContainer.className = isPlay ? 'btn-begin-game-container btn-begin-game-on' : 'btn-begin-game-container btn-begin-game-off';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-begin-game';
  btn.innerText = isPlay ? "Play" : "Train";
  btn.addEventListener('click', (e) => {
    context.isPlay = !context.isPlay;
    context.inGame = context.isPlay === false ? false : context.inGame;
    context.currentStat = context.inGame === false ? [] : context.currentStat;
    context.init();
  });
  return btnContainer;
}