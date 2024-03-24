const openBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');
const closeModal = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');


function openModal() {
    contactModal.classList.remove("is-hidden");
  contactModal.classList.add("backdrop");
  document.body.classList.add('modal-open');
}

function closeModalFunc() {
    contactModal.classList.remove("backdrop");
  contactModal.classList.add("is-hidden");
  document.body.classList.remove('modal-open');
}


contactBtn.addEventListener('click', openModal);


closeModal.addEventListener('click', closeModalFunc);

window.addEventListener('click', (e) => {
  if (e.target === contactModal) {
    closeModalFunc();
  }
});


contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const email = contactForm.elements['email'].value;
    const message = contactForm.elements['message'].value;
    console.log(email, message);

  const postData = {
    email: email,
    message: message,
    };
    fetch('https://api-server-c4rg.onrender.com/api/users/help', {
  method: 'POST',
  body: postData
})
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
    contactForm.reset();
    closeModalFunc();
});