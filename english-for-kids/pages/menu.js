import './style/menu.css';
import { menuItem, menuPage } from './service';

export default function menu(context) {
  const { showMenu, pages, currentCategory, categories } = context;
  const container = document.createElement('div');
  const textContainer = document.createElement('div');

  const close = document.createElement('div');
  close.className = 'close-btn';
  close.textContent = "X";
  container.appendChild(close);
  const pageContainer = document.createElement('div');
  pageContainer.className = 'menu-page-container';
  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'menu-categories-container';

  const pageTitle = document.createElement('div');
  pageTitle.className = "page-title-menu";
  pageTitle.innerHTML = `<p>Pages</p>`;
  pageContainer.appendChild(pageTitle);

  const categoryTitle = document.createElement('div');
  categoryTitle.className = "category-title-menu";
  categoryTitle.innerHTML = `<p>Categories</p>`;
  categoriesContainer.appendChild(categoryTitle);
  container.className = 'menu-container';
  // container.className = showMenu ? 'menu-container show' : 'menu-container display-none';
  textContainer.className = showMenu ? 'menu-text-container' : 'menu-text-container display-none';

  pages.map((i) => {
    pageContainer.append(menuPage(context, i));
    return i;
  });

  categories.map((element) => {
    categoriesContainer.append(menuItem(context, element));
    return element;
  });

  textContainer.appendChild(pageContainer);
  textContainer.appendChild(categoriesContainer);
  container.appendChild(textContainer);
  close.addEventListener('click', (e) => {
    // e.stopPropagation();
    e.preventDefault();
    e.stopImmediatePropagation();
    // context.showMenu = !showMenu;
    context.showMenu = false;
    if (!context.showMenu) {
      context.init();
      const elem = document.querySelector('.menu-container');
      elem.classList.remove('show');
      elem.classList.add('display-none');
    };
  });

  container.addEventListener('click', (e) => {
    e.stopPropagation();
    e.preventDefault();
    return;
  });

  pageContainer.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.textContent === 'Pages') {
      return;
    };
    const page = e.target.textContent;
    context.isPlay = false;
    context.inGame = false;
    context.currentStat = [];
    context.currentCategory = false;
    context.currentPage = page;
    context.sort = '';
    context.sortDirection = '';
    context.showMenu = !showMenu;
    context.init();
  });

  categoriesContainer.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.target.textContent === 'Categories') {
      return;
    }
    if (e.target.textContent === context.currentCategory) {
      context.init();
      return;
    };
    const word = e.target.textContent;
    const chosen = context.currentCategory === word;
    context.currentCategory = chosen ? false : word;
    context.currentPage = 'category';
    context.inGame = false;
    context.currentStat = [];
    context.sort = '';
    context.sortDirection = '';
    context.showMenu = !showMenu;
    context.init();
  });

  document.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    if (!showMenu) {
      context.init();
      return;
    }
    else {
      context.showMenu = !showMenu;
      context.init();
      const elem = document.querySelector('.menu-container');
      elem.classList.remove('show');
      elem.classList.add('display-none');
    }
  });


  return container;
}
