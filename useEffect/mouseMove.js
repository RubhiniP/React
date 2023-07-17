import React, { useState, useEffect} from 'react';

function MouseMove(){

    const [ x, setX ] = useState(0);
    const [ y, setY ] = useState(0);


    const logMousePosition = e => {
        console.log("Mouse move event");
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect");
        window.addEventListener('mousemove', logMousePosition);
    
    return () => {
        console.log("unmounting eventlistener");
        window.removeEventListener('mousemove', logMousePosition);
    }
}, []);

    return(
        <div>
            Mouse Move: X - {x} Y- {y}
        </div>
    )

}

export default MouseMove;