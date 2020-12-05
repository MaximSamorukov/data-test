function menuItem(context, element) {
  const { currentCategory } = context;
  const elem = document.createElement('div');
  elem.className = currentCategory === element ? 'menu-item-category active-item' : 'menu-item-category';
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function menuPage(context, element) {
  const { currentPage } = context;
  const elem = document.createElement('div');
  elem.className = currentPage === element ? 'menu-item-category active-item' : 'menu-item-category';
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
    const mode = 'play';
    const verdict = answer === correctAnswer;
    const toString = verdict ? 'Cool' : 'Not so cool';
    const chankOfData = {
      verdict,
      currentCategory,
      word,
      mode
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
      const gameResult = !currentStat.includes(false);
      context.gameResult = gameResult;
      context.showWinScreen = true;
      // console.log('you have won!!!');
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
function makeTitle(context) {
  const container = document.createElement('div');
  container.className = 'statistics-category-container';
  const firstRow = document.createElement('div');
  firstRow.className = 'row-stat-title';
  container.appendChild(firstRow);

  const fColumnTitle = document.createElement('div');
  fColumnTitle.className = 'first-stat-column-title stat-column-title';
  fColumnTitle.textContent = '#';

  const secondColumnTitle = document.createElement('div');
  secondColumnTitle.className = 'second-stat-column-title stat-column-title';
  secondColumnTitle.textContent = 'Word';

  const translationColumnTitle = document.createElement('div');
  translationColumnTitle.className = 'trans-stat-column-title stat-column-title';
  translationColumnTitle.textContent = 'Trans.';

  const thirdColumnTitle = document.createElement('div');
  thirdColumnTitle.className = 'third-stat-column-title stat-column-title';
  thirdColumnTitle.textContent = 'Corr.';

  const fourthColumnTitle = document.createElement('div');
  fourthColumnTitle.className = 'fourth-stat-column-title stat-column-title';
  fourthColumnTitle.textContent = 'Incorr.';

  const fifthColumnTitle = document.createElement('div');
  fifthColumnTitle.className = 'fifth-stat-column-title stat-column-title';
  fifthColumnTitle.textContent = 'Category';

  const sixthColumnTitle = document.createElement('div');
  sixthColumnTitle.className = 'sixth-stat-column-title stat-column-title';
  sixthColumnTitle.textContent = '%';

  const seventhColumnTitle = document.createElement('div');
  seventhColumnTitle.className = 'seventh-stat-column-title stat-column-title';
  seventhColumnTitle.textContent = 'Trained';

  firstRow.appendChild(fColumnTitle);
  firstRow.appendChild(fifthColumnTitle);
  firstRow.appendChild(secondColumnTitle);
  firstRow.appendChild(translationColumnTitle);
  firstRow.appendChild(thirdColumnTitle);
  firstRow.appendChild(fourthColumnTitle);
  firstRow.appendChild(sixthColumnTitle);
  firstRow.appendChild(seventhColumnTitle);

  // fColumnTitle.addEventListener('click', (e) => {
  // changeSort('number', context);
  // });
  secondColumnTitle.addEventListener('click', (e) => {
    changeSort('english', context);
  });
  thirdColumnTitle.addEventListener('click', (e) => {
    changeSort('correct', context);
  });
  fourthColumnTitle.addEventListener('click', (e) => {
    changeSort('incorrect', context);
  });
  sixthColumnTitle.addEventListener('click', (e) => {
    changeSort('percent', context);
  });
  seventhColumnTitle.addEventListener('click', (e) => {
    changeSort('train', context);
  });
  fifthColumnTitle.addEventListener('click', (e) => {
    changeSort('category', context);
  });
  translationColumnTitle.addEventListener('click', (e) => {
    changeSort('russian', context);
  });
  return container;
}

// function makeCategoryItemForStatistics(item) {
// console.log(item);
// const container = document.createElement('div');
// const title = document.createElement('div');
// title.className = 'statistics-category-title';
// title.textContent = Object.keys(item)[0];
// container.appendChild(title);

// const wordsContainer = document.createElement('div');
// wordsContainer.className = 'statistics-words-container';
// container.appendChild(wordsContainer);
// container.appendChild(makeLinesStatistics(item));
// makeLinesStatistics(item).map((i) => wordsContainer.appendChild(i));
// console.log(words);

// return makeLinesStatistics(item);
// }

function makeLinesStatistics(items, number) {
  // console.log(items);
  if (items === {}) {
    const rowEmpty = document.createElement('div');
    rowEmpty.className = 'row-stat';
    return [rowEmpty];
  }
  // const returnValue = items.map((i, index) => {
  items.percent = Math.floor((items.true / (items.true + items.false)) * 100);
  const fColumn = document.createElement('div');
  fColumn.className = 'first-stat-column stat-column';
  fColumn.textContent = number + 1;

  const secondColumn = document.createElement('div');
  secondColumn.className = 'second-stat-column stat-column';
  secondColumn.textContent = items.englishword;

  const translateColumn = document.createElement('div');
  translateColumn.className = 'translate-stat-column stat-column';
  translateColumn.textContent = items.translation;

  const thirdColumn = document.createElement('div');
  thirdColumn.className = 'third-stat-column stat-column';
  thirdColumn.textContent = items.true === 0 ? '-' : items.true;;

  const fourthColumn = document.createElement('div');
  fourthColumn.className = 'fourth-stat-column stat-column';
  fourthColumn.textContent = items.false === 0 ? '-' : items.false;

  const fifthColumn = document.createElement('div');
  fifthColumn.className = 'fifth-stat-column stat-column';
  fifthColumn.textContent = items.category;

  const sixthColumn = document.createElement('div');
  sixthColumn.className = 'sixth-stat-column stat-column';
  sixthColumn.textContent = isNaN(items.percent) || items.percent === 0 ? '-' : items.percent;

  const seventhColumn = document.createElement('div');
  seventhColumn.className = 'seventh-stat-column stat-column';
  seventhColumn.textContent = items.trained === 0 ? '-' : items.trained;

  const row = document.createElement('div');
  row.className = 'row-stat';
  row.appendChild(fColumn);
  row.appendChild(fifthColumn);
  row.appendChild(secondColumn);
  row.appendChild(translateColumn);
  row.appendChild(thirdColumn);
  row.appendChild(fourthColumn);
  row.appendChild(sixthColumn);
  row.appendChild(seventhColumn);
  return row;
  // })
  // return returnValue;
}

function getAllWordsWithCategoriesObject(context) {
  const returnObject = {};
  const { categories } = context;
  const arrayOfWords = categories.map((i) => {
    const rusWords = import(`../categories/${i}/russianwords`);
    return rusWords.then((russianWords) => {
      const engWords = import(`../categories/${i}/englishwords`);
      return engWords.then(({ words }) => {
        const newObject = {};
        (Object.values(words)).map((word, index) => newObject[word] = {
          true: 0,
          false: 0,
          trained: 0,
          percent: 0,
          category: i,
          translation: russianWords.words[index],
          englishword: word
        });
        const s = {
          [i]: newObject,
        };
        return s;
      });
    })
  });
  // console.log(arrayOfWords);
  return Promise.all(arrayOfWords).then((data) => {
    const newObject = {};
    data.map((i) => {
      newObject[Object.keys(i)[0]] = i[Object.keys(i)[0]];
    });
    return newObject;
  });
}

function trainStat(context, data) {
  // console.log(data);
  const storage = window.localStorage;
  const stat = storage.getItem('englishForKidsStat');

  const { currentCategory } = context;
  const { english } = data;
  const verdict = null;
  const word = english;
  const mode = 'train';
  const chankOfData = {
    verdict,
    currentCategory,
    word,
    mode
  };

  if (!stat) {
    storage.setItem('englishForKidsStat', JSON.stringify([chankOfData]));
  }
  else {
    const procStat = JSON.parse(stat);
    procStat.push(chankOfData);
    storage.setItem('englishForKidsStat', JSON.stringify(procStat));
  };
}

function changeSort(field, context) {
  const { sort, sortDirection } = context;
  console.log(sort);
  console.log(sortDirection);
  if (sort === field) {
    context.sortDirection = sortDirection === 'up' ? 'down' : 'up';
  } else {
    context.sort = field;
    context.sortDirection = 'up';
  }
  context.init();
}

function sortArray(array, context) {
  const { sort, sortDirection } = context;
  const field = getField(sort);
  if (sort === '' || sortDirection === '') {
    return array;
  }
  return array.sort(getFuncLib(sortDirection, field));
}

function getFuncLib(direction, field) {
  const obj = {
    up: (a, b) => a[field] - b[field],
    down: (a, b) => b[field] - a[field],
  };
  return obj[direction];
}

function getField(type) {
  const lib = {
    english: 'englishword',
    correct: 'true',
    incorrect: 'false',
    percent: 'percent',
    train: 'trained',
    category: 'category',
    russian: 'translation',
  };
  return lib[type];
}


export { sortArray, makeTitle, trainStat, makeLinesStatistics, getAllWordsWithCategoriesObject, menuItem, menuPage, theGame };