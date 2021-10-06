import React, { Component } from "react";
import SocialItem from "./SocialItem";

class Social extends Component {
    render(){
        return (
            <div>
                <ul className="list-group">
                    <SocialItem 
                         site = 'Facebook' 
                         id='facebook'
                         img ='https://picsum.photos/204'
                    />
                    <SocialItem 
                        site = 'Youtube' 
                        id='youtube'
                        img ='https://picsum.photos/203'
                    />
                    <SocialItem 
                        site = 'Instagram' 
                        id='instagram'
                        img ='https://picsum.photos/202'
                    />
                    <SocialItem 
                        site = 'Whatsapp' 
                        id='whatsapp'
                        img ='https://picsum.photos/201'
                    />
                    
                 </ul>
                
                 <input type="button" onclick="alert('Hello World!')" value="Click Me!"/>
            </div>
            
        );
    }
}

export default Social;