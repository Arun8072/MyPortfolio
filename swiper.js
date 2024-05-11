const showMoreBtn = document.getElementById('show-more-btn');
const additionalProjects = document.querySelector('.additional-projects');

showMoreBtn.addEventListener('click', () => {
  additionalProjects.classList.toggle('hidden');
  if (additionalProjects.classList.contains('hidden')) {
    showMoreBtn.textContent = 'Show More';
  } else {
    showMoreBtn.textContent = 'Show Less';
  }
});