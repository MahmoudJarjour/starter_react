import React, { Component } from "react";
import ReactDOM,{ render } from "react-dom";



class paragraph extends Component{
    render(){
        return (
         <div>
                <p>here is some text to wrote here 
                here is some text to wrote 
                here is some text to wrote 
                here is some text to wrote 
                here is some text to wrote 
                </p>
                <ol type="a">
                    <li>BMW</li>
                    <li>audi</li>
                    <li>truck</li>
                    <li>plane</li>
                </ol>
        </div>
        );
    }
}

export default paragraph;