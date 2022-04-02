import React from "react";

const UserResponse = (props) => {
   
    return(
        <div className="userMessage">
            { props.text.map((x)=>{return x+" ";})}
        </div>
    );
};

export default UserResponse;