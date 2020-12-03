import './style/winLose.css';


export default function winLoseScreen(context) {
  const container = document.createElement('div');
  container.className = 'win-container';
  const showResult = document.createElement('div');
  showResult.className = context.gameResult ? 'result-div result-win' : 'result-div result-lose';
  const winPhrase = 'You WIN!!!\nKrasavchik!';
  const losePhrase = "You Lose!!!\nTry one more time!\nYou'll win!!!";
  showResult.innerText = context.gameResult ? winPhrase : losePhrase;
  container.appendChild(showResult);
  container.addEventListener('click', () => {
    context.showWinScreen = false;
    context.currentCategory = false;
    context.currentPage = 'main';
    context.currentPlayArray = [];
    context.currentPlayWord = '';
    context.currentStat = [];
    context.init();
  });

  return container;
}