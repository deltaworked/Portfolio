// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Back to top button visibility
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
};

// Scroll back to top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Send letter function
function sendLetter() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Your message has been sent!");
    } else {
        alert("Please fill out all fields.");
    }
}
