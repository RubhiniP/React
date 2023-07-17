import React from "react";
import Button from "./button";

function Main(){

    const handleClick = () => {
        document.title = `You clicked the button`;
    }

    return(
        <div>
            <Button style={{backgroundColor: "blue", color: "white"}} onClick={handleClick}>Click me</Button>
        </div>
    );
}

export default Main;