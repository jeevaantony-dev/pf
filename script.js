// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if(hamburger) {
    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === "flex") {
            navLinks.style.display = "none";
        } else {
            navLinks.style.display = "flex";
            navLinks.style.flexDirection = "column";
            navLinks.style.position = "absolute";
            navLinks.style.top = "70px";
            navLinks.style.left = "0";
            navLinks.style.width = "100%";
            navLinks.style.background = "rgba(10, 15, 13, 0.95)";
            navLinks.style.padding = "20px";
        }
    });
}
