import { useState,useEffect } from "react";

function Timer(){
    const[count,setCount]=useState(1);
    useEffect(()=>{
        console.log("rendered!");
        countCheck();
    },[count]);

    function addCount(){
        setCount((previousState)=>{return previousState+1});
    }

    function countCheck(){
        if(count>10)
            setCount(1);
    }

    return(
        <>
            <h1>The render count is {count}</h1>
            <button onClick={addCount}>Increase count</button>
        </>
    );
}

export default Timer;