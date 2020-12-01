function menuItem(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category';
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function menuPage(element) {
  const elem = document.createElement('div');
  elem.className = 'menu-item-category';
  elem.innerHTML = `<p>${element}</p>`;
  return elem;
};

function theGame(context) {
  const { currentCategory } = context;
  console.log(currentCategory);
  const path = `./categories/${currentCategory}/englishwords.js`;


}

export { menuItem, menuPage, theGame };