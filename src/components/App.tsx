import { useState, useEffect } from "react";
import { createRandomGrid, getNextState } from "./helpers";
import "./App.css";
import { GRID_SIZE } from "../../consts";

export const App = () => {
  const [grid, setGrid] = useState<number[][]>(createRandomGrid(GRID_SIZE));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) => getNextState(prevGrid));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderGrid = (): JSX.Element[] =>
    grid.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, cellIndex) => (
          <div
            key={cellIndex}
            className={`cell ${cell ? "alive" : "dead"}`}
          ></div>
        ))}
      </div>
    ));

  return <div className="app">{renderGrid()}</div>;
};
