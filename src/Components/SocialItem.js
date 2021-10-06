import React from "react";

function SocialItem (props){


    return (
        <div>
            <li className="list-group-item">
                        <img src={props.img}/>
                        <input type="checkbox" id={props.id}/>
                        <label for={props.id}> {props.site} </label>
            </li>
        </div>
    );
} 
export default SocialItem