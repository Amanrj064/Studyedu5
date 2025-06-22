const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.card');

function filterResources() {
  const query = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  cards.forEach(card => {
    const title = card.dataset.title.toLowerCase();
    const cat = card.dataset.category;

    const matchesSearch = title.includes(query);
    const matchesCategory = category === 'all' || cat === category;

    card.style.display = matchesSearch && matchesCategory ? 'block' : 'none';
  });
}

searchInput?.addEventListener('input', filterResources);
categoryFilter?.addEventListener('change', filterResources);

