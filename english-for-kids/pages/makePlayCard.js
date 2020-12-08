import './style/makePlayCard.css';
import { theGame } from './service';

export default function makePlayCard(context, data) {
  const { isPlay, inGame } = context;
  const container = document.createElement('div');
  container.className = 'play-card-container english';

  const card = document.createElement('div');
  card.className = 'play-card-innercont';

  const cardFrontface = document.createElement('div'); // card
  cardFrontface.className = 'play-card face';

  // const cardBackface = document.createElement('div');
  // cardBackface.className = 'play-card-back face';

  const cardPicture = document.createElement('div');
  cardPicture.className = 'play-card-picture';
  cardPicture.style.backgroundImage = `url(${data.image})`;
  cardPicture.style.backgroundRepeat = 'no-repeat';
  cardPicture.style.backgroundPosition = 'center';
  cardPicture.style.backgroundSize = 'contain';

  cardFrontface.appendChild(cardPicture);
  card.appendChild(cardFrontface);
  container.appendChild(card);

  container.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!inGame) {
      return;
    };
    const element = (e.target.parentNode.parentNode);
    const fail = new Audio('../categories/assets/fail.wav');
    if (element.className.includes('block')) {
      fail.play();
      return;
    } else {
      theGame(context, data, e); // added
    };
  });

  return container;

}