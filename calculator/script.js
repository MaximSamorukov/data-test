const device = document.querySelector('.calculator-grid');
const screenPrevOperand = document.querySelector('.previous-operand');
const screenCurrentOperand = document.querySelector('.current-operand');
let operationAvailable = false;
let isHalt = false;
let lastOperation = '';
let prevVelue = '';
let result = 0;
const valueToEnd = {
  '+': 0,
  '-': 0,
  '*': 1,
  '÷': 1,
}
const operations = {
  '+': (a) => (b) => a + b,
  '-': (a) => (b) => a - b,
  '*': (a) => (b) => a * b,
  '÷': (a) => (b) => a / b,
  'x ^ (1/2)': (a) => Math.sqrt(a),
  'x ^ y': (a) => (b) => Math.pow(a, b),
  'x ^ 2': (a) => a * a,
  '1 / x': (a) => 1 / a,

}
const makeClean = () => {
  result = 0;
  screenCurrentOperand.textContent = '';
  screenPrevOperand.textContent = '';
  operationAvailable = false;
  lastOperation = '';
  screenCurrentOperand.textContent = 'Press AC.';
  isHalt = true;
};

device.addEventListener('click', (e) => {
  const bottomType = e.toElement.attributes[0].name;
  const bottomValue = e.target.textContent;
  const screenCurrentValue = screenCurrentOperand.textContent;
  const screenPreviousValue = screenPrevOperand.textContent;

  if (isHalt && bottomType !== 'data-all-clear') {
    screenCurrentOperand.textContent = 'Press AC.';
  } else {
    if (bottomType === 'plus-minus') {
      const textContent = screenCurrentValue;
      const firstValue = textContent[0];
      if (firstValue !== '-') {
        screenCurrentOperand.textContent = `-${textContent}`;
      }
      if (firstValue === '-') {
        screenCurrentOperand.textContent = textContent.slice(1);
      }
    }

    if (bottomType === 'data-number') {
      if ((screenCurrentValue[0] === '-' && screenCurrentValue[1] === '0' && screenCurrentValue.length <= 2) || (screenCurrentValue[0] === '0' && screenCurrentValue.length <= 1)) {
        screenCurrentOperand.textContent += `.${bottomValue}`;
        operationAvailable = true;
      } else {
        screenCurrentOperand.textContent += bottomValue;
        operationAvailable = true;
      }
    }

    if (bottomType === 'data-number-point') {
      if (!screenCurrentValue.includes('.')) {
        screenCurrentOperand.textContent += bottomValue;
      }
    }

    if (bottomType === 'data-equals') {
      result = (typeof result !== 'function') ? result : screenCurrentValue === '' ? result(valueToEnd[lastOperation]) : result(parseFloat(screenCurrentValue));
      if (isNaN(result) || !Number.isFinite(result)) {
        makeClean();
      } else {
        screenPrevOperand.textContent = '';
        screenCurrentOperand.textContent = (result === 0 && lastOperation === '') ? parseFloat(screenCurrentOperand.textContent) : result;
        result = 0;
        lastOperation = '';
      }
    }

    if (bottomType === 'data-operation') {
      if (operationAvailable === true) {
        console.log(result);
        result = (typeof result === 'function') ? result(parseFloat(screenCurrentValue)) : result;
        console.log(result);
        if (isNaN(result) || !Number.isFinite(result)) {
          makeClean();
        } else {
          const preResult = (result === 0 && lastOperation === '') ? operations[bottomValue](parseFloat(screenCurrentValue)) : operations[bottomValue](result);
          console.log(preResult);
          screenPrevOperand.textContent = (result === 0 && lastOperation === '') ? `${screenCurrentValue} ${bottomValue}` : `${result}  ${bottomValue}`;
          screenCurrentOperand.textContent = '';
          result = preResult;
          operationAvailable = false;
          lastOperation = bottomValue;
        }
      }
    }

    if (bottomType === 'data-operation-pow') {
      const funct = operations[bottomValue];
      screenCurrentOperand.textContent = funct(screenCurrentValue);
    }

    if (bottomType === 'data-all-clear') {
      result = 0;
      screenCurrentOperand.textContent = '';
      screenPrevOperand.textContent = '';
      operationAvailable = false;
      lastOperation = '';
      isHalt = false;
    }

    if (bottomType === 'data-delete') {
      screenCurrentOperand.textContent = '';
      operationAvailable = false;
    }
  }
})