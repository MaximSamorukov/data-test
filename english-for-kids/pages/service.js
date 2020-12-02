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
}

function makeCategoryItemForStatistics(item) {
  // console.log(item);
  const container = document.createElement('div');
  container.className = 'statistics-category-container';
  const title = document.createElement('div');
  title.className = 'statistics-category-title';
  title.textContent = Object.keys(item)[0];
  container.appendChild(title);
  const firstRow = document.createElement('div');
  firstRow.className = 'row-stat-title';
  container.appendChild(firstRow);

  const fColumnTitle = document.createElement('div');
  fColumnTitle.className = 'first-stat-column-title stat-column-title';
  fColumnTitle.textContent = '#';

  const secondColumnTitle = document.createElement('div');
  secondColumnTitle.className = 'second-stat-column-title stat-column-title';
  secondColumnTitle.textContent = 'Word';

  const thirdColumnTitle = document.createElement('div');
  thirdColumnTitle.className = 'third-stat-column-title stat-column-title';
  thirdColumnTitle.textContent = 'Corr.';

  const fourthColumnTitle = document.createElement('div');
  fourthColumnTitle.className = 'fourth-stat-column-title stat-column-title';
  fourthColumnTitle.textContent = 'Incorr.';

  firstRow.appendChild(fColumnTitle);
  firstRow.appendChild(secondColumnTitle);
  firstRow.appendChild(thirdColumnTitle);
  firstRow.appendChild(fourthColumnTitle);

  container.className = 'statistics-category-container';
  const wordsContainer = document.createElement('div');
  wordsContainer.className = 'statistics-words-container';
  container.appendChild(wordsContainer);
  makeLinesStatistics(item[Object.keys(item)[0]])
    .map((i) => wordsContainer.appendChild(i));
  // console.log(words);

  return container;
}

function makeLinesStatistics(items) {

  // console.log(items);
  if (items === {}) {
    const rowEmpty = document.createElement('div');
    rowEmpty.className = 'row-stat';
    return [rowEmpty];
  }
  const returnValue = Object.keys(items).map((i, index) => {
    const fColumn = document.createElement('div');
    fColumn.className = 'first-stat-column stat-column';
    fColumn.textContent = index + 1;

    const secondColumn = document.createElement('div');
    secondColumn.className = 'second-stat-column stat-column';
    secondColumn.textContent = i;

    const thirdColumn = document.createElement('div');
    thirdColumn.className = 'third-stat-column stat-column';
    thirdColumn.textContent = items[i].true;

    const fourthColumn = document.createElement('div');
    fourthColumn.className = 'fourth-stat-column stat-column';
    fourthColumn.textContent = items[i].false;

    const row = document.createElement('div');
    row.className = 'row-stat';
    row.appendChild(fColumn);
    row.appendChild(secondColumn);
    row.appendChild(thirdColumn);
    row.appendChild(fourthColumn);
    return row;
  })
  return returnValue;
}

export { menuItem, menuPage, theGame, makeCategoryItemForStatistics };