document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.project-card');

  function filterProjects(category) {
    cards.forEach(card => {
      card.classList.toggle('show', card.dataset.category === category);
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      filterProjects(tab.dataset.category);
    });
  });

  // Výchozí zobrazení první kategorie
  filterProjects('school');
});
