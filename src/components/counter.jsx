import React, { Component } from 'react';

class Counter extends Component {
  state = { value: 'hello'}
  render() { 
    return (<h4>{this.state.value}</h4>);
  }
}

export default Counter;