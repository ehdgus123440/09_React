import React from 'react'; // imr 자동 완성

/* 함수형 컴포넌트 생성 
  - 함수명은 무조건 대문자로 시작
*/
const PropsEx1 = (props) => {

  console.log(props);

  /* props에는 값 대입 불가  */
  // if(props.num == undefined) props.num = 1;
  // if(props.name == undefined) props.num = '기본값';

  return(
    <> 
      <h3>Props 예제 1</h3>
      <p>번호 : {props.num === undefined ? 0 : props.num} / 이름 : {props.name === undefined ? '기본값' : props.name}</p>
    </>
  );
}

export default PropsEx1;
