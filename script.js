document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('sketch');
    const dimension = document.getElementById('slider');

    function createGrid(size) {
        // Clear the grid
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild);
        }

        // Set the grid size
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        for (let i = 0; i < size * size; i++) {
            const gridElement = document.createElement('div');
            gridElement.addEventListener('mouseover', draw);
            grid.appendChild(gridElement);
        }
    }

    function draw(e) {
        e.target.style.backgroundColor = 'black';
    }

    document.getElementById('clear').addEventListener('click', () => {
        grid.querySelectorAll('div').forEach(div => {
            div.style.backgroundColor = '';
        });
    });

    // Create the initial grid
    createGrid(dimension.value);

    // Update the grid when the slider value changes
    dimension.addEventListener('input', () => {
        createGrid(dimension.value);
    });
});