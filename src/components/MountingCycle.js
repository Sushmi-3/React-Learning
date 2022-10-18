import React, { Component } from 'react'
import MountingChild from './MountingChild'

 class MountingCycle extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'Sushmi'
   }
   console.log("Constructor")
 }

 static getDerivedsatteFromProps(props,state){
    console.log("Static")
    return null
 }

componentDidMount() {
    console.log('didMount')
}

    render() {
        console.log("render")
    return (
      <div>
<h1>Rendered</h1>
<MountingChild/>
      </div>
    )
  }
}

export default MountingCycle