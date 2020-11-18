const showScreen = require('./showscreenifwin');

function checkIfWin() {
  const gameArea = document.querySelector('.game-area');
  const { childNodes } = gameArea;
  let textArray = [];
  childNodes.forEach((element) => textArray.push(element.textContent));
  textArray = textArray.map((i) => {
    if (i === '') {
      return 100;
    }
    return parseInt(i, 10);
  });
  // console.log(textArray);
  const [...tAorigin] = [...textArray];
  const processedTextArray = textArray.sort((a, b) => a - b);
  const resultArray = processedTextArray.map((i, index) => {
    if (i === tAorigin[index]) {
      return true;
    }
    return false;
  }).filter((i) => i !== true);
  if (resultArray.length === 0) {
    const st = window.localStorage;
    const results = JSON.parse(st.getItem('results'));
    const winResult = JSON.parse(st.getItem('dataToWinScreen'));
    // console.log(results);
    results.push(winResult);
    st.setItem('results', JSON.stringify(results));
    showScreen();
  }
}

module.exports = checkIfWin;
