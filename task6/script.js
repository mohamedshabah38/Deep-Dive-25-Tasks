document.addEventListener('DOMContentLoaded', function() {
const detailButtons = document.querySelectorAll('.details-button');
detailButtons.forEach(button => {
button.addEventListener('click', function() {
alert('تم النقر على زر "Show Details" لهذا المنتج!');
});
});
});