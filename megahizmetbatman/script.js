// ARKA PLAN SLIDESHOW
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[currentSlide].classList.add('active');
    currentSlide = (currentSlide + 1) % slides.length;
}

// Her 5 saniyede bir değişim
setInterval(showSlide, 5000);
showSlide(); // İlk slaytı göster

// 3D KART ÇEVİRME
function flipCard(card) {
    card.classList.toggle('flipped');
}

// WHATSAPP HOVER
document.querySelector('.whatsapp-btn').addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1)';
});
document.querySelector('.whatsapp-btn').addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
});