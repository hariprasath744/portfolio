// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Modal Script
const modal = document.getElementById('modal');
const closeModal = document.querySelector('.close');

// When a project is clicked
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;
        
        modal.querySelector('h2').textContent = title;
        modal.querySelector('p').textContent = description;
        
        modal.style.display = "block";
    });
});

// Close the modal when clicking the 'X'
closeModal.addEventListener('click', function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks outside of the modal content
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});
// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting before validation
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    // Simple validation
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required!";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";

        // Clear the form
        document.getElementById('contactForm').reset();
    }
});
