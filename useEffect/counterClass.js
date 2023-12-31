import React, { Component } from "react";

class CounterClass extends Component{

    constructor(props){
        super(props);

        this.state = {
            count: 0,
            name: ''
        }
        
    }

    componentDidMount(){
        console.log("componentDidMount");
        document.title = `You clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count){
            console.log("component did update");
            document.title = `You clicked ${this.state.count} times`
        }
        
    }

    render(){
        return(
            <div>
                <input type="text" value={this.state.name} onChange={e => { this.setState({name: e.target.value}) }}></input>
                <button onClick={() => this.setState({count: this.state.count + 1})}>Click - {this.state.count}</button>
            </div>
        );
    }
}

export default CounterClass;