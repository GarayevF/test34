function addColumn(rows) {
    const container = document.querySelector('.container');
    const column = document.createElement('div');
    column.classList.add('column');
    column.style.gridRowEnd = `span ${rows}`;
    column.style.gridRowStart = `1`;
    container.appendChild(column);
  }
  