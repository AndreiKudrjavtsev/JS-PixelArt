function makeGrid(height, width) {
    let grid = document.getElementById('grid');
    for (var i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.className = 'grid_row';
        for (var j = 0; j < width; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

// main fucntionality of pixel art goes here;
makeGrid(10,10);

var currentColor;
var currentColorButton = document.getElementById('current-color');
var colorButtons = document.querySelectorAll('div.color');
var cells = document.querySelectorAll('.cell');

// event handling for switching current color
colorButtons.forEach(elem => elem.addEventListener("click", function () {
    let clickedButtonStyle = window.getComputedStyle(elem);
    currentColor = clickedButtonStyle.getPropertyValue('background-color');
    currentColorButton.style.backgroundColor = currentColor;
}))
// even handling for painting
cells.forEach(cell => cell.addEventListener("click", function () {
    cell.style.backgroundColor = currentColor;
}))
