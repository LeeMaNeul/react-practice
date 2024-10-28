import "./Square.css";

const Square = ({onClick, value}) => {
  return (
    <button 
      className='square'
      onClick={() => { onClick() }}>
        {value}
    </button>
    // 부모 컴포넌트인 Board 컴포넌트에서 props인 value를 받아와서 출력
  )
}

export default Square;