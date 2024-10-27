import React, { Component } from 'react'
import "./Square.css";

export default class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    }
  }
  render() {
    return (
      <button 
        className='square'
        onClick={() => { this.props.onClick() }}>
          {this.props.value}
      </button>
      // 부모 컴포넌트인 Board 컴포넌트에서 props인 value를 받아와서 출력
    )
  }
}
