
import './App.css';
import Test from './Components/ArrFun';
import FunCom from './Components/FunCom';
import { FunCom2, TestFun } from './Components/FunCom';
import ClsCom from './Components/ClsCom';
import { CondRend } from './Components/CondRend';
import { EveHandling } from './Components/EventHandling';
import JsxDemo from './Components/JsxDemo';
import JsxRules from './Components/JsxRules';
import PropsDemo from './Components/Props';
import { PropsDemo2, PropsDemo3 } from './Components/Props';
import SetState from './Components/SetState';
import UseStateFun from './Components/UseState';
import { UseState2 } from './Components/UseState2.js';
function App() {

   
    const emp={
        EmpName:"ganesh",
        EmpPhone:"9866692824",
        EmpMail:"gani@mail.com"
        }
  return (
    <div className="App">
          <Test />
          <FunCom />
          <FunCom2 />
          <TestFun />
          <ClsCom />
          <CondRend />
          <EveHandling />
          <JsxDemo />
          <JsxRules />
          <PropsDemo Emp={emp} />
          <PropsDemo2 EmpName="bujji" EmpPhone="8367585225" EmpMail="bujji@.com" />
          <PropsDemo3 EmpName="chinna" EmpPhone="9876543210" EmpMail="chinna@.com" />
          <SetState />
          <UseStateFun />
          <UseState2/>
    </div>
  );
}

export default App;
