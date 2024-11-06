import React, {useState} from 'react'; // imrs

/* 
  State : 컴포넌트의 상태(컴포넌트 단위의 전역 변수) 
  useState : 함수형 컴포넌트에서 State를 사용하기 위해 import하는 객체 
*/

const StateEx1 = () => {

  /* 일반 변수 사용 시 
      -> test 변수에 저장된 값은 변함, 화면은 랜더링 X 
  */
  // let test = 'A';

  /* 상태 변수(State) 이용 */
  const [test, setTest] = useState('A');
  
  // useState('A')의 반환값
  // === ['A', 0번 인덱스의 값을 바꿀 수 있는 함수]

  // 클릭 시 수행되는 함수 (이벤트 핸들러)
  const clickHandler = () => {
    if(test === 'A'){
      setTest('B')
    }
    else {
      setTest('A')
    }
    console.log("test:", test);
    // setTest() 함수를 이용해서
    // 상태 변수 test값을 변경하면
    // 해당 컴포넌트 리랜더링 수행
  }

  return(
    <>
      <h1>{test}</h1>
      <button onClick={clickHandler}>Change Button</button>
    </>
  )

}

export default StateEx1;