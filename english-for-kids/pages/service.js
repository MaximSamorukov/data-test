function menuItem(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category';
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function menuPage(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category';
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function theGame(context, data = false) {
  const storage = window.localStorage;
  let { currentCategory, isPlay, currentPage, currentStat, inGame, currentPlayArray } = context;

  if (data !== false) {
    const answer = data.english;
    const correctAnswer = context.currentPlayWord;
    const word = correctAnswer;
    const verdict = answer === correctAnswer;
    const toString = verdict ? 'Cool' : 'Not so cool';
    const chankOfData = {
      verdict,
      currentCategory,
      word
    };
    context.currentStat.push(verdict); // !!! need to clear every time the inGame is false

    const stat = storage.getItem('englishForKidsStat');
    if (!stat) {
      storage.setItem('englishForKidsStat', JSON.stringify([chankOfData]));
    }
    else {
      const procStat = JSON.parse(stat);
      procStat.push(chankOfData);
      storage.setItem('englishForKidsStat', JSON.stringify(procStat));
    };
    if (currentPlayArray.length === 0) {
      context.inGame = false;
      context.currentPlayArray = [];
      context.currentPlayWord = '';
      console.log(currentStat);
      console.log('you have won!!!');
      context.init();
      return;
    };
  };
  console.log(currentPlayArray.length);
  if (isPlay && currentPage === 'category' && currentPlayArray.length !== 0) {
    // context.init();
    const random = Math.floor(Math.random() * currentPlayArray.length)
    const randomElement = currentPlayArray[random];
    currentPlayArray = currentPlayArray.filter((i, index) => index !== random);
    context.currentPlayArray = [...currentPlayArray];
    context.currentPlayWord = randomElement.english;
    const b = new Audio(randomElement.sound);
    b.play();
    if (currentPlayArray.length === 0) {
      return;
    };
  }
  else if (isPlay && currentPage === 'category' && currentPlayArray.length === 0) {
    // context.init();
    const data = storage.getItem('englishForKids');
    const arrayOfData = JSON.parse(data);
    let workArrayOfData = [...arrayOfData];
    const random = Math.floor(Math.random() * workArrayOfData.length);
    const randomElement = workArrayOfData[random];
    workArrayOfData = workArrayOfData.filter((i, index) => index !== random);
    context.currentPlayArray = [...workArrayOfData];
    context.currentPlayWord = randomElement.english;
    const a = new Audio(randomElement.sound);
    a.play();
  }

  // где-то теряю одну хрень
}

export { menuItem, menuPage, theGame };