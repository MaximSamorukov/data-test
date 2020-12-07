import './style/category.css';
import playCard from './playCard';
import { arrayOfDataForCardsCreator } from '../categories/arrayOfDataForCardsCreator';
import categoryConstructor from '../categories/categories';

export default function category(context) {
  const container = document.createElement('div');
  container.className = 'category-container';
  const { currentCategory } = context;
  const storage = window.localStorage;
  if (currentCategory !== 'repeat') {
    const data = categoryConstructor(currentCategory);
    const array = arrayOfDataForCardsCreator(data, currentCategory);
    array.then((i) => {
      const str = JSON.stringify(i);
      storage.setItem('englishForKids', str);
    });
    array.then((i) => {
      i.map((element) => {
        container.append(playCard(context, element));
        return element;
      });
    });
    return container;
  };
  const repeatArray = JSON.parse(storage.getItem('englishForKids'));
  repeatArray.map((element) => {
    container.append(playCard(context, element));
    return element;
  });
  // console.log(container);
  return container;
}
