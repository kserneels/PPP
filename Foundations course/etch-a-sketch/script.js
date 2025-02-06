function createGrid(size) {
    const container = document.getElementById('grid-container');
    container.innerHTML = '';

    let squareSize = 960 / size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        square.addEventListener('mouseover', () => {
            let opacity = parseFloat(square.style.opacity) || 0;
            square.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
            square.style.opacity = Math.min(opacity + 0.1, 1);
        });

        container.appendChild(square);
    }
}

function setGridSize() {
    let size = parseInt(prompt("Enter grid size (max 100):"));
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
}

createGrid(16);