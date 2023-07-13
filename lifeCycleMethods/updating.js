import React, { Component } from "react";
import UpdatingB from "./updatingB";

class UpdatingA extends Component{

    //constructor
    constructor(props){
        super(props);
        this.state = {
            name: "Rubhini"
        }
        console.log("constructor of A");
    }

    //getDerivedStateFromProps
    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps of A");
        return null;
    }

    //componentDidMount
    componentDidMount(){
        console.log("componentDidMount of A");
    }

    //shouldComponentUpdate
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate of A");
        return true;
    }

    //getSnapshotBeforeUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate of A");
        return null;
    }

    //component Did update
    componentDidUpdate(){
        console.log("componentDidUpdate of A");

    }

    changeState = () => {
        this.setState({
            name: 'Rubhini'
        });
    }

    //render
    render(){
        console.log("render of A");
        return(
            <div>
                <h1>LIFE CYCLE METHODS</h1>
                <UpdatingB />
                <button onClick={this.changeState}>CHANGE STATE</button>
                
            </div>
            
        )
        
    }
}

export default UpdatingA;