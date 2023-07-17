import React from "react";

function Count({text, count}){
    console.log(`count rendering for ${text}`)
    return(
        <div>
            <h2>{text} - {count}</h2>
        </div>
    );
}

export default React.memo(Count);