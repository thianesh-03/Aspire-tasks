import './App.css';
import ClassComp from './Components/ClassComp';
import StateComp from './stateComp';
// import Comp from './comp';
// import ClassComp from './ClassComp';
// import Header from './header';

function App() {

  // const day = "monday";
  // const color = "red";

  // const dayInfoOne = {day:"monday",color:"green"}
  // const dayInfoTwo = {day:"tuesday",color:"red"}

  // const days = [
  //   {day:"monday",color:"green",size:20},
  //   {day:"tuesday",color:"red",size:20},
  //   {day:"wednesday",color:"blue",size:20}
  // ];

  // const dayNumber = [1,2,3,4,5,6,7];
  return (
    <>
    {/* { dayInfoOne.day === undefined && dayInfoOne.color === undefined ?
      <Comp dayInfo={dayInfoOne}/> : <h1>Empty bhaii!!</h1>}
      {/* <ClassComp dayInfo={dayInfoTwo}/> */}

      {/* <ol>
        {days.map((dayInfo)=> <li key={dayInfo.day} ><ClassComp dayInfo={dayInfo}/></li>)}
      </ol>
      <ul>
        {dayNumber.map((dayNumber,index)=> <li key={index}>{dayNumber}</li>)}
      </ul> */}
      {/* <Header/> */}
      <StateComp/>
      <ClassComp/>
    </>
  );
}

export default App;
