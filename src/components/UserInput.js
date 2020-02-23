import React from "react";

const UserInput = props => {
    // hold an input component
    return (
        <input type="text" value={props.value} onChange={props.changeHandler}></input>
    )
}

export default UserInput;