import './App.css';
import BlogCard from './components/BlogCard';
import React, {Component} from 'react';

class App extends Component{
  state = {
    showBlogs: true,
    blogArr : [
      {
      id: 1,
      title: 'Blog Title 1',
      description: 'Blog Description 1',
      count: 0
      },
      {
      id: 2,
      title: 'Blog Title 2',
      description: 'Blog Description 2',
      count: 0
      },
      {
      id: 3,
      title: 'Blog Title 3',
      description: 'Blog Description 3',
      count: 0
      }
    ]
  };

  likeFunction = (pos) =>{
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];

    updatedBlogObj.count = updatedBlogObj.count + 1
    updatedBlogList[pos] = updatedBlogObj
    // console.log(updatedBlogObj)
    this.setState(
        {
          blogArr: updatedBlogList
        }
    )
  }


  hideCard = () => {
    this.setState((prevState, prevProps)=>{
        return {showBlogs: !prevState.showBlogs}
      }
    )
  };
  
  render(){
    // console.log("render called")
    // console.log(this.state)

    const blogItems = this.state.blogArr.map((items,pos)=>{
      return(
        <BlogCard 
            key={items.id} 
            title ={items.title}
            description ={items.description}
            counter = {items.count}
            likeFunction = {()=>this.likeFunction(pos)}
            // position ={pos}
        />
      )
    })
      return (
        <div className="App">
          <div className = "btn">
            <button onClick= {this.hideCard}>{this.state.showBlogs? "Hide list": "Show List" }</button>
          </div>
              {this.state.showBlogs? blogItems : null}
        </div>
      );
  }

}

export default App;
