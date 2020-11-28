import './style/category.css';
import playCard from './playCard';
import categoryConstructor from '../categories/categories';

export default function category(context) {
  const container = document.createElement('div');
  const { currentCategory } = context;
  const data = categoryConstructor(currentCategory);
  const arrayWithPlayCardData = new Array(10).map((i, index) => {
    import * as englishword from `${data.english}`;
    import * as russianword from `${data.russian}`;
    return {
      english: englishword[index],
      russian: russianword[index],
      image: data.images[index],
      sound: data.sounds[index],
    }
  });
  console.log(arrayWithPlayCardData);
  // context.categories.map((i) => contain / er.appendChild(playCard(context, i)))
  container.className = 'category-container';
  return container;
}
