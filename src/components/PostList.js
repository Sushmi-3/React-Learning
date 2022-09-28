import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         post: []
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({post: response.data})
            } )
            .catch(error => {
                console.log(error)
                this.setState({errorMsg:'Error retrieving data'})
            })
    
    }
  render() {
    const {post} = this.state 
    return (
      <div>
       List of post 
       {
        post.length ?
        post.map(post => <div key={post.id}>{post.title}</div>) :
        null
       }
    
      </div>
    )
  }
}

export default PostList