// Function returns an array with data that is used to make DOM objects of play cards.
// Arguments are:
//  - object that was created in './categories/categories.js,
//  - the name of the constructed directory.
// Every item in the returned array is an object that consists of:
//  - path to image (image);
//  - path to sound file (sound);
//  - english word (english);
//  - russian translation of the english word (russian).

function arrayOfDataForCardsCreator(data, currentCategory) {
  let arrayWithPlayCardData = Array.from({ length: 10 }).map((i, index) => { // Create an
    const element = {
      image: data.images[index],
      sound: data.sounds[index],
    };
    return element;
  });
  const engWords = import(`../categories/${currentCategory}/englishwords`);
  const rusWords = import(`../categories/${currentCategory}/russianwords`);
  engWords.then((i) => {
    arrayWithPlayCardData = arrayWithPlayCardData.map((ii, index) => {
      ii.english = i.words[index];
      return ii;
    });
  });
  return rusWords.then((i) => {
    return arrayWithPlayCardData = arrayWithPlayCardData.map((ii, index) => {
      ii.russian = i.words[index];
      return ii;
    });
  });
}

export { arrayOfDataForCardsCreator };