import { useState } from 'react';
import './board.css';
import { Square } from './square';
import { RestartButton } from './restartbutton';
import PropTypes from 'prop-types';

export const Board = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }
  const handleClicl = (i) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  };
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const handleRestart = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row"></div>
      <div className="container">
        <div className="board">
          <Square value={squares[0]} onSquareClick={() => handleClicl(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClicl(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClicl(2)} />
          <Square value={squares[3]} onSquareClick={() => handleClicl(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClicl(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClicl(5)} />
          <Square value={squares[6]} onSquareClick={() => handleClicl(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClicl(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClicl(8)} />
        </div>

        <RestartButton onClick={handleRestart} />
      </div>
    </>
  );
};
