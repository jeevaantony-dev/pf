const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const allLinks = document.querySelectorAll('.nav-links li a');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

allLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        if(icon) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});
