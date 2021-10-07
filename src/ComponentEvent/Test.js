import React, { Component } from "react";

class Test extends Component{
    constructor(){
        super();
        this.state ={
            number: 0,
        }
        this.ClickHandler = this.ClickHandler.bind(this);
    }

    ClickHandler(){
        this.setState(function(prev){
            return {
                number : prev.number + 1
            }
        })
    }

    render(){
        return (
        <div>
            <h1>{this.state.number}</h1>
            <button className="btn btn-primary" onClick={this.ClickHandler}> Click Me!</button>
        </div>
        );
    }


}

export default Test

/*
this.setState({ 
            number :  1
        })
*/