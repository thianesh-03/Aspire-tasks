import { useState } from "react";

function Form(){
    const[name,setName]=useState("");

    function handleChange(event){
        setName(event.target.value);
    }

    function submitForm(event){
        event.preventDefault();
        console.log("your name is: ",name);
    }
    return(
        <form onSubmit={submitForm}>
            <label> Enter your name: 
                <input type="text" value={name} onChange={handleChange}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

export default Form;