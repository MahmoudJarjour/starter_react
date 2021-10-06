import React from "react";
import TeamMember from "./TeamMember";


function Team(){


    return (
        <div className="row" >
        
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/320',
                        name:'dede',
                        nick:'lele',
                        address:'Hamra',
                        phone: '654654683',
                    }}
                />
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/304',
                        name:'lolo ',
                        nick:'fofo',
                        address:'Hamra',
                        phone: '6546874983',
                    }}
                />
            
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/305',
                        name:'meme',
                        nick:'soso',
                        address:'Hamra',
                        phone: '32168465168',
                    }}
                />
           
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/306',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        phone: '3643216846',
                    }}
                />
                
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/309',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        phone: '3643216846',
                    }}
                />
                
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/307',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        phone: '3643216846',
                    }}
                />
        
        </div>
    );
}

export default Team;