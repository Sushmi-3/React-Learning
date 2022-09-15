import React, { Component } from 'react'

class EventHandling extends Component {

    clickHandler(){
        console.log('clicked the button')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventHandling