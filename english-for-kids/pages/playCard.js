import './style/playCard.css';

export default function playCard(context, word) {
  const container = document.createElement('div');
  const card = document.createElement('div');
  const innerWord = document.createElement('b');
  innerWord.innerText = word;
  card.appendChild(innerWord);
  // container.className = chosen ? 'play-card-container english' : 'play-card-container russian';
  container.className = 'play-card-container english';
  card.className = 'play-card';
  container.appendChild(card);
  container.addEventListener('click', (e) => {
    // context.currentCategory = chosen ? false : word;
    // context.init();
  })
  return container;

}