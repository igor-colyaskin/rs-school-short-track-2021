/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function getCellNeighborship(matrix, indX, indY) {
  let sum = 0;
  if (matrix[indY - 1]) {
    const levelUp = matrix[indY - 1];
    if (levelUp[indX - 1]) sum++;
    if (levelUp[indX]) sum++;
    if (levelUp[indX + 1]) sum++;
  }

  const levelCurrent = matrix[indY];
  if (levelCurrent[indX - 1]) sum++;
  if (levelCurrent[indX + 1]) sum++;

  if (matrix[indY + 1]) {
    const levelDown = matrix[indY + 1];
    if (levelDown[indX - 1]) sum++;
    if (levelDown[indX]) sum++;
    if (levelDown[indX + 1]) sum++;
  }
  return sum;
}

function minesweeper(matrix) {
  const arrZero = matrix.map((eY, indY) => {
    const arrOne = matrix[indY];
    return arrOne.map((eX, indX) => getCellNeighborship(matrix, indX, indY));
  });
  return arrZero;
}

module.exports = minesweeper;
