import React, { Component } from 'react'
import axios from 'axios'


// to fetch the data use axios class / ( import axios ) / constructor need state [posts] / use axios to make a get requst to the json placeholder API
 class PostList extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
        posts: [],
        errorMsg:''
       }
     }

     //where do we put the code to get axcuted axios
     //2.after we paste how do we access the data get returnd
    componentDidMount(){
        //the error works here if the link miss smth
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response);
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error);
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }
  render() {
      const { posts , errorMsg} = this.state
    return (
      <div>List of post 
          {
              posts.length ?
              posts.map(post => <div key={post.id}> {post.title}</div>) :
              null 

          }
          {errorMsg ? <div> {errorMsg} </div> : null}

      </div>
    )
  }
}
export default PostList
