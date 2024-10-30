import { useState } from "react";
import "./App.css"
import Board from "./components/Board";
function App() {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null)}]); // 클릭 로그를 남기기 위해 squares를 배열로 만들고 배열 안에 객체 데이터로 배열을 넣음
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0); // 현재 몇 번째 step인지 기록
  

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

  const current = history[stepNumber]; // 현재 위치 저장 & stepNumber의 초깃값은 0이므로 첫 시작은 0을 나타냄
  const winner = calculateWinner(current.squares);
  let status;

  if (winner) status = `Winner: ${winner}`;
  else status = `Current Player: ${xIsNext ? 'X' : 'O'}`;

  const handleClick = i => {
    const newHistory = history.slice(0, stepNumber + 1); // 인덱스 0부터 stepNumber까지 복사
    const newCurrent = newHistory[newHistory.length - 1]; // newHistory의 마지막 데이터 저장
    const newSquares = newCurrent.squares.slice(); // 현재 squares 저장
    if(calculateWinner(newSquares)) return;
    newSquares[i] = xIsNext ? 'X' : 'O';
    
    setHistory([...newHistory, { squares: newSquares }]);
    // history useState할 때 매개변수 데이터 타입이 배열이였으니까 대괄호 먼저 시작
    // 전개연산자로 history에 있는 현재 배열 넣고 그 외 공간은 newSquare 데이터 저장
    setXIsNext(prev => !prev);
    setStepNumber(newHistory.length);
  }

  const moves = history.map((step, move) => {
    const desc = move ? // move가 0이면 전자 0이 아니면 후자 출력
    'Go to move #' + move :
    'Go to game start';
    return (
      <li key={move}>
        <button className="btn" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    )
  });

  const jumpTo = (step) => {
    if (winner) return;
    setStepNumber(step);
    setXIsNext((step % 2) === 0); // 짝수면 true => 'X' 홀수면 false => 'O'
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} /> 
      </div>
      <div className="game-info">
        <div className='status'>{status}</div>
        <ol style={{ listStyle: 'none' }}>{moves}</ol>
      </div>
    </div>  
  );
}

export default App;