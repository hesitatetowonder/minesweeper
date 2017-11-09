const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];
  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex ++) {
    let row = [];
    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex ++) {
      row.push(' ');
    }
      board.push(row);
  }
  return board;
};
// end of generatePlayerBoard

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];
  for(let rowIndex = 0; rowIndex < numberOfRows; rowIndex ++) {
    let row = [];
    for(let columnIndex = 0; columnIndex < numberOfColumns; columnIndex ++) {
      row.push(null);
    }
      board.push(row);
  }
let numberOfBombsPlaced = 0;
//Currently can place bombs on top of existing bombs
while(numberOfBombsPlaced < numberOfBombs) {
  let randomRowIndex =
  Math.floor((Math.random() * numberOfRows) + 1);

  let randomColumnIndex =
  Math.floor((Math.random() * numberOfColumns) + 1);

  board[randomRowIndex][randomColumnIndex] = 'B';

  numberOfBombsPlaced++;
};
  return board;
};

const printBoard = (board) => {
  console.log(board.map(row => row.join(' | ')).join('\n'));
};
//End of current gameplay code

let playerBoard = generatePlayerBoard(3, 4);
let bombBoard = generateBombBoard(3,4,5);

console.log('Player Board : ');
printBoard(playerBoard);
console.log('Bomb Board : ');
printBoard(bombBoard);
