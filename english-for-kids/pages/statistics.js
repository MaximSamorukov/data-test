import './style/statistics.css';
import { sortArray, makeTitle, makeLinesStatistics, getAllWordsWithCategoriesObject } from './service';

// Function creates statistics page.
// It processed the list of all words adding statistics information from local storage and
// then creating statistics page with the help of imported functions
export default function statistics(context) {
  const { categories } = context;
  const storage = window.localStorage;
  const container = document.createElement('div');
  container.className = 'statistics-container';
  const stat = storage.getItem('englishForKidsStat');
  const procStat = JSON.parse(stat).filter((i) => i.word !== '');
  const experimentalData = getAllWordsWithCategoriesObject(context);

  experimentalData.then((info) => {
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
    const revisedData = Object.keys(statisticsData).reduce((acc, i) => {
      Object.keys(statisticsData[i]).map((ii) => {
        acc.push(statisticsData[i][ii]);
      });
      return acc;
    }, []);
    const title = makeTitle(context);
    container.appendChild(title);
    const sortedData = sortArray(revisedData.map((i) => {
      const value = Math.floor((i.true / (i.true + i.false)) * 100);
      i.percent = isNaN(value) ? 0 : value;
      return i;
    }), context);
    sortedData.map((i, index) => {
      const a = makeLinesStatistics(i, index);
      title.appendChild(a);
    });
  })
  return container;
}