/*===========toggle icon navbar===========*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*===========scroll sections active link===========*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*===========scroll sections active link===========*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*===========remove toggle icon and navbar when click navbar link (scroll)===========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*===========scroll sections reveal===========*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .project-box, .achievements-container, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact-info', { origin: 'right' });

/*===========typed js===========*/
const typed = new Typed('.multiple-text', {
    strings: ['Industrial Electronic', 'Automation Student'],
    typeSpeed: 100,
    backSpeed: 100,
    bacDelay: 1000,
    loop: true
});

function showCertificate(imageSrc) {
    document.getElementById("certImage").src = imageSrc;
    document.getElementById("certificateModal").style.display = "block";
}

function closeModal() {
    document.getElementById("certificateModal").style.display = "none";
}

/*=========End=========*/
let currentIndex = 0;
const slider = document.querySelector('.skills-slider');
const totalCards = document.querySelectorAll('.skills-card').length;
const cardWidth = 195;  // Adjust based on card size
const wrapperWidth = 650; // Your new wrapper width
const cardsPerView = Math.floor(wrapperWidth / cardWidth); // Dynamically calculated

document.getElementById('nextAchieve').addEventListener('click', function() {
    if (currentIndex < totalCards - cardsPerView) {
        currentIndex++;
        updateSlider();
    }
});

document.getElementById('prevAchieve').addEventListener('click', function() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlider();
    }
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}


/*popup view cert for my achievement*/
function openCertPopup(pdfSrc) {
    document.getElementById("popup-pdf").src = pdfSrc; // Use correct parameter
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("popup-pdf").src = ""; // Clear the PDF when closing
}

// Close popup when clicking outside
document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) {
        closePopup();
    }
});

/*popup view pdf for past project*/
function openProjectPopup(pdfPath) {
    document.getElementById("project-pdf").src = pdfPath;
    document.getElementById("project-popup").style.display = "block";
}

function closeProjectPopup() {
    document.getElementById("project-popup").style.display = "none";
    document.getElementById("project-pdf").src = "";
}

/*Send Message using EmailJS*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent reload

    emailjs.sendForm('service_80x28uh', 'template_s10yalb', this)
    .then(function(response) {
        alert('Email sent successfully!');
    }, function(error) {
        alert('Failed to send email: ' + JSON.stringify(error));
    });
});