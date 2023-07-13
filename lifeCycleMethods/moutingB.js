import React, { Component } from "react";

class UpdatingB extends Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {
            name: "Rubhini"
        }
        console.log("constructor of mountingB");
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of mountingB");
        return null;
    }

    //componentDidMount
    componentDidMount(){
        console.log("componentDidMount of mountingB");
    }

    //render
    render(){
        console.log("render of mountingB");
        return <h1>LIFE CYCLE METHODS</h1>;
    }
}

export default UpdatingB;