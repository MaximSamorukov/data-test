import './style/btnComplexRepeat.css';
import { theGame } from './service';

export default function btnComplexRepeat(context) {

  const { inGame, isPlay, currentPage } = context;
  // if (currentPage !== 'statistics') {
  //   return ;
  // }
  // const storage = window.localStorage;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-complex-container';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-complex-repeat';
  btn.innerText = "Repeat";
  btn.addEventListener('click', (e) => {
    // storage.setItem('sound', JSON.stringify(''));
    // context.inGame = (isPlay && currentPage === 'category') ? !context.inGame : false;
    // context.init();
    // if (context.inGame === true) {
    //   context.currentPlayArray = [];

    //   theGame(context);
    // }
    console.log(context)
  });
  return btnContainer;
}