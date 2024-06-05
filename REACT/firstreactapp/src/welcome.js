import React,{Component} from "react";

class Welcome extends Component{
    render(){
        return(
            <div>
                <h1>welcome!!</h1>
                <h2 style={{color:'green'}}>Hello {this.props.name}</h2>
            </div>
        )
    }
}

export default Welcome;