import { useRef } from 'react';

function Form(){

    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();
    }

    return(
        <div>
                <input ref={inputRef}></input>
                <button onClick={handleClick}>FOCUS THE INPUT ELEMENT</button>
        </div>
    );
}

export default Form;