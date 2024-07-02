import React from 'react'

export default class ClassComp extends React.Component {
  constructor(){
    super();
    this.state = {color:"blue",day:"monday"};
  }

  render() {
    // const {dayInfo} = this.props;
    // const {day,color,size} = dayInfo;
    return (
      <div>
        <h1>This {this.state.color} and {this.state.day} can be changed</h1>
        <button onClick={()=>{this.setState(previousState=>{return{...previousState,color:'white'}})}}>change color</button>
      </div>
    )
  }
}
