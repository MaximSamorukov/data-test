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

  // const cardBackPicture = document.createElement('div');
  // cardBackPicture.className = 'play-card-picture-back';
  // cardBackPicture.style.backgroundImage = `url(${data.image})`;
  // cardBackPicture.style.backgroundRepeat = 'no-repeat';
  // cardBackPicture.style.backgroundPosition = 'center';
  // cardBackPicture.style.backgroundSize = 'contain';

  // const cardWord = document.createElement('div');
  // cardWord.className = 'play-card-word';

  // const cardRusWord = document.createElement('div');
  // cardRusWord.className = 'play-card-word-back';

  // const reverseBtn = document.createElement('div');
  // reverseBtn.className = 'play-card-reverse';


  // const innerWord = document.createElement('b');
  // innerWord.innerText = data.english;

  // const innerRusWord = document.createElement('b');
  // innerRusWord.innerText = data.russian;

  // cardRusWord.appendChild(innerRusWord);

  // cardWord.appendChild(innerWord);

  cardFrontface.appendChild(cardPicture);
  // cardFrontface.appendChild(cardWord);
  // cardFrontface.appendChild(reverseBtn);

  // cardBackface.appendChild(cardBackPicture);
  // cardBackface.appendChild(cardRusWord);


  card.appendChild(cardFrontface);
  // card.appendChild(cardBackface);
  container.appendChild(card);

  // reverseBtn.addEventListener('mousedown', (e) => {
  //   e.stopPropagation();
  //   e.preventDefault();
  //   card.className = card.className.includes('flipped') ? 'play-card-innercont' : 'play-card-innercont flipped';
  // });
  container.addEventListener('click', (e) => {
    // const sound = new Audio(data.sound);
    // sound.play();
    if (!inGame) {
      return;
    };
    theGame(context, data); // added
  });
  // reverseBtn.addEventListener('mouseleave', (e) => {
  //   card.className = 'play-card-innercont';
  // });

  return container;

}