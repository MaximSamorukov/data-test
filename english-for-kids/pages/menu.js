import './style/menu.css';
import { menuItem, menuPage } from './service';

export default function menu(context) {
  const { showMenu, pages, currentCategory, categories } = context;
  console.log(showMenu);
  const container = document.createElement('div');
  const textContainer = document.createElement('div');

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

  container.className = showMenu ? 'menu-container' : 'menu-container display-none';
  textContainer.className = showMenu ? 'menu-text-container' : 'menu-text-container display-none';

  pages.map((i) => {
    pageContainer.append(menuPage(i));
    return i;
  });
  categories.map((element) => {
    categoriesContainer.append(menuItem(element));
    return element;
  });
  textContainer.appendChild(pageContainer);
  textContainer.appendChild(categoriesContainer);
  container.appendChild(textContainer);
  container.addEventListener('click', () => {
    context.showMenu = !showMenu;
    context.init();
  });

  pageContainer.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    const page = e.target.textContent;
    context.isPlay = false;
    context.inGame = false;
    context.currentCategory = false;
    context.currentPage = page;
    context.init();
  });

  categoriesContainer.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.target.textContent);
    const word = e.target.textContent;
    const chosen = context.currentCategory === word;
    context.currentCategory = chosen ? false : word;
    context.currentPage = 'category';
    context.init();
  });

  return container;
}
