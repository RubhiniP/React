import React, { Component } from 'react';

class MouseEventC extends Component{

    constructor(props){
        super(props);

        this.state = {
            message: 'BINDING EVENT HANDLERS'
        }

        this.upHandler = this.upHandler.bind(this);
    }

    overHandler(){
        console.log("Mouse over using class");
    }

    clickHandler(){
        this.setState({
            message: 'BIND METHOD'
        });
    }

    downHandler(){
        this.setState({
            message: 'ARROW FUNCTION INSIDE'
        });
    }

    upHandler(){
        this.setState({
            message: 'CONSTRUCTOR BINDING METHOD'
        });
    }

    enterHandler = () => {
        this.setState({
            message: 'ARROW FUNCTION OUTSIDE'
        });
    }

    render(){
        return(
            <div>
                <button onMouseOver={this.overHandler}>MOUSE OVER using class</button>

                <div>{this.state.message}</div>

                {/* approach no 1 bind method*/}
                <button onClick={this.clickHandler.bind(this)}>MOUSE CLICK using class</button>

                {/* approach no 2 arrow function inside*/}
                <button onMouseDown={() => this.downHandler()}>MOUSE DOWN using class</button>

                {/* approach no 3 constructor binding*/}
                <button onMouseUp={this.upHandler}>MOUSE UP using class</button>

                {/* approach no 4 arrow function outside*/}
                <button onMouseEnter={this.enterHandler}>MOUSE ENTER using class</button>

            </div>
        );
    }
}

export default MouseEventC;