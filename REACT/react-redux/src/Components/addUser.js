import React, { useState } from 'react';
// import ViewUser from './viewUser';
import { useDispatch } from 'react-redux';
import { addUser as addUserAction } from '../slices/userSlice';

export default function AddUser() {
    // const[user,setUser]=useState([]);
    const[input,setInput]=useState('');
    const Dispatch = useDispatch();

    function addUser(){
        if(input){
            // setUser((previousState)=>[...previousState,input])
            Dispatch(addUserAction(input));
            setInput("");
            // console.log(user);
        }
    }

    return <><div>
        <h1>Add new user</h1>
        <input type='text' value={input} onChange={(event)=> setInput(event.target.value)}/>
        <button onClick={addUser}>Add</button>
    </div>
    </>
}