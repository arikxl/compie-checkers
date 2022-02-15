export  const boardService = {
  setPawnsToStartPositions,
  createEmptyBoard
}

function setPawnsToStartPositions(){
  const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const board = [];

  let className = '';
  let piece = 'blank';

  for (let i = yAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < xAxis.length; j++) {

      ((i + j) % 2 === 0) ? className = 'black-tile' : className = 'white-tile';
    
      if (i < 3 && className === 'black-tile') piece = ' black';
      else if (i > 4 && className === 'black-tile') piece = ' white';
      else piece = 'blank';
      board.push({
        className: `tile ${className} ${i}-${j}`,
        pieceType: piece,
        i,
        j
      })
    }
  }
  return board;
};

function createEmptyBoard(){
  const xAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  const yAxis = ['1', '2', '3', '4', '5', '6', '7', '8'];
  const board = [];

  let className = '';
  let piece = 'blank';

  for (let i = yAxis.length - 1; i >= 0; i--) {
    for (let j = 0; j < xAxis.length; j++) {
      const number = i + j + 2;

      (number % 2 === 0) ? className = 'black-tile' : className = 'white-tile';

      board.push({
        className: `tile ${className} ${i}-${j}`,
        pieceType: piece,
        i,
        j
      })
    }
  }
  return board;
};