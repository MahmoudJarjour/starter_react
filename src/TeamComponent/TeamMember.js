import React from "react";

function TeamMember(props){

    return (
       <div className="clo-md-4 col-sm-4 container " >
                    <div className="card" style={{backgroundColor: props.obj.website ?"white" : "gray"}}>  
                        <div className="card-header">
                        <img src={props.obj.img} style={{maxWidth:'100%'}}/>
                        </div>
                        <div className="card-body">
                            <h3>{`Name: ${props.obj.name} ${props.obj.nick}`}</h3>
                            <p>{`Address: ${props.obj.address}`}</p>
                            <p>{`Email: ${props.obj.email}`}</p>
                            <p>{`Phone Number: ${props.obj.phone}`}</p>
                            <p>{`Website: ${props.obj.website}`}</p>
                        </div>    
            </div>
           
       </div>


    )
}

export default TeamMember