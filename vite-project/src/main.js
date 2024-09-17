document.addEventListener("DOMContentLoaded", function() {
    const productCard = document.getElementById('productCard');
    const colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedColor = this.getAttribute('data-color');

            productCard.classList.remove('green', 'gray', 'black');

            productCard.classList.add(selectedColor);
        });
    });
});
