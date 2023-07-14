import React, { useState } from 'react';

function MouseEventF(){

    const [message, setmessage] = useState("Event handling using functional components");

    function overHandler(){
        setmessage("Mouse over");
        console.log("Mouse over using function");
    }

    function moveHandler(){
        setmessage("Mouse move");
        console.log("Mouse move using function");
    }

    function clickHandler(){
        setmessage("Mouse click");
        console.log("Mouse click using function");
    }

    return(
        <div>
            <div>{message}</div>
            <button onMouseOver={overHandler}>MOUSE OVER using function</button>
            <button onClick={clickHandler}>MOUSE CLICK using function</button>
            <button onMouseMove={moveHandler}>MOUSE MOVE using function</button>
        </div>
    );
}

export default MouseEventF;