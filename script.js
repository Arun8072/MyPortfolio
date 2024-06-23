
// Show/Hide additional courses
const showMoreBtnC = document.getElementById('showMore-course');
const additionalCourses = document.querySelector('.additional-courses');
//const courseCards = document.getElementById('course-cards');

showMoreBtnC.addEventListener('click', () => {
  additionalCourses.classList.remove('d-none');
  if (additionalCourses.classList.contains('d-none')) {
    showMoreBtnC.textContent = 'Show More';
  } else {
    /* add another  full course section or modal to display aLL
    showMoreBtnC.textContent = 'Show All'; */
  }
});

// Show/Hide additional projects
const showMoreBtnP = document.getElementById('showMore-projects');
const additionalProjects = document.getElementById('additional-projects');
const allProjects = document.getElementById('all-projects');

showMoreBtnP.addEventListener('click', () => {

  if (additionalProjects.classList.contains('d-none') && allProjects.classList.contains('d-none') ) {
    additionalProjects.classList.remove('d-none');
    showMoreBtnP.textContent = 'Show All';
  } else if (allProjects.classList.contains('d-none') && !additionalProjects.classList.contains('d-none')){
    allProjects.classList.remove('d-none');
    showMoreBtnP.textContent = 'Show Less';
  }else if (!additionalProjects.classList.contains('d-none') && !allProjects.classList.contains('d-none')){
    additionalProjects.classList.add('d-none');
    allProjects.classList.add('d-none'); 
    showMoreBtnP.textContent = 'Show More';
  }
});