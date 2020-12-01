import './style/playCard.css';
import { theGame } from './service';

export default function playCard(context, data) {
  // console.log(context);
  const { isPlay } = context;
  const container = document.createElement('div');
  const card = document.createElement('div');
  const innerWord = document.createElement('b');
  innerWord.innerText = isPlay ? data.russian : data.english;
  card.appendChild(innerWord);
  container.className = isPlay ? 'play-card-container russian' : 'play-card-container english';
  // container.className = 'play-card-container english';
  card.className = 'play-card';
  container.appendChild(card);
  if (!isPlay) {
    container.addEventListener('mousedown', (e) => {
      const sound = new Audio(data.sound);
      sound.play();
      container.className = 'play-card-container russian';
      innerWord.innerText = data.russian;
    });
    container.addEventListener('mouseup', (e) => {
      container.className = 'play-card-container english';
      innerWord.innerText = data.english;
    });
  } else {
    container.addEventListener('mousedown', (e) => {
      // const sound = new Audio(data.sound);
      // sound.play();
      theGame(context, data);
      container.className = 'play-card-container english';
      innerWord.innerText = data.english;
    });
    container.addEventListener('mouseup', (e) => {
      container.className = 'play-card-container russian';
      innerWord.innerText = data.russian;
    });
  }
  return container;

}