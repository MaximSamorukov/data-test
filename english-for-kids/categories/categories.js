// const path = require('path');

export default function categoryConstructor(name) {
  const imgExt = 'png';
  const soundExt = 'mp3';
  const template = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth'];
  const english = `../categories/${name}/englishwords`;
  const russian = `../categories/${name}/russianwords`;
  const images = template.map((i) => `../categories/${name}/images/${i}.${imgExt}`);
  const sounds = template.map((i) => `../categories/${name}/sounds/${i}.${soundExt}`);

  return {
    english,
    russian,
    images,
    sounds,
    name,
  };
};
