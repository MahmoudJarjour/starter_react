import React from "react";

function Header(){
    
    const client = "android";

    

    const title = {
        web : "Welcome To Web Area ",
        others : "Welcome to development area"
    }

    const clientInfo = {
        name: "lolo",
        nick : "dodo"
    }
   
    return (
        <div className="navbar bg-dark rounded text-white"> 
            <h2> {  client === "web" ? title.web : title.others } </h2>
        </div>

    );
        
    
}

export default Header ;