// Sudoku Solver

// Problem 37
// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.

// Note:
// The given board contain only digits 1-9 and the character '.'.
// You may assume that the given Sudoku puzzle will have a single unique solution.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solveSudoku = function(board) {
  // maps to be used throughout nested functions
  const placedRows = new Map();
  const placedCols = new Map();
  const placedLargeBlocks = new Map();

  const getLargeBlockNum = function(row, col) {
    const largeRow = Math.floor(row / 3) + 1;
    const largeCol = Math.floor(col / 3) + 1;
    return (largeRow - 1) * 3 + largeCol;
  };

  const isValidCell = function(cellVal, row, col) {
    // check placed rows
    if (placedRows.has(cellVal)) {
      if (placedRows.get(cellVal).has(row)) {
        return false;
      }
      placedRows.get(cellVal).set(row, 1);
    } else {
      placedRows.set(cellVal, new Map());
      placedRows.get(cellVal).set(row, 1);
    }

    // check placed cols
    if (placedCols.has(cellVal)) {
      if (placedCols.get(cellVal).has(col)) {
        return false;
      }
      placedCols.get(cellVal).set(col, 1);
    } else {
      placedCols.set(cellVal, new Map());
      placedCols.get(cellVal).set(col, 1);
    }

    // check surrounding larger 9-block
    const largeBlockNum = getLargeBlockNum(row, col);
    if (placedLargeBlocks.has(cellVal)) {
      if (placedLargeBlocks.get(cellVal).has(largeBlockNum)) {
        return false;
      }
      placedLargeBlocks.get(cellVal).set(largeBlockNum, 1);
    } else {
      placedLargeBlocks.set(cellVal, new Map());
      placedLargeBlocks.get(cellVal).set(largeBlockNum, 1);
    }

    return true;
  };

  const isValidSudoku = function() {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[row].length; col++) {
        if (board[row][col] === `.`) {
          continue;
        }

        if (!isValidCell(board[row][col], row, col)) {
          return false;
        }
      }
    }

    return true;
  };

  if (!isValidSudoku()) {
    return `Invalid Sudoku board.`;
  }

  // placeNum(0, 0);
  // console.log(board[0].join(`,`));
  // console.log(board[1].join(`,`));
  // console.log(board[2].join(`,`));
  // console.log(board[3].join(`,`));
  // console.log(board[4].join(`,`));
  // console.log(board[5].join(`,`));
  // console.log(board[6].join(`,`));
  // console.log(board[7].join(`,`));
  // console.log(board[8].join(`,`));

  return board;
};

const board = [
  [`5`, `3`, `.`, `.`, `7`, `.`, `.`, `.`, `.`],
  [`6`, `.`, `.`, `1`, `9`, `5`, `.`, `.`, `.`],
  [`.`, `9`, `8`, `.`, `.`, `.`, `.`, `6`, `.`],
  [`8`, `.`, `.`, `.`, `6`, `.`, `.`, `.`, `3`],
  [`4`, `.`, `.`, `8`, `.`, `3`, `.`, `.`, `1`],
  [`7`, `.`, `.`, `.`, `2`, `.`, `.`, `.`, `6`],
  [`.`, `6`, `.`, `.`, `.`, `.`, `2`, `8`, `.`],
  [`.`, `.`, `.`, `4`, `1`, `9`, `.`, `.`, `5`],
  [`.`, `.`, `.`, `.`, `8`, `.`, `.`, `7`, `9`],
];

console.log(solveSudoku(board));
