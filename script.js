document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sketch');

    // TODO: Add the slider functionality
    const dimension = document.getElementById('slider')
    console.log(dimension.value);

    for (let i = 0; i < dimension * dimension; i++) { // 16x16 grid
        const gridElement = document.createElement('div');
        gridElement.addEventListener('mouseover', draw); // Add drawing functionality
        grid.appendChild(gridElement);
    }

    // Function to draw (change color of the div)
    function draw(e) {
        e.target.style.backgroundColor = 'black'; // Change the color to black
    }

    // Shake to clear
    document.getElementById('clear').addEventListener('click', () => {
        grid.querySelectorAll('div').forEach(div => {
            div.style.backgroundColor = '';
        });
    });
});