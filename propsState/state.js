import React, { Component } from "react";

class State extends Component{

    constructor(){
        super();
        this.state = {
            message: "Subscribe Us for more videos!",
            count: 0
        }
    }

    changeMessage(){
        this.setState({
            message: "Thank you for subscribing!",
            count: this.state.count + 1
        }, () => console.log(this.state.count))
        console.log('Console value:' + this.state.count)
    }

    render(){
        //destructing props and state
        const {name} = this.props;
        const {message, count} = this.state;
        return(
            <div>
                <hr></hr>
                {this.props.children}
                <h2>Welcome {name}</h2>
                <p>{message}</p>
                <p>Count value: {count}</p>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
                <hr />
            </div>
        )
    }
}

export default State;