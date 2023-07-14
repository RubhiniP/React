import Form from "./eventHandlingFunction/ref";
import MouseEventF from "./eventHandlingFunction/mouseEvents";
import MouseEventC from "./eventHandlingClass/mouseEvents";
import InputEventC from "./eventHandlingClass/inputEvents";
import InputEventFunction from "./eventHandlingFunction/inputEvents";

function App1(){
    return(
        <div>
            <Form />
            <MouseEventF />
            <MouseEventC />
            <InputEventC />
            <InputEventFunction />
        </div>
    );
}

export default App1;