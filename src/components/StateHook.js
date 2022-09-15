import React, { Component } from 'react'

class StateHook extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment =() => {
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        State Hook
        <button onClick={this.increament ()}>Counter state</button>
      </div>
    )
  }
}

export default StateHook