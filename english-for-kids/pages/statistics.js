import './style/statistics.css';
import { sortArray, makeTitle, makeLinesStatistics, getAllWordsWithCategoriesObject } from './service';

export default function statistics(context) {
  const { categories } = context;
  const storage = window.localStorage;
  const container = document.createElement('div');
  container.className = 'statistics-container';
  // container.textContent = 'Statistics';
  const stat = storage.getItem('englishForKidsStat');
  const procStat = JSON.parse(stat).filter((i) => i.word !== '');
  // console.log(procStat);
  const experimentalData = getAllWordsWithCategoriesObject(context);

  experimentalData.then((info) => {
    // console.log(info);
    const statisticsData = procStat.reduce((acc, i) => {
      if (i.verdict === true) {
        acc[i.currentCategory][i.word][i.verdict] += 1;
      } else if (i.verdict === false) {
        acc[i.currentCategory][i.word][i.verdict] += 1;
      };
      if (i.mode === 'train') {
        acc[i.currentCategory][i.word]['trained'] += 1;
      }
      return acc;
    }, info);
    // console.log(statisticsData);
    const revisedData = Object.keys(statisticsData).reduce((acc, i) => {
      // const item = {
      //   [i]: statisticsData[i],
      // };
      // return item;
      Object.keys(statisticsData[i]).map((ii) => {
        acc.push(statisticsData[i][ii]);
      });
      // console.log(acc);
      return acc;
    }, []);
    // console.log(revisedData);
    const title = makeTitle(context);
    container.appendChild(title);
    // console.log(revisedData);

    const sortedData = sortArray(revisedData.map((i) => {
      const value = Math.floor((i.true / (i.true + i.false)) * 100);
      i.percent = isNaN(value) ? 0 : value;
      return i;
    }), context);
    // console.log(sortedData);
    sortedData.map((i, index) => {
      // console.log(statisticsData);
      const a = makeLinesStatistics(i, index);
      title.appendChild(a);
    });
  })
  return container;
}