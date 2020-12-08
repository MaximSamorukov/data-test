import './style/btnComplexRepeat.css';
import { theGame, getStrNumber } from './service';

export default function btnComplexRepeat(context) {

  const { inGame, isPlay, currentPage } = context;
  // if (currentPage !== 'statistics') {
  //   return ;
  // }
  // const storage = window.localStorage;
  const btnContainer = document.createElement('div');
  btnContainer.className = 'btn-complex-container';
  const btn = document.createElement('div');
  btnContainer.appendChild(btn);
  btn.className = 'btn-complex-repeat';
  btn.innerText = "Repeat";
  btn.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    // storage.setItem('sound', JSON.stringify(''));
    // context.inGame = (isPlay && currentPage === 'category') ? !context.inGame : false;
    // context.init();
    // if (context.inGame === true) {
    //   context.currentPlayArray = [];

    //   theGame(context);
    // }
    const storage = window.localStorage;
    const statData = JSON.parse(storage.getItem('englishForKidsStat'))
      .filter((i) => i.verdict === false)
      .reduce((acc, i) => {
        const { word, currentCategory } = i;
        if (Object.keys(acc).includes(word)) {
          acc[word].falses += 1;
          return acc;
        }
        acc[word] = {
          word,
          currentCategory,
          falses: 1,
        };
        return acc;

      }, {});
    const procArray = Object.keys(statData).map((i) => statData[i])
      .sort((a, b) => b.falses - a.falses)
      .slice(0, 10);
    // console.log(procArray);
    if (procArray.length < 10) {
      return;
    };
    const readyArray = procArray.map((i) => {
      const englishWordsArray = import(`../categories/${i.currentCategory}/englishwords`);
      return englishWordsArray.then(({ words }) => {
        const number = Object.values(words).indexOf(i.word);
        const strNumber = getStrNumber(number);
        // console.log(number);
        // console.log(strNumber);
        const rusWords = import(`../categories/${i.currentCategory}/russianwords`);
        return rusWords.then(({ words }) => {
          // console.log(words[number]);
          // console.log(i.word);
          const obj = {
            name: i.currentCategory,
            english: i.word,
            image: `../categories/${i.currentCategory}/images/${strNumber}.png`,
            russian: words[number],
            sound: `../categories/${i.currentCategory}/sounds/${strNumber}.mp3`
          };
          return obj;
        });
      })
    })
    // console.log(readyArray);
    Promise.all(readyArray).then((all) => {
      // console.log(all);
      const storage = window.localStorage;
      storage.setItem('englishForKids', JSON.stringify(all));
      context.isPlay = true;
      context.inGame = false;
      context.currentPage = 'category';
      context.currentCategory = 'repeat';
      context.currentPlayArray = [...all];
      context.init();
    })

  });
  return btnContainer;
}