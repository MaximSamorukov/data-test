function changeAnimation(e, opposite) {
  const originX = e.target.getBoundingClientRect().left;
  const originY = e.target.getBoundingClientRect().top;
  // const x = opposite.getBoundingClientRect().left;
  // const y = opposite.getBoundingClientRect().top;

  const shiftX = e.clientX - e.target.getBoundingClientRect().left;
  const shiftY = e.clientY - e.target.getBoundingClientRect().top;

  function moveAt(pageX, pageY) {
    e.target.style.left = `${pageX - shiftX}px`;
    e.target.style.top = `${pageY - shiftY}px`;
  }

  function mouseMove(et) {
    et.preventDefault();
    moveAt(et.pageX, et.pageY);
  }
  document.addEventListener('mousemove', mouseMove);
  e.target.style.position = 'absolute';
  e.target.style.zIndex = 1000;
  document.body.append(e.target);
  moveAt(e.pageX, e.pageY);

  function mouseUp(eve) {
    const ev = eve;
    ev.preventDefault();
    ev.target.classList.remove('background');
    ev.target.classList.remove('main');
    opposite.classList.add('background');
    document.removeEventListener('mousemove', mouseMove);
    // console.log(e);
    ev.target.style.left = `${originX}px`;
    ev.target.style.top = `${originY}px`;
    ev.target.onmouseup = null;
  }
  e.target.onmouseup = mouseUp;
}

module.exports = changeAnimation;
