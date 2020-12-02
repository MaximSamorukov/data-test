import './style/statistics.css';
import { makeCategoryItemForStatistics, getAllWordsWithCategoriesObject } from './service';

export default function statistics(context) {
  const { categories } = context;
  const storage = window.localStorage;
  const container = document.createElement('div');
  container.className = 'statistics-container';
  // container.textContent = 'Statistics';
  const stat = storage.getItem('englishForKidsStat');
  const procStat = JSON.parse(stat).filter((i) => i.word !== '');

  const experimentalData = getAllWordsWithCategoriesObject(context);
  experimentalData.then((info) => {
    const statisticsData = procStat.reduce((acc, i) => {
      if (i.verdict === true) {
        acc[i.currentCategory][i.word][i.verdict] += 1;
      } else {
        acc[i.currentCategory][i.word][i.verdict] += 1;
      };
      return acc;
    }, info);

    const revisedData = Object.keys(statisticsData).map((i) => {
      const item = {
        [i]: statisticsData[i],
      };
      return item;
    });
    revisedData.map((i) => {
      const a = makeCategoryItemForStatistics(i);
      container.appendChild(a);
    });
  })
  return container;
}