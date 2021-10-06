import React from "react";

function SocialItem (props){


    return (
        <div>
            <li className="list-group-item">
                        <img src={props.obj.img} alt={`icon of ${props.obj.site}`}/>
                        <input type="checkbox" id={props.obj.id}/>
                        <label htmlFor={props.obj.id}> {props.obj.site} </label>
            </li>
        </div>
    );
} 
export default SocialItem