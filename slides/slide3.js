export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide3-body-top';
  bodyMiddle.className = 'slide3-body-middle';
  bodyFooter.className = 'slide3-body-footer';
  bodyFooterFooter.className = 'slide3-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "State management in pure React";
  bodyMiddle.textContent = "...state initialization..."
  bodyFooter.textContent = "State should not be modified directly, but it can be modified with a special method called `setState()`."
  bodyFooterFooter.textContent = "...some code here...";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}