function showScreen() {
  const root = document.querySelector('body');
  const tableContainer = document.createElement('div');
  root.appendChild(tableContainer);
  const table = document.createElement('div');
  tableContainer.appendChild(table);
  table.className = 'table';
  tableContainer.className = 'table-container';
  // const res = window.localStorage;
  // const obj = JSON.parse(res.getItem('results'));
  const st = window.localStorage;
  const value = JSON.parse(st.getItem('dataToWinScreen'));
  const results = `Your results:\nTime: ${value.time};\nSteps: ${value.steps}`;
  const ifNobody = `<div class="table-item table-noitem">You have win!!!\n${results}</div>`;
  // let resString = [];
  // if (obj.length > 0) {
  //   resString = obj.map((i, index) => {
  //     const number = index < 9 ? `0${index + 1}` : `${index + 1}`;
  //     return `<div class="table-item">
  // <span>${number}.</span><span>Time: ${i.time}</span> <span>Steps:${i.clicks}</span></div>`;
  //   });
  // }
  const returnValue = ifNobody;
  table.innerHTML = returnValue;
  tableContainer.addEventListener('click', () => {
    // tableContainer.className = 'table-container-invis';
    root.removeChild(tableContainer);
    const storage = window.localStorage;
    storage.setItem('win', true);
  });
}

module.exports = showScreen;
