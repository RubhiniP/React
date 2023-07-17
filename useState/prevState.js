import React, { useState } from "react";

function PrevState(){

    const initial = 0;
    const [ count, setCount ] = useState(initial);

    const Increment5 = () => {
        for(let i=1; i<=5; i++){
            setCount(prevCount => prevCount + 1);
        }
    }

    return(
        <div>
            Count: {count}<br />
            <button onClick={() => setCount(initial)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={Increment5}>Increment 5</button>
        </div>
    );

}

export default PrevState;