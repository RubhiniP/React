import React, { Component } from 'react';

//functional component
function Props(props){
    return(
        <div>
            <h1>Hi {props.name}</h1>
            {props.children}
        </div>

    ) 
}

function DefaultProps({text, year = 2023}){
    return <h2>Text = {text}<br/>Year = {year}</h2>
}

function DefaultProps2(props){
    return <h2>Text = {props.text}<br/>Year = {props.year}</h2>
}

DefaultProps2.defaultProps = {
    text: "default",
    year: 4000
}

//class component
class PropsC extends Component{
    
    render(){
        console.log(this.props);
        return <h1>Hi {this.props.name}</h1>
    }
}

export { Props, PropsC, DefaultProps, DefaultProps2 };