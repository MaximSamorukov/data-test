export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  titleElement.textContent = `Slide: ${number}`;

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


  bodyTop.textContent = "What is State?";
  bodyMiddle.textContent = "State is a special built-in object, which allows components to create and manage their own data. Components cannot pass data with state, but they can create and manage it internally."
  bodyFooter.textContent = "How do you update a component’s state?"
  bodyFooterFooter.textContent = "State should not be modified directly, but it can be modified with a special method called `setState()`."
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}