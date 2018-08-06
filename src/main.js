function makeGrid(height, width) {
    let grid = document.getElementById('grid');
    for (var i = 0; i < height; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (var j = 0; j < width; j++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}

makeGrid(10,10);