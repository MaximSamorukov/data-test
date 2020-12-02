function arrayOfDataForCardsCreator(data, currentCategory) {
  let arrayWithPlayCardData = Array.from('asdfghasdd').map((i, index) => {
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