const checkIfWin = require('./checkIfWin');

function changeAnimation(e, opposite) {
  const opp = opposite;
  // const originX = e.target.getBoundingClientRect().left;
  // const originY = e.target.getBoundingClientRect().top;
  const x = opposite.getBoundingClientRect().left;
  const y = opposite.getBoundingClientRect().top;

  const newMainElement = document.createElement('div');
  const text = e.target.textContent;
  newMainElement.textContent = text;
  const clas = e.target.className;
  newMainElement.className = `${clas} main`;
  e.target.className = `${clas} item-zero`;
  // const newTargetElement = opposite;
  const shiftX = e.clientX - e.target.getBoundingClientRect().left;
  const shiftY = e.clientY - e.target.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    newMainElement.style.left = `${pageX - shiftX}px`;
    newMainElement.style.top = `${pageY - shiftY}px`;
  }

  function mouseMove(et) {
    et.preventDefault();
    moveAt(et.pageX, et.pageY);
  }
  document.addEventListener('mousemove', mouseMove);
  newMainElement.style.position = 'absolute';
  newMainElement.style.zIndex = 1000;
  document.body.append(newMainElement);
  moveAt(e.pageX, e.pageY);

  function mouseUp(eve) {
    const ev = eve;
    ev.preventDefault();
    const cl = ev.target.className;
    ev.target.className = 'item-opacity';
    // ev.target.classList.remove('main');
    // opposite.classList.add('background');
    // console.log(e);
    ev.target.style.left = `${x}px`;
    ev.target.style.top = `${y}px`;
    document.removeEventListener('mousemove', mouseMove);
    ev.target.onmouseup = null;
    opp.className = cl;
    opp.textContent = ev.target.textContent;
    // const parent = ev.target.parentNode;
    ev.target.remove();
    checkIfWin();
  }
  newMainElement.addEventListener('mouseup', mouseUp);
}

module.exports = changeAnimation;
