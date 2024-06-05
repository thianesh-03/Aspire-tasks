import React, {Component} from "react";

export default class employee extends Component{
    constructor(props) {
        super(props)

        this.state = {
            ename:"thianesh",
            eid: 1
        }
    }
    displayEmployee(event){
        alert(`Employee Name: ${this.state.ename}\nEmployee ID: ${this.state.eid}`);
    }

    changeName(event){
        this.setState({
            ename:event.target.value
        })
    }
    changeId(event){
        this.setState({
            eid:event.target.value
        })
    }

    render(){
        return(
            <div>
                <input type="text" name="ename" value={this.state.ename} onChange={(event)=>this.changeName(event)}></input>
                <input type="number" name="ename" value={this.state.eid} onChange={(event)=>this.changeId(event)}></input>
                <input type="submit" onClick={(event)=>
                    this.displayEmployee(event)
                }></input>
            </div>
        )
    }
}