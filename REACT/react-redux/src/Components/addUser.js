import React, {useState} from 'react';

export default function AddUser() {
    const[user,setUser]=useState([]);
    const[input,setInput]=useState('');

    function addUser(){
        if(input){
            setUser((previousState)=>[
                ...previousState,input
            ])
            setInput("");
            console.log(user);
        }
    }

    return <div>
        <h1>Add new user</h1>
        <input type='text' value={input} onChange={(event)=> setInput(event.target.value)}/>
        <button onClick={addUser}>Add</button>
    </div>
}