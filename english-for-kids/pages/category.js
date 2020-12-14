import './style/category.css';
import playCard from './playCard';
import { arrayOfDataForCardsCreator } from '../categories/arrayOfDataForCardsCreator';
import categoryConstructor from '../categories/categories';

// Function constructs and returns (container) page with play cards. Argument is "this" from "./src/game.js". According to the value of current category that is get from 'this'.
// categoryConstructor - returns an object with paths to sound and img files and english and russian words of the exact category.
// arrayOfDataForCardsCreator - return an array with items, that include data to construct play cards.
// playCard - function that return DOM element of play card based on arguments:
//  - 'this' from './src/game.js';
//  - data from arrayOfDataForCardsCreator;
// In the case of current category is 'repeat' (player wants to repeat difficult words) we use localStorage to get data to
// construct DOM elements and append them to container.

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
  return container;
}
