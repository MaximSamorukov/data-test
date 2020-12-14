import './style/showInGameResults.css';

// Function constructs the dom element that is used in play mode to show how many
// corrects and ,incorrect answers were made
// Argument: this from './src/game.js'
export default function showInGameAnswers(context) {
  const { currentStat } = context;
  const container = document.createElement('div');
  container.className = 'in-game-results-container';
  let arr = [...currentStat];
  if (currentStat.length > 11) {
    arr = currentStat.slice(currentStat.length - 11, currentStat.length);
  }
  arr.map((i) => {
    const star = document.createElement('div');
    star.className = i === true ? 'star-win' : 'star-lose';
    container.appendChild(star);
    return i;
  });

  return container;
}