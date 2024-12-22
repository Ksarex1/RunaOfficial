const showMoreButton = document.getElementById('showMoreButton');
const hiddenProducts = document.querySelectorAll('.hidden-products');

showMoreButton.addEventListener('click', () => {
    hiddenProducts.forEach(card => {
        card.classList.remove('hidden-products');
        card.style.display = 'block !important';
    });
    showMoreButton.style.display = 'none';
});
