// Consolidated JavaScript

// Hamburger menu toggle
const ham = document.querySelector('.hamburger');
const menu = document.querySelector('nav ul');
ham.addEventListener('click', () => {
    const expanded = ham.getAttribute('aria-expanded') === 'true';
    ham.setAttribute('aria-expanded', !expanded);
    menu.classList.toggle('show');
});

// Dark mode toggle
const modeBtn = document.querySelector('.mode');
modeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    modeBtn.setAttribute('aria-label', document.body.classList.contains('dark') ? 'Switch to light mode' : 'Switch to dark mode');
});

// Carousel functionality
const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

document.getElementById('next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.getElementById('prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Auto-slide every 5 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 5000);

// Countdown timer for flash sale
function updateTimer() {
    const timerEl = document.getElementById('timer');
    let time = 9000; // 2.5 hours in seconds
    const interval = setInterval(() => {
        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        timerEl.textContent = `Ends in ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;
        if (time < 0) {
            clearInterval(interval);
            timerEl.textContent = 'Sale ended';
        }
    }, 1000);
}
updateTimer();

// Product click simulation (improve with actual navigation)
document.querySelectorAll('.product, .cat-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Redirecting to product/category page...');
    });
    item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            item.click();
        }
    });
});