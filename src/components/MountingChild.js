import React, { Component } from 'react'

 class MountingChild extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name:'Sushmi'
   }
   console.log("Child Constructor")
 }

 static getDerivedsatteFromProps(props,state){
    console.log("Child Static")
    return null
 }

componentDidMount() {
    console.log(' Child didMount')
}

    render() {
        console.log("Child render")
    return (
      <div>
<h1>Child Rendered</h1>
      </div>
    )
  }
}

export default MountingChild