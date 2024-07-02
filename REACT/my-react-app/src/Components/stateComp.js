import React from 'react'
import { useState } from 'react'

export default function StateComp() {
  // let color = 'red'
  const [color,setColor] = useState('red');
  return (
    <>
      <h1>This color can be changed {color}</h1>
      <button onClick={()=>{setColor('blue')}}>Change color</button>
    </>
    )
}
