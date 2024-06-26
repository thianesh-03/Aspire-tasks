import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    const {dayInfo} = this.props;
    const {day,color,size} = dayInfo;
    return (
      <div>
        <h1 style={{color:color,fontSize:size}}>Hello {day}</h1>
      </div>
    )
  }
}
