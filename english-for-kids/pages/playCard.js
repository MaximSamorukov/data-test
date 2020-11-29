import './style/playCard.css';

export default function playCard(context, data) {
  // console.log(context);
  const container = document.createElement('div');
  const card = document.createElement('div');
  const innerWord = document.createElement('b');
  innerWord.innerText = data.english;
  card.appendChild(innerWord);
  // container.className = chosen ? 'play-card-container english' : 'play-card-container russian';
  container.className = 'play-card-container english';
  card.className = 'play-card';
  container.appendChild(card);
  container.addEventListener('mousedown', (e) => {
    // console.log(this);
    container.className = 'play-card-container russian';
    innerWord.innerText = data.russian;
  });
  container.addEventListener('mouseup', (e) => {
    container.className = 'play-card-container english';
    innerWord.innerText = data.english;
  });
  return container;

}