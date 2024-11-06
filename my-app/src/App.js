import './App.css';

import ClassComponent from './components/R01_ClassComponent';
// -> R01_Classcomponent에서 export된 HTML 요소를
//  ClassComponent라고 부르겠다 --> <ClassComponent></ClassComponent> 형태로 사용가능
import FunctionComponent from './components/R02_FunctionComponent';


// import 여기서 사용할 이름 form '경로';
import Props1 from './components/R03_Props1';

import Props2 from './components/R04_Props2';

import Props3 from './components/R05_Props3';

import State1 from './components/R06_State1';

import State2 from './components/R07_State2';

import State3 from './components/R08_State3';

// 기본적으로 //, /*  */ 주석 사용 가능
// 단, html코드가 작성되는 영역에서는 {/*  */} 주석 사용

function App() {
  return (
    <>
      {/* JSX(JS에서 HTML코드 포함) 주석) */} 
      {/* <ClassComponent/> */}
      {/* <FunctionComponent/> */}
      <Props1 num='1' name='홍길동'></Props1>
      <Props1 num='2' name='김미영'></Props1>
      <Props1/>
      <hr/>
      <Props2 name='홍길동' age='18' address='서울' gender='남'/>
      <Props2 name='김미영' age='21' address='경기도' gender='여'/>
      <hr/>
      <Props3 productName='라면' price='3000'/>
      <hr/>
      <State1/>
      <hr/>
      <State2 init='0'/>
      <hr/>
      <State3/>
    </>
  );
}

export default App;
