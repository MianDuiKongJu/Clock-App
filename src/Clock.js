import React, { Component } from 'react';

// option1 functional component
// const Clock = (props) => {
//   return (
//   <h1>{props.time}</h1>
//   )
// }

// option2 class component
class Clock extends Component {
  // lifecycle 1
  constructor() {
    super();
    this.state = { 
      time: new Date().toTimeString(),
    }
  }

  // lifecycle 3
  componentDidMount() {
    this.updateTime();
  }

  // last lifecycle
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // lifecycle 4
  updateTime() {
    this.timer = setInterval(() => {this.setState({time: new Date().toTimeString()})},)
  }

  // lifecycle 2
  render(){
    const { time } = this.state
    return (
    <h1>{this.state.time}</h1>
    )
  }
}

export default Clock;