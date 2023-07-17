import React, { useState, useEffect } from 'react';

function CounterFunction(){

    const [ count, setCount ] = useState(0);
    const [ name, setName ] = useState('');

    useEffect(() => {
        console.log("Updating count value");
        document.title = `You clicked ${count} times`
    }, [count])

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>Click - {count}</button>
        </div>
    );
}

export default CounterFunction;