import { useState } from "react";

function Form(){
    // const[name,setName]=useState("");
    // const[age,setAge]=useState(0);
    // const[email,setEmail]=useState(""); 
    //we should not create individual state for each input fields

    const[inputs,setInputs] = useState({});
    
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value;
        setInputs((previousState)=>{return {...previousState,[name]:value}});
    }

    function submitForm(event){
        event.preventDefault();
        // console.log("your name is: ",name);
        // console.log("your age is: ",age);
        // console.log("your email is: ",email);
        console.log(inputs);
    }
    return(
        <form onSubmit={submitForm}>
            <label> Enter your name: 
                <input type="text" name="name" onChange={handleChange}/>
            </label><br/>
            <label> Enter your age: 
                <input type="number" name="age" onChange={handleChange}/>
            </label><br/>
            <label> Enter your email: 
                <input type="text" name="email" onChange={handleChange}/>
            </label><br/>
            <label> Enter your email: 
                <input type="text" name="email" onChange={handleChange}/>
            </label><br/>
            <input type="submit" value="Submit"/>
        </form>
    )
}
//we go for previous state because whenever a specific object is that value alone will be stored in the input 
export default Form;