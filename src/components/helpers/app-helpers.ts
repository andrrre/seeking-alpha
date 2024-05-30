enum Status {
  Alive = 1,
  Dead = 0,
}

export const createRandomGrid = (gridSize: number): number[][] => {
  const grid: number[][] = [];
  for (let i = 0; i < gridSize; i++) {
    grid.push(
      Array.from(Array(gridSize), () =>
        Math.random() > 0.7 ? Status.Alive : Status.Dead
      )
    );
  }
  return grid;
};

//coordinates of cells around one cell
const operations = [
  [0, 1],
  [0, -1],
  [1, -1],
  [1, 1],
  [1, 0],
  [-1, 1],
  [-1, -1],
  [-1, 0],
];

export const getNextState = (grid: number[][]): number[][] => {
  const size = grid.length;

  return grid.map((row, i) =>
    row.map((cell, j) => {
      let neighbors = 0;

      operations.forEach(([x, y]) => {
        const newI = i + x;
        const newJ = j + y;

        if (newI >= 0 && newI < size && newJ >= 0 && newJ < size) {
          neighbors += grid[newI][newJ];
        }
      });

      if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
        return Status.Dead;
      } else if (cell === 0 && neighbors === 3) {
        return Status.Alive;
      } else {
        return cell;
      }
    })
  );
};
