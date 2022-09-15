import React, { Component } from 'react'

class State extends Component {

    constructor(){
        super()
        this.state = {
           message :'Happy learning'
        }
    }

    changeMessage() {
        this.setState({
            message:'Thanks for clicking'
        })
    }
       render(){
           return( 
            <div>
<h1>{this.state.message}</h1>
<button onClick={() => this.changeMessage()}>Click</button>
            </div>
           ) 
       }
}
export default State