import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super();
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thanks for the sub!'
        })
    }

    render(){
        return( 
        <div>
            <h1 className="title is-size-2">{this.state.message}</h1>
            <button className="button" onClick={() => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}

export default Message;
