import React, { Component } from "react";
import { PropTypes } from "prop-types";

function Message(props){
    return (
    <div>
        <hr/>
        <h2>{props.text}, {props.number}</h2>
    </div>
    );
}

Message.propTypes = {
    text: PropTypes.string,
    number: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

function MessageR({ renderable }){
    return null;
}

MessageR.propTypes = {
    renderable: PropTypes.node //renderable: PropTypes.element  will check if the passed element is a react component
}

class Messageclass extends Component{
    render(){
        return <h2>{this.props.text}, {this.props.number}</h2>
    };
}

Messageclass.propTypes = {
    text: PropTypes.string.isRequired,
    number: PropTypes.any.isRequired
}

export { Message, Messageclass, MessageR };