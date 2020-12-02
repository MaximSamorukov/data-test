import './style/statistics.css';
import { makeCategoryItemForStatistics } from './service';

export default function statistics(context) {
  const { categories } = context;
  const storage = window.localStorage;
  const container = document.createElement('div');
  container.className = 'statistics-container';
  // container.textContent = 'Statistics';
  const stat = storage.getItem('englishForKidsStat');
  const procStat = JSON.parse(stat).filter((i) => i.word !== '');

  const experimentalData = categories.reduce((acc, i) => {
    acc[i] = {};
    return acc;
  }, {});
  // console.log(experimentalData);
  procStat.map((i) => {
    experimentalData[i.currentCategory][i.word] = {
      true: 0,
      false: 0,
    };
    return i;
  });
  const statisticsData = procStat.reduce((acc, i) => {
    if (i.verdict === true) {
      acc[i.currentCategory][i.word][i.verdict] += 1;
    } else {
      acc[i.currentCategory][i.word][i.verdict] += 1;
    };
    return acc;
  }, experimentalData);
  const revisedData = Object.keys(statisticsData).map((i) => {
    const item = {
      [i]: statisticsData[i],
    };
    return item;
  });
  // console.log(revisedData);
  const dom = revisedData.map((i) => {
    const a = makeCategoryItemForStatistics(i);
    console.log(a);
    container.appendChild(a);
  });
  return container;
}