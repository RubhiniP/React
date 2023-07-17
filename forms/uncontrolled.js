import React, { useRef } from 'react';

function Uncontrolled(){

    const nameRef = useRef(null)
    const emailRef = useRef(null)

    const Submit = () => {
        console.log("Name: "+ window.name.value);
        console.log("Email "+ window.email.value);

    }

    return(
        <form onSubmit={Submit}>
            <input type="text"
            name="name"
            ref={nameRef}></input>
            <input type="email"
            name="email"
            ref={emailRef}></input>
            <input type="submit" 
            value="submit"></input>
            {/* <p>{JSON.stringify(window.name.value)}</p> */}
        </form>
    );
}

export default Uncontrolled;