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

  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}