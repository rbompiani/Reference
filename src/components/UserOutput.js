import React from "react";

const UserOutput = props => {
    //receive userName via props and display it
    //display paragraph
    return (
        <div>
            <p>{props.paragraph}</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default UserOutput;