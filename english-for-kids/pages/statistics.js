import './style/statistics.css';

export default function statistics(context) {
  const { categories } = context;
  const storage = window.localStorage;
  const container = document.createElement('div');
  container.className = 'statistics-container';
  container.textContent = 'Statistics';
  const stat = storage.getItem('englishForKidsStat');
  const procStat = JSON.parse(stat).filter((i) => i.word !== '');

  const experimentalData = categories.reduce((acc, i) => {
    acc[i] = {};
    return acc;
  }, {});
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
  console.log(statisticsData);
  return container;
}