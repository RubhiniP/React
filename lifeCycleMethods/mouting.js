import React, { Component } from "react";

class MountingA extends Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {
            name: "Rubhini"
        }
        console.log("constructor of mountingA");
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of mountingA");
        return null;
    }

    //componentDidMount
    componentDidMount(){
        console.log("componentDidMount of mountingA");
    }

    //render
    render(){
        console.log("render of mountingA");
        
        return <h1>LIFE CYCLE METHODS - MOUNTING</h1>;
    }
}

export default MountingA;