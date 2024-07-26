import React from "react";
import { useState } from "react";


function List(){
    const [list,setList] = useState([]);

    function addItem(){
        setList((previousState)=>{return [...previousState,'hello added']})
    }
    return(
        <>
            <button onClick={addItem}>Add element</button>
            <ul>{
                list.map((el,index) => <li key={index}>{el}</li>)
            }
            </ul>
        </>
        )
}

export default List;