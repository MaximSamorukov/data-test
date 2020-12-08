import './style/btnResetStatistics.css';
import { theGame } from './service';

export default function btnResetStatistics(context) {

  const { inGame, isPlay, currentPage } = context;
  // if (currentPage !== 'statistics') {
  //   return ;
  // }
  // const storage = window.localStorage;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-reset-container';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-reset-repeat';
  btn.innerText = "Reset";
  btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    // storage.setItem('sound', JSON.stringify(''));
    // context.inGame = (isPlay && currentPage === 'category') ? !context.inGame : false;
    // context.init();
    // if (context.inGame === true) {
    //   context.currentPlayArray = [];

    //   theGame(context);
    // }
    const storage = window.localStorage;
    storage.setItem('englishForKidsStat', JSON.stringify([]));
    // console.log(context)
  });
  return btnContainer;
}