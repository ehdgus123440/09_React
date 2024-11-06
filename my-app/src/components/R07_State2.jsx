import React, { useState } from 'react';

const StateEx2 = (props) => {

  // 상태 변수 선언
  // 상태 변수 count 값이 변할 때 마다 컴포넌트 reRandering
  const [count, setCount] = useState(props.init);

  // +, - 버튼 클릭 시 
  const plusHandler = () => {
    setCount(Number(count) + 1);
  }

  const minusHandler = () => {
    setCount(Number(count) - 1);
  }

  return (
    <div className='count-container'>
      <button className='minus-btn btn' onClick={minusHandler}>-</button>
      <h1>{count}</h1>
      <button className='plus-btn btn' onClick={plusHandler}>+</button>
    </div>
  );
}

export default StateEx2;