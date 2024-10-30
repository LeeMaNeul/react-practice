import React from 'react'
import Square from './Square'
import "./Board.css";

// export default class Board extends Component { 클래스 컴포넌트 -> 함수형 컴포넌트로 변경
  
// }
const Board = ({ squares, onClick}) => {
  
  const renderSquare = (i) => {
    return <Square 
      value={squares[i]}
      onClick={() => onClick(i)}
    /> // props인 value로 자식 컴포넌트인 square 컴포넌트에게 전달
  }
  
  // render() { 클래스 컴포넌트 -> 함수형 컴포넌트로 변경
    
  // }
  return (
    <div className='board-wrapper'>
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