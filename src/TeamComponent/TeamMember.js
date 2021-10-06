import React from "react";

function TeamMember(props){

    return (
       <div className="clo-md-4  col-sm-4 border container " >
            <div className="card-header">
                <img src={props.obj.img}/>
                    <div className="card-body">
                        <h3>{`Name: ${props.obj.name} ${props.obj.nick}`}</h3>
                        <p>{`Address: ${props.obj.address}`}</p>
                        <p>{`Phone Number: ${props.obj.phone}`}</p>
                    </div>
                
           </div>
           
       </div>


    )
}

export default TeamMember