import React, { useState } from "react";

function Array(){

    const [ numbers, setNumbers ] = useState([]);    

    const AddItem = () =>
    setNumbers([...numbers, {
        id: numbers.length,
        value: Math.floor(Math.random() * 10) + 1
    }]);

    return(
        <div>
        <button onClick={AddItem}>Add a number</button>
        <ul>
            {numbers.map(number => (
            <li key={number.id}>{number.value}</li>
            ))}
        </ul>
        </div> 
    );
}

export default Array;