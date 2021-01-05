export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide10-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyFooter = document.createElement('div');

  bodyTop.className = 'slide10-body-top';
  bodyFooter.className = 'slide10-body-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyFooter);

  titleElement.textContent = "Redux"
  bodyTop.textContent = "What is Redux?";
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}