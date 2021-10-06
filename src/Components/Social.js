import React, { Component } from "react";

class Social extends Component {
    render(){
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input type="checkbox" id="facebook"/>
                        <label for="facebook"> Facebook </label>
                    </li>
                    <li className="list-group-item">
                        <input type="checkbox" id="Youtube"/>
                        <label for="Youtube"> Youtube </label>
                    </li>
                    <li className="list-group-item">
                        <input type="checkbox" id="Instagram"/>
                        <label for="Instagram"> Instagram </label>
                    </li>
                 </ul>
                
                 <input type="button" onclick="alert('Hello World!')" value="Click Me!"/>
            </div>
            
        );
    }
}

export default Social;