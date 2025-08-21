document.addEventListener('DOMContentLoaded', function() {
const detailButtons = document.querySelectorAll('.btn-details');
detailButtons.forEach(button => {
button.addEventListener('click', function() {
const productTitle = this.parentElement.querySelector('.product-title').textContent;
alert(`Details for ${productTitle} would be shown here.`);
});
});
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
card.style.opacity = '0';
card.style.transform = 'translateY(20px)';
setTimeout(() => {
card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
card.style.opacity = '1';
card.style.transform = 'translateY(0)';
}, 100 * index);
});
});