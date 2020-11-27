// const path = require('path');

export default function category(name) {
  const imgExt = 'png';
  const soundExt = 'wav';
  const template = ['first', 'second', 'third', 'forth', 'fifth', 'sixth', 'seventh', 'eighth', 'nineth', 'tenth'];
  const english = `../categories/${name}/englishwords`;
  const russian = `../categories/${name}/russianwords`;
  const images = template.map((i) => `../categories/${name}/images/${i}EnglishWord.${imgExt}`);
  const sounds = template.map((i) => `../categories/${name}/sounds/${i}EnglishWord.${soundExt}`);

  return {
    english,
    russian,
    images,
    sounds,
  };
};
