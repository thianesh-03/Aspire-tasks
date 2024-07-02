import React, { useState } from 'react'

export default function Arrayer() {
    const [list,setList] = useState([]);
    const [count,setCount] = useState(1);

    function addItem(){
        const itemName = 'item'+count;
        setList((previousState)=>{
            return [...previousState,itemName]
        })
        setCount((previousState)=>{
            return previousState+1;
        })
    }

    console.log('current state',list);

  return (
    <div>
        <h2>List</h2>
        <button onClick={addItem}>Add Item</button>
        <ul>
            {
                list.map((el,index)=>(<li key={index}>{el}</li>))
            }
        </ul>
    </div>
  )
}
