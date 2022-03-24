import React, { Component } from "react";
import '../styles/blogcard.css'

class BlogCard extends Component{


    // likeFunction = () =>{
    //     this.setState((prevState, prevProps)=>{
    //        return({
    //         counter: prevState.counter + 1
    //        })
    //       }
    //     )
    // }
    
    
    render(){
        
        return(
            <>
                <div className="card-component">
                          <p>{this.props.title}</p>
                          <p>{this.props.description}</p><hr />
                          <div>
                             {/* <button onClick ={this.props.likeFunction(this.props.position)}>Like</button> */}
                             <button onClick ={this.props.likeFunction}>Like</button>
                                    {this.props.counter > 0 ? <p> {this.props.counter} {this.props.counter === 1 ?"Like": "Likes"}</p> : null}
                          </div>
                </div>
                
            </>
        )

    }
       

}

export default BlogCard;