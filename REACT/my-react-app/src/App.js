import './App.css';
import Comp from './comp';
import ClassComp from './ClassComp';

function App() {

  // const day = "monday";
  // const color = "red";

  const dayInfoOne = {day:"monday",color:"green"}
  // const dayInfoTwo = {day:"tuesday",color:"red"}

  const days = [
    {day:"monday",color:"green",size:20},
    {day:"tuesday",color:"red",size:20},
    {day:"wednesday",color:"blue",size:20}
  ];
  return (
    <>{ dayInfoOne.day === undefined && dayInfoOne.color === undefined ?
      <Comp dayInfo={dayInfoOne}/> : <h1>Empty bhaii!!</h1>}
      {/* <ClassComp dayInfo={dayInfoTwo}/> */}

      <ol>
        {days.map((dayInfo)=> <li><ClassComp dayInfo={dayInfo}/></li>)}
      </ol>
    </>
  );
}

export default App;
