
export default function changeAnimation(e, opposite) {
  let originX = e.target.getBoundingClientRect().left;
  let originY = e.target.getBoundingClientRect().top;
  let x = opposite.getBoundingClientRect().left;
  let y = opposite.getBoundingClientRect().top;

  function mouseUp(e) {
    e.preventDefault();
    e.target.classList.remove('background');
    e.target.classList.remove('main');
    opposite.classList.add('background');
    document.removeEventListener('mousemove', mouseMove);
    // console.log(e);
    e.target.style.left = originX + 'px';
    e.target.style.top = originY + 'px';
    e.target.onmouseup = null;
  }

  function mouseMove(e) {
    e.preventDefault();
    moveAt(e.pageX, e.pageY);
  };


  function moveAt(pageX, pageY) {
    e.target.style.left = pageX - shiftX + 'px';
    e.target.style.top = pageY - shiftY + 'px';
  }

  document.addEventListener('mousemove', mouseMove);

  e.target.onmouseup = mouseUp;

  let shiftX = e.clientX - e.target.getBoundingClientRect().left;
  let shiftY = e.clientY - e.target.getBoundingClientRect().top;
  e.target.style.position = 'absolute';
  e.target.style.zIndex = 1000;
  document.body.append(e.target);
  moveAt(e.pageX, e.pageY);
}