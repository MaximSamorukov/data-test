export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  titleElement.textContent = "Types of dataflow in flux";
  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyMiddle = document.createElement('div');
  const bodyFooter = document.createElement('div');
  const bodyFooterFooter = document.createElement('div');

  bodyTop.className = 'slide8-body-top';
  bodyMiddle.className = 'slide8-body-middle';
  bodyFooter.className = 'slide8-body-footer';
  bodyFooterFooter.className = 'slide8-body-footer-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);
  bodyElement.appendChild(bodyFooterFooter);


  bodyTop.textContent = "Store Writes in synchronous actions.";
  bodyFooter.textContent = "Store Writes in asynchronous actions.";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}