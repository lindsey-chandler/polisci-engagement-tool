document.addEventListener('DOMContentLoaded', () => {
    const colorContainer = document.getElementById('color-container');
    let isRed = true; // Initial color is red

    function toggleColor() {
        if (isRed) {
            colorContainer.style.backgroundColor = 'green';
        } else {
            colorContainer.style.backgroundColor = 'red';
        }
        isRed = !isRed; // Toggle the state
    }

    // Add event listener for touch events
    colorContainer.addEventListener('touchstart', toggleColor);

    // Optionally, add event listener for clicks (if you want to support non-touch devices)
    colorContainer.addEventListener('click', toggleColor);
});
