export default (number) => {
  const container = document.createElement('div');
  container.className = 'slide-container';

  const titleElement = document.createElement('div');
  const bodyElement = document.createElement('div');
  const footerElement = document.createElement('div');

  titleElement.className = 'slide-title slide12-title';
  bodyElement.className = 'slide-body';
  footerElement.className = 'slide-footer';

  footerElement.textContent = `Slide: ${number}`;

  const bodyTop = document.createElement('div');
  const bodyFooter = document.createElement('div');

  bodyTop.className = 'slide12-body-top';
  bodyFooter.className = 'slide12-body-footer';

  bodyElement.appendChild(bodyTop);
  bodyElement.appendChild(bodyFooter);

  titleElement.textContent = "Redux"
  bodyTop.textContent = "Conclusion";
  bodyFooter.innerText = "1. Redux is a library which has a store that contains a state tree and a few methods to interact with the state.\n\n\n2. The only way to update a state inside a store is to dispatch an action and define a reducer function to perform tasks based on the given actions.\n\n\n3. Once dispatched, the action goes inside the reducer functions which performs the tasks and return the updated state to the store."
  container.appendChild(titleElement);
  container.appendChild(bodyElement);
  container.appendChild(footerElement);

  return container;
}