const contactForm = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactMessage = document.getElementById('contact-message');
const Message = document.getElementById("message");

const sendEmail = (e) => {
    e.preventDefault();
    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
        contactMessage.classList.remove('color-light');
        contactMessage.classList.add('color-dark');

        contactMessage.textContent = 'Please fill out all fields';
    } else {
        emailjs.sendForm(
          'service_9zvkzv8',
          'template_031j0iu',
          '#contact-form',
          'AKOvW98y1oJ6u0Y_o'
        )
        .then(()=>{
            contactMessage.classList.add('color-dark');
            contactMessage.textContent = 'Message sent successfully';
            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
        });

        contactName.value = '';
        contactEmail.value = '';
        contactMessage.value = '';
        Message.value = '';
    }
};

contactForm.addEventListener('submit', sendEmail);

