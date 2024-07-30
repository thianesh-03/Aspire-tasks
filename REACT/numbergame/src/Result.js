import React from "react";

function Result({correctValue,term}){

    if(correctValue>term){
        return <h3>Your guess:Lower</h3>
    }
    else if(correctValue<term){
        return <h3>Your guess:Higher</h3>
    }
    else if(correctValue==term){
        return <h3>Correct guess!!</h3>
    }
    else{
        return <h3>Enter a valid number</h3>
    }
}
export default Result;