import React from "react";

function Header(){
    
    const client = "android";

    const title_web = "Welcome To Web Area " ;
    const title_others = "Welcome to development area  ";

   
    return (
        <div className="navbar bg-dark rounded">
            <h1 className=" text-white"> {  client === "web" ? title_web : title_others } </h1>
        </div>

    );
        
    
}

export default Header ;