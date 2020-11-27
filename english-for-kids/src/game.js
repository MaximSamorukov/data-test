import category from '../categories/categories';

const categories = ['space', 'cars', 'it', 'music', 'tools', 'furniture', 'sport', 'science', 'dress'];

export default function game() {
  const array = categories.map((i) => category(i));
  console.log(array);
}
