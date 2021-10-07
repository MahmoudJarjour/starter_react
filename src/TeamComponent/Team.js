import React, { Component } from "react";
import TeamMember from "./TeamMember";
import info from "./TeamData";


class Team extends Component{
    constructor(){
        super()
        this.state = { memberInfo : info }
    }

    mapping(x){
        const members = x.map(member =>
            <TeamMember 
                key={member.id}
                img={member.img}
                name={member.name}
                nick={member.nick}
                address={member.address}
                email={member.email}
                phone={member.phone}
                website={member.website}
                />
            
        );
        return members;
    }

    render(){
    
       
            return (
                <div className="row" >
                    {this.mapping(this.state.memberInfo)}
                </div>
            );
    }
}

export default Team;