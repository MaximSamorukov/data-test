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

  bodyTop.className = 'slide1-body-top';
  bodyMiddle.className = 'slide1-body-middle';
  bodyFooter.className = 'slide1-body-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyMiddle);
  bodyElement.appendChild(bodyFooter);

  bodyMiddle.innerHTML = "<span>Presentation:</span><br><span>«State management in<br>React - applications»</span>"
  bodyFooter.textContent = "Samorukov M.L."
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}