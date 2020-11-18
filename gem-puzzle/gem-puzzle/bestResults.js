function getBestResults() {
  const root = document.querySelector('body');
  const tableContainer = document.createElement('div');
  root.appendChild(tableContainer);
  const table = document.createElement('div');
  tableContainer.appendChild(table);
  table.className = 'table';
  tableContainer.className = 'table-container';
  const res = window.localStorage;
  const obj = JSON.parse(res.getItem('results'));
  const ifNobody = '<div class="table-item table-noitem">No results yet</div>';
  let resString = [];
  if (obj.length > 0) {
    resString = obj.map((i, index) => {
      const number = index < 9 ? `0${index + 1}` : `${index + 1}`;
      return `<div class="table-item"><span>${number}. </span><span>Type: ${i.type} </span><span>Time: ${i.time}</span><span>Steps: ${i.clicks.split(':')[1]}</span></div>`;
    });
  }
  const returnValue = obj.length > 0 ? resString.join('') : ifNobody;
  table.innerHTML = returnValue;
  tableContainer.addEventListener('click', () => {
    // tableContainer.className = 'table-container-invis';
    root.removeChild(tableContainer);
  });
}

module.exports = getBestResults;
