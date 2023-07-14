import React, { useState } from "react";

function DisplayContent({title, children, isActive, onShow}){
    // const [isActive, setisActive] = useState(false);

    return(
        <div>
            <h3>{title}</h3>
            {isActive ? (<p>{children}</p>) : (<button onClick={onShow}>Show</button>)}
        </div>
    );
}

function Lift(){

    const [activeIndex, setactiveIndex] = useState(0);

    return(
        <div>
            <DisplayContent 
            title="About" 
            isActive={activeIndex === 0}
            onShow={() => setactiveIndex(0)}>
                This is about React Hooks. Lift StateUp is illustrated here.
            </DisplayContent>

            <DisplayContent 
            title="React" 
            isActive={activeIndex === 1}
            onShow={() => setactiveIndex(1)}>
                React.js is one of the most used open-source front-end javascript library for building user interfaces based on components.
            </DisplayContent>
        </div>
    );
}

export default Lift;