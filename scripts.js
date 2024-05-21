document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }

    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        // Handle the form submission here, e.g., send the email using JavaScript or make an AJAX request
        // For now, let's just log the email to the console
        console.log('Submitted email:', email);
        // Optionally, you can clear the input field after submission
        document.getElementById('email').value = '';
    });
});
