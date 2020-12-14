// Function returns an object based on the title (name) of the current category (the play cards of which shoud be shown).
// The returned object includes paths to:
//  - file with english words,
//  - file with russian translation of english words,
//  - an array with paths to sound files with pronunciation
//  - an array with paths to image files that is used on the play cards.

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
