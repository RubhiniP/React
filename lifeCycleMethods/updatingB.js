import React, { Component } from "react";

class UpdatingB extends Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {
            name: "Rubhini"
        }
        console.log("constructor of B");
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of B");
        return null;
    }

    //componentDidMount
    componentDidMount(){
        console.log("componentDidMount of B");
    }

        //shouldComponentUpdate
        shouldComponentUpdate(){
            console.log("shouldComponentUpdate of B");
            return true;
        }
    
        //getSnapshotBeforeUpdate
        getSnapshotBeforeUpdate(prevProps, prevState){
            console.log("getSnapshotBeforeUpdate of B");
            return null;
        }
    
        //component Did update
        componentDidUpdate(){
            console.log("componentDidUpdate of B")
        }

    //render
    render(){
        console.log("render of B");
        return <h1>LIFE CYCLE METHODS</h1>;
    }
}

export default UpdatingB;