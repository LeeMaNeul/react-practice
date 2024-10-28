import React, { useState } from 'react'
import Square from './Square'
import "./Board.css";

// export default class Board extends Component { 클래스 컴포넌트 -> 함수형 컴포넌트로 변경
  
// }
const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // getter: squares / setter: setSquares
  const [xIsNext, setXIsNext] = useState(true);

  const calculateWinner = squares => {
    const lines = [ 
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] && 
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) return squares[a];
    }
    return null;
  }
  const winner = calculateWinner(squares);
  let status;

  if (winner) status = `Winner: ${winner}`;
  else status = `Current Player: ${xIsNext ? 'X' : 'O'}`;
  
  const handleClick = (i) => {
    const newSquares = squares.slice(); // 기존에는 squares = squares였으나 함수형 컴포넌트로 변경할 땐 getter와 해당 변수명이 동일하지 않도록 수정
    if (calculateWinner(newSquares)) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares); // setter함수 호출해서 인수로 newSquares
    setXIsNext(prev => !prev);
  }
  
  const renderSquare = (i) => {
    return <Square 
      value={squares[i]}
      onClick={() => handleClick(i)}
    /> // props인 value로 자식 컴포넌트인 square 컴포넌트에게 전달
  }
  
  // render() { 클래스 컴포넌트 -> 함수형 컴포넌트로 변경
    
  // }
  return (
    <div>
      <div className='status'>{status}</div>
      <div className='board-row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;