import React, { Component } from 'react';

class InputEventC extends Component{

    constructor(props){
        super(props);

        this.state = {
            message: 'BINDING EVENT HANDLERS'
        }

        this.changeHandler = this.changeHandler.bind(this);
    }

    changeHandler(){
        this.setState({
            message: 'VALUE IS CHANGED'
        });
    }

    render(){
        return(
            <div>
                <label htmlFor='title'>Enter any title</label><br/>
                <input onChange={this.changeHandler} type="text" id="title" placeholder="Enter any title" name="title" value={this.state.message} />
            </div>
        );
    }
}

export default InputEventC;