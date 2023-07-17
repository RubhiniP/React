import React, { useState } from 'react';
import MouseMove from './mouseMove';

function Cleanup(){

    const [ display, setDisplay ] = useState(true);

    return(
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <MouseMove />}
        </div>
    );
}

export default Cleanup;