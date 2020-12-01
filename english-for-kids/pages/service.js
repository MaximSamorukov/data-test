function menuItem(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category'
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function menuPage(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category'
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};


export { menuItem, menuPage }