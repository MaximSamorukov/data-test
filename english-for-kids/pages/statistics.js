import './style/statistics.css';

export default function statistics(context) {
  const container = document.createElement('div');
  container.className = 'statistics-container';
  container.textContent = 'Statistics';
  return container;
}