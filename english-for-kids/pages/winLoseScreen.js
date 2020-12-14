import './style/winLose.css';

// Function created win or lose screen that is shown as a result of a game.
// Argument: this from './src/game.js'
export default function winLoseScreen(context) {
  const { gameResult, currentStat } = context;
  const container = document.createElement('div');
  container.className = 'win-container';
  const showResult = document.createElement('div');
  showResult.className = gameResult ? 'result-div result-win' : 'result-div result-lose';
  const winPhrase = 'You WIN!!!\nKrasavchik!';
  const losePhrase = "You Lose!!!\nTry one more time!\nYou'll win!!!";
  showResult.innerText = gameResult ? winPhrase : losePhrase;
  container.appendChild(showResult);
  if (!gameResult) {
    const errors = document.createElement('div');
    errors.className = 'win-container-errors';
    const value = currentStat.filter((i) => i === false).length;
    errors.textContent = `Errors: ${value}.`;
    container.appendChild(errors);
  }

  container.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
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