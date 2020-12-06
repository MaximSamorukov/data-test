import './style/showInGameResults.css';
// import { theGame } from './service';

export default function showInGameAnswers(context) {
  const { currentStat } = context;
  console.log(currentStat);
  const container = document.createElement('div');
  container.className = 'in-game-results-container';
  currentStat.map((i) => {
    const star = document.createElement('div');
    star.className = i === true ? 'star-win' : 'star-lose';
    container.appendChild(star);
    return i;
  });

  return container;
}