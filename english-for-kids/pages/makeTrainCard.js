import './style/makeTrainCard.css';
import { trainStat } from './service';

export default function makeTrainCard(context, data) {

  const container = document.createElement('div');
  container.className = 'train-card-container english';

  const card = document.createElement('div');
  card.className = 'train-card-innercont';

  const cardFrontface = document.createElement('div'); // card
  cardFrontface.className = 'train-card face';

  const cardBackface = document.createElement('div');
  cardBackface.className = 'train-card-back face';

  const cardPicture = document.createElement('div');
  cardPicture.className = 'train-card-picture';
  cardPicture.style.backgroundImage = `url(${data.image})`;
  cardPicture.style.backgroundRepeat = 'no-repeat';
  cardPicture.style.backgroundPosition = 'center';
  cardPicture.style.backgroundSize = 'contain';

  const cardBackPicture = document.createElement('div');
  cardBackPicture.className = 'train-card-picture-back';
  cardBackPicture.style.backgroundImage = `url(${data.image})`;
  cardBackPicture.style.backgroundRepeat = 'no-repeat';
  cardBackPicture.style.backgroundPosition = 'center';
  cardBackPicture.style.backgroundSize = 'contain';

  const cardWord = document.createElement('div');
  cardWord.className = 'train-card-word';

  const cardRusWord = document.createElement('div');
  cardRusWord.className = 'train-card-word-back';

  const reverseBtn = document.createElement('div');
  reverseBtn.className = 'train-card-reverse';


  const innerWord = document.createElement('b');
  innerWord.innerText = data.english;

  const innerRusWord = document.createElement('b');
  innerRusWord.innerText = data.russian;

  cardRusWord.appendChild(innerRusWord);

  cardWord.appendChild(innerWord);

  cardFrontface.appendChild(cardPicture);
  cardFrontface.appendChild(cardWord);
  cardFrontface.appendChild(reverseBtn);

  cardBackface.appendChild(cardBackPicture);
  cardBackface.appendChild(cardRusWord);


  card.appendChild(cardFrontface);
  card.appendChild(cardBackface);
  container.appendChild(card);

  reverseBtn.addEventListener('mousedown', (e) => {
    e.stopPropagation();
    e.preventDefault();
    card.className = card.className.includes('flipped') ? 'train-card-innercont' : 'train-card-innercont flipped';
    trainStat(context, data);
  });
  container.addEventListener('mousedown', (e) => {
    const sound = new Audio(data.sound);
    sound.play();
  });
  reverseBtn.addEventListener('mouseleave', (e) => {
    card.className = 'train-card-innercont';
  });

  reverseBtn.addEventListener('mouseup', (e) => {
    card.className = 'train-card-innercont';
  });

  reverseBtn.addEventListener('touchstart', (e) => {
    e.stopPropagation();
    e.preventDefault();
    card.className = card.className.includes('flipped') ? 'train-card-innercont' : 'train-card-innercont flipped';
    trainStat(context, data);
  });

  reverseBtn.addEventListener('touchend', (e) => {
    card.className = 'train-card-innercont';
  });

  return container;

}