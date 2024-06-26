import React from 'react'


function Comp(props) {
  const {dayInfo} = props;//de-structuring
  const {day,color} = dayInfo;
  return (
    <div>
        <h1 style={{color: color}}>Hello World! Today is {day}</h1>
    </div>
  );
}


export default Comp