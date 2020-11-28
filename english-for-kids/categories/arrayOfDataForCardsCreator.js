async function arrayOfDataForCardsCreator(data, currentCategory) {
  let englishWords = {};
  let russianWords = {};
  const engWords = await import(`../categories/${currentCategory}/englishwords`);
  const rusWords = await import(`../categories/${currentCategory}/russianwords`);
  const arrayWithPlayCardData = await Array.from('asdfghasdd').map((i, index) => {
    const element = {
      english: engWords[index],
      russian: rusWords[index],
      image: data.images[index],
      sound: data.sounds[index],
    };
    return element;
  });
  return arrayWithPlayCardData;
}

export { arrayOfDataForCardsCreator };