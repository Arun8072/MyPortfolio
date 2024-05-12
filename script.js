const contactChips = document.querySelectorAll('.contact-chip');
const contactModal = document.createElement('div');
contactModal.classList.add('fixed', 'inset-0', 'flex', 'items-center', 'justify-center', 'z-50');
contactModal.innerHTML = `
  <div class="rounded-lg shadow-lg max-w-md mx-auto p-6 relative">
    <button class="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <div id="contact-modal-content"></div>
  </div>
`;

const closeModal = () => {
  contactModal.remove();
};

contactChips.forEach((chip) => {
  chip.addEventListener('click', (e) => {
    e.preventDefault();
    const contactType = chip.dataset.contactType;
    let modalContent;

    switch (contactType) {
      case 'whatsapp':
        modalContent = `
          <h3 class="text-xl font-bold mb-4">WhatsApp</h3>
          <p class="mb-4">Scan the QR code below to start a WhatsApp conversation with me:</p>
          <img src="path/to/your/whatsapp-qr-code.png" alt="WhatsApp QR Code" class="mx-auto">
        `;
        break;
      case 'email':
        modalContent = `
          <h3 class="text-xl font-bold mb-4">Email</h3>
          <p class="mb-4">You can reach me via email at:</p>
          <p class="font-semibold">your@email.com</p>
        `;
        break;
      case 'location':
        modalContent = `
          <h3 class="text-xl font-bold mb-4">Location</h3>
          <p class="mb-4">You can find me at:</p>
          <p class="font-semibold">123 Main Street, City, State</p>
          <div class="mt-4">
            <iframe src="https://maps.google.com/maps" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen></iframe>
          </div>
        `;
        break;
      case 'call':
        modalContent = `
          <h3 class="text-xl font-bold mb-4">Call</h3>
          <p class="mb-4">You can call me at:</p>
          <p class="font-semibold">+1 (555) 555-5555</p>
        `;
        break;
      default:
        modalContent = `
          <h3 class="text-xl font-bold mb-4">Oops!</h3>
          <p>Something went wrong. Please try again later.</p>
        `;
    }
    document.body.appendChild(contactModal);
    document.getElementById('contact-modal-content').innerHTML = modalContent;
    

    const closeButton = contactModal.querySelector('button');
    closeButton.addEventListener('click', closeModal);
  });
});

// Show/Hide additional courses
const showMoreBtn = document.getElementById('show-more-btn');
const additionalCourses = document.querySelector('.additional-courses');
const courseCards = document.getElementById('course-cards');

showMoreBtn.addEventListener('click', () => {
  additionalCourses.classList.toggle('d-none');
  if (additionalCourses.classList.contains('d-none')) {
    showMoreBtn.textContent = 'Show More';
  } else {
    showMoreBtn.textContent = 'Show Less';
  }
});