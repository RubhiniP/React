import React, { Component } from 'react';

//functional component
function Props(props){
    return(
        <div>
            <h1>Hi {props.name}</h1>
            {props.children}
            <hr/ >
        </div>

    ) 
}

function DefaultProps({text, year = 2023}){
    return (
    <div>
        <h2>Default Props</h2>
        <h2>Text = {text}<br/>Year = {year}</h2>
        <hr/>
    </div>
    
    );
}

function DefaultProps2(props){
    return(
        <div>
            <h2>Text = {props.text}<br/>Year = {props.year}</h2>
           
        </div>
    );
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