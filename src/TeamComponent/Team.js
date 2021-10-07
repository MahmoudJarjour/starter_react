import React, { Component } from "react";
import TeamMember from "./TeamMember";
import info from "./TeamData";


class Team extends Component{
    constructor(){
        super()
        this.state = { memberInfo : info }

        this.refreshPage = this.refreshPage.bind(this);
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

    refreshPage(){
        
    window.location.reload(false);
    }

    render(){
    
       
            return (
                <div className="row" >
                    {this.mapping(this.state.memberInfo)}
                    <button className="btn btn-primary" onClick={this.refreshPage}>Refresh the Images</button>
                </div>

            );
    }
}

export default Team;