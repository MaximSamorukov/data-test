import './style/getPageNameFunc.css';

export default function getPageNameFunc(context) {
  const { currentPage, currentCategory } = context;
  let value = " Main Page";
  if (currentPage === 'category') {
    value = currentCategory.split('').map((i, index) => {
      if (index === 0) {
        return i.toUpperCase();
      }
      return i;
    }).join('');
  }
  if (currentPage === 'statistics') {
    value = 'Statistics';
  }

  const btnContainer = document.createElement('div');
  btnContainer.className = 'page-name';
  const btn = document.createElement('div');
  btn.textContent = value;
  btnContainer.appendChild(btn);
  btn.className = 'page-name-page';

  return btnContainer;
}