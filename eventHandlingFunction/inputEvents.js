import React, { useState } from "react";

function InputEventFunction(){

    const [message, setmessage] = useState("FUNCTION");

    function changeHandler(){
        setmessage("VALUE CHANGED");
    }
    
    return(
        <div>
            <label htmlFor="topic">Enter any topic</label><br />
            <input type="text" value={message} onChange={changeHandler}></input>
        </div>
    );
}

export default InputEventFunction;