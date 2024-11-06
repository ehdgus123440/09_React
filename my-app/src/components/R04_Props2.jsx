import React from 'react';
import '../css/Props.css';
// css를 해당 jsx 파일에 import해도 출력되는 모든 파일에 적용됨

const PropsEx2 = (props) => {

  // 구조 분해 할당
  let {name, age, address, gender} = props;

  return(
    <>
      {/* react에서 클래스 선언 시 className='클래스명'으로 작성 */}
      <ul className='info'>
        <li>이름 : {name}</li>
        <li>주소 : {address}</li>
        <li>성별 : {gender}</li>
        <li>
          나이 : {age}세, {age < 20 ? <span className='red'>미성년자 입니다</span> : <span className='green'>성인 입니다</span>}
        </li>
      </ul>
    </>
  );

}

export default PropsEx2;