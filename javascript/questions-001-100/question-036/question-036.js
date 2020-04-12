// Valid Sudoku

// Problem 36
// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

// Example 1:
// Input:
// [
//   ["5","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: true

// Example 2:
// Input:
// [
//   ["8","3",".",".","7",".",".",".","."],
//   ["6",".",".","1","9","5",".",".","."],
//   [".","9","8",".",".",".",".","6","."],
//   ["8",".",".",".","6",".",".",".","3"],
//   ["4",".",".","8",".","3",".",".","1"],
//   ["7",".",".",".","2",".",".",".","6"],
//   [".","6",".",".",".",".","2","8","."],
//   [".",".",".","4","1","9",".",".","5"],
//   [".",".",".",".","8",".",".","7","9"]
// ]
// Output: false

// Explanation: Same as Example 1, except with the 5 in the top left corner being
//     modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// The given board contain only digits 1-9 and the character '.'.
// The given board size is always 9x9.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
  const placedRows = new Map();
  const placedCols = new Map();
  const placedLargeBlocks = new Map();

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === `.`) {
        continue;
      }

      const cellVal = board[row][col];

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
      const largeRow = Math.floor(row / 3) + 1;
      const largeCol = Math.floor(col / 3) + 1;
      const largeBlockNum = (largeRow - 1) * 3 + largeCol;

      if (placedLargeBlocks.has(cellVal)) {
        if (placedLargeBlocks.get(cellVal).has(largeBlockNum)) {
          return false;
        }
        placedLargeBlocks.get(cellVal).set(largeBlockNum, 1);
      } else {
        placedLargeBlocks.set(cellVal, new Map());
        placedLargeBlocks.get(cellVal).set(largeBlockNum, 1);
      }
    }
  }

  return true;
};

module.exports = { isValidSudoku };
