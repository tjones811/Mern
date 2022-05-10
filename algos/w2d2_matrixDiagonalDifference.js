// https://www.hackerrank.com/challenges/diagonal-difference/problem
/* 
  Given a square matrix (2d array) of integers
  Calculate the absolute difference between the sums of its diagonals
    - top left to bottom right diagonal
    - top right to bottom left diagonal
*/

const expected1 = 2;
/* 
    left to right diagonal: 1 + 5 + 9 = 15
    right to left diagonal: 3 + 5 + 9 = 17
    absolute difference = 2
  */

const squareMatrix2 = [
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
];
const expected2 = 0;
/* 
    left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
    right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
    absolute difference = 0
  */

/**
 * Calculates the absolute diagonal difference of a square matrix.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Array<number>>} sqrMatrix A 2d array of numbers representing
 *    a square matrix (rows and columns).
 * @returns {number} Represents the absolute difference between the top left to
 *    bottom right diagonal and the top right to bottom left diagonal.
 */

const squareMatrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];

function diagonalDifference(sqrMatrix) {
  //need 2 variables for the sums (sum1 and sum2?)
  //need 2 iterators (x and y?)
  let sum1 = 0;
  let sum2 = 0;
  let x = 0;
  let y = 0;

  //loop as long as x is less than length of sqrMatrix and y is less than the length of sqrMatrix
  while (x < sqrMatrix.length && y < sqrMatrix.length) {
    console.log(sqrMatrix[y][x]);
    sum1 += sqrMatrix[y][x];
    x++;
    y++;
  }
  console.log(sum1);
  console.log("x and y after while loop i sfinished", x, y);
  x--;
  y = 0;
  //loop as long as x is greater than or equal to 0 and y is less than the length of the array
  while (x >= 0 && y < sqrMatrix.length) {
    console.log(sqrMatrix[y][x]);
    sum2 += sqrMatrix[y][x];
    x--;
    y++;
  }
  console.log(sum2);
  return Math.abs(sum1 - sum2);
}

console.log(diagonalDifference(squareMatrix1));
console.log(diagonalDifference(squareMatrix2));