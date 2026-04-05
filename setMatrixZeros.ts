/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  let cols = new Set();
  let rows = new Set();

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let col = 0; col < row.length; col++) {
      if (row[col] === 0) {
        cols.add(col);
        rows.add(i);
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let col = 0; col < row.length; col++) {
      if (cols.has(col)) {
        row[col] = 0;
      }
      if (rows.has(i)) {
        row[col] = 0;
      }
    }
  }
//   console.log(cols);
//   console.log(rows);
//   console.log(matrix);
}

setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
