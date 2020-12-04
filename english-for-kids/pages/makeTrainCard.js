export default function makeTrainCard(context, data) {

  const cardPicture = document.createElement('div');
  cardPicture.className = 'play-card-picture';
  const cardWord = document.createElement('div');
  cardWord.className = 'play-card-word';
  const reverseBtn = document.createElement('div');
  reverseBtn.className = 'play-card-reverse';
  cardPicture.style.backgroundImage = `url(${data.image})`;
  cardPicture.style.backgroundRepeat = 'no-repeat';
  cardPicture.style.backgroundPosition = 'center';
  const container = document.createElement('div');
  const card = document.createElement('div');
  const innerWord = document.createElement('b');
  innerWord.innerText = isPlay ? data.russian : data.english;
  cardWord.appendChild(innerWord);
  container.className = isPlay ? 'play-card-container russian' : 'play-card-container english';
  // container.className = 'play-card-container english';
  card.className = 'play-card';
  card.appendChild(cardPicture);
  card.appendChild(cardWord);
  card.appendChild(reverseBtn);
  container.appendChild(card);



  if (!isPlay) {
    reverseBtn.addEventListener('mousedown', (e) => {
      e.stopPropagation();
      e.preventDefault();
      container.className = 'play-card-container russian';
      innerWord.innerText = data.russian;
    });
    container.addEventListener('mousedown', (e) => {
      const sound = new Audio(data.sound);
      sound.play();
    });
    reverseBtn.addEventListener('mouseup', (e) => {
      container.className = 'play-card-container english';
      innerWord.innerText = data.english;
    });
  } else {
    container.addEventListener('mousedown', (e) => {
      if (!inGame) {
        return;
      }
      theGame(context, data);
      container.className = 'play-card-container english';
      innerWord.innerText = data.english;
    });
    container.addEventListener('mouseup', (e) => {
      if (!inGame) {
        return;
      }
      container.className = 'play-card-container russian';
      innerWord.innerText = data.russian;
    });
  }
  return container;

}