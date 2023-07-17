import React from "react";
import Button from "./button";

function Main2(){

    const handleClick = () => {
        alert("I'm reused");
    }

    return(
        <div>
            Reusing Button Component for the second time
            <Button onClick={handleClick} style={{backgroundColor: "purple", color:"white"}}>I'm reused again</Button>
        </div>
    );
}

export default Main2;