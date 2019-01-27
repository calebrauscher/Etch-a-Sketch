function createGrid(){
  size = prompt('Enter the number of squares per side');
  const grid = document.createElement('div');
  grid.setAttribute('id', 'container');
  for (let row = 0; row < size; row++){
    for (let column = 0; column < size; column++){
      const cell = document.createElement('div');
      cell.classList.add('grid');
      cell.style.width = 960/size + 'px';
      cell.style.height = 960/size + 'px';
      grid.appendChild(cell);
    }
  }
  document.body.append(grid);
}

function clearGrid() {
  let filled = document.getElementsByClassName('gridHovered');
  while(filled.length > 0){
    filled[0].classList.remove('gridHovered');
  }
  createGrid();
}
document.addEventListener("mouseover", function(event) {
  let x = event.clientX;
  let y = event.clientY;
  activeElement = document.elementFromPoint(x,y);
  if(activeElement.classList.contains('grid')) {
    activeElement.classList.add('gridHovered');
  }
});

document.getElementById('newGame').addEventListener('click',clearGrid)