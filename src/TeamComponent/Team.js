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
                        email:'dodododo@googogogog.com',
                        phone: '654654683',
                        website:'www.lkavdlb.com',
                    }}
                />
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/304',
                        name:'lolo ',
                        nick:'fofo',
                        address:'Hamra',
                        email:'dodododo@googogogog.com',
                        phone: '6546874983',
                        website:"",
                    }}
                />
            
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/305',
                        name:'meme',
                        nick:'soso',
                        address:'Hamra',
                        email:'dodododo@googogogog.com',
                        phone: '32168465168',
                        website:'www.lkavdlb.com',
                    }}
                />
           
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/306',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        email:'dodododo@googogogog.com',
                        phone: '3643216846',
                        website:"",
                    }}
                />
                
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/309',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        email:'dodododo@googogogog.com',
                        phone: '3643216846',
                        website:'www.lkavdlb.com',
                    }}
                />
                
                <TeamMember 
                    obj={{
                        img:'https://picsum.photos/307',
                        name:'dada',
                        nick:'koko',
                        address:'Hamra',
                        email:'dodododo@googogogog.com',
                        phone: '3643216846',
                        website:"",
                    }}
                />
        
        </div>
    );
}

export default Team;